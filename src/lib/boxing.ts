import type { PosePoint } from "./motion";

export type BoxingSide = "left" | "right";
export type BoxingPunchType = "straight" | "hook" | "uppercut";
export type BoxingDodge = "left" | "right" | "duck" | null;
export const MAX_BOXING_HP = 300;
export const BOXING_DAMAGE: Record<BoxingPunchType, number> = {
  straight: 6,
  hook: 8,
  uppercut: 10,
};
export type BoxingReading = {
  tracking: boolean;
  guarding: boolean;
  /** A fresh event, never a continuously held posture. */
  punch: BoxingSide | null;
  punchType?: BoxingPunchType;
  dodge?: BoxingDodge;
  calibrated?: boolean;
  punches: number;
  feedback: string;
  quality: number;
};
export type BoxingUpdateOptions = { active?: boolean };
const ARM_JOINTS = [
  [11, 13, 15],
  [12, 14, 16],
] as const;
const GUARD_CONFIRM_MS = 100;
const GUARD_RELEASE_MS = 90;
const CALIBRATION_MS = 200;
const PUNCH_CONFIRM_MS = 60;
const DODGE_CONFIRM_MS = 150;
const MAX_FRAME_GAP_MS = 3000;
const PUNCH_COOLDOWN_MS = 260;

function visible(point: PosePoint | undefined): point is PosePoint {
  return (
    !!point &&
    Number.isFinite(point.x) &&
    Number.isFinite(point.y) &&
    Number.isFinite(point.visibility ?? 0) &&
    Number.isFinite(point.presence ?? 1) &&
    (point.visibility ?? 0) >= 0.45 &&
    (point.presence ?? 1) >= 0.45 &&
    point.x > 0.015 &&
    point.x < 0.985 &&
    point.y > 0.015 &&
    point.y < 0.985
  );
}

type ArmGeometry = {
  angle: number;
  reach: number;
  planarReach: number;
  depth: number | null;
  wristX: number;
  wristY: number;
  elbowX: number;
};
type Candidate = { type: BoxingPunchType; since: number; frames: number };
type ArmHistory = {
  armed: boolean;
  neutral: ArmGeometry | null;
  candidate: Candidate | null;
  lastPunchAt: number;
};
const freshArm = (): ArmHistory => ({
  armed: false,
  neutral: null,
  candidate: null,
  lastPunchAt: -Infinity,
});
type BodyPose = {
  x: number;
  y: number;
  width: number;
  torso: number;
  headY: number | null;
};
type BodyBaseline = BodyPose & { since: number; frames: number };

function armGeometry(
  points: PosePoint[],
  side: 0 | 1,
  aspect: number,
): ArmGeometry | null {
  const joints = ARM_JOINTS[side];
  if (!joints.every((joint) => visible(points[joint]))) return null;
  const [shoulder, elbow, wrist] = joints.map((joint) => points[joint]);
  const hasDepth = [shoulder, elbow, wrist].every((point) =>
    Number.isFinite(point.z),
  );
  const vector = (a: PosePoint, b: PosePoint) => [
    (a.x - b.x) * aspect,
    a.y - b.y,
    hasDepth ? ((a.z ?? 0) - (b.z ?? 0)) * aspect : 0,
  ];
  const upper = vector(shoulder, elbow),
    lower = vector(wrist, elbow);
  const upperLength = Math.hypot(...upper),
    lowerLength = Math.hypot(...lower);
  if (upperLength < 0.015 || lowerLength < 0.015) return null;
  const cosine =
    upper.reduce((sum, value, index) => sum + value * lower[index], 0) /
    (upperLength * lowerLength);
  return {
    angle: (Math.acos(Math.max(-1, Math.min(1, cosine))) * 180) / Math.PI,
    reach: Math.hypot(...vector(wrist, shoulder)),
    planarReach: Math.hypot(
      (wrist.x - shoulder.x) * aspect,
      wrist.y - shoulder.y,
    ),
    depth: hasDepth ? ((shoulder.z ?? 0) - (wrist.z ?? 0)) * aspect : null,
    wristX: (wrist.x - shoulder.x) * aspect,
    wristY: wrist.y - shoulder.y,
    elbowX: (elbow.x - shoulder.x) * aspect,
  };
}

/**
 * Upper-body air boxing. Body calibration is separate from arm retraction.
 * Relative joint changes plus two coherent samples reject one-frame jumps;
 * each person owns their own body baseline, arms, defence and event history.
 */
export class BoxingEstimator {
  private arms: [ArmHistory, ArmHistory] = [freshArm(), freshArm()];
  private lastFrameAt: number | null = null;
  private previousBody: BodyPose | null = null;
  private baseline: BodyBaseline | null = null;
  private calibrated = false;
  private guardSince: number | null = null;
  private guardReleaseSince: number | null = null;
  private guarding = false;
  private dodging: BoxingDodge = null;
  private dodgeCandidate: {
    value: Exclude<BoxingDodge, null>;
    since: number;
    frames: number;
  } | null = null;
  private dodgeReleaseSince: number | null = null;
  private punches = 0;

  reset(): void {
    this.punches = 0;
    this.suspend();
  }

  /** Loss/pause requires a new stable posture; completed exercise totals stay. */
  suspend(): void {
    this.arms = [freshArm(), freshArm()];
    this.lastFrameAt = null;
    this.previousBody = null;
    this.baseline = null;
    this.calibrated = false;
    this.guardSince = this.guardReleaseSince = null;
    this.guarding = false;
    this.dodging = null;
    this.dodgeCandidate = null;
    this.dodgeReleaseSince = null;
  }

  update(
    points: PosePoint[] | undefined,
    timeMs: number,
    imageAspect = 1,
    options: BoxingUpdateOptions = {},
  ): BoxingReading {
    const active = options.active !== false;
    const reading = (
      tracking: boolean,
      punch: BoxingSide | null,
      feedback: string,
      quality = 0,
      punchType?: BoxingPunchType,
    ): BoxingReading => ({
      tracking,
      guarding: tracking && active && this.calibrated && this.guarding,
      dodge: tracking && active && this.calibrated ? this.dodging : null,
      calibrated: tracking && this.calibrated,
      punch,
      punchType,
      punches: this.punches,
      feedback,
      quality,
    });
    if (
      !Number.isFinite(timeMs) ||
      timeMs < 0 ||
      !points ||
      ![11, 12].every((joint) => visible(points[joint]))
    ) {
      this.suspend();
      return reading(false, null, "請讓肩膀、手肘與雙手入鏡");
    }
    if (
      this.lastFrameAt !== null &&
      (timeMs < this.lastFrameAt ||
        timeMs - this.lastFrameAt > MAX_FRAME_GAP_MS)
    )
      this.suspend();
    if (timeMs === this.lastFrameAt)
      return reading(
        true,
        null,
        this.guarding ? "交叉防守中" : "請繼續對空出拳",
      );
    this.lastFrameAt = timeMs;
    const aspect =
      Number.isFinite(imageAspect) && imageAspect > 0 ? imageAspect : 1;
    const shoulderY = (points[11].y + points[12].y) / 2;
    const shoulderX = (points[11].x + points[12].x) / 2;
    const width = Math.hypot(
      (points[11].x - points[12].x) * aspect,
      points[11].y - points[12].y,
    );
    if (width < 0.06) {
      this.suspend();
      return reading(false, null, "請面向鏡頭，讓雙肩清楚入鏡");
    }
    const hipsVisible = [23, 24].every((joint) => visible(points[joint]));
    const measuredTorso = hipsVisible
      ? (points[23].y + points[24].y) / 2 - shoulderY
      : 0;
    const body: BodyPose = {
      x: shoulderX * aspect,
      y: shoulderY,
      width,
      torso:
        measuredTorso >= width * 0.7 && measuredTorso <= width * 3
          ? measuredTorso
          : width * 1.5,
      headY: visible(points[0]) ? points[0].y : null,
    };
    const geometry = [
      armGeometry(points, 0, aspect),
      armGeometry(points, 1, aspect),
    ];
    if (!geometry.some(Boolean)) {
      this.suspend();
      return reading(false, null, "請讓手肘與手腕完整入鏡");
    }
    const validJoints = [
      ...new Set(ARM_JOINTS.flat().filter((joint) => visible(points[joint]))),
    ];
    const quality = Math.round(
      (validJoints.reduce(
        (sum, joint) => sum + (points[joint].visibility ?? 0),
        0,
      ) /
        validJoints.length) *
        100,
    );
    // A model/person jump or abrupt camera-scale change must not become a hit
    // or a duck. Recalibrate before accepting further gestures.
    if (
      this.previousBody &&
      (Math.hypot(body.x - this.previousBody.x, body.y - this.previousBody.y) >
        this.previousBody.torso * 0.65 ||
        Math.abs(body.width / this.previousBody.width - 1) > 0.22)
    ) {
      this.suspend();
      this.lastFrameAt = timeMs;
      this.previousBody = body;
      this.baseline = { ...body, since: timeMs, frames: 1 };
      return reading(true, null, "位置變動較大，請回正並保持一下", quality);
    }
    this.previousBody = body;
    if (!this.baseline) this.baseline = { ...body, since: timeMs, frames: 1 };
    else if (!this.calibrated) {
      const stable =
        Math.hypot(body.x - this.baseline.x, body.y - this.baseline.y) <=
          this.baseline.torso * 0.04 &&
        Math.abs(body.width / this.baseline.width - 1) <= 0.08;
      if (!stable) this.baseline = { ...body, since: timeMs, frames: 1 };
      else {
        this.baseline.frames += 1;
        if (
          timeMs - this.baseline.since >= CALIBRATION_MS &&
          this.baseline.frames >= 2
        )
          this.calibrated = true;
      }
    }
    // Waiting players may move to a new comfortable neutral position. It must
    // become stable before Start is enabled; active play never follows a dodge.
    if (
      !active &&
      this.calibrated &&
      this.baseline &&
      (Math.hypot(body.x - this.baseline.x, body.y - this.baseline.y) >
        this.baseline.torso * 0.08 ||
        Math.abs(body.width / this.baseline.width - 1) > 0.12)
    ) {
      this.calibrated = false;
      this.baseline = { ...body, since: timeMs, frames: 1 };
    }
    const baseline = this.baseline;
    // Keep a single calibrated scale when hips briefly disappear.
    const torso = baseline.torso;
    const bothArms = geometry.every(Boolean);
    const orientation = Math.sign(points[11].x - points[12].x) || 1;
    const crossed =
      bothArms &&
      (points[16].x - points[15].x) * aspect * orientation >= width * 0.05 &&
      (points[15].x - shoulderX) * aspect * orientation <= -width * 0.035 &&
      (points[16].x - shoulderX) * aspect * orientation >= width * 0.035 &&
      [15, 16].every(
        (joint) =>
          points[joint].y >= shoulderY + torso * 0.06 &&
          points[joint].y <= shoulderY + torso * 0.85 &&
          Math.abs(points[joint].x - shoulderX) * aspect <= width * 0.85,
      ) &&
      geometry.every((arm) => arm!.angle < 145);
    if (!bothArms) {
      this.guardSince = this.guardReleaseSince = null;
      this.guarding = false;
    } else if (crossed) {
      this.guardSince ??= timeMs;
      this.guardReleaseSince = null;
      if (timeMs - this.guardSince >= GUARD_CONFIRM_MS) this.guarding = true;
    } else {
      this.guardSince = null;
      if (this.guarding) {
        this.guardReleaseSince ??= timeMs;
        if (timeMs - this.guardReleaseSince >= GUARD_RELEASE_MS)
          this.guarding = false;
      }
    }
    if (!active) {
      this.dodging = null;
      this.dodgeCandidate = null;
      for (const side of [0, 1] as const) {
        const arm = geometry[side];
        this.arms[side].candidate = null;
        if (
          !crossed &&
          arm &&
          arm.angle <= 115 &&
          arm.reach <= torso * 0.85 &&
          (arm.depth === null || arm.depth <= torso * 0.7)
        ) {
          this.arms[side].armed = true;
          this.arms[side].neutral = { ...arm };
        } else {
          this.arms[side].armed = false;
          this.arms[side].neutral = null;
        }
      }
      return reading(
        true,
        null,
        this.calibrated
          ? "校準完成：出拳、交叉防守或輕靠閃避"
          : "請回正身體，保持一下完成校準",
        quality,
      );
    }
    if (!this.calibrated)
      return reading(true, null, "請回正身體，保持一下完成校準", quality);
    if (crossed || this.guarding) {
      for (const arm of this.arms) {
        arm.armed = false;
        arm.neutral = null;
        arm.candidate = null;
      }
      this.dodging = null;
      this.dodgeCandidate = null;
      return reading(
        true,
        null,
        this.guarding ? "交叉防守中" : "交叉雙手，保持一下即可防守",
        quality,
      );
    }

    const dx = (body.x - baseline.x) / torso;
    const dy = (body.y - baseline.y) / torso;
    const scaleStable = Math.abs(body.width / baseline.width - 1) <= 0.12;
    const headFollows =
      body.headY === null ||
      baseline.headY === null ||
      Math.abs(body.headY - baseline.headY - (body.y - baseline.y)) / torso <=
        0.18;
    const dodgeSignal: BoxingDodge = !scaleStable
      ? null
      : dy >= 0.16 && headFollows
        ? "duck"
        : Math.abs(dx) >= 0.16
          ? dx > 0
            ? "left"
            : "right"
          : null;
    const releasedDodge =
      !scaleStable || (Math.abs(dx) <= 0.075 && dy <= 0.075);
    if (this.dodging) {
      if (releasedDodge) {
        this.dodgeReleaseSince ??= timeMs;
        if (timeMs - this.dodgeReleaseSince >= 90) {
          this.dodging = null;
          this.dodgeReleaseSince = null;
          this.dodgeCandidate = null;
        }
      } else this.dodgeReleaseSince = null;
    } else if (dodgeSignal) {
      if (this.dodgeCandidate?.value !== dodgeSignal)
        this.dodgeCandidate = { value: dodgeSignal, since: timeMs, frames: 1 };
      else {
        this.dodgeCandidate.frames += 1;
        if (
          timeMs - this.dodgeCandidate.since >= DODGE_CONFIRM_MS &&
          this.dodgeCandidate.frames >= 2
        ) {
          this.dodging = dodgeSignal;
          this.dodgeCandidate = null;
        }
      }
    } else this.dodgeCandidate = null;
    if (this.dodging || dodgeSignal) {
      for (const arm of this.arms) {
        arm.armed = false;
        arm.neutral = null;
        arm.candidate = null;
      }
      return reading(
        true,
        null,
        this.dodging === "duck"
          ? "輕蹲閃避中，回正後再出拳"
          : this.dodging
            ? `${this.dodging === "left" ? "左" : "右"}側閃避中，回正後再出拳`
            : "保持輕靠／微蹲姿勢，準備閃避",
        quality,
      );
    }
    const candidates: Array<{
      side: 0 | 1;
      type: BoxingPunchType;
      strength: number;
    }> = [];
    for (const side of [0, 1] as const) {
      const arm = geometry[side],
        history = this.arms[side];
      if (!arm || arm.reach > torso * 3) {
        this.arms[side] = freshArm();
        continue;
      }
      if (
        history.neutral &&
        (history.neutral.depth === null) !== (arm.depth === null)
      ) {
        history.armed = false;
        history.neutral = null;
        history.candidate = null;
      }
      const nearPreviousNeutral =
        !history.neutral ||
        (Math.abs(arm.reach - history.neutral.reach) <= torso * 0.12 &&
          Math.abs(arm.wristX - history.neutral.wristX) <= torso * 0.16 &&
          Math.abs(arm.wristY - history.neutral.wristY) <= torso * 0.16 &&
          (arm.depth === null ||
            history.neutral.depth === null ||
            Math.abs(arm.depth - history.neutral.depth) <= torso * 0.12));
      const retracted =
        nearPreviousNeutral &&
        arm.angle <= 115 &&
        arm.reach <= torso * 0.85 &&
        (arm.depth === null || arm.depth <= torso * 0.7);
      if (retracted) {
        // Freeze an armed return position. Following every small bent-arm
        // change would chase a slow hook/uppercut and erase its trajectory.
        if (!history.armed || !history.neutral) history.neutral = { ...arm };
        history.armed = true;
        history.candidate = null;
        continue;
      }
      if (!history.armed || !history.neutral) continue;
      const neutral = history.neutral;
      const up = (neutral.wristY - arm.wristY) / torso;
      const reachChange = (arm.reach - neutral.reach) / torso;
      const planarChange = (arm.planarReach - neutral.planarReach) / torso;
      const forwardChange =
        arm.depth !== null && neutral.depth !== null
          ? (arm.depth - neutral.depth) / torso
          : 0;
      const inward =
        (-(arm.wristX - neutral.wristX) *
          (side === 0 ? orientation : -orientation)) /
        torso;
      const elbowOut =
        (arm.elbowX * (side === 0 ? orientation : -orientation)) / torso;
      let type: BoxingPunchType | null = null;
      if (arm.wristY >= -torso * 0.4 && arm.wristY <= torso * 0.75) {
        if (
          arm.angle >= 50 &&
          arm.angle <= 145 &&
          arm.wristY <= torso * 0.05 &&
          up >= 0.28 &&
          forwardChange >= 0.3 &&
          reachChange >= 0.2
        )
          type = "uppercut";
        else if (
          arm.angle >= 35 &&
          arm.angle <= 125 &&
          inward >= 0.25 &&
          elbowOut >= 0.25 &&
          forwardChange >= 0.22 &&
          reachChange >= 0.15
        )
          type = "hook";
        else if (
          arm.angle >= 125 &&
          arm.angle - neutral.angle >= 18 &&
          ((forwardChange >= 0.22 && reachChange >= 0.15) ||
            (planarChange >= 0.3 &&
              arm.planarReach >= torso * 0.85 &&
              arm.angle >= 140 &&
              (arm.depth === null || forwardChange >= -0.05)))
        )
          type = "straight";
      }
      if (!type) {
        history.candidate = null;
        if (
          arm.wristY < -torso * 0.4 ||
          (arm.depth !== null && arm.depth < -torso * 0.1)
        ) {
          history.armed = false;
          history.neutral = null;
        }
        continue;
      }
      if (history.candidate?.type !== type)
        history.candidate = { type, since: timeMs, frames: 1 };
      else history.candidate.frames += 1;
      if (timeMs - history.candidate.since > MAX_FRAME_GAP_MS) {
        history.armed = false;
        history.neutral = null;
        history.candidate = null;
        continue;
      }
      if (
        history.candidate.frames < 2 ||
        timeMs - history.candidate.since < PUNCH_CONFIRM_MS ||
        timeMs - history.lastPunchAt < PUNCH_COOLDOWN_MS
      )
        continue;
      history.armed = false;
      history.candidate = null;
      history.lastPunchAt = timeMs;
      candidates.push({
        side,
        type,
        strength: Math.max(reachChange, forwardChange, inward),
      });
    }
    if (candidates.length > 0) {
      candidates.sort((a, b) => b.strength - a.strength);
      const event = candidates[0];
      for (const candidate of candidates) {
        this.arms[candidate.side].armed = false;
        this.arms[candidate.side].candidate = null;
      }
      this.punches += 1;
      const typeName =
        event.type === "straight"
          ? "直拳"
          : event.type === "hook"
            ? "勾拳"
            : "上鉤拳";
      return reading(
        true,
        event.side === 0 ? "left" : "right",
        `${event.side === 0 ? "左" : "右"}${typeName}攻擊，收回胸前後再出拳`,
        quality,
        event.type,
      );
    }
    return reading(
      true,
      null,
      this.arms.some((arm) => arm.candidate)
        ? "已偵測出拳方向，保持動作完成判定"
        : this.arms.some(
              (arm) => !arm.armed && Number.isFinite(arm.lastPunchAt),
            )
          ? "拳頭收回胸前後，再次出拳"
          : "校準完成：直拳、勾拳、上鉤拳或輕靠閃避",
      quality,
    );
  }
}

export type BoxingAction = {
  punch?: BoxingSide | null;
  punchType?: BoxingPunchType;
  guarding: boolean;
  dodge?: BoxingDodge;
  tracked?: boolean;
};
export type BoxingResult = {
  winner: 1 | 2 | "tie";
  reason: "time" | "knockout" | "manual";
  elapsed: number;
};
export type BoxingExchange = {
  id: number;
  at: number;
  punches: [BoxingSide | null, BoxingSide | null];
  punchTypes: [BoxingPunchType | null, BoxingPunchType | null];
  landed: [boolean, boolean];
  blocked: [boolean, boolean];
  dodged: [boolean, boolean];
};
export type BoxingMatch = {
  duration: number;
  elapsed: number;
  maxHp: number;
  hp: [number, number];
  scores: [number, number];
  hits: [number, number];
  blocks: [number, number];
  dodges: [number, number];
  punches: [number, number];
  exchange: number;
  lastExchange: BoxingExchange | null;
  result: BoxingResult | null;
};
export function createBoxingMatch(durationSeconds = 60): BoxingMatch {
  return {
    duration:
      Number.isFinite(durationSeconds) && durationSeconds > 0
        ? durationSeconds
        : 60,
    elapsed: 0,
    maxHp: MAX_BOXING_HP,
    hp: [MAX_BOXING_HP, MAX_BOXING_HP],
    scores: [0, 0],
    hits: [0, 0],
    blocks: [0, 0],
    dodges: [0, 0],
    punches: [0, 0],
    exchange: 0,
    lastExchange: null,
    result: null,
  };
}
function winner(state: BoxingMatch): 1 | 2 | "tie" {
  if (state.hp[0] <= 0 && state.hp[1] <= 0) return "tie";
  if (state.hp[0] <= 0) return 2;
  if (state.hp[1] <= 0) return 1;
  return state.scores[0] === state.scores[1]
    ? "tie"
    : state.scores[0] > state.scores[1]
      ? 1
      : 2;
}
export function finishBoxingMatch(state: BoxingMatch): BoxingMatch {
  return state.result
    ? state
    : {
        ...state,
        result: {
          winner: winner(state),
          reason: "manual",
          elapsed: state.elapsed,
        },
      };
}
function validDodge(value: BoxingDodge | undefined): boolean {
  return value === "left" || value === "right" || value === "duck";
}
/** Both attacks use one pre-exchange snapshot; no first-player advantage. */
export function resolveBoxingExchange(
  state: BoxingMatch,
  actions: [BoxingAction, BoxingAction],
): BoxingMatch {
  if (
    state.result ||
    state.elapsed >= state.duration ||
    actions.some((action) => action.tracked === false)
  )
    return state;
  const punches = actions.map((action) =>
    !action.guarding &&
    !validDodge(action.dodge) &&
    (action.punch === "left" || action.punch === "right")
      ? action.punch
      : null,
  ) as [BoxingSide | null, BoxingSide | null];
  if (!punches.some(Boolean)) return state;
  const punchTypes = actions.map((action, index) =>
    punches[index]
      ? action.punchType && Object.hasOwn(BOXING_DAMAGE, action.punchType)
        ? action.punchType
        : "straight"
      : null,
  ) as [BoxingPunchType | null, BoxingPunchType | null];
  const next: BoxingMatch = {
    ...state,
    hp: [...state.hp],
    scores: [...state.scores],
    hits: [...state.hits],
    blocks: [...state.blocks],
    dodges: [...state.dodges],
    punches: [...state.punches],
    exchange: state.exchange + 1,
  };
  const landed: [boolean, boolean] = [false, false],
    blocked: [boolean, boolean] = [false, false],
    dodged: [boolean, boolean] = [false, false];
  for (const attacker of [0, 1] as const) {
    if (!punches[attacker]) continue;
    const defender = attacker === 0 ? 1 : 0;
    next.punches[attacker] += 1;
    if (actions[defender].guarding) {
      blocked[attacker] = true;
      next.blocks[defender] += 1;
      next.scores[defender] += 3;
    } else if (validDodge(actions[defender].dodge)) {
      dodged[attacker] = true;
      next.dodges[defender] += 1;
      next.scores[defender] += 3;
    } else {
      landed[attacker] = true;
      next.hits[attacker] += 1;
      next.scores[attacker] += 10;
      next.hp[defender] = Math.max(
        0,
        next.hp[defender] - BOXING_DAMAGE[punchTypes[attacker]!],
      );
    }
  }
  next.lastExchange = {
    id: next.exchange,
    at: next.elapsed,
    punches,
    punchTypes,
    landed,
    blocked,
    dodged,
  };
  if (next.hp.some((hp) => hp <= 0))
    next.result = {
      winner: winner(next),
      reason: "knockout",
      elapsed: next.elapsed,
    };
  return next;
}
/** The gong takes precedence over events arriving at exact expiry. */
export function advanceBoxingMatch(
  state: BoxingMatch,
  dtSeconds: number,
  actions?: [BoxingAction, BoxingAction],
): BoxingMatch {
  if (state.result || !Number.isFinite(dtSeconds) || dtSeconds < 0)
    return state;
  if (dtSeconds === 0)
    return actions ? resolveBoxingExchange(state, actions) : state;
  const elapsed = Math.min(state.duration, state.elapsed + dtSeconds),
    next = { ...state, elapsed };
  if (elapsed >= state.duration)
    return {
      ...next,
      result: { winner: winner(next), reason: "time", elapsed },
    };
  return actions ? resolveBoxingExchange(next, actions) : next;
}

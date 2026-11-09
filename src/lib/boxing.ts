import type { PosePoint } from "./motion";

export type BoxingSide = "left" | "right";
export type BoxingReading = {
  tracking: boolean;
  guarding: boolean;
  /** A fresh event, never a continuously held posture. */
  punch: BoxingSide | null;
  punches: number;
  feedback: string;
  quality: number;
};

const ARM_JOINTS = [
  [11, 13, 15],
  [12, 14, 16],
] as const;
const GUARD_CONFIRM_MS = 100;
const GUARD_RELEASE_MS = 90;
const MAX_FRAME_GAP_MS = 3000;
const PUNCH_COOLDOWN_MS = 220;

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
  wristY: number;
};
type ArmHistory = {
  armed: boolean;
  neutral: ArmGeometry | null;
  lastPunchAt: number;
};
const freshArm = (): ArmHistory => ({
  armed: false,
  neutral: null,
  lastPunchAt: -Infinity,
});

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
  const upper = vector(shoulder, elbow);
  const lower = vector(wrist, elbow);
  const upperLength = Math.hypot(...upper);
  const lowerLength = Math.hypot(...lower);
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
    wristY: wrist.y,
  };
}

/**
 * Upper-body air boxing. A bent/retracted arm must be observed before a
 * changing extension can attack. Depth detects a fist moving toward the
 * camera; horizontal image-plane extension is a fallback. Legs are unused.
 */
export class BoxingEstimator {
  private arms: [ArmHistory, ArmHistory] = [freshArm(), freshArm()];
  private lastFrameAt: number | null = null;
  private guardSince: number | null = null;
  private guardReleaseSince: number | null = null;
  private guarding = false;
  private punches = 0;

  reset(): void {
    this.punches = 0;
    this.suspend();
  }

  /** Tracking loss / pause clears posture history while preserving totals. */
  suspend(): void {
    this.arms = [freshArm(), freshArm()];
    this.lastFrameAt = null;
    this.guardSince = null;
    this.guardReleaseSince = null;
    this.guarding = false;
  }

  update(
    points: PosePoint[] | undefined,
    timeMs: number,
    imageAspect = 1,
  ): BoxingReading {
    const reading = (
      tracking: boolean,
      punch: BoxingSide | null,
      feedback: string,
      quality = 0,
    ): BoxingReading => ({
      tracking,
      guarding: tracking && this.guarding,
      punch,
      punches: this.punches,
      feedback,
      quality,
    });
    if (
      !Number.isFinite(timeMs) ||
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
    const shoulderWidth = Math.hypot(
      (points[11].x - points[12].x) * aspect,
      points[11].y - points[12].y,
    );
    if (shoulderWidth < 0.06) {
      this.suspend();
      return reading(false, null, "請面向鏡頭，讓雙肩清楚入鏡");
    }
    const visibleHips = [23, 24].every((joint) => visible(points[joint]));
    const measuredTorso = visibleHips
      ? (points[23].y + points[24].y) / 2 - shoulderY
      : 0;
    const torso =
      measuredTorso >= shoulderWidth * 0.7 && measuredTorso <= shoulderWidth * 3
        ? measuredTorso
        : shoulderWidth * 1.5;
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
    const bothArms = geometry.every(Boolean);
    const orientation = Math.sign(points[11].x - points[12].x) || 1;
    const wristsCrossed =
      bothArms &&
      (points[16].x - points[15].x) * aspect * orientation >=
        shoulderWidth * 0.05;
    const inChest = (joint: number) =>
      points[joint].y >= shoulderY + torso * 0.06 &&
      points[joint].y <= shoulderY + torso * 0.85 &&
      Math.abs(points[joint].x - shoulderX) * aspect <= shoulderWidth * 0.85;
    const crossed =
      wristsCrossed &&
      inChest(15) &&
      inChest(16) &&
      geometry.every((arm) => arm!.angle < 145);

    if (!bothArms) {
      // One clearly visible arm may punch, but an occluded hand cannot hold
      // imaginary cross-arm defence through a partial detection.
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
        if (timeMs - this.guardReleaseSince >= GUARD_RELEASE_MS) {
          this.guarding = false;
          this.guardReleaseSince = null;
        }
      }
    }
    if (crossed || this.guarding) {
      for (const arm of this.arms) {
        arm.armed = false;
        arm.neutral = null;
      }
      return reading(
        true,
        null,
        this.guarding ? "交叉防守中" : "雙手交叉在胸前，保持一下即可防守",
        quality,
      );
    }

    const candidates: Array<{ side: 0 | 1; strength: number }> = [];
    for (const side of [0, 1] as const) {
      const arm = geometry[side];
      const history = this.arms[side];
      if (!arm) {
        this.arms[side] = freshArm();
        continue;
      }
      if (
        history.neutral &&
        (history.neutral.depth === null) !== (arm.depth === null)
      ) {
        history.armed = false;
        history.neutral = null;
      }
      // A relaxed/bent arm establishes a real return position. A straight
      // arm held at startup, arm swing, or overhead wave cannot arm itself.
      if (arm.angle <= 115 && arm.reach <= torso * 1.35) {
        history.armed = true;
        history.neutral = { ...arm };
        continue;
      }
      const inPunchBand =
        arm.wristY >= shoulderY - torso * 0.25 &&
        arm.wristY <= shoulderY + torso * 0.75;
      if (!inPunchBand) {
        if (arm.angle >= 125) {
          history.armed = false;
          history.neutral = null;
        }
        continue;
      }
      if (
        !history.armed ||
        !history.neutral ||
        arm.angle < 125 ||
        arm.angle - history.neutral.angle < 18 ||
        timeMs - history.lastPunchAt < PUNCH_COOLDOWN_MS
      )
        continue;
      const reachChange = (arm.reach - history.neutral.reach) / torso;
      const planarReachChange =
        (arm.planarReach - history.neutral.planarReach) / torso;
      const forwardChange =
        arm.depth !== null && history.neutral.depth !== null
          ? (arm.depth - history.neutral.depth) / torso
          : 0;
      const forward = forwardChange >= 0.22 && reachChange >= 0.15;
      const imagePlane =
        planarReachChange >= 0.3 &&
        arm.planarReach >= torso * 0.85 &&
        arm.angle >= 140;
      if (!forward && !imagePlane) continue;
      history.armed = false;
      history.lastPunchAt = timeMs;
      candidates.push({ side, strength: Math.max(reachChange, forwardChange) });
    }
    if (candidates.length > 0) {
      // Two fists thrust together are one game attack; consume both postures
      // now so the second held fist cannot become a delayed duplicate hit.
      candidates.sort((a, b) => b.strength - a.strength);
      const punch = candidates[0].side === 0 ? "left" : "right";
      this.punches += 1;
      return reading(
        true,
        punch,
        `${punch === "left" ? "左" : "右"}拳攻擊，收回胸前後再出拳`,
        quality,
      );
    }
    return reading(
      true,
      null,
      this.arms.some((arm) => !arm.armed && Number.isFinite(arm.lastPunchAt))
        ? "拳頭收回胸前後，再次出拳"
        : this.arms.some((arm) => arm.armed)
          ? "準備完成：向鏡頭出拳，交叉雙手可防守"
          : "雙手自然放在胸前，屈肘後向鏡頭出拳",
      quality,
    );
  }
}

export type BoxingAction = {
  punch?: BoxingSide | null;
  guarding: boolean;
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
  landed: [boolean, boolean];
  blocked: [boolean, boolean];
};
export type BoxingMatch = {
  duration: number;
  elapsed: number;
  hp: [number, number];
  scores: [number, number];
  hits: [number, number];
  blocks: [number, number];
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
    hp: [100, 100],
    scores: [0, 0],
    hits: [0, 0],
    blocks: [0, 0],
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

/** Both attacks use the same pre-exchange guard/health state; no first-player bias. */
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
    !action.guarding && (action.punch === "left" || action.punch === "right")
      ? action.punch
      : null,
  ) as [BoxingSide | null, BoxingSide | null];
  if (!punches.some(Boolean)) return state;
  const next: BoxingMatch = {
    ...state,
    hp: [...state.hp],
    scores: [...state.scores],
    hits: [...state.hits],
    blocks: [...state.blocks],
    punches: [...state.punches],
    exchange: state.exchange + 1,
  };
  const landed: [boolean, boolean] = [false, false];
  const blocked: [boolean, boolean] = [false, false];
  for (const attacker of [0, 1] as const) {
    if (!punches[attacker]) continue;
    const defender = attacker === 0 ? 1 : 0;
    next.punches[attacker] += 1;
    if (actions[defender].guarding) {
      blocked[attacker] = true;
      next.blocks[defender] += 1;
      next.scores[defender] += 3;
    } else {
      landed[attacker] = true;
      next.hits[attacker] += 1;
      next.scores[attacker] += 10;
      next.hp[defender] = Math.max(0, next.hp[defender] - 10);
    }
  }
  next.lastExchange = {
    id: next.exchange,
    at: next.elapsed,
    punches,
    landed,
    blocked,
  };
  if (next.hp.some((hp) => hp <= 0))
    next.result = {
      winner: winner(next),
      reason: "knockout",
      elapsed: next.elapsed,
    };
  return next;
}

/** Events are at the end of a time step; the gong wins at exact expiry. */
export function advanceBoxingMatch(
  state: BoxingMatch,
  dtSeconds: number,
  actions?: [BoxingAction, BoxingAction],
): BoxingMatch {
  if (state.result || !Number.isFinite(dtSeconds) || dtSeconds < 0)
    return state;
  if (dtSeconds === 0)
    return actions ? resolveBoxingExchange(state, actions) : state;
  const elapsed = Math.min(state.duration, state.elapsed + dtSeconds);
  const next = { ...state, elapsed };
  if (elapsed >= state.duration)
    return {
      ...next,
      result: { winner: winner(next), reason: "time", elapsed },
    };
  return actions ? resolveBoxingExchange(next, actions) : next;
}

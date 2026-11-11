import assert from "node:assert/strict";
import test from "node:test";
import {
  BoxingEstimator,
  MAX_BOXING_HP,
  BOXING_DAMAGE,
  advanceBoxingMatch,
  createBoxingMatch,
  finishBoxingMatch,
  resolveBoxingExchange,
  type BoxingAction,
  type BoxingSide,
  type BoxingPunchType,
} from "../src/lib/boxing.ts";
import type { PosePoint } from "../src/lib/motion.ts";

type PoseKind = "neutral" | "guard" | BoxingSide | "hook" | "uppercut";
function pose(kind: PoseKind = "neutral", depth = true): PosePoint[] {
  const p = (x: number, y: number, z: number): PosePoint =>
    depth ? { x, y, z, visibility: 0.99 } : { x, y, visibility: 0.99 };
  const points = Array.from({ length: 33 }, () => p(0.5, 0.5, 0));
  points[0] = p(0.5, 0.15, 0);
  points[11] = p(0.6, 0.3, 0);
  points[12] = p(0.4, 0.3, 0);
  points[23] = p(0.56, 0.65, 0);
  points[24] = p(0.44, 0.65, 0);
  points[13] = p(0.66, 0.48, -0.02);
  points[14] = p(0.34, 0.48, -0.02);
  points[15] = p(0.62, 0.42, -0.12);
  points[16] = p(0.38, 0.42, -0.12);
  if (kind === "left") {
    points[13] = depth ? p(0.62, 0.34, -0.22) : p(0.77, 0.33, 0);
    points[15] = depth ? p(0.61, 0.31, -0.55) : p(0.94, 0.33, 0);
  } else if (kind === "right") {
    points[14] = depth ? p(0.38, 0.34, -0.22) : p(0.23, 0.33, 0);
    points[16] = depth ? p(0.39, 0.31, -0.55) : p(0.06, 0.33, 0);
  } else if (kind === "hook") {
    points[13] = p(0.76, 0.35, -0.1);
    points[15] = p(0.49, 0.32, -0.3);
  } else if (kind === "uppercut") {
    points[13] = p(0.64, 0.43, -0.15);
    points[15] = p(0.61, 0.24, -0.38);
  } else if (kind === "guard") {
    points[13] = p(0.64, 0.5, -0.02);
    points[14] = p(0.36, 0.5, -0.02);
    points[15] = p(0.43, 0.43, -0.1);
    points[16] = p(0.57, 0.43, -0.1);
  }
  return points;
}
function ready(estimator: BoxingEstimator, points = pose(), passive = false) {
  for (const time of [0, 100, 220])
    estimator.update(points, time, 1, { active: !passive });
  const reading = estimator.update(points, 230, 1, { active: !passive });
  assert.equal(reading.calibrated, true);
  return reading;
}
function punch(estimator: BoxingEstimator, points = pose("left"), time = 330) {
  assert.equal(estimator.update(points, time).punch, null);
  return estimator.update(points, time + 80);
}
function moved(dx = 0, dy = 0): PosePoint[] {
  return pose().map((point) => ({
    ...point,
    x: point.x + dx,
    y: point.y + dy,
  }));
}
const neutral: BoxingAction = { guarding: false };
const hit = (
  side: BoxingSide = "left",
  punchType: BoxingPunchType = "straight",
): BoxingAction => ({ punch: side, punchType, guarding: false });

test("stable shoulder calibration works passively without legs or bent arms", () => {
  const e = new BoxingEstimator();
  const points = pose();
  for (let i = 23; i < 33; i++) points[i].visibility = 0.01;
  points[13] = { x: 0.63, y: 0.49, z: 0, visibility: 0.99 };
  points[15] = { x: 0.65, y: 0.72, z: 0, visibility: 0.99 };
  assert.equal(e.update(points, 0, 1, { active: false }).calibrated, false);
  assert.equal(e.update(points, 100, 1, { active: false }).calibrated, false);
  const reading = e.update(points, 220, 1, { active: false });
  assert.equal(reading.tracking, true);
  assert.equal(reading.calibrated, true);
  assert.equal(reading.punches, 0);
  assert.equal(reading.guarding, false);
  assert.equal(reading.dodge, null);
});
test("a stable extension confirms after two coherent samples and held arms never repeat", () => {
  const e = new BoxingEstimator();
  ready(e);
  assert.equal(e.update(pose("left"), 330).punch, null);
  assert.equal(e.update(pose("left"), 389).punch, null);
  const result = e.update(pose("left"), 390);
  assert.equal(result.punch, "left");
  assert.equal(result.punchType, "straight");
  for (let t = 450; t < 1800; t += 100)
    assert.equal(e.update(pose("left"), t).punch, null);
  e.update(pose(), 1800);
  assert.equal(punch(e, pose("left"), 1900).punches, 2);
});
test("the three deliberate trajectories produce different punch types", () => {
  for (const [kind, type] of [
    ["left", "straight"],
    ["hook", "hook"],
    ["uppercut", "uppercut"],
  ] as const) {
    const e = new BoxingEstimator();
    ready(e);
    const result = punch(e, pose(kind));
    assert.equal(result.punch, "left", kind);
    assert.equal(result.punchType, type, kind);
  }
});

function shortJab(side: BoxingSide = "left"): PosePoint[] {
  const points = pose();
  // The punching elbow opens only to about 81 degrees, far below the former
  // 125-degree requirement. Both elbow and fist still make a forward stroke.
  const elbow = { x: 0.66, y: 0.45, z: -0.06, visibility: 0.99 };
  const wrist = { x: 0.63, y: 0.37, z: -0.21, visibility: 0.99 };
  points[side === "left" ? 13 : 14] =
    side === "left" ? elbow : { ...elbow, x: 1 - elbow.x };
  points[side === "left" ? 15 : 16] =
    side === "left" ? wrist : { ...wrist, x: 1 - wrist.x };
  return points;
}

test("short left and right jabs work while the elbow remains substantially bent", () => {
  for (const side of ["left", "right"] as const) {
    const e = new BoxingEstimator();
    ready(e);
    const result = punch(e, shortJab(side));
    assert.equal(result.punch, side);
    assert.equal(result.punchType, "straight");
    for (const t of [500, 700, 1000])
      assert.equal(
        e.update(shortJab(side), t).punch,
        null,
        "holding a bent arm does not repeat",
      );
  }
});

test("a brief bent-arm jab is counted on its return without holding an extended pose", () => {
  const e = new BoxingEstimator();
  ready(e);
  assert.equal(e.update(shortJab(), 263).punch, null);
  const result = e.update(pose(), 296);
  assert.equal(result.punch, "left");
  assert.equal(result.punchType, "straight");
  assert.equal(result.punches, 1);
  assert.equal(e.update(pose(), 329).punch, null);
});

test("a limited forearm-only jab does not require the elbow itself to move", () => {
  const e = new BoxingEstimator();
  const neutralPose = pose();
  neutralPose[15] = { x: 0.62, y: 0.37, z: -0.08, visibility: 0.99 };
  ready(e, neutralPose);
  const peak = neutralPose.map((point) => ({ ...point }));
  // The same elbow and essentially the same forearm length: only its angle
  // changes, and it remains bent at about 85 degrees at the observed peak.
  peak[15] = { x: 0.65, y: 0.455, z: -0.149, visibility: 0.99 };
  assert.equal(e.update(peak, 263).punch, null);
  assert.equal(e.update(neutralPose, 296).punchType, "straight");
  assert.equal(e.update(neutralPose, 329).punches, 1);
});

test("brief full, hook and uppercut strokes need a coherent arm and a real return", () => {
  for (const [kind, expected] of [
    ["left", "straight"],
    ["hook", "hook"],
    ["uppercut", "uppercut"],
  ] as const) {
    const e = new BoxingEstimator();
    ready(e);
    assert.equal(e.update(pose(kind), 263).punch, null);
    assert.equal(e.update(pose(), 296).punchType, expected, kind);
    assert.equal(e.update(pose(), 329).punches, 1);
  }
});

test("short pulses remain independent and allow successive retracted jabs 200ms apart", () => {
  const players = [new BoxingEstimator(), new BoxingEstimator()];
  players.forEach((e) => ready(e));
  for (const [time, side] of [
    [330, "left"],
    [530, "right"],
  ] as const) {
    players[0].update(shortJab(side), time);
    assert.equal(players[0].update(pose(), time + 50).punch, side);
    assert.equal(players[1].update(pose(), time + 50).punches, 0);
  }
  assert.equal(players[0].update(pose(), 620).punches, 2);
});

test("a quick stroke can include an intermediate return sample before reaching neutral", () => {
  const e = new BoxingEstimator();
  ready(e);
  e.update(shortJab(), 263);
  const halfway = pose();
  for (const index of [13, 15]) {
    const target = shortJab()[index];
    halfway[index] = {
      ...target,
      x: (target.x + halfway[index].x) / 2,
      y: (target.y + halfway[index].y) / 2,
      z: (target.z! + halfway[index].z!) / 2,
    };
  }
  assert.equal(e.update(halfway, 296).punch, null);
  assert.equal(e.update(pose(), 329).punch, "left");
});

test("isolated wrists, conflicting elbow motion and uncertain spikes cannot confirm a short pulse", () => {
  for (const kind of ["wrist", "opposite", "confidence"] as const) {
    const e = new BoxingEstimator();
    ready(e);
    const points = shortJab();
    if (kind === "wrist") points[13] = pose()[13];
    if (kind === "opposite") points[13] = { ...points[13], y: 0.51, z: 0.02 };
    if (kind === "confidence") points[15].visibility = 0.5;
    e.update(points, 263);
    assert.equal(e.update(pose(), 296).punches, 0, kind);
  }
});

test("pausing or losing a joint between a peak and its return discards the pulse", () => {
  for (const kind of ["pause", "missing", "missing-arm"] as const) {
    const e = new BoxingEstimator();
    ready(e);
    e.update(shortJab(), 263);
    if (kind === "pause") e.update(pose(), 296, 1, { active: false });
    else if (kind === "missing-arm") {
      const partial = pose();
      partial[13].visibility = 0.1;
      e.update(partial, 296);
    } else e.update(undefined, 296);
    assert.equal(e.update(pose(), 329).punches, 0);
  }
});

test("one observed peak and its return are supported at a lower live sampling rate", () => {
  const e = new BoxingEstimator();
  ready(e);
  e.update(shortJab(), 730);
  assert.equal(e.update(pose(), 1230).punch, "left");
  assert.equal(e.update(pose(), 1730).punches, 1);
});
test("a gentle bent uppercut is classified before it can overwrite its neutral baseline", () => {
  const e = new BoxingEstimator();
  ready(e);
  const gentle = pose();
  gentle[13] = { x: 0.72, y: 0.43, z: -0.1, visibility: 0.99 };
  gentle[15] = { x: 0.76, y: 0.315, z: -0.2275, visibility: 0.99 };
  assert.equal(punch(e, gentle).punchType, "uppercut");
});
test("image-plane straight punches work without depth; a mere upward hand raise does not", () => {
  for (const side of ["left", "right"] as const) {
    const e = new BoxingEstimator();
    ready(e, pose("neutral", false));
    assert.equal(punch(e, pose(side, false)).punch, side);
  }
  const e = new BoxingEstimator();
  ready(e);
  const raised = pose();
  raised[15].y = 0.32;
  assert.equal(punch(e, raised).punch, null);
});
test("isolated wrist spikes and changing type candidates never complete an old punch", () => {
  const e = new BoxingEstimator();
  ready(e);
  const spike = pose();
  spike[15] = pose("left")[15];
  e.update(spike, 330);
  assert.equal(e.update(pose(), 380).punches, 0);
  e.update(pose("hook"), 460);
  assert.equal(e.update(pose("uppercut"), 540).punches, 0);
  assert.equal(e.update(pose(), 600).punches, 0);
});
test("forward and backward depth cannot be confused by the planar fallback", () => {
  const e = new BoxingEstimator();
  ready(e);
  const back = pose("left");
  back[13].z = 0.22;
  back[15].z = 0.55;
  assert.equal(punch(e, back).punches, 0);
  const backSide = pose("left", false);
  backSide[13].z = 0.22;
  backSide[15].z = 0.55;
  assert.equal(punch(e, backSide, 500).punches, 0);
});
test("hips briefly disappearing does not change the calibrated punch scale or type", () => {
  const e = new BoxingEstimator();
  ready(e);
  const upper = pose("uppercut");
  for (let i = 23; i < 33; i++) upper[i].visibility = 0.01;
  assert.equal(punch(e, upper).punchType, "uppercut");
});
test("held straight arms at startup need a real retraction before an attack", () => {
  const e = new BoxingEstimator();
  ready(e, pose("left"));
  for (let t = 330; t <= 700; t += 100)
    assert.equal(e.update(pose("left"), t).punch, null);
  e.update(pose(), 800);
  assert.equal(punch(e, pose("right"), 900).punch, "right");
});
test("passive analysis never counts an attack or retains a paused defence", () => {
  const e = new BoxingEstimator();
  ready(e, pose(), true);
  for (const [t, points] of [
    [330, pose("left")],
    [440, pose("left")],
    [550, pose("guard")],
    [700, pose("guard")],
  ] as const) {
    const r = e.update(points, t, 1, { active: false });
    assert.equal(r.punches, 0);
    assert.equal(r.punch, null);
    assert.equal(r.guarding, false);
    assert.equal(r.dodge, null);
  }
});
test("true crossed chest hands confirm defence and release with hysteresis", () => {
  const e = new BoxingEstimator();
  ready(e);
  assert.equal(e.update(pose("guard"), 330).guarding, false);
  const r = e.update(pose("guard"), 430);
  assert.equal(r.guarding, true);
  assert.equal(r.dodge, null);
  assert.equal(e.update(pose(), 480).guarding, true);
  assert.equal(e.update(pose(), 580).guarding, false);
  assert.equal(punch(e, pose("left"), 680).punch, "left");
});
test("a single cross-body hook is not mistaken for a two-handed crossed guard", () => {
  const e = new BoxingEstimator();
  ready(e);
  const hook = pose("hook");
  hook[15].x = 0.34;
  for (const t of [330, 430, 530])
    assert.equal(e.update(hook, t).guarding, false);
});
test("crossing at the waist, overhead and uncrossed wrists never defend", () => {
  for (const kind of ["waist", "overhead", "uncrossed"]) {
    const e = new BoxingEstimator();
    ready(e);
    const p = pose("guard");
    if (kind === "waist") p[15].y = p[16].y = 0.72;
    if (kind === "overhead") p[15].y = p[16].y = 0.15;
    if (kind === "uncrossed") {
      p[15].x = 0.6;
      p[16].x = 0.4;
    }
    for (const t of [330, 430, 530])
      assert.equal(e.update(p, t).guarding, false);
  }
});
test("an occluded opposite arm permits an actual punch but immediately clears crossed defence", () => {
  const e = new BoxingEstimator();
  const start = pose();
  start[16].visibility = 0.1;
  ready(e, start);
  const left = pose("left");
  left[16].visibility = 0.1;
  assert.equal(punch(e, left).punch, "left");
  e.update(pose("guard"), 600);
  assert.equal(e.update(pose("guard"), 700).guarding, true);
  const partial = pose("guard");
  partial[16].visibility = 0.1;
  assert.equal(e.update(partial, 800).guarding, false);
});
test("small lateral leans and shallow ducks are three independent sustained defences", () => {
  for (const [dx, dy, expected] of [
    [0.065, 0, "left"],
    [-0.065, 0, "right"],
    [0, 0.065, "duck"],
  ] as const) {
    const e = new BoxingEstimator();
    ready(e);
    assert.equal(e.update(moved(dx, dy), 330).dodge, null);
    const r = e.update(moved(dx, dy), 490);
    assert.equal(r.dodge, expected);
    assert.equal(r.punch, null);
    assert.equal(e.update(moved(dx, dy), 700).dodge, expected);
    e.update(pose(), 800);
    assert.equal(e.update(pose(), 900).dodge, null);
  }
});
test("normal sway, a one-frame body shift and approaching the camera do not defend", () => {
  const e = new BoxingEstimator();
  ready(e);
  for (let t = 280; t < 1600; t += 50) {
    const r = e.update(moved(Math.sin(t) * 0.006, Math.cos(t) * 0.004), t);
    assert.equal(r.dodge, null);
    assert.equal(r.punch, null);
  }
  e.update(moved(0.065), 1700);
  assert.equal(e.update(pose(), 1780).dodge, null);
  const near = pose().map((p) => ({
    ...p,
    x: 0.5 + (p.x - 0.5) * 1.3,
    y: 0.3 + (p.y - 0.3) * 1.3 + 0.07,
  }));
  const r = e.update(near, 1900);
  assert.equal(r.calibrated, false);
  assert.equal(r.dodge, null);
  assert.equal(r.punch, null);
});
test("missing upper-body tracking clears all defences and requires a fresh calibration", () => {
  const e = new BoxingEstimator();
  ready(e);
  e.update(moved(0.065), 330);
  assert.equal(e.update(moved(0.065), 490).dodge, "left");
  const r = e.update(undefined, 600);
  assert.equal(r.tracking, false);
  assert.equal(r.dodge, null);
  assert.equal(r.guarding, false);
  assert.equal(e.update(pose("left"), 700).calibrated, false);
});
test("missing shoulders, invalid time, stale frames, suspend and reset discard old posture", () => {
  for (const time of [NaN, Infinity, -100, 5000]) {
    const e = new BoxingEstimator();
    ready(e);
    assert.equal(e.update(pose("left"), time).punch, null);
  }
  const e = new BoxingEstimator();
  ready(e);
  punch(e);
  e.suspend();
  assert.equal(e.update(pose(), 800).punches, 1);
  assert.equal(e.update(pose(), 900).calibrated, false);
  e.reset();
  assert.equal(e.update(pose(), 1000).punches, 0);
});
test("stationary jitter and overhead waves cannot become punches", () => {
  const e = new BoxingEstimator();
  ready(e);
  for (let t = 280; t < 2500; t += 50) {
    const p = pose();
    for (const joint of [11, 12, 13, 14, 15, 16]) {
      p[joint].x += Math.sin(t * 0.01 + joint) * 0.003;
      p[joint].y += Math.cos(t * 0.01 + joint) * 0.003;
    }
    const r = e.update(p, t);
    assert.equal(r.punch, null);
    assert.equal(r.dodge, null);
  }
  const wave = pose();
  wave[13] = { x: 0.61, y: 0.2, z: -0.12, visibility: 0.99 };
  wave[15] = { x: 0.62, y: 0.06, z: -0.25, visibility: 0.99 };
  assert.equal(punch(e, wave, 2600).punch, null);
});
test("repeated timestamps do not confirm a punch and player histories stay independent", () => {
  const a = new BoxingEstimator(),
    b = new BoxingEstimator();
  ready(a);
  ready(b);
  a.update(pose("left"), 330);
  assert.equal(a.update(pose("left"), 330).punch, null);
  b.update(pose("guard"), 330);
  assert.equal(a.update(pose("left"), 410).punch, "left");
  assert.equal(b.update(pose("guard"), 430).guarding, true);
  assert.equal(b.update(pose("guard"), 500).punches, 0);
});

test("higher life and gentler damage survive the old ten-hit ending", () => {
  let state = createBoxingMatch();
  assert.equal(state.maxHp, 300);
  assert.deepEqual(state.hp, [300, 300]);
  for (let i = 0; i < 12; i++)
    state = resolveBoxingExchange(state, [hit(), neutral]);
  assert.equal(state.result, null);
  assert.equal(state.hp[1], 228);
  assert.equal(state.hits[0], 12);
});
test("each named punch has its own bounded damage while scoring stays consistent", () => {
  for (const type of ["straight", "hook", "uppercut"] as const) {
    const initial = createBoxingMatch(),
      next = resolveBoxingExchange(initial, [hit("left", type), neutral]);
    assert.deepEqual(next.hp, [
      MAX_BOXING_HP,
      MAX_BOXING_HP - BOXING_DAMAGE[type],
    ]);
    assert.deepEqual(next.scores, [10, 0]);
    assert.deepEqual(next.hits, [1, 0]);
    assert.equal(next.lastExchange?.punchTypes[0], type);
    assert.deepEqual(initial, createBoxingMatch());
  }
});
test("cross guard blocks damage, awards defender and excludes an own attack", () => {
  const initial = createBoxingMatch(),
    next = resolveBoxingExchange(initial, [hit(), { guarding: true }]);
  assert.deepEqual(next.hp, [300, 300]);
  assert.deepEqual(next.scores, [0, 3]);
  assert.deepEqual(next.blocks, [0, 1]);
  assert.deepEqual(next.lastExchange?.blocked, [true, false]);
  assert.equal(
    resolveBoxingExchange(initial, [{ ...hit(), guarding: true }, neutral]),
    initial,
  );
});
test("all three dodges prevent damage and get distinct dodge credit", () => {
  for (const dodge of ["left", "right", "duck"] as const) {
    const initial = createBoxingMatch(),
      next = resolveBoxingExchange(initial, [
        hit(),
        { guarding: false, dodge },
      ]);
    assert.deepEqual(next.hp, [300, 300]);
    assert.deepEqual(next.dodges, [0, 1]);
    assert.deepEqual(next.blocks, [0, 0]);
    assert.deepEqual(next.scores, [0, 3]);
    assert.deepEqual(next.lastExchange?.dodged, [true, false]);
    assert.equal(
      resolveBoxingExchange(initial, [{ ...hit(), dodge }, neutral]),
      initial,
    );
  }
});
test("guard wins over simultaneous dodge and a defender never receives two bonuses", () => {
  const n = resolveBoxingExchange(createBoxingMatch(), [
    hit(),
    { guarding: true, dodge: "duck" },
  ]);
  assert.deepEqual(n.blocks, [0, 1]);
  assert.deepEqual(n.dodges, [0, 0]);
  assert.deepEqual(n.scores, [0, 3]);
});
test("simultaneous different punches use the same pre-hit state, including double finish", () => {
  const initial = { ...createBoxingMatch(), hp: [6, 8] as [number, number] };
  const n = resolveBoxingExchange(initial, [
    hit("left", "hook"),
    hit("right", "straight"),
  ]);
  assert.deepEqual(n.hp, [0, 0]);
  assert.deepEqual(n.scores, [10, 10]);
  assert.equal(n.result?.winner, "tie");
});
test("absent or low-confidence players cannot award attacks, blocks or dodges", () => {
  for (const defence of [
    { guarding: true, tracked: false },
    { guarding: false, dodge: "duck", tracked: false },
  ] as const) {
    const initial = createBoxingMatch();
    assert.equal(resolveBoxingExchange(initial, [hit(), defence]), initial);
  }
});
test("exact expiry and finished matches reject queued late punches", () => {
  const initial = resolveBoxingExchange(createBoxingMatch(10), [
    hit(),
    neutral,
  ]);
  const n = advanceBoxingMatch(advanceBoxingMatch(initial, 9.9), 0.1, [
    neutral,
    hit(),
  ]);
  assert.equal(n.elapsed, 10);
  assert.equal(n.result?.winner, 1);
  assert.deepEqual(n.scores, [10, 0]);
  assert.equal(resolveBoxingExchange(n, [hit(), hit()]), n);
  assert.equal(advanceBoxingMatch(n, 1), n);
});
test("duration validation, no-op time, manual end and time ties have stable boundaries", () => {
  for (const seconds of [-1, 0, NaN, Infinity])
    assert.equal(createBoxingMatch(seconds).duration, 60);
  const s = createBoxingMatch();
  for (const dt of [-1, NaN, Infinity])
    assert.equal(advanceBoxingMatch(s, dt), s);
  assert.equal(advanceBoxingMatch(s, 0), s);
  assert.equal(advanceBoxingMatch(s, 60).result?.winner, "tie");
  const n = finishBoxingMatch(resolveBoxingExchange(s, [neutral, hit()]));
  assert.equal(n.result?.winner, 2);
  assert.equal(n.result?.reason, "manual");
});

test("slow continuous trajectories preserve the original retracted baseline", () => {
  for (const kind of ["left", "hook", "uppercut"] as const) {
    const e = new BoxingEstimator();
    ready(e);
    const start = pose(),
      end = pose(kind);
    const events: string[] = [];
    for (let frame = 1; frame <= 25; frame++) {
      const ratio = Math.min(1, frame / 20);
      const points = start.map((point, index) => ({
        ...point,
        x: point.x + (end[index].x - point.x) * ratio,
        y: point.y + (end[index].y - point.y) * ratio,
        z: (point.z ?? 0) + ((end[index].z ?? 0) - (point.z ?? 0)) * ratio,
      }));
      const r = e.update(points, 230 + frame * 75);
      if (r.punch) events.push(r.punchType!);
    }
    assert.deepEqual(events, [kind === "left" ? "straight" : kind], kind);
  }
});
test("valid slow live samples can confirm one punch without treating held arms as repeats", () => {
  const e = new BoxingEstimator();
  ready(e);
  assert.equal(e.update(pose("left"), 2130).punch, null);
  assert.equal(e.update(pose("left"), 4030).punch, "left");
  assert.equal(e.update(pose("left"), 5930).punch, null);
  assert.equal(e.update(pose("left"), 7830).punches, 1);
});
test("repeating a released dodge requires a fresh stable confirmation", () => {
  const e = new BoxingEstimator();
  ready(e);
  e.update(moved(0.065), 330);
  assert.equal(e.update(moved(0.065), 490).dodge, "left");
  e.update(pose(), 600);
  assert.equal(e.update(pose(), 700).dodge, null);
  assert.equal(e.update(moved(0.065), 800).dodge, null);
  assert.equal(e.update(pose(), 850).dodge, null);
});

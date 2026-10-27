import assert from "node:assert/strict";
import test from "node:test";
import { framingFeedback } from "../src/lib/framing.ts";
import { cameraRegion, type PosePoint } from "../src/lib/motion.ts";

function body(): PosePoint[] {
  const points = Array.from({ length: 33 }, () => ({
    x: 0.5,
    y: 0.5,
    visibility: 0.99,
  }));
  points[11] = { x: 0.42, y: 0.2, visibility: 0.99 };
  points[12] = { x: 0.58, y: 0.2, visibility: 0.99 };
  points[23] = { x: 0.44, y: 0.5, visibility: 0.99 };
  points[24] = { x: 0.56, y: 0.5, visibility: 0.99 };
  points[25].y = points[26].y = 0.72;
  points[27].y = points[28].y = 0.92;
  return points;
}

test("a face-only view asks the person to step back and include hips and knees", () => {
  const points = body();
  for (let joint = 23; joint < 33; joint++) points[joint].visibility = 0.1;
  assert.match(framingFeedback(points, "running"), /請後退.*髖部.*膝蓋/);
});

test("cropped knees and ankles receive different actionable framing guidance", () => {
  const points = body();
  points[25].y = points[26].y = 1.2;
  assert.match(framingFeedback(points, "running"), /調低鏡頭.*雙膝/);
  points[25].y = points[26].y = 0.72;
  points[27].visibility = points[28].visibility = 0.1;
  assert.match(framingFeedback(points, "seated"), /腳踝/);
  assert.doesNotMatch(framingFeedback(points, "running"), /腳踝/);
});

test("missing shoulders and an off-center person are identified separately", () => {
  const points = body();
  points[11].visibility = 0.1;
  assert.match(framingFeedback(points, "standing"), /肩膀也入鏡/);
  points[11].visibility = 0.99;
  points[23].x = points[24].x = 0.04;
  assert.match(framingFeedback(points, "running"), /自己的鏡頭區域中間/);
});

test("no detected body supplies framing instructions rather than a tracking claim", () => {
  assert.match(framingFeedback(undefined, "running"), /鏡頭前.*膝蓋/);
  assert.match(framingFeedback(undefined, "seated"), /腳踝入鏡/);
});

test("a second model seeing the neighboring body asks for separate sides of the divider", () => {
  const points = body();
  // P2's padded crop can see a neighbor whose full-frame hip center is .55.
  const region = cameraRegion(1, 2);
  points[23].x = points[24].x = 0.55 / region.width;
  const context = { region, playerIndex: 1 as const, playerCount: 2 as const };
  assert.match(
    framingFeedback(points, "running", context),
    /中央虛線兩側.*自己的區域/,
  );
  points[23].x = points[24].x = 0.45 / region.width;
  assert.doesNotMatch(framingFeedback(points, "running", context), /中央虛線/);
});

test("face-only detections retain framing instructions before player ownership can be established", () => {
  const points = body();
  for (const joint of [11, 12, 23, 24, 25, 26]) points[joint].visibility = 0.1;
  assert.match(
    framingFeedback(points, "running", {
      region: cameraRegion(0, 2),
      playerIndex: 0,
      playerCount: 2,
    }),
    /請後退.*髖部.*膝蓋/,
  );
});

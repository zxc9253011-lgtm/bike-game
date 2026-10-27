import { useEffect, useRef, useState } from "react";
import { CadenceEstimator } from "../lib/cadence";
import { HighKneeEstimator } from "../lib/highKnee";
import { MarchingEstimator } from "../lib/marching";
import {
  SteeringEstimator,
  type SteeringDirection,
  type SteeringCue,
} from "../lib/steering";
import type { ExerciseMode } from "../lib/exercise";
import { assetUrl } from "../lib/assets";
import { framingFeedback } from "../lib/framing";
import { PoseFreshness, PoseTimeoutError, poseDeadline } from "../lib/tracking";
import {
  analyzeLegPose,
  cameraRegion,
  mapLandmarksToFrame,
  ownsPlayerPose,
  visiblePoint,
} from "../lib/motion";
import type { CameraRegion, PosePoint } from "../lib/motion";

type TrackingStatus = "demo" | "loading" | "tracking" | "positioning" | "error";
type PoseResult = { poseLandmarks?: PosePoint[] };
type LocalPose = {
  setOptions: (options: {
    modelComplexity: number;
    smoothLandmarks: boolean;
    enableSegmentation: boolean;
    minDetectionConfidence: number;
    minTrackingConfidence: number;
  }) => void;
  onResults: (callback: (result: PoseResult) => void) => void;
  initialize: () => Promise<void>;
  send: (input: {
    image: HTMLVideoElement | HTMLCanvasElement;
  }) => Promise<void>;
  close: () => Promise<void>;
};
type PoseConstructor = new (config: {
  locateFile: (file: string) => string;
}) => LocalPose;
declare global {
  interface Window {
    Pose?: PoseConstructor;
  }
}

export type PlayerAnalysis = {
  cadence: number;
  tracking: boolean;
  quality: number;
  feedback: string;
  highKnees: number;
  /** Completed steps for either standing exercise; seated exercise remains 0. */
  steps: number;
  steeringCue?: SteeringCue;
};

export type PoseCameraProps = {
  mode: "demo" | "camera";
  running: boolean;
  demoCadence: number;
  onCadence: (rpm: number) => void;
  onTracking: (status: TrackingStatus) => void;
  playerCount?: 1 | 2;
  exerciseMode?: ExerciseMode;
  demoCadence2?: number;
  onPlayers?: (players: [PlayerAnalysis, PlayerAnalysis]) => void;
  resetKey?: number;
  onSteer?: (playerIndex: 0 | 1, direction: SteeringDirection) => void;
  steeringEnabled?: boolean;
};

let localPoseScript: Promise<PoseConstructor> | null = null;
function loadLocalPose(): Promise<PoseConstructor> {
  if (window.Pose) return Promise.resolve(window.Pose);
  if (localPoseScript) return localPoseScript;
  localPoseScript = new Promise<PoseConstructor>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = assetUrl("pose/pose.js");
    script.async = true;
    script.onload = () => {
      if (window.Pose) resolve(window.Pose);
      else {
        localPoseScript = null;
        script.remove();
        reject(new Error("Local pose runtime is unavailable"));
      }
    };
    script.onerror = () => {
      localPoseScript = null;
      script.remove();
      reject(new Error("Cannot load local pose runtime"));
    };
    document.head.appendChild(script);
  });
  return localPoseScript;
}

const COLORS = ["#d4ee94", "#8dcaff"] as const;
const CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 7],
  [0, 4],
  [4, 5],
  [5, 6],
  [6, 8],
  [9, 10],
  [11, 12],
  [11, 13],
  [13, 15],
  [15, 17],
  [15, 19],
  [15, 21],
  [17, 19],
  [12, 14],
  [14, 16],
  [16, 18],
  [16, 20],
  [16, 22],
  [18, 20],
  [11, 23],
  [12, 24],
  [23, 24],
  [23, 25],
  [24, 26],
  [25, 27],
  [26, 28],
  [27, 29],
  [29, 31],
  [27, 31],
  [28, 30],
  [30, 32],
  [28, 32],
];
const JOINTS = Array.from({ length: 33 }, (_, index) => index);
const positioningFeedback = (exerciseMode: ExerciseMode): string =>
  exerciseMode !== "seated" ? "請讓肩膀、髖部與膝蓋入鏡" : "請讓肩膀到雙腳入鏡";
const blankPlayer = (feedback = "請讓肩膀到雙腳入鏡"): PlayerAnalysis => ({
  cadence: 0,
  tracking: false,
  quality: 0,
  feedback,
  highKnees: 0,
  steps: 0,
  steeringCue: "positioning",
});

function steeringMessage(cue: SteeringCue | undefined): string {
  if (cue === "ready") return "換道就緒：微側傾或抬單手到胸前";
  if (cue === "left") return "← 正在向左換道";
  if (cue === "right") return "正在向右換道 →";
  if (cue === "return") return "回正／放下手後，可再次換道";
  return "請面向鏡頭、身體回正並放下手";
}

function cameraError(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  if (name === "NotAllowedError" || name === "PermissionDeniedError")
    return "請允許此網站使用攝影機後重試。";
  if (name === "NotFoundError" || name === "DevicesNotFoundError")
    return "找不到攝影機，請連接攝影機後重試。";
  if (name === "NotReadableError" || name === "TrackStartError")
    return "攝影機正被其他程式使用，請關閉其他視訊程式後重試。";
  if (name === "SecurityError")
    return "請使用 HTTPS 或 localhost 開啟遊戲，才能使用攝影機。";
  return "無法啟動動作分析，請確認攝影機和本機辨識模型可用後重試。";
}

type PoseSession = {
  index: 0 | 1;
  region: CameraRegion;
  model: LocalPose | null;
  pending: Promise<void> | null;
  crop: HTMLCanvasElement;
  points?: PosePoint[];
  health: PoseFreshness;
  capturedAt: number;
  firstSend: boolean;
  held: boolean;
  imageAspect: number;
};

export default function PoseCamera({
  mode,
  running,
  demoCadence,
  onCadence,
  onTracking,
  playerCount = 1,
  exerciseMode = "seated",
  demoCadence2 = demoCadence,
  onPlayers,
  resetKey = 0,
  onSteer,
  steeringEnabled = false,
}: PoseCameraProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const callbacks = useRef({ onCadence, onTracking, onPlayers, onSteer });
  const live = useRef({ running, exerciseMode, steeringEnabled });
  const seated = useRef([new CadenceEstimator(), new CadenceEstimator()]);
  const standing = useRef([new HighKneeEstimator(), new HighKneeEstimator()]);
  const marching = useRef([new MarchingEstimator(), new MarchingEstimator()]);
  const steering = useRef([new SteeringEstimator(), new SteeringEstimator()]);
  const analyses = useRef<[PlayerAnalysis, PlayerAnalysis]>([
    blankPlayer(positioningFeedback(exerciseMode)),
    blankPlayer(positioningFeedback(exerciseMode)),
  ]);
  const highKneeTotals = useRef<[number, number]>([0, 0]);
  const marchingTotals = useRef<[number, number]>([0, 0]);
  const pauseAnalysis = useRef<() => void>(() => undefined);
  const resetAnalysis = useRef<() => void>(() => undefined);
  const [players, setPlayers] = useState<[PlayerAnalysis, PlayerAnalysis]>(
    analyses.current,
  );
  const [status, setStatus] = useState<TrackingStatus>(
    mode === "demo" ? "demo" : "loading",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [retry, setRetry] = useState(0);
  callbacks.current = { onCadence, onTracking, onPlayers, onSteer };
  live.current = { running, exerciseMode, steeringEnabled };

  useEffect(() => {
    for (const estimator of steering.current) estimator.reset();
  }, [steeringEnabled, running, exerciseMode, resetKey]);

  useEffect(() => {
    if (!running) pauseAnalysis.current();
  }, [running]);
  useEffect(() => {
    // These resets also apply when a source/player change retires the old effect.
    for (const estimator of seated.current) estimator.reset();
    for (const estimator of standing.current) estimator.reset();
    for (const estimator of marching.current) estimator.reset();
    highKneeTotals.current = [0, 0];
    marchingTotals.current = [0, 0];
    resetAnalysis.current();
  }, [resetKey, exerciseMode]);

  useEffect(() => {
    let disposed = false;
    let stopped = false;
    let recovering = false;
    let generation = 0;
    let automaticRecoveries = 0;
    let frame = 0;
    let drawFrame = 0;
    let lastDrawAt = 0;
    let watchdog = 0;
    let stream: MediaStream | null = null;
    let Pose: PoseConstructor | null = null;
    let lastVideoTime = -1;
    let lastInference = 0;
    let completedCycles = 0;
    let nextFirst: 0 | 1 = 0;
    let previousCaptureAt = 0;
    let observedVideoTime = -1;
    let lastVideoAdvanceAt = performance.now();
    let analysisStartedAt = performance.now();
    let currentStatus: TrackingStatus | null = null;
    const sessions: PoseSession[] = Array.from(
      { length: playerCount },
      (_, index) => ({
        index: index as 0 | 1,
        region: cameraRegion(index as 0 | 1, playerCount),
        model: null,
        pending: null,
        crop: document.createElement("canvas"),
        health: new PoseFreshness(),
        capturedAt: 0,
        firstSend: true,
        held: false,
        imageAspect: 4 / 3,
      }),
    );
    for (const estimator of seated.current) estimator.reset();
    for (const estimator of standing.current) estimator.suspend();
    for (const estimator of marching.current) estimator.suspend();
    for (const estimator of steering.current) estimator.reset();
    analyses.current = [
      {
        ...blankPlayer(positioningFeedback(live.current.exerciseMode)),
        highKnees: highKneeTotals.current[0],
        steps:
          live.current.exerciseMode === "running"
            ? marchingTotals.current[0]
            : live.current.exerciseMode === "standing"
              ? highKneeTotals.current[0]
              : 0,
      },
      {
        ...blankPlayer(
          playerCount === 2
            ? positioningFeedback(live.current.exerciseMode)
            : "單人模式",
        ),
        highKnees: highKneeTotals.current[1],
        steps:
          live.current.exerciseMode === "running"
            ? marchingTotals.current[1]
            : live.current.exerciseMode === "standing"
              ? highKneeTotals.current[1]
              : 0,
      },
    ];
    setErrorMessage("");

    const report = (next: TrackingStatus) => {
      if (disposed || next === currentStatus) return;
      currentStatus = next;
      setStatus(next);
      callbacks.current.onTracking(next);
    };
    const publish = (updateStatus = false) => {
      if (disposed) return;
      const snapshot: [PlayerAnalysis, PlayerAnalysis] = [
        { ...analyses.current[0] },
        { ...analyses.current[1] },
      ];
      setPlayers(snapshot);
      callbacks.current.onCadence(snapshot[0].cadence);
      callbacks.current.onPlayers?.(snapshot);
      if (updateStatus)
        report(
          snapshot.slice(0, playerCount).some((player) => player.tracking)
            ? "tracking"
            : "positioning",
        );
    };
    pauseAnalysis.current = () => {
      if (disposed) return;
      for (const estimator of seated.current) estimator.reset();
      for (const estimator of standing.current) estimator.suspend();
      for (const estimator of marching.current) estimator.suspend();
      for (const estimator of steering.current) estimator.reset();
      analyses.current = analyses.current.map((player) => ({
        ...player,
        cadence: 0,
        feedback: player.tracking ? "已暫停" : player.feedback,
      })) as [PlayerAnalysis, PlayerAnalysis];
      publish();
    };
    resetAnalysis.current = () => {
      if (disposed) return;
      for (const estimator of seated.current) estimator.reset();
      for (const estimator of standing.current) estimator.reset();
      for (const estimator of marching.current) estimator.reset();
      for (const estimator of steering.current) estimator.reset();
      highKneeTotals.current = [0, 0];
      marchingTotals.current = [0, 0];
      analyses.current = analyses.current.map((player) => ({
        ...player,
        cadence: 0,
        highKnees: 0,
        steps: 0,
        feedback: player.tracking
          ? live.current.exerciseMode === "standing"
            ? "膝蓋抬到髖部高度"
            : live.current.exerciseMode === "running"
              ? "輕鬆左右踏步，不必抬高膝蓋"
              : "請交替抬腳踩踏"
          : positioningFeedback(live.current.exerciseMode),
      })) as [PlayerAnalysis, PlayerAnalysis];
      publish();
    };
    publish();

    const suspendMotion = (
      session: PoseSession,
      feedback: string,
      clearPoints = true,
      clearSteering = true,
    ) => {
      seated.current[session.index].reset();
      standing.current[session.index].suspend();
      marching.current[session.index].suspend();
      if (clearSteering) steering.current[session.index].reset();
      if (clearPoints) session.points = undefined;
      analyses.current[session.index] = {
        ...analyses.current[session.index],
        cadence: 0,
        tracking: false,
        quality: 0,
        feedback,
        steeringCue: steering.current[session.index].cue(),
      };
    };
    // A deadline stops waiting, not the raw WASM operation. Retiring a graph
    // must still wait for that original promise, even after its timeout fires.
    const closeModels = () => {
      for (const session of sessions) {
        const retiring = session.model;
        const rawPending = session.pending;
        session.model = null;
        session.pending = null;
        if (retiring)
          void Promise.resolve(rawPending)
            .catch(() => undefined)
            .then(() => retiring.close())
            .catch(() => undefined);
      }
    };
    const fail = (message: string) => {
      if (disposed || stopped) return;
      stopped = true;
      generation += 1;
      cancelAnimationFrame(frame);
      window.clearInterval(watchdog);
      setErrorMessage(message);
      for (const session of sessions)
        suspendMotion(session, "動作分析已暫停，請重新連線");
      stream?.getTracks().forEach((track) => {
        track.onended = null;
        track.stop();
      });
      closeModels();
      publish();
      report("error");
    };

    if (mode === "demo") {
      analyses.current = [
        blankPlayer("示範・非即時影像"),
        blankPlayer("示範・非即時影像"),
      ];
      publish();
      report("demo");
      return () => {
        disposed = true;
      };
    }

    report("loading");
    const draw = () => {
      if (disposed) return;
      const drawStartedAt = performance.now();
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !video || !ctx) return;
      const sourceWidth = video.videoWidth || 960;
      const sourceHeight = video.videoHeight || 720;
      // Match the preview aspect ratio without rasterizing an unnecessary
      // full-resolution camera-sized canvas for a small corner overlay.
      const width = Math.min(640, sourceWidth);
      const height = Math.max(
        1,
        Math.round((sourceHeight * width) / sourceWidth),
      );
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      ctx.clearRect(0, 0, width, height);
      const scale = width / 640;
      ctx.lineCap = "round";
      for (const session of sessions) {
        const points = session.points;
        if (!points) continue;
        const mapped = mapLandmarksToFrame(points, session.region);
        ctx.save();
        ctx.globalAlpha = session.held
          ? 0.35
          : analyses.current[session.index].tracking
            ? 1
            : 0.6;
        ctx.strokeStyle = COLORS[session.index];
        ctx.fillStyle = COLORS[session.index];
        ctx.lineWidth = 3.2 * scale;
        ctx.beginPath();
        for (const [a, b] of CONNECTIONS) {
          if (!visiblePoint(points[a], 0.35) || !visiblePoint(points[b], 0.35))
            continue;
          ctx.moveTo(mapped[a].x * width, mapped[a].y * height);
          ctx.lineTo(mapped[b].x * width, mapped[b].y * height);
        }
        ctx.stroke();
        ctx.beginPath();
        for (const joint of JOINTS) {
          if (!visiblePoint(points[joint], 0.35)) continue;
          ctx.moveTo(
            mapped[joint].x * width + 4.8 * scale,
            mapped[joint].y * height,
          );
          ctx.arc(
            mapped[joint].x * width,
            mapped[joint].y * height,
            4.8 * scale,
            0,
            Math.PI * 2,
          );
        }
        ctx.fill();
        if (
          live.current.exerciseMode === "standing" &&
          analyses.current[session.index].tracking
        ) {
          const hipY = ((mapped[23].y + mapped[24].y) / 2) * height;
          ctx.setLineDash([5 * scale, 4 * scale]);
          ctx.lineWidth = 1.2 * scale;
          ctx.beginPath();
          ctx.moveTo(
            (session.region.x + session.region.width * 0.12) * width,
            hipY,
          );
          ctx.lineTo(
            (session.region.x + session.region.width * 0.88) * width,
            hipY,
          );
          ctx.stroke();
        }
        ctx.restore();
      }
      if (rootRef.current)
        rootRef.current.dataset.drawMs = (
          performance.now() - drawStartedAt
        ).toFixed(1);
    };
    // Drawing runs separately from motion/state publication. Both model
    // callbacks can update immediately, but share one latest-points overlay
    // paint per animation frame and never exceed 20 overlay paints/second.
    const queueDraw = () => {
      if (disposed || drawFrame) return;
      const paint = (now: number) => {
        drawFrame = 0;
        if (disposed) return;
        if (now - lastDrawAt < 50) {
          drawFrame = requestAnimationFrame(paint);
          return;
        }
        lastDrawAt = now;
        draw();
      };
      drawFrame = requestAnimationFrame(paint);
    };

    const receiveResult = (session: PoseSession, result: PoseResult) => {
      if (disposed || stopped || recovering) return;
      const now = performance.now();
      session.health.observe(session.capturedAt, now);
      const points = result.poseLandmarks;
      const owned = ownsPlayerPose(
        points,
        session.region,
        session.index,
        playerCount,
      );
      const ownedPoints = owned ? points : undefined;
      // Upper-body steering remains responsive if a knee briefly disappears.
      // It never supplies cadence or turns a neighbour into the other player.
      const estimator = steering.current[session.index];
      if (
        live.current.running &&
        live.current.exerciseMode === "running" &&
        live.current.steeringEnabled
      ) {
        const direction = estimator.update(ownedPoints, session.capturedAt, {
          imageAspect: session.imageAspect,
        });
        if (direction !== null)
          callbacks.current.onSteer?.(session.index, direction);
      } else estimator.reset();
      const motion = analyzeLegPose(
        ownedPoints,
        session.imageAspect,
        live.current.exerciseMode,
      );
      if (!motion || !ownedPoints) {
        const keep = session.health.keepMotion(now);
        const feedback = framingFeedback(points, live.current.exerciseMode, {
          region: session.region,
          playerIndex: session.index,
          playerCount,
        });
        if (!keep) suspendMotion(session, feedback, false, false);
        // Brief partial detections must not erase a complete lift's history.
        // They never generate speed, even while we retain the phase/skeleton.
        session.points =
          ownedPoints ?? (!points && keep ? session.points : undefined);
        session.held = !points;
        analyses.current[session.index] = {
          ...analyses.current[session.index],
          cadence: 0,
          tracking: false,
          quality: 0,
          feedback,
        };
      } else {
        session.health.valid();
        session.points = ownedPoints;
        session.held = false;
        let cadence = 0;
        let highKnees = highKneeTotals.current[session.index];
        let steps =
          live.current.exerciseMode === "running"
            ? marchingTotals.current[session.index]
            : live.current.exerciseMode === "standing"
              ? highKnees
              : 0;
        let feedback = "已暫停";
        if (live.current.running) {
          const maxFrameGap = session.health.freshnessMs();
          if (live.current.exerciseMode === "standing") {
            const highKnee = standing.current[session.index].update(
              motion.leftLift,
              motion.rightLift,
              session.capturedAt,
              maxFrameGap,
            );
            cadence = highKnee.cadence;
            highKnees = highKnee.steps;
            highKneeTotals.current[session.index] = highKnees;
            steps = highKnees;
            feedback =
              highKnee.feedback === "raise"
                ? "膝蓋抬到髖部高度"
                : highKnee.feedback === "lower"
                  ? "放下抬起的膝蓋"
                  : "左右交替，做得很好";
          } else if (live.current.exerciseMode === "running") {
            const march = marching.current[session.index].update(
              motion.leftLift,
              motion.rightLift,
              session.capturedAt,
              maxFrameGap,
            );
            cadence = march.cadence;
            steps = march.steps;
            marchingTotals.current[session.index] = steps;
            feedback =
              march.feedback === "good"
                ? "左右踏步，做得很好"
                : "輕鬆左右踏步，不必抬高膝蓋";
          } else {
            cadence = seated.current[session.index].update(
              motion.signal,
              session.capturedAt,
              maxFrameGap,
            );
            feedback = cadence > 0 ? "持續交替踩踏" : "請交替抬腳踩踏";
          }
        }
        analyses.current[session.index] = {
          cadence,
          highKnees,
          steps,
          feedback,
          tracking: true,
          quality: motion.quality,
        };
      }
      analyses.current[session.index].steeringCue = estimator.cue();
      // Publish each person's result immediately. A slower second graph must
      // not hide the first person's joints until both sends have completed.
      publish(true);
      queueDraw();
    };

    const initializeModels = async (
      expectedGeneration: number,
    ): Promise<void> => {
      if (!Pose) throw new Error("Local pose runtime is unavailable");
      for (const session of sessions) {
        if (disposed || stopped || generation !== expectedGeneration) return;
        session.health = new PoseFreshness();
        session.firstSend = true;
        session.held = false;
        const model = new Pose({
          locateFile: (file) => assetUrl(`pose/${file}`),
        });
        session.model = model;
        model.setOptions({
          modelComplexity: 0,
          smoothLandmarks: true,
          enableSegmentation: false,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
        model.onResults((result) => {
          if (generation !== expectedGeneration || session.model !== model)
            return;
          receiveResult(session, result);
        });
        const operation = model.initialize();
        session.pending = operation;
        await poseDeadline(operation, 20000, "辨識模型啟動逾時，請重新連線。");
        if (disposed || stopped || generation !== expectedGeneration) return;
        if (session.pending === operation) session.pending = null;
      }
      analysisStartedAt = performance.now();
    };

    const recover = async (error: unknown): Promise<void> => {
      if (disposed || stopped || recovering) return;
      recovering = true;
      generation += 1;
      cancelAnimationFrame(frame);
      closeModels();
      for (const session of sessions)
        suspendMotion(session, "正在重新啟動動作分析…");
      publish();
      queueDraw();
      if (automaticRecoveries >= 1) {
        recovering = false;
        fail(
          error instanceof PoseTimeoutError
            ? error.message
            : "動作分析已中斷，請按重新連線恢復骨架標點。",
        );
        return;
      }
      automaticRecoveries += 1;
      report("loading");
      const expectedGeneration = generation;
      try {
        await initializeModels(expectedGeneration);
        if (disposed || stopped || generation !== expectedGeneration) return;
        lastVideoTime = -1;
        lastInference = 0;
        completedCycles = 0;
        nextFirst = 0;
        previousCaptureAt = 0;
        recovering = false;
        report("positioning");
        frame = requestAnimationFrame(infer);
      } catch (recoveryError) {
        if (disposed || stopped || generation !== expectedGeneration) return;
        recovering = false;
        fail(
          recoveryError instanceof PoseTimeoutError
            ? recoveryError.message
            : cameraError(recoveryError),
        );
      }
    };

    const infer = async (now: number) => {
      if (disposed || stopped || recovering) return;
      const expectedGeneration = generation;
      const video = videoRef.current;
      if (
        video &&
        video.readyState >= 2 &&
        video.currentTime !== lastVideoTime &&
        now - lastInference >= (playerCount === 2 ? 48 : 40)
      ) {
        lastVideoTime = video.currentTime;
        lastInference = now;
        const capturedAt = performance.now();
        try {
          // Snapshot every input, including single-player, at a bounded size.
          // Both players still analyze the same captured camera frame.
          for (const session of sessions) {
            const sourceWidth = video.videoWidth * session.region.width;
            const sourceHeight = video.videoHeight;
            const ratio = Math.min(
              1,
              // The extra crop width preserves inner arms without shrinking
              // either person's body below the former half-frame resolution.
              (playerCount === 2 ? 384 : 480) / sourceWidth,
              (playerCount === 2 ? 384 : 360) / sourceHeight,
            );
            const width = Math.max(1, Math.round(sourceWidth * ratio));
            const height = Math.max(1, Math.round(sourceHeight * ratio));
            if (
              session.crop.width !== width ||
              session.crop.height !== height
            ) {
              session.crop.width = width;
              session.crop.height = height;
            }
            const context = session.crop.getContext("2d");
            if (!context) throw new Error("Cannot create player camera crop");
            context.drawImage(
              video,
              video.videoWidth * session.region.x,
              0,
              sourceWidth,
              sourceHeight,
              0,
              0,
              width,
              height,
            );
            session.imageAspect = width / height;
            session.capturedAt = capturedAt;
          }
          const order =
            playerCount === 2 && nextFirst === 1
              ? [sessions[1], sessions[0]]
              : sessions;
          for (const session of order) {
            if (
              disposed ||
              stopped ||
              generation !== expectedGeneration ||
              !session.model
            )
              return;
            const operation = session.model.send({ image: session.crop });
            session.pending = operation;
            await poseDeadline(
              operation,
              session.firstSend ? 12000 : 6000,
              "動作分析回應逾時，請按重新連線恢復。",
            );
            if (disposed || stopped || generation !== expectedGeneration)
              return;
            if (session.pending === operation) session.pending = null;
            session.firstSend = false;
          }
          completedCycles += 1;
          // Give both players an early completed result while the freshness
          // estimator warms up, then alternate who receives the first result.
          if (playerCount === 2 && completedCycles >= 2)
            nextFirst = nextFirst === 0 ? 1 : 0;
          const root = rootRef.current;
          if (root) {
            root.dataset.inferenceMs = Math.max(
              0,
              performance.now() - capturedAt,
            ).toFixed(1);
            root.dataset.frameRate =
              previousCaptureAt > 0
                ? (1000 / Math.max(1, capturedAt - previousCaptureAt)).toFixed(
                    1,
                  )
                : "0";
            root.dataset.poseInput = sessions
              .map((session) => `${session.crop.width}x${session.crop.height}`)
              .join(",");
            root.dataset.poseRegions = sessions
              .map((session) => `${session.region.x}:${session.region.width}`)
              .join(",");
          }
          previousCaptureAt = capturedAt;
        } catch (error) {
          if (!disposed && !stopped && generation === expectedGeneration)
            await recover(error);
          return;
        }
      }
      if (
        !disposed &&
        !stopped &&
        !recovering &&
        generation === expectedGeneration
      )
        frame = requestAnimationFrame(infer);
    };

    const start = async () => {
      try {
        if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia)
          throw new DOMException("Secure context is required", "SecurityError");
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: playerCount === 2 ? 1280 : 960 },
            height: { ideal: 720 },
          },
          audio: false,
        });
        if (disposed || stopped) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        stream.getVideoTracks().forEach((track) => {
          track.onended = () => fail("攝影機已中斷，請檢查裝置後重新連線。");
        });
        const video = videoRef.current;
        if (!video) throw new Error("Camera preview is unavailable");
        video.srcObject = stream;
        await video.play();
        Pose = await loadLocalPose();
        if (disposed || stopped) return;
        try {
          await initializeModels(generation);
          if (disposed || stopped) return;
          report("positioning");
          frame = requestAnimationFrame(infer);
        } catch (error) {
          await recover(error);
        }
        if (disposed || stopped) return;
        watchdog = window.setInterval(() => {
          if (disposed || stopped || recovering || document.hidden) return;
          const now = performance.now();
          const currentVideo = videoRef.current;
          if (currentVideo && currentVideo.currentTime !== observedVideoTime) {
            observedVideoTime = currentVideo.currentTime;
            lastVideoAdvanceAt = now;
          }
          if (now - lastVideoAdvanceAt > 3500) {
            void recover(
              new PoseTimeoutError("攝影機影像已暫停，請按重新連線恢復。"),
            );
            return;
          }
          // An active send has its own bounded deadline. Do not erase another
          // player's completed result merely because this graph is slower.
          if (sessions.some((session) => session.pending !== null)) {
            let changed = false;
            for (const session of sessions) {
              if (
                session.health.isStale(now) &&
                analyses.current[session.index].tracking
              ) {
                // A stuck graph must not keep moving a rider from old input.
                // Keep the last skeleton dimmed while the deadline recovers
                // the graph; ordinary slow, live results have a larger budget.
                session.held = true;
                steering.current[session.index].reset();
                analyses.current[session.index] = {
                  ...analyses.current[session.index],
                  cadence: 0,
                  tracking: false,
                  steeringCue: "positioning",
                  feedback: "分析延遲，正在等待恢復…",
                };
                changed = true;
              }
            }
            if (changed) {
              publish(true);
              queueDraw();
            }
            return;
          }
          for (const session of sessions) {
            if (
              session.health.isStale(now) ||
              (session.health.lastResultAt === null &&
                now - analysisStartedAt > 12000)
            ) {
              void recover(
                new PoseTimeoutError("人體辨識未持續更新，請按重新連線恢復。"),
              );
              return;
            }
          }
        }, 400);
      } catch (error) {
        if (!disposed && !stopped) fail(cameraError(error));
      }
    };
    void start();
    return () => {
      disposed = true;
      generation += 1;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(drawFrame);
      window.clearInterval(watchdog);
      stream?.getTracks().forEach((track) => {
        track.onended = null;
        track.stop();
      });
      closeModels();
      const video = videoRef.current;
      if (video) video.srcObject = null;
      for (const estimator of seated.current) estimator.reset();
      for (const estimator of standing.current) estimator.suspend();
      for (const estimator of marching.current) estimator.suspend();
      for (const estimator of steering.current) estimator.reset();
    };
  }, [mode, playerCount, retry]);

  return (
    <div
      ref={rootRef}
      className={`pose-camera pose-camera--${mode}`}
      data-player-count={playerCount}
      data-exercise-mode={exerciseMode}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
        borderRadius: 12,
        background: "#26352d",
        color: "#eef2e5",
      }}
    >
      {mode === "camera" ? (
        <>
          <video
            ref={videoRef}
            muted
            playsInline
            autoPlay
            className="pose-video"
            aria-label="鏡像攝影機畫面"
            style={{
              position: "absolute",
              zIndex: 0,
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "scaleX(-1)",
            }}
          />
          <canvas
            ref={canvasRef}
            className="pose-overlay"
            aria-label="即時人體關節標記"
            style={{
              position: "absolute",
              zIndex: 1,
              pointerEvents: "none",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "scaleX(-1)",
            }}
          />
        </>
      ) : (
        <DemoPose
          running={running}
          cadences={[demoCadence, demoCadence2]}
          playerCount={playerCount}
          exerciseMode={exerciseMode}
        />
      )}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 2,
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg,#12251e88,transparent 27%,transparent 62%,#12251ed9)",
        }}
      />
      {playerCount === 2 && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            zIndex: 2,
            left: "50%",
            top: 29,
            bottom: 38,
            borderLeft: "1px dashed #dce9cd66",
          }}
        />
      )}
      <div
        className="pose-topline"
        style={{
          position: "absolute",
          zIndex: 2,
          top: 8,
          left: 8,
          right: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          fontSize: 9,
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: status === "error" ? "#e8a78f" : COLORS[0],
            }}
          />
          {mode === "demo"
            ? "示範動畫・非即時影像"
            : `${playerCount === 2 ? "雙人 " : ""}AI 動作分析`}
        </span>
        <span style={{ fontSize: 8, color: "#c4d7ba" }}>
          {exerciseMode === "running"
            ? "跑步・原地踏步"
            : exerciseMode === "standing"
              ? "站姿抬膝"
              : "坐姿踩踏"}
        </span>
      </div>
      <div
        className="pose-player-labels"
        style={{
          position: "absolute",
          zIndex: 2,
          top: 27,
          left: 8,
          right: 8,
          display: "flex",
          gap: 8,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: playerCount }, (_, index) => (
          <span
            key={index}
            data-player-zone={index + 1}
            style={{
              flex: 1,
              color: COLORS[index],
              fontSize: 9,
              textAlign: "left",
              textShadow: "0 1px 4px #000",
            }}
          >
            ● 玩家 {index + 1}
            {mode === "camera" && players[index].tracking
              ? ` · ${players[index].quality}%`
              : ""}
          </span>
        ))}
      </div>
      {status === "loading" && mode === "camera" && (
        <div
          role="status"
          style={{
            position: "absolute",
            zIndex: 2,
            inset: "42% 8px auto",
            textAlign: "center",
            fontSize: 10,
            textShadow: "0 1px 8px #000",
          }}
        >
          正在載入{playerCount === 2 ? "雙人" : "本機"}辨識模型…
        </div>
      )}
      {status === "error" && mode === "camera" && (
        <div
          role="alert"
          className="pose-error"
          style={{
            position: "absolute",
            zIndex: 2,
            inset: "29px 7px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 7,
            padding: 7,
            background: "#24362df5",
            borderRadius: 8,
          }}
        >
          <span style={{ fontSize: 10, lineHeight: 1.6 }}>{errorMessage}</span>
          <button
            type="button"
            onClick={() => setRetry((value) => value + 1)}
            style={{
              border: "1px solid #91a878",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 10,
              color: "#e8f0dc",
              background: "#3f5540",
              cursor: "pointer",
            }}
          >
            重新連線
          </button>
        </div>
      )}
      <div
        className="pose-footer"
        style={{
          position: "absolute",
          zIndex: 2,
          bottom: 6,
          left: 7,
          right: 7,
          display: "flex",
          gap: 5,
        }}
      >
        {Array.from({ length: playerCount }, (_, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "4px 5px",
              borderRadius: 5,
              background: "#14291ec4",
              border: `1px solid ${COLORS[index]}30`,
            }}
          >
            <span
              data-player-status={index + 1}
              data-tracking={players[index].tracking ? "true" : "false"}
              data-cadence={players[index].cadence.toFixed(2)}
              data-high-knees={players[index].highKnees}
              data-steps={players[index].steps}
              data-feedback={players[index].feedback}
              data-steering-cue={players[index].steeringCue ?? "positioning"}
              style={{
                display: "block",
                color: COLORS[index],
                fontSize: 9,
                whiteSpace: players[index].tracking ? "nowrap" : "normal",
              }}
            >
              {mode === "demo"
                ? `玩家${index + 1}示範`
                : `玩家${index + 1}${players[index].tracking ? "已辨識" : "待入鏡"}`}
            </span>
            {mode === "camera" &&
              steeringEnabled &&
              exerciseMode === "running" && (
                <span
                  className="pose-steering-cue"
                  style={{
                    display: "block",
                    fontSize: 9,
                    color: COLORS[index],
                    marginTop: 3,
                  }}
                >
                  {running
                    ? steeringMessage(players[index].steeringCue)
                    : "開始後：微側傾／抬手到胸前換道"}
                </span>
              )}
            <span
              title={players[index].feedback}
              style={{
                display: "block",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: players[index].tracking ? "nowrap" : "normal",
                color: "#dae6d1",
                fontSize: mode === "camera" && !players[index].tracking ? 9 : 8,
                marginTop: 2,
              }}
            >
              {mode === "demo" ? "非即時影像" : players[index].feedback}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoPose({
  running,
  cadences,
  playerCount,
  exerciseMode,
}: {
  running: boolean;
  cadences: [number, number];
  playerCount: 1 | 2;
  exerciseMode: ExerciseMode;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const state = useRef({ running, cadences, playerCount, exerciseMode });
  state.current = { running, cadences, playerCount, exerciseMode };
  useEffect(() => {
    let frame = 0;
    let previous = 0;
    const phases = [0.7, 2.3];
    const render = (now: number) => {
      const element = canvas.current;
      const ctx = element?.getContext("2d");
      if (!element || !ctx) return;
      const dt = previous ? Math.min((now - previous) / 1000, 0.1) : 0;
      previous = now;
      const w = 480,
        h = 360;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "#c4db9b0e";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      for (let index = 0; index < state.current.playerCount; index++) {
        if (state.current.running)
          phases[index] +=
            ((dt * state.current.cadences[index]) / 60) * Math.PI * 2;
        const phase = phases[index];
        const standingPose = state.current.exerciseMode !== "seated";
        const gentleMarch = state.current.exerciseMode === "running";
        const kneeAmplitude = gentleMarch ? 14 : 78;
        const footAmplitude = gentleMarch ? 18 : 82;
        const centerX =
          state.current.playerCount === 2 ? 120 + index * 240 : 240;
        const horizontalScale = state.current.playerCount === 2 ? 0.85 : 1;
        ctx.save();
        ctx.translate(centerX, 0);
        ctx.scale(horizontalScale, 1);
        const liftLeft = standingPose
          ? Math.max(0, Math.sin(phase))
          : Math.sin(phase);
        const liftRight = standingPose
          ? Math.max(0, -Math.sin(phase))
          : -Math.sin(phase);
        const hipY = standingPose ? 190 : 192;
        const points: Array<[number, number]> = [
          [-22, 113],
          [22, 113],
          [-17, hipY],
          [17, hipY],
          [
            -37,
            standingPose ? 253 - liftLeft * kneeAmplitude : 230 - liftLeft * 24,
          ],
          [
            37,
            standingPose
              ? 253 - liftRight * kneeAmplitude
              : 230 - liftRight * 24,
          ],
          [
            -22 + (standingPose ? 0 : Math.cos(phase) * 12),
            standingPose ? 314 - liftLeft * footAmplitude : 286 - liftLeft * 19,
          ],
          [
            22 - (standingPose ? 0 : Math.cos(phase) * 12),
            standingPose
              ? 314 - liftRight * footAmplitude
              : 286 - liftRight * 19,
          ],
          [
            -40,
            standingPose ? 314 - liftLeft * footAmplitude : 280 - liftLeft * 19,
          ],
          [
            40,
            standingPose
              ? 314 - liftRight * footAmplitude
              : 280 - liftRight * 19,
          ],
          [-47, 165],
          [47, 165],
        ];
        if (!standingPose) {
          ctx.strokeStyle = "#bfd09d30";
          ctx.lineWidth = 5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(-49, 191);
          ctx.lineTo(-49, 227);
          ctx.lineTo(45, 227);
          ctx.lineTo(45, 301);
          ctx.moveTo(-42, 227);
          ctx.lineTo(-42, 301);
          ctx.stroke();
        } else if (!gentleMarch) {
          ctx.strokeStyle = `${COLORS[index]}55`;
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(-75, hipY);
          ctx.lineTo(75, hipY);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        ctx.fillStyle = `${COLORS[index]}09`;
        ctx.beginPath();
        ctx.moveTo(...points[0]);
        ctx.lineTo(...points[1]);
        ctx.lineTo(...points[3]);
        ctx.lineTo(...points[2]);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = `${COLORS[index]}77`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 82, 18, 22, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 104);
        ctx.lineTo(0, 113);
        ctx.stroke();
        const links = [
          [0, 1],
          [0, 2],
          [1, 3],
          [2, 3],
          [2, 4],
          [3, 5],
          [4, 6],
          [5, 7],
          [6, 8],
          [7, 9],
          [0, 10],
          [1, 11],
          [10, 2],
          [11, 3],
        ];
        ctx.strokeStyle = COLORS[index];
        ctx.shadowColor = COLORS[index];
        ctx.shadowBlur = 6;
        ctx.lineWidth = 3;
        for (const [a, b] of links) {
          ctx.beginPath();
          ctx.moveTo(...points[a]);
          ctx.lineTo(...points[b]);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
        for (const [x, y] of points) {
          ctx.beginPath();
          ctx.arc(x, y, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = COLORS[index];
          ctx.fill();
          ctx.strokeStyle = "#26382c";
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
        ctx.restore();
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <canvas
      ref={canvas}
      width={480}
      height={360}
      aria-label={`示範${playerCount === 2 ? "雙人" : "單人"}${exerciseMode === "running" ? "跑步・輕鬆原地踏步，不必抬高膝蓋" : exerciseMode === "standing" ? "站姿高抬膝" : "坐姿空中踩踏"}關節動畫，非即時攝影機影像`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  );
}

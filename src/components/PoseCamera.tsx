import { useEffect, useRef, useState } from "react";
import { CadenceEstimator } from "../lib/cadence";
import { HighKneeEstimator } from "../lib/highKnee";
import { assetUrl } from "../lib/assets";
import {
  analyzeLegPose,
  cameraRegion,
  mapLandmarksToFrame,
  visiblePoint,
} from "../lib/motion";
import type { CameraRegion, PosePoint } from "../lib/motion";

type TrackingStatus = "demo" | "loading" | "tracking" | "positioning" | "error";
type ExerciseMode = "seated" | "standing";
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
  [11, 12],
  [11, 23],
  [12, 24],
  [23, 24],
  [23, 25],
  [24, 26],
  [25, 27],
  [26, 28],
  [27, 31],
  [28, 32],
];
const JOINTS = [11, 12, 23, 24, 25, 26, 27, 28, 31, 32];
const blankPlayer = (feedback = "請讓肩膀到雙腳入鏡"): PlayerAnalysis => ({
  cadence: 0,
  tracking: false,
  quality: 0,
  feedback,
  highKnees: 0,
});

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
  lastResult: number;
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
}: PoseCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const callbacks = useRef({ onCadence, onTracking, onPlayers });
  const live = useRef({ running, exerciseMode });
  const seated = useRef([new CadenceEstimator(), new CadenceEstimator()]);
  const standing = useRef([new HighKneeEstimator(), new HighKneeEstimator()]);
  const analyses = useRef<[PlayerAnalysis, PlayerAnalysis]>([
    blankPlayer(),
    blankPlayer(),
  ]);
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
  callbacks.current = { onCadence, onTracking, onPlayers };
  live.current = { running, exerciseMode };

  useEffect(() => {
    if (!running) pauseAnalysis.current();
  }, [running]);
  useEffect(() => {
    resetAnalysis.current();
  }, [resetKey, exerciseMode]);

  useEffect(() => {
    let disposed = false;
    let stopped = false;
    let frame = 0;
    let watchdog = 0;
    let stream: MediaStream | null = null;
    let lastVideoTime = -1;
    let lastInference = 0;
    let currentStatus: TrackingStatus | null = null;
    const sessions: PoseSession[] = Array.from(
      { length: playerCount },
      (_, index) => ({
        index: index as 0 | 1,
        region: cameraRegion(index as 0 | 1, playerCount),
        model: null,
        pending: null,
        crop: document.createElement("canvas"),
        lastResult: 0,
        imageAspect: 4 / 3,
      }),
    );
    for (const estimator of seated.current) estimator.reset();
    for (const estimator of standing.current) estimator.reset();
    analyses.current = [
      blankPlayer(),
      blankPlayer(playerCount === 2 ? undefined : "單人模式"),
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
      analyses.current = analyses.current.map((player) => ({
        ...player,
        cadence: 0,
        highKnees: 0,
        feedback: player.tracking
          ? live.current.exerciseMode === "standing"
            ? "膝蓋抬到髖部高度"
            : "請交替抬腳踩踏"
          : player.feedback,
      })) as [PlayerAnalysis, PlayerAnalysis];
      publish();
    };
    publish();

    // Each graph owns its own pending operation. Deletion waits for that
    // operation so changing modes/retrying never closes an active WASM graph.
    const closeModels = () => {
      for (const session of sessions) {
        const retiring = session.model;
        session.model = null;
        if (retiring)
          void Promise.resolve(session.pending)
            .catch(() => undefined)
            .then(() => retiring.close())
            .catch(() => undefined);
      }
    };
    const invalidate = (
      session: PoseSession,
      feedback = "請讓肩膀到雙腳入鏡",
    ) => {
      seated.current[session.index].reset();
      standing.current[session.index].suspend();
      session.points = undefined;
      analyses.current[session.index] = {
        ...analyses.current[session.index],
        cadence: 0,
        tracking: false,
        quality: 0,
        feedback,
      };
    };
    const fail = (message: string) => {
      if (disposed || stopped) return;
      stopped = true;
      cancelAnimationFrame(frame);
      window.clearInterval(watchdog);
      setErrorMessage(message);
      for (const session of sessions) invalidate(session, "攝影機未連線");
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
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !video || !ctx) return;
      const width = video.videoWidth || 960;
      const height = video.videoHeight || 720;
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
        ctx.strokeStyle = COLORS[session.index];
        ctx.fillStyle = COLORS[session.index];
        ctx.lineWidth = 3.2 * scale;
        ctx.shadowColor = COLORS[session.index];
        ctx.shadowBlur = 5 * scale;
        for (const [a, b] of CONNECTIONS) {
          if (!visiblePoint(points[a], 0.35) || !visiblePoint(points[b], 0.35))
            continue;
          ctx.beginPath();
          ctx.moveTo(mapped[a].x * width, mapped[a].y * height);
          ctx.lineTo(mapped[b].x * width, mapped[b].y * height);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
        for (const joint of JOINTS) {
          if (!visiblePoint(points[joint], 0.35)) continue;
          ctx.beginPath();
          ctx.arc(
            mapped[joint].x * width,
            mapped[joint].y * height,
            4.8 * scale,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
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
          ctx.setLineDash([]);
        }
      }
    };

    const receiveResult = (session: PoseSession, result: PoseResult) => {
      if (disposed || stopped) return;
      const now = performance.now();
      session.lastResult = now;
      const points = result.poseLandmarks;
      const motion = analyzeLegPose(points, session.imageAspect);
      if (!motion || !points) {
        invalidate(session);
        // Keep any confidently visible joints as positioning guidance; an
        // incomplete pose still never generates cadence or counted steps.
        session.points = points;
        return;
      }
      session.points = points;
      let cadence = 0;
      let highKnees = analyses.current[session.index].highKnees;
      let feedback = "已暫停";
      if (live.current.running) {
        if (live.current.exerciseMode === "standing") {
          const highKnee = standing.current[session.index].update(
            motion.leftLift,
            motion.rightLift,
            now,
          );
          cadence = highKnee.cadence;
          highKnees = highKnee.steps;
          feedback =
            highKnee.feedback === "raise"
              ? "膝蓋抬到髖部高度"
              : highKnee.feedback === "lower"
                ? "放下抬起的膝蓋"
                : "左右交替，做得很好";
        } else {
          cadence = seated.current[session.index].update(motion.signal, now);
          feedback = cadence > 0 ? "持續交替踩踏" : "請交替抬腳踩踏";
        }
      }
      analyses.current[session.index] = {
        cadence,
        highKnees,
        feedback,
        tracking: true,
        quality: motion.quality,
      };
    };

    const infer = async (now: number) => {
      if (disposed || stopped) return;
      const video = videoRef.current;
      if (
        video &&
        video.readyState >= 2 &&
        video.currentTime !== lastVideoTime &&
        now - lastInference >= (playerCount === 2 ? 80 : 66)
      ) {
        lastVideoTime = video.currentTime;
        lastInference = now;
        try {
          // Snapshot both halves before inference so both players use the same
          // camera frame. Raw right -> mirrored left is always player 1.
          if (playerCount === 2) {
            for (const session of sessions) {
              const sourceWidth = video.videoWidth * session.region.width;
              const sourceHeight = video.videoHeight;
              const ratio = Math.min(1, 480 / sourceWidth, 640 / sourceHeight);
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
            }
          } else sessions[0].imageAspect = video.videoWidth / video.videoHeight;
          for (const session of sessions) {
            if (disposed || stopped || !session.model) return;
            const operation = session.model.send({
              image: playerCount === 2 ? session.crop : video,
            });
            session.pending = operation;
            await operation;
            if (session.pending === operation) session.pending = null;
          }
          if (!disposed && !stopped) {
            draw();
            publish(true);
          }
        } catch (error) {
          fail(cameraError(error));
          return;
        }
      }
      // Both graphs are strictly sequential; no graph receives concurrent sends.
      if (!disposed && !stopped) frame = requestAnimationFrame(infer);
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
        const Pose = await loadLocalPose();
        if (disposed || stopped) return;
        for (const session of sessions) {
          if (disposed || stopped) return;
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
          model.onResults((result) => receiveResult(session, result));
          const initialization = model.initialize();
          session.pending = initialization;
          await initialization;
          if (session.pending === initialization) session.pending = null;
        }
        if (disposed || stopped) return;
        report("positioning");
        frame = requestAnimationFrame(infer);
        watchdog = window.setInterval(() => {
          if (disposed || stopped) return;
          const now = performance.now();
          let changed = false;
          for (const session of sessions) {
            if (
              session.lastResult &&
              now - session.lastResult > 1600 &&
              analyses.current[session.index].tracking
            ) {
              invalidate(session, "影像暫停，請檢查攝影機");
              changed = true;
            }
          }
          if (changed) {
            draw();
            publish(true);
          }
        }, 400);
      } catch (error) {
        fail(cameraError(error));
      }
    };
    void start();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
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
    };
  }, [mode, playerCount, retry]);

  return (
    <div
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
          {exerciseMode === "standing" ? "站姿抬膝" : "坐姿踩踏"}
        </span>
      </div>
      <div
        className="pose-player-labels"
        style={{
          position: "absolute",
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
              style={{
                display: "block",
                color: COLORS[index],
                fontSize: 9,
                whiteSpace: "nowrap",
              }}
            >
              {mode === "demo"
                ? `玩家${index + 1}示範`
                : `玩家${index + 1}${players[index].tracking ? "已辨識" : "待入鏡"}`}
            </span>
            <span
              title={players[index].feedback}
              style={{
                display: "block",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "#dae6d1",
                fontSize: 8,
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
        const standingPose = state.current.exerciseMode === "standing";
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
          [-37, standingPose ? 253 - liftLeft * 78 : 230 - liftLeft * 24],
          [37, standingPose ? 253 - liftRight * 78 : 230 - liftRight * 24],
          [
            -22 + (standingPose ? 0 : Math.cos(phase) * 12),
            standingPose ? 314 - liftLeft * 82 : 286 - liftLeft * 19,
          ],
          [
            22 - (standingPose ? 0 : Math.cos(phase) * 12),
            standingPose ? 314 - liftRight * 82 : 286 - liftRight * 19,
          ],
          [-40, standingPose ? 314 - liftLeft * 82 : 280 - liftLeft * 19],
          [40, standingPose ? 314 - liftRight * 82 : 280 - liftRight * 19],
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
        } else {
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
      aria-label={`示範${playerCount === 2 ? "雙人" : "單人"}${exerciseMode === "standing" ? "站姿高抬膝" : "坐姿空中踩踏"}關節動畫，非即時攝影機影像`}
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

import { useEffect, useRef, useState } from "react";
import { CadenceEstimator } from "../lib/cadence";
import { assetUrl } from "../lib/assets";

type TrackingStatus = "demo" | "loading" | "tracking" | "positioning" | "error";
type Point = {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
  presence?: number;
};
type PoseResult = { poseLandmarks?: Point[] };
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
  send: (input: { image: HTMLVideoElement }) => Promise<void>;
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

export type PoseCameraProps = {
  mode: "demo" | "camera";
  running: boolean;
  demoCadence: number;
  onCadence: (rpm: number) => void;
  onTracking: (status: TrackingStatus) => void;
};

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
const LEG_POINTS = [23, 24, 25, 26, 27, 28];

function visible(point: Point | undefined, confidence = 0.5): point is Point {
  return (
    !!point &&
    (point.visibility ?? 0) >= confidence &&
    (point.presence ?? 1) >= confidence &&
    point.x > 0.015 &&
    point.x < 0.985 &&
    point.y > 0.015 &&
    point.y < 0.985
  );
}

function cameraError(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  if (name === "NotAllowedError" || name === "PermissionDeniedError")
    return "攝影機權限未開啟，請允許此網站使用攝影機後再試一次。";
  if (name === "NotFoundError" || name === "DevicesNotFoundError")
    return "找不到攝影機，請連接攝影機後再試一次。";
  if (name === "NotReadableError" || name === "TrackStartError")
    return "攝影機正被其他程式使用，請關閉其他視訊程式後再試一次。";
  if (name === "SecurityError")
    return "請使用 HTTPS 或 localhost 開啟遊戲，才能使用攝影機。";
  return "無法啟動動作分析，請確認攝影機和本機辨識模型可用，再試一次。";
}

export default function PoseCamera({
  mode,
  running,
  demoCadence,
  onCadence,
  onTracking,
}: PoseCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const callbacks = useRef({ onCadence, onTracking });
  const runningRef = useRef(running);
  const estimator = useRef(new CadenceEstimator());
  const [status, setStatus] = useState<TrackingStatus>(
    mode === "demo" ? "demo" : "loading",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [retry, setRetry] = useState(0);
  const [quality, setQuality] = useState(0);
  callbacks.current = { onCadence, onTracking };
  runningRef.current = running;

  useEffect(() => {
    if (!running) {
      estimator.current.reset();
      callbacks.current.onCadence(0);
    }
  }, [running]);

  useEffect(() => {
    let disposed = false;
    let stopped = false;
    let frame = 0;
    let stream: MediaStream | null = null;
    let pose: LocalPose | null = null;
    let pendingOperation: Promise<void> | null = null;
    let lastVideoTime = -1;
    let lastInference = 0;
    let lastSeen = 0;
    let lastQualityUpdate = 0;
    let lastResultTime = 0;
    let currentStatus: TrackingStatus | null = null;
    estimator.current.reset();
    setErrorMessage("");
    setQuality(0);
    callbacks.current.onCadence(0);

    const report = (next: TrackingStatus) => {
      if (disposed || next === currentStatus) return;
      currentStatus = next;
      setStatus(next);
      callbacks.current.onTracking(next);
    };

    // Never delete the WASM graph while an asynchronous inference is using it.
    const closePose = () => {
      const retiring = pose;
      pose = null;
      if (retiring)
        void Promise.resolve(pendingOperation)
          .catch(() => undefined)
          .then(() => retiring.close())
          .catch(() => undefined);
    };

    if (mode === "demo") {
      report("demo");
      return () => {
        disposed = true;
      };
    }

    report("loading");
    const draw = (points: Point[] | undefined) => {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !video || !ctx) return;
      if (
        canvas.width !== video.videoWidth ||
        canvas.height !== video.videoHeight
      ) {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!points) return;
      const scale = canvas.width / 640;
      ctx.lineCap = "round";
      ctx.lineWidth = 3.2 * scale;
      for (const [a, b] of CONNECTIONS) {
        if (!visible(points[a], 0.35) || !visible(points[b], 0.35)) continue;
        ctx.strokeStyle = a % 2 ? "#d8f28d" : "#9ce4d2";
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 8 * scale;
        ctx.beginPath();
        ctx.moveTo(points[a].x * canvas.width, points[a].y * canvas.height);
        ctx.lineTo(points[b].x * canvas.width, points[b].y * canvas.height);
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
      for (const joint of JOINTS) {
        if (!visible(points[joint], 0.35)) continue;
        ctx.beginPath();
        ctx.arc(
          points[joint].x * canvas.width,
          points[joint].y * canvas.height,
          5.5 * scale,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = joint % 2 ? "#e0f69e" : "#a7eddd";
        ctx.fill();
        ctx.strokeStyle = "#24392e";
        ctx.lineWidth = 1.6 * scale;
        ctx.stroke();
      }
    };

    const receiveResult = (result: PoseResult) => {
      if (disposed) return;
      const now = performance.now();
      lastResultTime = now;
      const points = result.poseLandmarks;
      draw(points);
      const legsVisible =
        !!points && LEG_POINTS.every((index) => visible(points[index]));
      const shouldersVisible =
        !!points && visible(points[11], 0.4) && visible(points[12], 0.4);
      if (legsVisible && shouldersVisible) {
        const torso = Math.hypot(
          (points[11].x + points[12].x - points[23].x - points[24].x) / 2,
          (points[11].y + points[12].y - points[23].y - points[24].y) / 2,
        );
        if (torso > 0.07) {
          report("tracking");
          lastSeen = now;
          // Relative lift cancels whole-body translation and camera scale.
          const leftLift =
            points[23].y - (points[25].y * 0.6 + points[27].y * 0.4);
          const rightLift =
            points[24].y - (points[26].y * 0.6 + points[28].y * 0.4);
          callbacks.current.onCadence(
            runningRef.current
              ? estimator.current.update((leftLift - rightLift) / torso, now)
              : 0,
          );
          if (now - lastQualityUpdate > 700) {
            setQuality(
              Math.round(
                (LEG_POINTS.reduce(
                  (total, index) => total + (points[index].visibility ?? 0),
                  0,
                ) /
                  LEG_POINTS.length) *
                  100,
              ),
            );
            lastQualityUpdate = now;
          }
        } else {
          report("positioning");
          callbacks.current.onCadence(0);
          if (now - lastSeen > 600) estimator.current.reset();
        }
      } else {
        report("positioning");
        callbacks.current.onCadence(0);
        if (now - lastSeen > 600) estimator.current.reset();
      }
    };

    const infer = async (now: number) => {
      if (disposed || stopped) return;
      if (lastResultTime && now - lastResultTime > 1600) {
        estimator.current.reset();
        callbacks.current.onCadence(0);
        report("positioning");
      }
      const video = videoRef.current;
      if (
        video &&
        pose &&
        video.readyState >= 2 &&
        video.currentTime !== lastVideoTime &&
        now - lastInference >= 40
      ) {
        lastVideoTime = video.currentTime;
        lastInference = now;
        try {
          const operation = pose.send({ image: video });
          pendingOperation = operation;
          await operation;
          if (pendingOperation === operation) pendingOperation = null;
        } catch (error) {
          if (!disposed) {
            stopped = true;
            setErrorMessage(cameraError(error));
            report("error");
            callbacks.current.onCadence(0);
            stream?.getTracks().forEach((track) => track.stop());
            closePose();
          }
          return;
        }
      }
      // Schedule only after send resolves: MediaPipe must not receive two
      // simultaneous frames, including during slower initial WASM startup.
      if (!disposed && !stopped) frame = requestAnimationFrame(infer);
    };

    const start = async () => {
      try {
        if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
          throw new DOMException("Secure context is required", "SecurityError");
        }
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 960 },
            height: { ideal: 720 },
          },
          audio: false,
        });
        if (disposed) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        stream.getVideoTracks().forEach((track) => {
          track.onended = () => {
            if (disposed) return;
            stopped = true;
            cancelAnimationFrame(frame);
            setErrorMessage("攝影機已中斷連線，請檢查裝置後重新連線。");
            report("error");
            callbacks.current.onCadence(0);
            estimator.current.reset();
            closePose();
          };
        });
        const video = videoRef.current;
        if (!video) return;
        video.srcObject = stream;
        await video.play();
        const Pose = await loadLocalPose();
        if (disposed) return;
        pose = new Pose({ locateFile: (file) => assetUrl(`pose/${file}`) });
        pose.setOptions({
          modelComplexity: 0,
          smoothLandmarks: true,
          enableSegmentation: false,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
        pose.onResults(receiveResult);
        const initialization = pose.initialize();
        pendingOperation = initialization;
        await initialization;
        if (pendingOperation === initialization) pendingOperation = null;
        if (disposed) return;
        report("positioning");
        frame = requestAnimationFrame(infer);
      } catch (error) {
        stream?.getTracks().forEach((track) => track.stop());
        closePose();
        if (!disposed) {
          setErrorMessage(cameraError(error));
          report("error");
          callbacks.current.onCadence(0);
        }
      }
    };
    void start();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      stream?.getTracks().forEach((track) => track.stop());
      closePose();
      const video = videoRef.current;
      if (video) video.srcObject = null;
      estimator.current.reset();
    };
  }, [mode, retry]);

  const label =
    status === "demo"
      ? "示範姿態"
      : status === "tracking"
        ? "姿態追蹤中"
        : status === "loading"
          ? "正在開啟攝影機…"
          : status === "error"
            ? "攝影機未連線"
            : "請讓肩膀到雙腳入鏡";

  return (
    <div
      className={`pose-camera pose-camera--${mode}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 260,
        overflow: "hidden",
        borderRadius: 16,
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
        <DemoPose running={running} cadence={demoCadence} />
      )}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(16,28,21,.25), transparent 28%, transparent 65%, rgba(16,28,21,.6))",
          pointerEvents: "none",
        }}
      />
      <div
        className="pose-topline"
        style={{
          position: "absolute",
          top: 16,
          left: 17,
          right: 17,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          fontSize: 11,
          letterSpacing: ".07em",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: status === "error" ? "#e8a78f" : "#c7eb8d",
              boxShadow: "0 0 10px #c7eb8d66",
            }}
          />
          {mode === "demo" ? "動作分析預覽" : "AI 即時動作分析"}
        </span>
        <span
          style={{ color: "#d5dfcf", fontFamily: "monospace", fontSize: 10 }}
        >
          POSE TRACKING
        </span>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "53px 24px 48px",
          pointerEvents: "none",
        }}
      >
        {(["topLeft", "topRight", "bottomLeft", "bottomRight"] as const).map(
          (corner) => (
            <span
              key={corner}
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                borderColor: "#c8e69a88",
                borderStyle: "solid",
                borderWidth: `${corner.startsWith("top") ? 2 : 0}px ${corner.endsWith("Right") ? 2 : 0}px ${corner.startsWith("bottom") ? 2 : 0}px ${corner.endsWith("Left") ? 2 : 0}px`,
                ...(corner.startsWith("top") ? { top: 0 } : { bottom: 0 }),
                ...(corner.endsWith("Left") ? { left: 0 } : { right: 0 }),
              }}
            />
          ),
        )}
      </div>
      {status === "error" && mode === "camera" && (
        <div
          role="alert"
          className="pose-error"
          style={{
            position: "absolute",
            inset: "65px 26px 57px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 14,
            padding: 12,
            background: "#24362df0",
            borderRadius: 12,
          }}
        >
          <span style={{ fontSize: 13, lineHeight: 1.8 }}>{errorMessage}</span>
          <button
            type="button"
            onClick={() => setRetry((value) => value + 1)}
            style={{
              border: "1px solid #91a878",
              borderRadius: 8,
              padding: "8px 18px",
              color: "#e8f0dc",
              background: "#3f5540",
              cursor: "pointer",
            }}
          >
            重新連線
          </button>
        </div>
      )}
      {status === "loading" && mode === "camera" && (
        <div
          role="status"
          style={{
            position: "absolute",
            inset: "43% 20px auto",
            textAlign: "center",
            fontSize: 13,
            textShadow: "0 1px 8px #000",
          }}
        >
          正在載入本機辨識模型…
        </div>
      )}
      <div
        className="pose-footer"
        style={{
          position: "absolute",
          bottom: 15,
          left: 17,
          right: 17,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            padding: "6px 9px",
            borderRadius: 6,
            color: "#e0ebd5",
            background: "#15271e99",
            border: "1px solid #b7d29a22",
            fontSize: 10,
          }}
        >
          {label}
          {mode === "demo" ? "・非即時影像" : ""}
        </span>
        <span
          style={{ fontSize: 10, color: "#c8d8bc", letterSpacing: ".04em" }}
        >
          {mode === "demo"
            ? "12 關節標記"
            : status === "tracking"
              ? `辨識品質 ${quality}%`
              : "肩・髖・膝・踝"}
        </span>
      </div>
    </div>
  );
}

function DemoPose({ running, cadence }: { running: boolean; cadence: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const state = useRef({ running, cadence });
  state.current = { running, cadence };
  useEffect(() => {
    let frame = 0;
    let previous = 0;
    let phase = 0.7;
    const render = (now: number) => {
      const element = canvas.current;
      const context = element?.getContext("2d");
      if (!element || !context) return;
      const dt = previous ? Math.min((now - previous) / 1000, 0.1) : 0;
      previous = now;
      if (state.current.running)
        phase += ((dt * state.current.cadence) / 60) * Math.PI * 2;
      const w = 480,
        h = 360;
      context.clearRect(0, 0, w, h);
      context.strokeStyle = "#c4db9b0b";
      context.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, h);
        context.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(w, y);
        context.stroke();
      }
      const glow = context.createRadialGradient(w / 2, 180, 4, w / 2, 180, 160);
      glow.addColorStop(0, "#a7c76f12");
      glow.addColorStop(1, "#a7c76f00");
      context.fillStyle = glow;
      context.fillRect(0, 0, w, h);
      // A seated, front-facing pose. Opposite leg phases show a full pedal cycle.
      const liftLeft = Math.sin(phase),
        liftRight = -liftLeft;
      const points: Array<[number, number]> = [
        [218, 116],
        [262, 116],
        [223, 192],
        [257, 192],
        [199, 230 - liftLeft * 24],
        [281, 230 - liftRight * 24],
        [218 + Math.cos(phase) * 12, 286 - liftLeft * 19],
        [262 - Math.cos(phase) * 12, 286 - liftRight * 19],
        [200, 280 - liftLeft * 19],
        [280, 280 - liftRight * 19],
        [193, 166],
        [287, 166],
      ];
      context.strokeStyle = "#bfd09d26";
      context.lineWidth = 5;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(191, 191);
      context.lineTo(191, 227);
      context.lineTo(285, 227);
      context.lineTo(285, 298);
      context.moveTo(198, 227);
      context.lineTo(198, 298);
      context.stroke();
      context.fillStyle = "#c3d9a508";
      context.beginPath();
      context.moveTo(...points[0]);
      context.lineTo(...points[1]);
      context.lineTo(...points[3]);
      context.lineTo(...points[2]);
      context.closePath();
      context.fill();
      context.strokeStyle = "#c4d1b15e";
      context.lineWidth = 2;
      context.beginPath();
      context.ellipse(240, 85, 18, 22, 0, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.moveTo(240, 108);
      context.lineTo(240, 116);
      context.stroke();
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
      for (const [a, b] of links) {
        context.strokeStyle = a % 2 === 0 ? "#cce696" : "#91cfbf";
        context.shadowColor = context.strokeStyle;
        context.shadowBlur = 7;
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(...points[a]);
        context.lineTo(...points[b]);
        context.stroke();
      }
      context.shadowBlur = 0;
      points.forEach(([x, y], index) => {
        context.beginPath();
        context.arc(x, y, 4.5, 0, Math.PI * 2);
        context.fillStyle = index % 2 === 0 ? "#ddf3ae" : "#b5e8dc";
        context.fill();
        context.strokeStyle = "#26382c";
        context.lineWidth = 1.6;
        context.stroke();
      });
      context.fillStyle = "#d0ddb768";
      context.font = "9px monospace";
      context.fillText("L", 174, 215);
      context.fillText("R", 301, 215);
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
      aria-label="示範坐姿空中踩踏的關節辨識動畫，非即時攝影機影像"
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

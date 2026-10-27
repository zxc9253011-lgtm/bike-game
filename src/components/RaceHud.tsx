import { Flag, Trophy } from "lucide-react";

export type RaceHudProps = {
  speeds: [number, number];
  distances: [number, number];
  targetMeters: number;
  running: boolean;
  countdown: number | null;
  result: null | { winner: 1 | 2 | "tie"; elapsed: number };
  hideStats?: boolean;
};

function nonNegative(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function formatTime(seconds: number) {
  const total = Math.floor(nonNegative(seconds));
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

export default function RaceHud({
  speeds,
  distances,
  targetMeters,
  running,
  countdown,
  result,
  hideStats = false,
}: RaceHudProps) {
  const safeTarget = Math.max(1, nonNegative(targetMeters));
  const safeDistances = distances.map(nonNegative);
  const lead = safeDistances[0] - safeDistances[1];
  const leadingPlayer = Math.abs(lead) < 0.1 ? null : lead > 0 ? 0 : 1;

  return (
    <>
      {!hideStats && (
        <div className="race-hud" aria-label="雙人競賽狀態">
          <div className="race-hud-heading">
            <span>
              <Flag size={13} aria-hidden="true" />
              {result
                ? "競賽完成"
                : countdown !== null
                  ? "準備出發"
                  : running
                    ? "競賽進行中"
                    : "雙人競賽"}
            </span>
            <span>終點 {safeTarget} 公尺</span>
          </div>
          <div className="race-player-grid">
            {([0, 1] as const).map((index) => {
              const progress = Math.min(
                100,
                (safeDistances[index] / safeTarget) * 100,
              );
              return (
                <div
                  key={index}
                  className={`race-player-card race-player-${index + 1}`}
                  data-player={index + 1}
                  aria-label={`玩家 ${index + 1} 狀態`}
                >
                  <div className="race-player-heading">
                    <span className="race-player-name">
                      <i aria-hidden="true" />
                      玩家 {index + 1}
                    </span>
                    {leadingPlayer === index && (
                      <span className="race-lead-label">領先</span>
                    )}
                  </div>
                  <div className="race-player-metrics">
                    <div className="race-player-speed">
                      <strong data-metric="speed">
                        {nonNegative(speeds[index]).toFixed(1)}
                      </strong>
                      <span>km/h</span>
                    </div>
                    <div className="race-player-distance">
                      <strong data-metric="distance">
                        {safeDistances[index].toFixed(0)}
                      </strong>
                      <span> / {safeTarget} 公尺</span>
                    </div>
                  </div>
                  <div
                    className="race-progress-track"
                    role="progressbar"
                    aria-label={`玩家 ${index + 1} 騎行進度`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    aria-valuetext={`${safeDistances[index].toFixed(0)} / ${safeTarget} 公尺`}
                  >
                    <span style={{ width: `${progress}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {countdown !== null && (
        <div className="race-countdown" role="status" aria-live="assertive">
          <span>準備好了嗎？</span>
          <strong>{countdown > 0 ? countdown : "出發！"}</strong>
          <span>左右交替，一起向前</span>
        </div>
      )}
      {result && (
        <div className="race-result-inline" role="status" aria-live="polite">
          <span className="race-result-icon">
            <Trophy size={24} aria-hidden="true" />
          </span>
          <div>
            <strong>
              {result.winner === "tie"
                ? "精彩平手！"
                : `玩家 ${result.winner} 獲勝！`}
            </strong>
            <span>
              完成時間 {formatTime(result.elapsed)} · 每一次踩踏都很棒
            </span>
          </div>
        </div>
      )}
    </>
  );
}

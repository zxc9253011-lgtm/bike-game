import { Bike, Flag, Footprints, UserRound, UsersRound } from "lucide-react";
import "./game-controls.css";

export type GameSetupProps = {
  exerciseMode: "seated" | "standing";
  onExerciseModeChange: (mode: "seated" | "standing") => void;
  playerCount: 1 | 2;
  onPlayerCountChange: (count: 1 | 2) => void;
  raceMeters: number;
  onRaceMetersChange: (meters: number) => void;
  locked: boolean;
  compact?: boolean;
};

const raceDistances = [50, 100, 250, 500];

export default function GameSetup({
  exerciseMode,
  onExerciseModeChange,
  playerCount,
  onPlayerCountChange,
  raceMeters,
  onRaceMetersChange,
  locked,
  compact = false,
}: GameSetupProps) {
  const exerciseHint =
    exerciseMode === "standing"
      ? "左右交替，膝蓋抬到髖部高度才計分"
      : "坐穩椅子，雙腳交替踩踏";

  if (compact) {
    return (
      <div
        className="game-setup game-setup-compact"
        aria-label="畫面內遊戲設定"
      >
        <label className="game-setup-compact-field">
          <span>運動模式</span>
          <select
            aria-label="畫面內運動模式"
            value={exerciseMode}
            disabled={locked}
            onChange={(event) =>
              onExerciseModeChange(event.target.value as "seated" | "standing")
            }
          >
            <option value="seated">坐姿踩踏</option>
            <option value="standing">站姿高抬膝</option>
          </select>
        </label>
        <label className="game-setup-compact-field">
          <span>騎行玩法</span>
          <select
            aria-label="畫面內騎行玩法"
            value={playerCount}
            disabled={locked}
            onChange={(event) =>
              onPlayerCountChange(Number(event.target.value) as 1 | 2)
            }
          >
            <option value={1}>單人漫遊</option>
            <option value={2}>雙人競賽</option>
          </select>
        </label>
        {playerCount === 2 && (
          <label className="game-setup-compact-field">
            <span>競賽距離</span>
            <select
              aria-label="畫面內競賽距離"
              value={raceMeters}
              disabled={locked}
              onChange={(event) =>
                onRaceMetersChange(Number(event.target.value))
              }
            >
              {raceDistances.map((meters) => (
                <option key={meters} value={meters}>
                  {meters} 公尺
                </option>
              ))}
            </select>
          </label>
        )}
        <p className="game-setup-compact-hint">{exerciseHint}</p>
      </div>
    );
  }

  return (
    <section className="game-setup" aria-label="遊戲設定">
      <div className="game-setup-field">
        <span className="game-setup-label">運動模式</span>
        <div className="game-segmented" role="group" aria-label="運動模式">
          <button
            type="button"
            aria-pressed={exerciseMode === "seated"}
            disabled={locked}
            onClick={() => onExerciseModeChange("seated")}
          >
            <Bike size={17} aria-hidden="true" />
            坐姿踩踏
          </button>
          <button
            type="button"
            aria-pressed={exerciseMode === "standing"}
            disabled={locked}
            onClick={() => onExerciseModeChange("standing")}
          >
            <Footprints size={17} aria-hidden="true" />
            站姿高抬膝
          </button>
        </div>
        <p className="game-setup-hint">{exerciseHint}</p>
      </div>
      <div className="game-setup-field">
        <span className="game-setup-label">騎行玩法</span>
        <div className="game-segmented" role="group" aria-label="騎行玩法">
          <button
            type="button"
            aria-pressed={playerCount === 1}
            disabled={locked}
            onClick={() => onPlayerCountChange(1)}
          >
            <UserRound size={17} aria-hidden="true" />
            單人漫遊
          </button>
          <button
            type="button"
            aria-pressed={playerCount === 2}
            disabled={locked}
            onClick={() => onPlayerCountChange(2)}
          >
            <UsersRound size={17} aria-hidden="true" />
            雙人競賽
          </button>
        </div>
        <p className="game-setup-hint">
          {playerCount === 2
            ? "兩人共用一個鏡頭，依畫面左右分區"
            : "照自己的步調，享受沿途風景"}
        </p>
      </div>
      {playerCount === 2 && (
        <label className="game-setup-field game-distance-field">
          <span className="game-setup-label">
            <Flag size={13} aria-hidden="true" />
            競賽距離
          </span>
          <select
            aria-label="競賽距離"
            value={raceMeters}
            disabled={locked}
            onChange={(event) => onRaceMetersChange(Number(event.target.value))}
          >
            {raceDistances.map((meters) => (
              <option key={meters} value={meters}>
                {meters} 公尺
              </option>
            ))}
          </select>
          <span className="game-setup-hint">先抵達終點者獲勝</span>
        </label>
      )}
    </section>
  );
}

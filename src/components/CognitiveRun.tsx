import {
  ArrowLeft,
  ArrowRight,
  Bomb,
  Brain,
  Coins,
  Hand,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import {
  cognitiveRow,
  coinLabels,
  type CognitiveState,
  type CognitiveSummary,
  type CoinKind,
  type Lane,
} from "../lib/cognitiveRun";
import "./cognitive-run.css";

export type CognitiveRunSetupProps = {
  enabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
  locked: boolean;
};

export type CognitiveRunHudProps = {
  state: CognitiveState;
  playerCount: 1 | 2;
  onLaneChange: (player: 0 | 1, lane: Lane) => void;
  active: boolean;
  controlsEnabled?: boolean;
};

export type CognitiveRunResultsProps = {
  summaries: [CognitiveSummary, CognitiveSummary];
  playerCount: 1 | 2;
};

function number(value: number): number {
  return Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
}

function CoinMark({ kind }: { kind: CoinKind }) {
  return (
    <span className={`cognitive-coin-mark is-${kind}`} aria-hidden="true">
      {kind === "star" ? <Star size={18} /> : <Leaf size={18} />}
    </span>
  );
}

export function CognitiveRunSetup({
  enabled,
  onEnabledChange,
  locked,
}: CognitiveRunSetupProps) {
  return (
    <section className="cognitive-setup" aria-label="跑步專注小遊戲設定">
      <div className="cognitive-setup-heading">
        <span className="cognitive-setup-icon">
          <Brain size={22} />
        </span>
        <div>
          <h2>收金幣・避炸彈</h2>
          <p>邊踏步，邊練習觀察與選擇</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-label="專注小遊戲"
          aria-checked={enabled}
          disabled={locked}
          className="cognitive-switch"
          onClick={() => onEnabledChange(!enabled)}
        >
          <span aria-hidden="true" />
          {enabled ? "已開啟" : "已關閉"}
        </button>
      </div>
      {enabled && (
        <div className="cognitive-setup-details">
          <div className="cognitive-rule-icons">
            <span>
              <CoinMark kind="star" />
              星星金幣
            </span>
            <span>
              <CoinMark kind="leaf" />
              葉子幣
            </span>
            <span className="cognitive-bomb-label">
              <Bomb size={18} />
              避開炸彈
            </span>
          </div>
          <p>記住這輪的目標，只收指定圖案的金幣；每 4 排會換一次目標。</p>
          <p className="cognitive-control-help">
            <Hand size={15} aria-hidden="true" />
            人留在原地踏步，抬左／右手換道，或按畫面選道按鈕。不用身體側移。
          </p>
          <p className="cognitive-key-help">
            玩家 1：← ↓ → 或 A / S / D　·　玩家 2：J / K / L
          </p>
          <small>
            慢慢選也可以，停下踏步就能暫停接近物件。碰到炸彈仍可繼續，分數不倒扣。
          </small>
        </div>
      )}
    </section>
  );
}

export function CognitiveRunHud({
  state,
  playerCount,
  onLaneChange,
  active,
  controlsEnabled = true,
}: CognitiveRunHudProps) {
  const indices = playerCount === 2 ? ([0, 1] as const) : ([0] as const);
  return (
    <div
      className={`cognitive-hud${active ? " is-active" : ""}${playerCount === 2 ? " is-dual" : ""}`}
    >
      <div className="cognitive-targets" aria-label="金幣與炸彈任務">
        <div className="cognitive-targets-heading">
          <span>
            <Brain size={13} aria-hidden="true" />
            專注任務
          </span>
          <span>
            <Bomb size={12} aria-hidden="true" />
            每排都要避開炸彈
          </span>
        </div>
        <div className="cognitive-target-grid">
          {indices.map((index) => {
            const player = state[index];
            const row = cognitiveRow(player.nextRow, index);
            const accuracy = player.choices
              ? Math.round((player.coins / player.choices) * 100)
              : null;
            return (
              <section
                key={index}
                className={`cognitive-player-card player-${index + 1}`}
                data-cognitive-player={index + 1}
                data-lane={player.lane}
                data-next-row={player.nextRow}
                aria-label={`玩家 ${index + 1} 專注任務`}
              >
                <div className="cognitive-player-heading">
                  <span>
                    <i />
                    玩家 {index + 1}
                  </span>
                  <span>
                    {player.nextRow > 0 && player.nextRow % 4 === 0
                      ? "目標換囉"
                      : "這輪請收"}
                  </span>
                </div>
                <div
                  className="cognitive-current-target"
                  data-cognitive-target={row.target}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <CoinMark kind={row.target} />
                  <strong>{coinLabels[row.target]}</strong>
                </div>
                <div className="cognitive-stats">
                  <span>
                    <strong data-cognitive-metric="score">
                      {number(player.score)}
                    </strong>
                    <small>分數</small>
                  </span>
                  <span>
                    <strong data-cognitive-metric="coins">
                      {number(player.coins)}
                    </strong>
                    <small>收對幣</small>
                  </span>
                  <span>
                    <strong data-cognitive-metric="avoided">
                      {number(player.avoided)}
                    </strong>
                    <small>避炸彈</small>
                  </span>
                  <span>
                    <strong data-cognitive-metric="bomb-hits">
                      {number(player.bombHits)}
                    </strong>
                    <small>碰炸彈</small>
                  </span>
                </div>
                <div className="cognitive-accuracy">
                  {accuracy === null ? (
                    "還沒選擇，慢慢來"
                  ) : (
                    <>
                      選對率{" "}
                      <span data-cognitive-metric="accuracy">{accuracy}</span>%
                    </>
                  )}
                </div>
                <p
                  className={`cognitive-feedback${player.lastEvent ? ` is-${player.lastEvent.result}` : ""}`}
                  role="status"
                  title={
                    player.lastEvent?.message ||
                    "看清最近一排，選擇目標金幣所在的道。"
                  }
                >
                  {player.lastEvent?.message ||
                    "看清最近一排，選對金幣所在的道。"}
                </p>
              </section>
            );
          })}
        </div>
      </div>
      <div className="cognitive-controls" aria-label="跑步換道控制">
        {indices.map((index) => (
          <div
            className={`cognitive-lane-panel player-${index + 1}`}
            key={index}
          >
            <div className="cognitive-lane-heading">
              <strong>
                <i />
                玩家 {index + 1} 選道
              </strong>
              <span>{index === 0 ? "← ↓ → / A S D" : "J K L"}</span>
            </div>
            <div
              className="cognitive-lane-buttons"
              role="group"
              aria-label={`玩家 ${index + 1} 換道`}
            >
              {([-1, 0, 1] as const).map((lane) => (
                <button
                  type="button"
                  key={lane}
                  aria-label={`玩家 ${index + 1} ${lane === -1 ? "左道" : lane === 0 ? "中道" : "右道"}`}
                  aria-pressed={state[index].lane === lane}
                  disabled={!controlsEnabled}
                  onClick={() => onLaneChange(index, lane)}
                >
                  {lane === -1 ? (
                    <ArrowLeft size={17} aria-hidden="true" />
                  ) : lane === 1 ? (
                    <ArrowRight size={17} aria-hidden="true" />
                  ) : (
                    <span className="cognitive-center-dot" aria-hidden="true" />
                  )}
                  {lane === -1 ? "左邊" : lane === 0 ? "中間" : "右邊"}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CognitiveRunResults({
  summaries,
  playerCount,
}: CognitiveRunResultsProps) {
  const visible = summaries.slice(0, playerCount);
  return (
    <section className="cognitive-results" aria-label="專注小遊戲成果">
      <h3>
        <Sparkles size={17} aria-hidden="true" />
        專注小遊戲成果
      </h3>
      <div className="cognitive-result-grid">
        {visible.map((summary, index) => (
          <div
            key={index}
            className={`cognitive-result-card player-${index + 1}`}
            data-cognitive-result-player={index + 1}
          >
            <strong className="cognitive-result-player">
              <i />
              玩家 {index + 1}
              <span>{number(summary.score)} 分</span>
            </strong>
            <dl>
              <div>
                <dt>
                  <Coins size={14} />
                  收對金幣
                </dt>
                <dd>{number(summary.coins)} 枚</dd>
              </div>
              <div>
                <dt>
                  <ShieldCheck size={14} />
                  避開炸彈
                </dt>
                <dd>{number(summary.avoided)} 次</dd>
              </div>
              <div>
                <dt>
                  <Bomb size={14} />
                  碰到炸彈
                </dt>
                <dd>{number(summary.bombHits)} 次</dd>
              </div>
              <div>
                <dt>選對目標</dt>
                <dd>
                  {summary.accuracy === null ||
                  !Number.isFinite(summary.accuracy)
                    ? "尚無選擇"
                    : `${Math.min(100, number(summary.accuracy))}%`}
                </dd>
              </div>
              <div>
                <dt>非目標金幣</dt>
                <dd>{number(summary.wrongCoins)} 枚</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <p>觀察目標、記住規則，每一次選擇都是練習。</p>
    </section>
  );
}

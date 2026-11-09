import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Expand,
  Hand,
  History,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Swords,
  Timer,
  Trophy,
  X,
} from "lucide-react";
import PoseCamera, { type PlayerAnalysis } from "./PoseCamera";
import BoxingScene, { type BoxingScenePlayer } from "./BoxingScene";
import {
  advanceBoxingMatch,
  createBoxingMatch,
  finishBoxingMatch,
  type BoxingAction,
  type BoxingMatch,
  type BoxingReading,
  type BoxingSide,
} from "../lib/boxing";
import "./boxing-game.css";

type Source = "demo" | "camera";
type Pair<T> = [T, T];
type BoxingRecord = {
  date: string;
  seconds: number;
  duration: number;
  scores: Pair<number>;
  hp: Pair<number>;
  punches: Pair<number>;
  hits: Pair<number>;
  blocks: Pair<number>;
  winner: 1 | 2 | "tie";
  reason: string;
};
const STORAGE_KEY = "forest-pedal-boxing-matches";
const emptyReading = (): BoxingReading => ({
  tracking: false,
  guarding: false,
  punch: null,
  punches: 0,
  feedback: "請讓肩膀、手肘與雙手入鏡",
  quality: 0,
});
const idleActor = (): BoxingScenePlayer => ({
  guarding: false,
  punchId: 0,
  punchSide: null,
  hitId: 0,
});
const winnerText = (winner: 1 | 2 | "tie") =>
  winner === "tie" ? "兩位玩家平手！" : `玩家 ${winner} 獲勝`;
const clock = (seconds: number) => {
  const whole = Math.ceil(Math.max(0, seconds));
  return `${String(Math.floor(whole / 60)).padStart(2, "0")}:${String(whole % 60).padStart(2, "0")}`;
};
function readHistory(): BoxingRecord[] {
  try {
    const records: unknown = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]",
    );
    return Array.isArray(records)
      ? records
          .filter(
            (record): record is BoxingRecord =>
              !!record &&
              typeof record.date === "string" &&
              Number.isFinite(Date.parse(record.date)) &&
              Number.isFinite(record.seconds) &&
              record.seconds >= 0 &&
              [1, 2, "tie"].includes(record.winner) &&
              [
                record.scores,
                record.hp,
                record.punches,
                record.hits,
                record.blocks,
              ].every(
                (values) =>
                  Array.isArray(values) &&
                  values.length === 2 &&
                  values.every(
                    (value: unknown) =>
                      typeof value === "number" &&
                      Number.isFinite(value) &&
                      value >= 0,
                  ),
              ),
          )
          .slice(0, 30)
      : [];
  } catch {
    return [];
  }
}

export default function BoxingGame({ onExit }: { onExit: () => void }) {
  const [source, setSource] = useState<Source>("demo");
  const [duration, setDuration] = useState(60);
  const [match, setMatch] = useState(() => createBoxingMatch(60));
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [readings, setReadings] = useState<Pair<BoxingReading>>([
    emptyReading(),
    emptyReading(),
  ]);
  const [demoGuards, setDemoGuards] = useState<Pair<boolean>>([false, false]);
  const [resetKey, setResetKey] = useState(0);
  const [cameraStatus, setCameraStatus] = useState("demo");
  const [fullscreen, setFullscreen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [history, setHistory] = useState(readHistory);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const host = useRef<HTMLElement>(null);
  const matchRef = useRef(match);
  const runningRef = useRef(false);
  const sourceRef = useRef(source);
  sourceRef.current = source;
  const readingRef = useRef<Pair<BoxingReading>>([
    emptyReading(),
    emptyReading(),
  ]);
  const lastSeen = useRef<Pair<number>>([0, 0]);
  const freshness = useRef<Pair<number>>([3500, 3500]);
  const guardsRef = useRef<Pair<boolean>>([false, false]);
  const pending = useRef<Pair<BoxingSide | null>>([null, null]);
  const actorsRef = useRef<Pair<BoxingScenePlayer>>([idleActor(), idleActor()]);
  const saved = useRef(false);
  const noop = useCallback(() => undefined, []);
  const clearActions = useCallback(() => {
    pending.current = [null, null];
    guardsRef.current = [false, false];
    setDemoGuards([false, false]);
    readingRef.current = readingRef.current.map((reading) => ({
      ...reading,
      guarding: false,
      punch: null,
    })) as Pair<BoxingReading>;
    setReadings(readingRef.current);
  }, []);
  const stop = useCallback(() => {
    runningRef.current = false;
    setRunning(false);
    setCountdown(null);
    clearActions();
  }, [clearActions]);
  const commit = useCallback(
    (next: BoxingMatch) => {
      const previous = matchRef.current;
      if (
        next.lastExchange &&
        next.lastExchange.id !== previous.lastExchange?.id
      ) {
        const exchange = next.lastExchange;
        for (const player of [0, 1] as const) {
          if (exchange.punches[player]) {
            actorsRef.current[player].punchId += 1;
            actorsRef.current[player].punchSide = exchange.punches[player];
          }
          if (exchange.landed[player === 0 ? 1 : 0])
            actorsRef.current[player].hitId += 1;
        }
      }
      matchRef.current = next;
      setMatch(next);
      if (next.result) stop();
    },
    [stop],
  );

  const onBoxing = useCallback((player: 0 | 1, reading: BoxingReading) => {
    if (sourceRef.current !== "camera") return;
    const now = performance.now();
    if (lastSeen.current[player] > 0)
      freshness.current[player] = Math.min(
        6000,
        Math.max(1800, (now - lastSeen.current[player]) * 2.5),
      );
    lastSeen.current[player] = now;
    const live = {
      ...reading,
      guarding: runningRef.current && reading.tracking && reading.guarding,
      punch: runningRef.current && reading.tracking ? reading.punch : null,
    };
    readingRef.current = [...readingRef.current] as Pair<BoxingReading>;
    readingRef.current[player] = live;
    setReadings(readingRef.current);
    if (!live.tracking) pending.current = [null, null];
    else if (live.punch && runningRef.current)
      pending.current[player] = live.punch;
  }, []);
  const onPlayers = useCallback((players: Pair<PlayerAnalysis>) => {
    if (sourceRef.current !== "camera") return;
    let changed = false;
    const next = [...readingRef.current] as Pair<BoxingReading>;
    for (const player of [0, 1] as const) {
      if (!players[player].tracking && next[player].tracking) {
        next[player] = {
          ...next[player],
          tracking: false,
          guarding: false,
          punch: null,
          feedback: players[player].feedback,
        };
        changed = true;
      }
    }
    if (changed) {
      pending.current = [null, null];
      readingRef.current = next;
      setReadings(next);
    }
  }, []);

  useEffect(() => {
    if (!running) return;
    let previous = performance.now();
    const interval = window.setInterval(() => {
      if (!runningRef.current) return;
      const now = performance.now();
      const delta = Math.max(0, (now - previous) / 1000);
      previous = now;
      if (sourceRef.current === "camera") {
        let changed = false;
        const freshReadings = [...readingRef.current] as Pair<BoxingReading>;
        for (const player of [0, 1] as const) {
          if (
            freshReadings[player].tracking &&
            now - lastSeen.current[player] > freshness.current[player]
          ) {
            freshReadings[player] = {
              ...freshReadings[player],
              tracking: false,
              guarding: false,
              punch: null,
              feedback: "分析暫停，請讓肩膀與雙手清楚入鏡",
            };
            changed = true;
          }
        }
        if (changed) {
          pending.current = [null, null];
          readingRef.current = freshReadings;
          setReadings(freshReadings);
        }
      }
      const actions = ([0, 1] as const).map((player): BoxingAction => {
        const valid =
          sourceRef.current === "demo" ||
          (readingRef.current[player].tracking &&
            now - lastSeen.current[player] <= freshness.current[player]);
        return {
          tracked: valid,
          guarding:
            valid &&
            (sourceRef.current === "demo"
              ? guardsRef.current[player]
              : readingRef.current[player].guarding),
          punch: valid ? pending.current[player] : null,
        };
      }) as Pair<BoxingAction>;
      pending.current = [null, null];
      // The clock and the same two-person snapshot resolve together. A punch
      // never survives pause, tracking loss, or the end-of-round gong.
      commit(advanceBoxingMatch(matchRef.current, delta, actions));
    }, 100);
    return () => window.clearInterval(interval);
  }, [running, commit]);
  useEffect(() => {
    if (countdown === null) return;
    const timeout = window.setTimeout(() => {
      if (countdown > 1) setCountdown(countdown - 1);
      else {
        setCountdown(null);
        const ready =
          sourceRef.current === "demo" ||
          readingRef.current.every(
            (reading, player) =>
              reading.tracking &&
              performance.now() - lastSeen.current[player] <=
                freshness.current[player],
          );
        if (ready) {
          clearActions();
          runningRef.current = true;
          setRunning(true);
        } else setNotice("請讓兩位玩家的肩膀、手肘與雙手入鏡，再開始。");
      }
    }, 1000);
    return () => window.clearTimeout(timeout);
  }, [countdown, clearActions]);
  useEffect(() => {
    if (source === "camera" && cameraStatus === "error") {
      stop();
      setNotice("攝影機已中斷，重新連線後可繼續。");
    }
  }, [source, cameraStatus, stop]);
  useEffect(() => {
    if (!match.result || saved.current) return;
    saved.current = true;
    const record: BoxingRecord = {
      date: new Date().toISOString(),
      seconds: match.elapsed,
      duration: match.duration,
      scores: [...match.scores],
      hp: [...match.hp],
      punches: [...match.punches],
      hits: [...match.hits],
      blocks: [...match.blocks],
      winner: match.result.winner,
      reason: match.result.reason,
    };
    const records = [record, ...readHistory()].slice(0, 30);
    setHistory(records);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch {
      setNotice("本局成績已顯示，瀏覽器目前無法儲存紀錄。");
    }
  }, [match]);
  useEffect(() => {
    const change = () =>
      setFullscreen(document.fullscreenElement === host.current);
    document.addEventListener("fullscreenchange", change);
    return () => document.removeEventListener("fullscreenchange", change);
  }, []);
  useEffect(() => {
    if (source === "camera")
      host.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [source]);
  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 5000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const punch = useCallback((player: 0 | 1, side: BoxingSide) => {
    if (
      sourceRef.current !== "demo" ||
      !runningRef.current ||
      guardsRef.current[player]
    )
      return;
    pending.current[player] = side;
  }, []);
  const guard = useCallback((player: 0 | 1, value: boolean) => {
    if (sourceRef.current !== "demo" || !runningRef.current) return;
    guardsRef.current = [...guardsRef.current] as Pair<boolean>;
    guardsRef.current[player] = value;
    setDemoGuards(guardsRef.current);
    if (value) pending.current[player] = null;
  }, []);
  useEffect(() => {
    const keys: Record<string, [0 | 1, BoxingSide]> = {
      a: [0, "left"],
      d: [0, "right"],
      j: [1, "left"],
      l: [1, "right"],
    };
    const keydown = (event: KeyboardEvent) => {
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        historyOpen ||
        sourceRef.current !== "demo" ||
        (event.target instanceof Element &&
          event.target.closest("input, select, textarea"))
      )
        return;
      const key = event.key.toLowerCase();
      if (!(key in keys) && key !== "s" && key !== "k") return;
      event.preventDefault();
      if (event.repeat) return;
      if (key === "s" || key === "k") guard(key === "s" ? 0 : 1, true);
      else punch(...keys[key]);
    };
    const keyup = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "s" || key === "k") guard(key === "s" ? 0 : 1, false);
    };
    const blur = () => {
      pending.current = [null, null];
      guardsRef.current = [false, false];
      setDemoGuards([false, false]);
    };
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
      window.removeEventListener("blur", blur);
    };
  }, [punch, guard, historyOpen]);
  useEffect(() => {
    if (historyOpen) stop();
  }, [historyOpen, stop]);
  useEffect(() => {
    const hide = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", hide);
    return () => document.removeEventListener("visibilitychange", hide);
  }, [stop]);
  useEffect(
    () => () => {
      runningRef.current = false;
      pending.current = [null, null];
    },
    [],
  );

  function resetRound(nextDuration = duration) {
    stop();
    saved.current = false;
    const next = createBoxingMatch(nextDuration);
    matchRef.current = next;
    setMatch(next);
    actorsRef.current = [idleActor(), idleActor()];
    lastSeen.current = [0, 0];
    freshness.current = [3500, 3500];
    readingRef.current = [emptyReading(), emptyReading()];
    setReadings(readingRef.current);
    setResetKey((key) => key + 1);
    setNotice("");
  }
  const canStart =
    source === "demo" ||
    readings.every(
      (reading, player) =>
        reading.tracking &&
        performance.now() - lastSeen.current[player] <=
          freshness.current[player],
    );
  const locked = running || countdown !== null;
  function toggle() {
    if (locked) {
      stop();
      return;
    }
    if (match.result) resetRound();
    if (!canStart) {
      setNotice("請讓兩位玩家各站鏡頭一側，肩膀到雙手完整入鏡。");
      return;
    }
    clearActions();
    setCountdown(3);
  }
  async function toggleFullscreen() {
    if (expanded) {
      setExpanded(false);
      return;
    }
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (host.current?.requestFullscreen)
        await host.current.requestFullscreen();
      else setExpanded(true);
    } catch {
      setExpanded((value) => !value);
    }
  }
  const activeGuards: Pair<boolean> = ([0, 1] as const).map(
    (player) =>
      running &&
      (source === "demo"
        ? demoGuards[player]
        : readings[player].tracking && readings[player].guarding),
  ) as Pair<boolean>;
  const actors: Pair<BoxingScenePlayer> = actorsRef.current.map(
    (actor, index) => ({ ...actor, guarding: activeGuards[index] }),
  ) as Pair<BoxingScenePlayer>;
  const remaining = Math.max(0, match.duration - match.elapsed);
  const lastExchange = match.lastExchange;
  const actionMessage = lastExchange?.blocked.some(Boolean)
    ? "交叉防守成功！抓住出拳與防守的節奏。"
    : lastExchange?.landed.some(Boolean)
      ? "漂亮出拳！收回手，準備下一次。"
      : "出拳攻擊 · 雙手交叉在胸前防守";

  return (
    <main
      className="boxing-game"
      data-mode={source}
      data-running={running}
      data-elapsed={match.elapsed.toFixed(3)}
      data-duration={match.duration}
    >
      <header className="boxing-page-header">
        <button
          className="boxing-back"
          onClick={() => {
            stop();
            onExit();
          }}
        >
          <ArrowLeft size={17} />
          返回騎行與跑步
        </button>
        <span>
          <Swords size={20} />
          森森拳擊・雙人擂台
        </span>
        <button
          className="boxing-history-button"
          onClick={() => {
            stop();
            setHistoryOpen(true);
          }}
        >
          <History size={16} />
          拳擊紀錄
        </button>
      </header>
      <div className="boxing-intro">
        <span>面向鏡頭，一起上場</span>
        <h1>雙人拳擊比賽</h1>
        <p>
          你們在原地對空出拳，角色在擂台面對面交手。雙手交叉在胸前，就能擋下對方的攻擊。
        </p>
      </div>
      <section className="boxing-source-bar" aria-label="拳擊遊戲設定">
        <div className="boxing-source-switch">
          <button
            aria-pressed={source === "demo"}
            disabled={locked}
            onClick={() => {
              if (source !== "demo") {
                resetRound();
                setSource("demo");
              }
            }}
          >
            <Play size={16} />
            先試玩拳擊
          </button>
          <button
            aria-pressed={source === "camera"}
            disabled={locked}
            onClick={() => {
              if (source !== "camera") {
                resetRound();
                setSource("camera");
              }
            }}
          >
            <Camera size={16} />
            使用攝影機
          </button>
        </div>
        <label>
          <Timer size={16} />
          回合時間
          <select
            aria-label="拳擊回合時間"
            value={duration}
            disabled={locked}
            onChange={(event) => {
              const seconds = Number(event.target.value);
              setDuration(seconds);
              resetRound(seconds);
            }}
          >
            {[60, 90, 120].map((seconds) => (
              <option key={seconds} value={seconds}>
                {seconds} 秒
              </option>
            ))}
          </select>
        </label>
        <span>雙人同場 · 原地活動 · 上半身辨識</span>
      </section>

      <section
        ref={host}
        className={`boxing-stage${expanded ? " boxing-stage-expanded" : ""}`}
        aria-label="3D 雙人拳擊擂台"
      >
        <BoxingScene
          running={running}
          players={actors}
          finished={!!match.result}
          resetKey={resetKey}
        />
        <div className="boxing-stage-title">
          <span>
            <Sparkles size={14} />
            晨光盃拳擊賽
          </span>
          <strong>BOXING ARENA</strong>
        </div>
        <button
          className="boxing-expand"
          aria-label="拳擊全螢幕"
          onClick={toggleFullscreen}
        >
          {fullscreen || expanded ? <X size={17} /> : <Expand size={17} />}
        </button>
        <div className="boxing-scoreboard" aria-label="雙人拳擊狀態">
          {([0, 1] as const).map((player) => (
            <div
              key={player}
              className={`boxing-player-card boxing-player-${player + 1}`}
              data-boxing-player={player + 1}
              data-score={match.scores[player]}
              data-hp={match.hp[player]}
              data-guarding={activeGuards[player]}
              data-tracking={source === "demo" || readings[player].tracking}
              data-punches={match.punches[player]}
              data-hits={match.hits[player]}
              data-blocks={match.blocks[player]}
            >
              <div className="boxing-player-heading">
                <span>
                  <i />
                  玩家 {player + 1}
                </span>
                <b>
                  {activeGuards[player] ? (
                    <>
                      <ShieldCheck size={13} />
                      防守中
                    </>
                  ) : (
                    "準備出拳"
                  )}
                </b>
              </div>
              <div className="boxing-player-score">
                <strong>{match.scores[player]}</strong>
                <span>分</span>
                <em>活力 {match.hp[player]} / 100</em>
              </div>
              <div
                className="boxing-health"
                role="progressbar"
                aria-label={`玩家 ${player + 1} 活力`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={match.hp[player]}
              >
                <span style={{ width: `${match.hp[player]}%` }} />
              </div>
              <small>
                出拳 {match.punches[player]} · 命中 {match.hits[player]} · 擋下{" "}
                {match.blocks[player]}
              </small>
            </div>
          ))}
          <div className="boxing-clock">
            <Timer size={14} />
            <strong>{clock(remaining)}</strong>
            <span>
              {match.result
                ? "本回合結束"
                : countdown !== null
                  ? "準備上場"
                  : running
                    ? "比賽進行中"
                    : "雙人同場"}
            </span>
          </div>
        </div>
        <aside className="boxing-camera" aria-label="拳擊人體偵測視窗">
          <div className="boxing-camera-heading">
            <Camera size={14} />
            <strong>人體偵測</strong>
            <span>{source === "demo" ? "示範" : "即時"}</span>
          </div>
          <div className="boxing-camera-viewport">
            <PoseCamera
              mode={source}
              running={running}
              demoCadence={0}
              demoCadence2={0}
              playerCount={2}
              exerciseMode="boxing"
              resetKey={resetKey}
              onCadence={noop}
              onTracking={setCameraStatus}
              onPlayers={onPlayers}
              onBoxing={onBoxing}
            />
          </div>
          <p>
            {source === "demo"
              ? "示範標點，請用下方按鈕試玩"
              : "兩人分站鏡頭中線兩側，拍到肩膀與雙手"}
          </p>
        </aside>
        <div className="boxing-announcer" role="status">
          {notice ||
            (countdown !== null
              ? "兩位回正、放鬆雙手，準備上場"
              : match.result
                ? "謝謝兩位的精彩對決"
                : actionMessage)}
        </div>
        {!match.result && (
          <div className="boxing-action-panels">
            {([0, 1] as const).map((player) => (
              <div
                key={player}
                className={`boxing-action-panel boxing-action-player-${player + 1}`}
              >
                <strong>
                  玩家 {player + 1}
                  <span>
                    {source === "demo"
                      ? player === 0
                        ? "A / D 出拳 · 按住 S 防守"
                        : "J / L 出拳 · 按住 K 防守"
                      : readings[player].tracking
                        ? activeGuards[player]
                          ? "交叉防守中"
                          : "上半身已辨識"
                        : "請調整入鏡位置"}
                  </span>
                </strong>
                {source === "demo" ? (
                  <div className="boxing-demo-buttons">
                    <button
                      aria-label={`玩家 ${player + 1} 左拳`}
                      disabled={!running || activeGuards[player]}
                      onClick={() => punch(player, "left")}
                    >
                      <Hand size={15} />
                      左拳
                    </button>
                    <button
                      aria-label={`玩家 ${player + 1} 交叉防守`}
                      aria-pressed={activeGuards[player]}
                      disabled={!running}
                      onClick={() => guard(player, !guardsRef.current[player])}
                    >
                      <ShieldCheck size={15} />
                      交叉防守
                    </button>
                    <button
                      aria-label={`玩家 ${player + 1} 右拳`}
                      disabled={!running || activeGuards[player]}
                      onClick={() => punch(player, "right")}
                    >
                      <Hand size={15} />
                      右拳
                    </button>
                  </div>
                ) : (
                  <p>{readings[player].feedback}</p>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="boxing-match-controls">
          <button
            className={`boxing-start${running ? " is-running" : ""}`}
            disabled={!locked && !match.result && !canStart}
            aria-label={
              running
                ? "暫停拳擊比賽"
                : match.elapsed > 0 && !match.result
                  ? "繼續拳擊比賽"
                  : "開始拳擊比賽"
            }
            onClick={toggle}
          >
            {locked ? <Pause size={17} /> : <Play size={17} />}
            {countdown !== null
              ? "取消倒數"
              : running
                ? "暫停一下"
                : match.elapsed > 0 && !match.result
                  ? "繼續比賽"
                  : "開始拳擊比賽"}
          </button>
          <button
            className="boxing-reset"
            aria-label="重新一局"
            onClick={() => resetRound()}
          >
            <RotateCcw size={16} />
            重新一局
          </button>
          <button
            className="boxing-finish"
            aria-label="結束拳擊比賽"
            disabled={!!match.result || (match.elapsed === 0 && !running)}
            onClick={() => commit(finishBoxingMatch(matchRef.current))}
          >
            結束比賽
          </button>
        </div>
        {countdown !== null && (
          <div className="boxing-countdown" role="status" aria-live="assertive">
            <span>兩位準備好了嗎？</span>
            <strong>{countdown}</strong>
            <span>面向鏡頭，在原地對空出拳</span>
          </div>
        )}
        {match.result && (
          <section className="boxing-result" role="status" aria-live="polite">
            <Trophy size={32} />
            <span>本回合完成</span>
            <h2>{winnerText(match.result.winner)}</h2>
            <p>
              {match.scores[0]} : {match.scores[1]} 分 ·{" "}
              {Math.round(match.elapsed)} 秒
            </p>
            <div>
              {([0, 1] as const).map((player) => (
                <p key={player}>
                  <b>玩家 {player + 1}</b>
                  <span>
                    出拳 {match.punches[player]} · 命中 {match.hits[player]} ·
                    擋下 {match.blocks[player]}
                  </span>
                </p>
              ))}
            </div>
            <small>成績保存在目前的瀏覽器</small>
          </section>
        )}
        {historyOpen && (
          <div
            className="boxing-history-overlay"
            onClick={() => setHistoryOpen(false)}
          >
            <section
              className="boxing-history-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="拳擊紀錄"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                aria-label="關閉拳擊紀錄"
                onClick={() => setHistoryOpen(false)}
              >
                <X size={19} />
              </button>
              <h2>
                <History size={20} />
                拳擊紀錄
              </h2>
              {history.length === 0 ? (
                <p>完成一場比賽，就能留下第一筆紀錄。</p>
              ) : (
                <ol>
                  {history.map((record, index) => (
                    <li key={`${record.date}-${index}`}>
                      <strong>{winnerText(record.winner)}</strong>
                      <span>
                        {record.scores[0]} : {record.scores[1]} 分 ·{" "}
                        {Math.round(record.seconds)} 秒
                      </span>
                      <time dateTime={record.date}>
                        {new Date(record.date).toLocaleString("zh-TW")}
                      </time>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </div>
        )}
      </section>
      <section className="boxing-instructions" aria-label="拳擊操作說明">
        <article>
          <span>01</span>
          <h2>面向鏡頭</h2>
          <p>兩人分站畫面左右，肩膀、手肘與雙手入鏡。坐姿或站姿都能參加。</p>
        </article>
        <article>
          <span>02</span>
          <h2>出拳攻擊</h2>
          <p>
            在原地對空向前出拳，再收回手。一次有效出拳算一次攻擊，命中得 10 分。
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>交叉雙手防守</h2>
          <p>
            雙手在胸前交叉，可擋下對方的出拳。成功防守得 3 分，時間到比得分。
          </p>
        </article>
      </section>
    </main>
  );
}

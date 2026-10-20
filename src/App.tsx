import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  AudioLines,
  Bike,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Compass,
  Expand,
  Flag,
  Footprints,
  Leaf,
  MapPin,
  Mountain,
  Pause,
  Play,
  RotateCcw,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Volume2,
  VolumeX,
  Waves,
  Wind,
  X,
} from "lucide-react";
import RideScene from "./components/RideScene";
import PoseCamera from "./components/PoseCamera";
import { assetUrl } from "./lib/assets";

type RouteId = "forest" | "coast" | "sunset";
type Tracking = "demo" | "loading" | "tracking" | "positioning" | "error";
type RideRecord = {
  date: string;
  seconds: number;
  distance: number;
  route: string;
};
const routes: {
  id: RouteId;
  title: string;
  subtitle: string;
  label: string;
  icon: typeof Trees;
  image: string;
}[] = [
  {
    id: "forest",
    title: "晨光森林",
    subtitle: "穿過綠意，和微風打聲招呼",
    label: "平緩・森林",
    icon: Trees,
    image: assetUrl("routes/forest.svg"),
  },
  {
    id: "coast",
    title: "蔚藍海岸",
    subtitle: "沿著海岸線，把心情放晴",
    label: "平緩・海岸",
    icon: Waves,
    image: assetUrl("routes/coast.svg"),
  },
  {
    id: "sunset",
    title: "暖陽山丘",
    subtitle: "追著金色陽光，慢慢向前",
    label: "平緩・山丘",
    icon: Mountain,
    image: assetUrl("routes/sunset.svg"),
  },
];
const formatTime = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
function readRecords(): RideRecord[] {
  try {
    const data: unknown = JSON.parse(
      localStorage.getItem("forest-pedal-rides") || "[]",
    );
    return Array.isArray(data)
      ? data
          .filter(
            (item): item is RideRecord =>
              !!item &&
              typeof item.route === "string" &&
              typeof item.date === "string" &&
              Number.isFinite(Date.parse(item.date)) &&
              Number.isFinite(item.seconds) &&
              item.seconds >= 0 &&
              Number.isFinite(item.distance) &&
              item.distance >= 0,
          )
          .slice(0, 100)
      : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [route, setRoute] = useState<RouteId>("forest");
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"demo" | "camera">("demo");
  const [demoCadence, setDemoCadence] = useState(42);
  const [cameraCadence, setCameraCadence] = useState(0);
  const [tracking, setTracking] = useState<Tracking>("demo");
  const [elapsed, setElapsed] = useState(0);
  const [distance, setDistance] = useState(0);
  const [goal, setGoal] = useState(15);
  const [modal, setModal] = useState<
    "guide" | "records" | "finish" | "settings" | null
  >(null);
  const [records, setRecords] = useState<RideRecord[]>(readRecords);
  const [muted, setMuted] = useState(true);
  const [soundReady, setSoundReady] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState("");
  const sceneRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const selected = routes.find((r) => r.id === route)!;
  const cadence = running
    ? mode === "demo"
      ? demoCadence
      : tracking === "tracking"
        ? cameraCadence
        : 0
    : 0;
  const speed = Math.min(30, cadence * 0.28);
  const progress = Math.min(1, elapsed / (goal * 60));
  const onCadence = useCallback((rpm: number) => setCameraCadence(rpm), []);
  const onTracking = useCallback((value: Tracking) => setTracking(value), []);

  useEffect(() => {
    if (!running) return;
    let last = performance.now();
    const timer = setInterval(() => {
      const now = performance.now();
      const delta = Math.min((now - last) / 1000, 2);
      last = now;
      setElapsed((value) => value + delta);
      setDistance((value) => value + (speed / 3600) * delta);
    }, 200);
    return () => clearInterval(timer);
  }, [running, speed]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 4000);
    return () => clearTimeout(timer);
  }, [toast]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(null);
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, []);
  useEffect(() => {
    if (!modal) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const elements = [
        ...document.querySelectorAll<HTMLElement>(
          ".modal button:not(:disabled), .modal select, .modal a[href], .modal input",
        ),
      ];
      const first = elements[0],
        last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", trapFocus);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [modal]);
  useEffect(() => {
    if (gainRef.current && audioRef.current)
      gainRef.current.gain.setTargetAtTime(
        !muted && running ? 0.08 : 0,
        audioRef.current.currentTime,
        0.3,
      );
  }, [muted, running, soundReady]);
  useEffect(
    () => () => {
      void audioRef.current?.close();
    },
    [],
  );

  async function toggleSound() {
    if (!audioRef.current) {
      const context = new AudioContext();
      audioRef.current = context;
      const buffer = context.createBuffer(
        1,
        context.sampleRate * 3,
        context.sampleRate,
      );
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let index = 0; index < data.length; index++) {
        last = (last + (Math.random() * 2 - 1) * 0.025) / 1.02;
        data[index] = last * 3;
      }
      const source = context.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      const filter = context.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 700;
      const gain = context.createGain();
      gain.gain.value = 0;
      gainRef.current = gain;
      source.connect(filter).connect(gain).connect(context.destination);
      source.start();
      setSoundReady(true);
    }
    await audioRef.current.resume();
    setMuted((value) => !value);
  }

  function finishRide() {
    setRunning(false);
    if (elapsed > 0 && !saved) {
      const record = {
        date: new Date().toISOString(),
        seconds: Math.floor(elapsed),
        distance,
        route: selected.title,
      };
      const next = [record, ...records].slice(0, 100);
      setRecords(next);
      setSaved(true);
      try {
        localStorage.setItem("forest-pedal-rides", JSON.stringify(next));
      } catch {
        setToast("瀏覽器無法儲存紀錄，本次成績仍可在畫面查看。");
      }
      setModal("finish");
    } else if (saved) setModal("finish");
  }
  function resetRide() {
    setRunning(false);
    setElapsed(0);
    setDistance(0);
    setCameraCadence(0);
    setSaved(false);
    setModal(null);
  }
  function toggleRide() {
    if (saved) {
      setElapsed(0);
      setDistance(0);
      setSaved(false);
    }
    setRunning((value) => !value);
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await sceneRef.current?.requestFullscreen();
    } catch {
      setToast("此瀏覽器不支援全螢幕，可使用瀏覽器的放大功能。");
    }
  }
  function switchMode(value: "demo" | "camera") {
    setMode(value);
    setCameraCadence(0);
  }

  return (
    <div className={`app-shell${largeText ? " large-text" : ""}`}>
      <header className="site-header">
        <a href="#" className="brand" aria-label="森森騎旅首頁">
          <span className="brand-mark">
            <Sprout size={27} strokeWidth={1.8} />
            <span className="brand-wheel left" />
            <span className="brand-wheel right" />
          </span>
          <span>
            <strong>
              森森騎旅<span className="brand-dot">.</span>
            </strong>
            <small>Little pedals. Big adventures.</small>
          </span>
        </a>
        <nav aria-label="主要導覽">
          <button
            className="nav-item active"
            onClick={() => {
              setModal(null);
              document
                .getElementById("ride")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Compass size={17} />
            騎行天地
          </button>
          <button className="nav-item" onClick={() => setModal("records")}>
            <Route size={17} />
            我的紀錄
          </button>
          <button className="nav-item" onClick={() => setModal("guide")}>
            <CircleHelp size={17} />
            使用說明
          </button>
        </nav>
        <div className="header-right">
          <span className="local-badge">
            <span />
            自在動一動，好心情一整天
          </span>
          <button
            className="icon-button settings-button"
            aria-label="騎行設定"
            onClick={() => setModal("settings")}
          >
            <Settings2 size={19} />
          </button>
        </div>
      </header>

      <main id="ride" className="main-content">
        <section className="page-heading">
          <div>
            <div className="eyebrow">
              <span />
              YOUR EVERYDAY LITTLE ADVENTURE
            </div>
            <h1>
              坐著動，也能去遠方<span>。</span>
            </h1>
            <p>跟著自己的節奏踩踏，讓每一小步，都有好風景。</p>
          </div>
          <div className="heading-note">
            <span className="note-icon">
              <Leaf size={21} />
            </span>
            <div>
              <strong>不必趕路，享受這一刻</strong>
              <span>今天的旅程，從舒服開始。</span>
            </div>
          </div>
        </section>

        <div className="dashboard-grid">
          <div className="main-column">
            <section
              className={`ride-card route-${route}`}
              ref={sceneRef}
              aria-label="3D 騎行遊戲"
            >
              <RideScene speed={speed} running={running} route={route} />
              <div className="scene-top">
                <div className="scene-location">
                  <span className="scene-kicker">
                    <MapPin size={12} />
                    你的此刻，正在自然裡
                  </span>
                  <h2>{selected.title}</h2>
                  <span className="scene-route-label">
                    <selected.icon size={13} />
                    {selected.label}
                    <span className="scene-dot">·</span>自由騎行
                  </span>
                </div>
                <div className="scene-tools">
                  <span className="weather-pill">
                    <Sun size={17} />
                    {route === "sunset"
                      ? "暖陽相伴"
                      : route === "coast"
                        ? "海風正好"
                        : "陽光正好"}
                  </span>
                  <button
                    onClick={() => void fullscreen()}
                    className="scene-icon"
                    aria-label="切換全螢幕"
                  >
                    <Expand size={17} />
                  </button>
                </div>
              </div>
              <div className="scene-status">
                <span className={running ? "status-dot live" : "status-dot"} />
                {mode === "demo"
                  ? "示範模式"
                  : tracking === "tracking"
                    ? "動作已連線"
                    : tracking === "loading"
                      ? "攝影機準備中"
                      : "攝影機模式"}
                <span className="status-separator" />
                {running
                  ? cadence > 0
                    ? "微風與你同行"
                    : "等你開始踩踏"
                  : "準備好就出發"}
              </div>
              <div className="scene-bottom">
                <div className="ride-metrics">
                  <div>
                    <span>
                      <Route size={14} />
                      騎行距離
                    </span>
                    <strong>
                      {distance.toFixed(2)}
                      <small>km</small>
                    </strong>
                  </div>
                  <span className="metric-divider" />
                  <div>
                    <span>
                      <Clock3 size={14} />
                      騎行時間
                    </span>
                    <strong>{formatTime(elapsed)}</strong>
                  </div>
                </div>
                <button
                  className={`start-button ${running ? "is-running" : ""}`}
                  onClick={toggleRide}
                >
                  {running ? (
                    <Pause size={19} fill="currentColor" />
                  ) : (
                    <Play size={19} fill="currentColor" />
                  )}
                  {running
                    ? "暫停一下"
                    : saved
                      ? "再騎一趟"
                      : elapsed > 0
                        ? "繼續騎行"
                        : "開始騎行"}
                  {!running && <ArrowRight size={18} />}
                </button>
                <button
                  className="end-ride"
                  disabled={elapsed === 0}
                  onClick={finishRide}
                >
                  <Flag size={15} />
                  結束旅程
                </button>
              </div>
            </section>

            <section className="routes-section">
              <div className="section-title">
                <div>
                  <span className="small-icon">
                    <Compass size={18} />
                  </span>
                  <h2>下一站，想去哪裡？</h2>
                </div>
                <span>3 條風景・隨心切換</span>
              </div>
              <div className="route-grid">
                {routes.map((item, index) => (
                  <button
                    key={item.id}
                    className={`route-card ${route === item.id ? "selected" : ""}`}
                    onClick={() => {
                      setRoute(item.id);
                      if (route !== item.id)
                        setToast(`已切換至${item.title}，旅程繼續累計。`);
                    }}
                    aria-pressed={route === item.id}
                  >
                    <div
                      className="route-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <span className="route-number">0{index + 1}</span>
                      <span className="route-selection">
                        {route === item.id ? (
                          <>
                            <Check size={11} />
                            正在探索
                          </>
                        ) : (
                          <>
                            <item.icon size={11} />
                            {item.label.split("・")[1]}
                          </>
                        )}
                      </span>
                    </div>
                    <div className="route-copy">
                      <h3>
                        {item.title}
                        <span>
                          {route === item.id ? (
                            <span className="selected-dot" />
                          ) : (
                            <ChevronRight size={15} />
                          )}
                        </span>
                      </h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
            <div className="gentle-reminder">
              <span className="reminder-icon">
                <ShieldCheck size={21} />
              </span>
              <div>
                <strong>動得舒服，比動得快更重要。</strong>
                <p>
                  請坐穩有靠背的椅子，依自己的體力輕鬆踩踏；若感到不適，隨時停下休息。
                </p>
              </div>
              <Leaf className="reminder-leaf" size={35} strokeWidth={1.1} />
            </div>
          </div>

          <aside className="side-column">
            <section className="pace-card">
              <div className="card-heading">
                <h2>
                  <AudioLines size={17} />
                  你的踩踏節奏
                </h2>
                <span className="live-label">
                  <span />
                  {mode === "demo" ? "DEMO" : "LIVE"}
                </span>
              </div>
              <div className="speed-reading">
                <strong>{speed.toFixed(1)}</strong>
                <span>km/h</span>
                <span className="speed-illustration">
                  <Wind size={27} />
                  <Bike size={43} strokeWidth={1.2} />
                </span>
              </div>
              <div className="pace-divider" />
              <div className="cadence-reading">
                <span>
                  <Footprints size={16} />
                  踩踏頻率
                </span>
                <strong>
                  {Math.round(cadence)}
                  <small>rpm</small>
                </strong>
              </div>
              <div className="pace-bars" aria-hidden="true">
                {Array.from({ length: 28 }, (_, index) => (
                  <i
                    key={index}
                    className={
                      index < Math.round((cadence / 90) * 28) ? "filled" : ""
                    }
                  />
                ))}
              </div>
              <p className="pace-caption">
                {!running
                  ? "按下開始，跟著你的節奏出發"
                  : cadence === 0
                    ? "輕輕抬腿，開始你的踩踏"
                    : cadence > 70
                      ? "很有活力！記得保持呼吸順暢"
                      : "很棒，保持舒服的節奏就好"}
                <Leaf size={13} />
              </p>
            </section>

            <section className="camera-card">
              <div className="card-heading">
                <h2>
                  <Camera size={17} />
                  動作小視窗
                </h2>
                <span
                  className={`tracking-label ${tracking === "tracking" ? "tracked" : ""}`}
                >
                  <span />
                  {mode === "demo"
                    ? "示範中"
                    : {
                        loading: "啟動中",
                        tracking: "已辨識",
                        positioning: "請調整位置",
                        error: "尚未連線",
                        demo: "準備中",
                      }[tracking]}
                </span>
              </div>
              <div className="mode-tabs" role="group" aria-label="選擇動作模式">
                <button
                  className={mode === "demo" ? "active" : ""}
                  onClick={() => switchMode("demo")}
                >
                  <Sparkles size={13} />
                  先試玩看看
                </button>
                <button
                  className={mode === "camera" ? "active" : ""}
                  onClick={() => switchMode("camera")}
                >
                  <Camera size={13} />
                  使用攝影機
                </button>
              </div>
              <div className="camera-viewport">
                <PoseCamera
                  mode={mode}
                  running={running}
                  demoCadence={demoCadence}
                  onCadence={onCadence}
                  onTracking={onTracking}
                />
              </div>
              {mode === "demo" ? (
                <div className="demo-control">
                  <div>
                    <label htmlFor="demo-speed">試試不同的踩踏速度</label>
                    <span>
                      {demoCadence}
                      <small>rpm</small>
                    </span>
                  </div>
                  <input
                    id="demo-speed"
                    type="range"
                    min="0"
                    max="90"
                    step="1"
                    value={demoCadence}
                    onChange={(event) =>
                      setDemoCadence(Number(event.target.value))
                    }
                    aria-label="示範踩踏速度"
                  />
                  <div className="range-labels">
                    <span>慢慢踩</span>
                    <span>活力踩</span>
                  </div>
                </div>
              ) : (
                <div className="camera-instruction">
                  <span className="privacy-icon">
                    <ShieldCheck size={17} />
                  </span>
                  <p>
                    鏡頭需拍到肩膀、髖部、膝蓋和腳踝。
                    <br />
                    <small>影像僅在裝置分析，不錄影、不上傳。</small>
                  </p>
                </div>
              )}
            </section>

            <section className="goal-card">
              <div className="goal-copy">
                <span className="goal-eyebrow">
                  <Flag size={13} />
                  今天的小目標
                </span>
                <h3>
                  給自己一點
                  <br />
                  動起來的時間。
                </h3>
                <label className="goal-select">
                  <select
                    value={goal}
                    onChange={(event) => setGoal(Number(event.target.value))}
                    aria-label="騎行時間目標"
                  >
                    {[5, 10, 15, 20, 30].map((n) => (
                      <option key={n} value={n}>
                        {n} 分鐘輕鬆騎
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={12} />
                </label>
              </div>
              <div className="goal-ring">
                <svg viewBox="0 0 100 100">
                  <circle className="ring-track" cx="50" cy="50" r="42" />
                  <circle
                    className="ring-progress"
                    cx="50"
                    cy="50"
                    r="42"
                    strokeDasharray={`${progress * 264} 264`}
                  />
                </svg>
                <div>
                  {progress >= 1 ? (
                    <Check size={26} />
                  ) : (
                    <>
                      <strong>
                        {Math.floor(elapsed / 60)}
                        <small> / {goal}</small>
                      </strong>
                      <span>分鐘</span>
                    </>
                  )}
                </div>
              </div>
              {progress >= 1 && (
                <span className="goal-complete">今天的小目標達成了！</span>
              )}
            </section>
          </aside>
        </div>

        <footer className="site-footer">
          <span>
            <Sprout size={13} />
            每一次踩踏，都是照顧自己的開始。
          </span>
          <div>
            <span>為每一個年紀，留一段好風景</span>
            <span className="footer-dot">·</span>
            <button onClick={() => setModal("settings")}>
              騎行設定
              <Settings2 size={12} />
            </button>
            <button onClick={() => setModal("guide")}>
              需要幫忙嗎？
              <ArrowRight size={12} />
            </button>
          </div>
        </footer>
      </main>
      <button
        className={`sound-button ${!muted ? "sound-on" : ""}`}
        onClick={() => void toggleSound()}
        aria-label={muted ? "開啟自然環境音" : "關閉自然環境音"}
        title={muted ? "開啟自然環境音" : "關閉自然環境音"}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        <span>自然環境音{muted ? "已關閉" : "已開啟"}</span>
      </button>
      {toast && (
        <div className="toast" role="status">
          <Check size={17} />
          {toast}
        </div>
      )}

      {modal && (
        <div
          className="modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setModal(null);
          }}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close icon-button"
              autoFocus
              onClick={() => setModal(null)}
              aria-label="關閉視窗"
            >
              <X size={20} />
            </button>
            {modal === "guide" && (
              <>
                <span className="modal-badge">
                  <Leaf size={22} />
                </span>
                <p className="eyebrow">A LITTLE GUIDE FOR YOUR RIDE</p>
                <h2 id="modal-title">準備好，輕鬆出發。</h2>
                <p className="modal-intro">不用穿上車鞋，也能騎進好風景。</p>
                <ol className="guide-steps">
                  <li>
                    <span>01</span>
                    <div>
                      <h3>坐穩，留一點空間</h3>
                      <p>
                        選有靠背、不滑動的穩固椅子，坐好並讓雙腿有安全的活動空間。可請家人在旁協助。
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <h3>打開攝影機，讓雙腿入鏡</h3>
                      <p>
                        將鏡頭放在前方，完整拍到肩膀、髖部、膝蓋及腳踝。允許攝影機後，綠色標點會跟著身體移動。需要
                        HTTPS 或本機環境。
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <h3>按下開始，輪流抬腿踩踏</h3>
                      <p>
                        像踩空中腳踏車一樣交替抬腿。持續踩踏數圈後會顯示速度；踩得越快，騎得越快。停下後車子也會慢慢停下。
                      </p>
                    </div>
                  </li>
                </ol>
                <div className="guide-note">
                  <ShieldCheck size={19} />
                  <p>
                    以自己的舒適程度為準，不需追求速度。如有疼痛、頭暈或喘不過氣，請停止並尋求協助。本遊戲不作醫療評估。
                  </p>
                </div>
                <button
                  className="primary-button"
                  onClick={() => setModal(null)}
                >
                  知道了，準備出發
                  <ArrowRight size={17} />
                </button>
              </>
            )}
            {modal === "records" && (
              <>
                <span className="modal-badge">
                  <Route size={23} />
                </span>
                <p className="eyebrow">EVERY LITTLE RIDE COUNTS</p>
                <h2 id="modal-title">我的騎行足跡</h2>
                <p className="modal-intro">
                  每一段旅程，都值得記下來。紀錄儲存於此瀏覽器。
                </p>
                {records.length ? (
                  <>
                    <div className="records-totals">
                      <div>
                        <strong>{records.length}</strong>
                        <span>趟旅程</span>
                      </div>
                      <div>
                        <strong>
                          {records
                            .reduce((sum, item) => sum + item.distance, 0)
                            .toFixed(2)}
                        </strong>
                        <span>總公里</span>
                      </div>
                      <div>
                        <strong>
                          {Math.floor(
                            records.reduce(
                              (sum, item) => sum + item.seconds,
                              0,
                            ) / 60,
                          )}
                        </strong>
                        <span>總分鐘</span>
                      </div>
                    </div>
                    <div className="records-list">
                      {records.map((item, index) => (
                        <div
                          className="record-row"
                          key={`${item.date}-${index}`}
                        >
                          <span className="record-icon">
                            <Bike size={21} />
                          </span>
                          <div>
                            <strong>{item.route}</strong>
                            <span>
                              {new Date(item.date).toLocaleString("zh-TW", {
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          <div>
                            <strong>{item.distance.toFixed(2)} km</strong>
                            <span>{formatTime(item.seconds)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="record-footnote">
                      示範與攝影機模式的旅程皆會保存在此。距離為遊戲中的虛擬里程。
                    </p>
                  </>
                ) : (
                  <div className="empty-records">
                    <Bike size={48} strokeWidth={1.2} />
                    <h3>第一段好風景，正等著你。</h3>
                    <p>完成騎行後按「結束旅程」，足跡就會留在這裡。</p>
                    <button
                      className="primary-button"
                      onClick={() => setModal(null)}
                    >
                      去騎一會兒
                      <ArrowRight size={17} />
                    </button>
                  </div>
                )}
              </>
            )}
            {modal === "finish" && (
              <>
                <span className="modal-badge finish-badge">
                  <Flag size={25} />
                </span>
                <p className="eyebrow">YOU DID SOMETHING GOOD TODAY</p>
                <h2 id="modal-title">把這份好心情，帶回生活。</h2>
                <p className="modal-intro">
                  今天的你很棒，謝謝自己願意動一動。
                </p>
                <div className="finish-scene">
                  <Sprout size={65} strokeWidth={1.2} />
                  <span>旅程已儲存</span>
                </div>
                <div className="records-totals">
                  <div>
                    <strong>{distance.toFixed(2)}</strong>
                    <span>公里</span>
                  </div>
                  <div>
                    <strong>{formatTime(elapsed)}</strong>
                    <span>騎行時間</span>
                  </div>
                  <div>
                    <strong>{Math.round(progress * 100)}%</strong>
                    <span>目標完成</span>
                  </div>
                </div>
                <p className="finish-note">
                  喝口水，讓身體休息一下。
                  <br />
                  {mode === "demo"
                    ? "本次為示範騎行，里程為虛擬模擬。"
                    : "騎行距離為依踩踏節奏推估的遊戲里程。"}
                </p>
                <button className="primary-button" onClick={resetRide}>
                  <RotateCcw size={17} />
                  開始一段新旅程
                </button>
              </>
            )}
            {modal === "settings" && (
              <>
                <span className="modal-badge">
                  <Settings2 size={23} />
                </span>
                <p className="eyebrow">MAKE YOURSELF COMFORTABLE</p>
                <h2 id="modal-title">照你的步調就好。</h2>
                <div className="setting-row">
                  <div>
                    <h3>自然環境音</h3>
                    <p>騎行時，讓輕柔風聲陪伴你。</p>
                  </div>
                  <button
                    className={`toggle ${!muted ? "on" : ""}`}
                    role="switch"
                    aria-checked={!muted}
                    aria-label="自然環境音"
                    onClick={() => void toggleSound()}
                  >
                    <span />
                  </button>
                </div>
                <div className="setting-row">
                  <div>
                    <h3>友善大字模式</h3>
                    <p>放大主要操作與提示文字，看得更輕鬆。</p>
                  </div>
                  <button
                    className={`toggle ${largeText ? "on" : ""}`}
                    role="switch"
                    aria-checked={largeText}
                    aria-label="友善大字模式"
                    onClick={() => setLargeText((value) => !value)}
                  >
                    <span />
                  </button>
                </div>
                <div className="setting-row">
                  <div>
                    <h3>騎行目標</h3>
                    <p>目標達成後仍可繼續自由騎行。</p>
                  </div>
                  <select
                    value={goal}
                    onChange={(event) => setGoal(Number(event.target.value))}
                    aria-label="設定騎行目標"
                  >
                    {[5, 10, 15, 20, 30].map((n) => (
                      <option key={n} value={n}>
                        {n} 分鐘
                      </option>
                    ))}
                  </select>
                </div>
                <div className="guide-note">
                  <ShieldCheck size={19} />
                  <p>
                    攝影機影像在你的裝置即時分析，不會傳送至伺服器。切換回示範模式便會關閉攝影機。
                  </p>
                </div>
                <button
                  className="primary-button"
                  onClick={() => setModal(null)}
                >
                  設定完成
                  <Check size={17} />
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";

function GenerativeExperiment() {
  const [density, setDensity] = useState(5);
  const [seed, setSeed] = useState(0);
  const reset = () => { setDensity(5); setSeed((value) => value + 1); };
  return <article className="lab-card lab-generative">
    <div className="lab-card-head"><span className="mono">A / GENERATIVE DESIGN</span><span className="lab-live">LIVE</span></div>
    <div className="generative-canvas" key={seed} style={{ "--density": density } as React.CSSProperties} onPointerMove={(event) => {
      const box = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--gx", `${((event.clientX - box.left) / box.width) * 100}%`);
      event.currentTarget.style.setProperty("--gy", `${((event.clientY - box.top) / box.height) * 100}%`);
    }} aria-label="Pointer-reactive generative grid">
      <div className="generative-sphere" aria-hidden="true"><i /><b /></div><span className="generative-coord mono">X / Y / FIELD</span>
    </div>
    <p className="lab-description">A field of lines bends around your pointer. Change its rhythm.</p>
    <label className="lab-control"><span>Line density</span><input type="range" min="2" max="9" value={density} onChange={(event) => setDensity(Number(event.target.value))} /><output>{density}</output></label>
    <button className="lab-reset" onClick={reset}>Reset composition <span aria-hidden="true">↺</span></button>
  </article>;
}

function InterfaceExperiment() {
  const [quiet, setQuiet] = useState(false);
  const [alerts, setAlerts] = useState(true);
  const [saved, setSaved] = useState(false);
  const reset = () => { setQuiet(false); setAlerts(true); setSaved(false); };
  return <article className="lab-card lab-interface">
    <div className="lab-card-head"><span className="mono">B / INTERFACE PLAYGROUND</span><span className="lab-live">INTERACTIVE</span></div>
    <div className={`playground-window${quiet ? " is-quiet" : ""}`}>
      <div className="playground-top"><span className="playground-dots"><i /><i /><i /></span><span className="mono">STUDIO SETTINGS</span><span className="mono">⌘ / 04</span></div>
      <div className="playground-content"><div><p className="mono">PREFERENCES</p><h3>Shape your space.</h3></div>
        <label className="toggle-row"><span><strong>Quiet interface</strong><small>Reduce visual motion</small></span><input type="checkbox" checked={quiet} onChange={(event) => setQuiet(event.target.checked)} /><i aria-hidden="true" /></label>
        <label className="toggle-row"><span><strong>Project notes</strong><small>Show contextual details</small></span><input type="checkbox" checked={alerts} onChange={(event) => setAlerts(event.target.checked)} /><i aria-hidden="true" /></label>
        {alerts && <p className="playground-note" role="status">Your preferences are local to this demo.</p>}
        <button className={`playground-save${saved ? " is-saved" : ""}`} onClick={() => setSaved((value) => !value)}>{saved ? "Preferences saved" : "Save preferences"}<span aria-hidden="true">{saved ? "✓" : "↗"}</span></button>
      </div>
    </div>
    <p className="lab-description">Controls change real interface state. Try the toggles, then reset.</p>
    <button className="lab-reset" onClick={reset}>Reset controls <span aria-hidden="true">↺</span></button>
  </article>;
}

function GameExperiment() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(12);
  const [position, setPosition] = useState({ x: 61, y: 45 });

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setSeconds((value) => {
      if (value <= 1) { window.clearInterval(timer); setPlaying(false); return 0; }
      return value - 1;
    }), 1000);
    return () => window.clearInterval(timer);
  }, [playing]);

  const start = () => { setScore(0); setSeconds(12); setPlaying(true); };
  const reset = () => { setPlaying(false); setScore(0); setSeconds(12); setPosition({ x: 61, y: 45 }); };
  const hit = () => {
    if (!playing) return;
    setScore((value) => value + 1);
    setPosition({ x: 12 + Math.random() * 76, y: 14 + Math.random() * 65 });
  };

  return <article className="lab-card lab-game">
    <div className="lab-card-head"><span className="mono">C / GAME MECHANIC</span><span className="lab-live">{playing ? "ROUND LIVE" : "READY"}</span></div>
    <div className="game-board" aria-label="Tap the moving target during the twelve-second round">
      <div className="game-board-info mono"><span>HITS <b>{String(score).padStart(2, "0")}</b></span><span>TIME <b>{String(seconds).padStart(2, "0")}s</b></span></div>
      {playing ? <button className="game-target" style={{ left: `${position.x}%`, top: `${position.y}%` }} onClick={hit} aria-label="Hit the target">+</button> : <div className="game-start-state"><span aria-hidden="true">✳</span><p>{seconds === 0 ? `Round complete · ${score} hits` : "A short study in feedback."}</p><button onClick={start}>Start 12-second round <span aria-hidden="true">↗</span></button></div>}
    </div>
    <p className="lab-description">Find the target and tap it before the round ends. Each hit moves the target.</p>
    <button className="lab-reset" onClick={reset}>Reset round <span aria-hidden="true">↺</span></button>
  </article>;
}

function TypeExperiment() {
  const [text, setText] = useState("MAKE IT INTERACTIVE");
  const [spacing, setSpacing] = useState(0);
  const reset = () => { setText("MAKE IT INTERACTIVE"); setSpacing(0); };
  return <article className="lab-card lab-type">
    <div className="lab-card-head"><span className="mono">D / TYPE EXPERIMENT</span><span className="lab-live">TYPE TO SHAPE</span></div>
    <div className="type-specimen" style={{ "--type-spacing": `${spacing}px` } as React.CSSProperties}><span>{text || "TYPE SOMETHING"}</span><i aria-hidden="true" /></div>
    <label className="type-input-label">Your phrase<input maxLength={34} value={text} onChange={(event) => setText(event.target.value.toUpperCase())} /></label>
    <label className="lab-control"><span>Letter spacing</span><input type="range" min={-2} max={8} value={spacing} onChange={(event) => setSpacing(Number(event.target.value))} /><output>{spacing}</output></label>
    <button className="lab-reset" onClick={reset}>Reset type <span aria-hidden="true">↺</span></button>
  </article>;
}

export function InteractionLab() {
  return <section className="section lab-section" id="lab" aria-labelledby="lab-title">
    <div className="section-heading reveal"><div><p className="eyebrow"><span className="section-index mono">04 / 05</span> A SMALL INTERACTION LAB</p><h2 id="lab-title">Curiosity,<br /><em>in motion.</em></h2></div><p className="section-heading-note">Four small systems to touch, change, and reset. Not prototypes in disguise—each one responds to you.</p></div>
    <div className="lab-grid"><GenerativeExperiment /><InterfaceExperiment /><GameExperiment /><TypeExperiment /></div>
  </section>;
}

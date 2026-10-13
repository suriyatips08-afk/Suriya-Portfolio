export function HeroSection({
  onOpenPalette,
  introFinished,
}: {
  onOpenPalette: () => void;
  introFinished: boolean;
}) {
  return (
    <section
      className={`hero-section${introFinished ? " intro-complete" : ""}`}
      id="hero"
    >
      <div className="hero-topline">
        <p className="hero-topline-left mono">
          <span>DIGITAL DESIGNER</span>
          <i aria-hidden="true" />
          <span className="hero-topline-place">PUNE, INDIA</span>
        </p>
        <p className="hero-topline-right mono">
          GAME DESIGN <span aria-hidden="true">/</span> UI/UX{" "}
          <span aria-hidden="true">/</span> BRAND IDENTITY
        </p>
      </div>

      <div className="hero-center">
        <h1 className="hero-title" aria-label="Suriya">
          <span className="hero-title-line">
            SU<span className="hero-title-cut">R</span>IYA
          </span>
        </h1>
        <p className="hero-tagline">
          CRAFTING DIGITAL EXPERIENCES
          <br />
          <span>THAT FEEL ALIVE.</span>
        </p>
      </div>

      <div className="hero-horizon" aria-hidden="true">
        <span className="hero-horizon-aura" />
        <svg
          className="hero-horizon-svg"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          focusable="false"
        >
          <defs>
            <linearGradient id="hero-horizon-gradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#f1f1e8" stopOpacity="0.02" />
              <stop offset="28%" stopColor="#f1f1e8" stopOpacity="0.24" />
              <stop offset="45%" stopColor="#d6ff62" stopOpacity="0.72" />
              <stop offset="50%" stopColor="#efffa8" stopOpacity="1" />
              <stop offset="55%" stopColor="#d6ff62" stopOpacity="0.72" />
              <stop offset="72%" stopColor="#f1f1e8" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#f1f1e8" stopOpacity="0.02" />
            </linearGradient>
            <radialGradient id="hero-horizon-aura-gradient">
              <stop offset="0%" stopColor="#d6ff62" stopOpacity="0.23" />
              <stop offset="100%" stopColor="#d6ff62" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="hero-horizon-ray-gradient"
              x1="720"
              y1="65"
              x2="720"
              y2="126"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#d6ff62" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d6ff62" stopOpacity="0" />
            </linearGradient>
            <filter id="hero-horizon-blur" x="-40%" y="-200%" width="180%" height="500%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <ellipse
            cx="720"
            cy="64"
            rx="210"
            ry="58"
            fill="url(#hero-horizon-aura-gradient)"
          />
          <path
            className="hero-horizon-bloom"
            d="M -40 184 C 300 154 477 64 720 64 C 963 64 1140 154 1480 184"
            stroke="#d6ff62"
            filter="url(#hero-horizon-blur)"
          />
          <path
            className="hero-horizon-arc"
            d="M -40 184 C 300 154 477 64 720 64 C 963 64 1140 154 1480 184"
            stroke="url(#hero-horizon-gradient)"
          />
          <path
            className="hero-horizon-echo"
            d="M -40 202 Q 720 32 1480 202"
          />
          <line
            className="hero-horizon-ray"
            x1="720"
            y1="65"
            x2="720"
            y2="126"
            stroke="url(#hero-horizon-ray-gradient)"
          />
        </svg>
      </div>

      <div className="hero-foot">
        <div className="hero-foot-copy">
          <p className="hero-intro">
            I design digital experiences where intuitive interfaces, interactive
            systems, and compelling stories come together.
          </p>
          <div className="hero-foot-actions">
            <a className="hero-about-link mono" href="#about">
              ABOUT ME <span aria-hidden="true">↗</span>
            </a>
            <button
              className="hero-command"
              onClick={onOpenPalette}
              aria-label="Open command palette with Control or Command K"
            >
              <span className="command-key">⌘ K</span>
            </button>
          </div>
        </div>
        <a className="hero-scroll-cue mono" href="#work">
          <span className="hero-scroll-orb" aria-hidden="true">↓</span>
          <span>SCROLL<br />DOWN</span>
        </a>
        <a className="hero-explore-link mono" href="#work">
          <span className="hero-explore-rule" aria-hidden="true" />
          <span>EXPLORE MY WORK</span>
          <span className="hero-explore-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

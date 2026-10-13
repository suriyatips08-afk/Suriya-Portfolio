import { owner } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      className="hero-section landing-hero intro-complete"
      id="hero"
      aria-labelledby="landing-title"
    >
      <div className="landing-visual" aria-hidden="true">
        <div className="landing-visual-glow" />
        <svg
          className="landing-visual-art"
          viewBox="0 0 1672 941"
          preserveAspectRatio="none"
          focusable="false"
        >
          <defs>
            <radialGradient id="landing-halo" cx="70%" cy="53%" r="49%">
              <stop offset="0%" stopColor="#d6ff62" stopOpacity="0.24" />
              <stop offset="36%" stopColor="#b8d74e" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#d6ff62" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="landing-plane"
              x1="900"
              y1="90"
              x2="1550"
              y2="780"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#d1d6bd" stopOpacity="0.16" />
              <stop offset="38%" stopColor="#a6ae8e" stopOpacity="0.055" />
              <stop offset="100%" stopColor="#080908" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="landing-ribbon-stroke"
              x1="1490"
              y1="4"
              x2="875"
              y2="740"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f2f2e6" stopOpacity="0.05" />
              <stop offset="42%" stopColor="#d5ddbb" stopOpacity="0.28" />
              <stop offset="76%" stopColor="#d6ff62" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#d6ff62" stopOpacity="0.13" />
            </linearGradient>
            <linearGradient
              id="landing-return-stroke"
              x1="360"
              y1="930"
              x2="1570"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f1f1e8" stopOpacity="0.03" />
              <stop offset="52%" stopColor="#e6edcf" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#f1f1e8" stopOpacity="0.08" />
            </linearGradient>
            <filter id="landing-soft-glow" x="-35%" y="-35%" width="170%" height="170%">
              <feGaussianBlur stdDeviation="11" />
            </filter>
          </defs>
          <ellipse cx="1280" cy="465" rx="510" ry="300" fill="url(#landing-halo)" />
          <path
            className="landing-ribbon-plane"
            d="M 1515 -50 C 1460 116 1397 250 1298 344 C 1209 428 1100 463 995 531 C 903 590 858 649 872 698 C 892 765 978 778 1090 753 C 1302 706 1490 732 1700 812 L 1700 -50 Z"
            fill="url(#landing-plane)"
          />
          <path
            className="landing-ribbon-glow"
            d="M 1515 -50 C 1460 116 1397 250 1298 344 C 1209 428 1100 463 995 531 C 903 590 858 649 872 698 C 892 765 978 778 1090 753"
            filter="url(#landing-soft-glow)"
          />
          <path
            className="landing-ribbon-edge"
            d="M 1515 -50 C 1460 116 1397 250 1298 344 C 1209 428 1100 463 995 531 C 903 590 858 649 872 698 C 892 765 978 778 1090 753"
            stroke="url(#landing-ribbon-stroke)"
          />
          <path
            className="landing-return-glow"
            d="M 346 960 C 515 814 675 727 830 637 C 968 558 1086 508 1198 502 C 1367 493 1510 540 1690 629"
            filter="url(#landing-soft-glow)"
          />
          <path
            className="landing-return-edge"
            d="M 346 960 C 515 814 675 727 830 637 C 968 558 1086 508 1198 502 C 1367 493 1510 540 1690 629"
            stroke="url(#landing-return-stroke)"
          />
          <path
            className="landing-inner-contour"
            d="M 910 764 C 839 726 831 663 877 602 C 930 532 1038 474 1155 435 C 1305 385 1456 418 1600 493"
          />
        </svg>
      </div>

      <div className="landing-copy">
        <p className="landing-eyebrow mono">DIGITAL DESIGNER</p>
        <h1 className="landing-title" id="landing-title">
          SURIYA<span aria-hidden="true" className="landing-title-dot">.</span>
        </h1>
        <p className="landing-description">
          I design digital experiences where intuitive interfaces, interactive
          systems, and compelling stories come together.
        </p>
        <a className="landing-explore mono" href="#work">
          <span>EXPLORE MY WORK</span>
          <span aria-hidden="true" className="landing-explore-arrow">→</span>
        </a>
      </div>

      <div className="landing-chapter mono" aria-label="Home, section 1 of 5">
        <span>01</span>
        <i aria-hidden="true" />
        <small>/ 05</small>
      </div>

      <a className="hero-scroll-cue mono" href="#work">
        <span className="hero-scroll-rule" aria-hidden="true" />
        <span>SCROLL<br />TO EXPLORE</span>
      </a>

      <nav className="landing-socials" aria-label="Social profiles">
        <a href={owner.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          in
        </a>
        <a href={owner.behance} target="_blank" rel="noreferrer" aria-label="Behance portfolio">
          Bē
        </a>
      </nav>
    </section>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { useModalAccessibility } from "@/hooks/useModalAccessibility";
import { owner, projects } from "@/data/portfolio";

const base = import.meta.env.BASE_URL;
const sections = [
  { label: "Work", href: "#work", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "Lab", href: "#lab", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
] as const;

export function PortfolioHeader({
  onOpenPalette,
  onOpenProject,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  onOpenPalette: () => void;
  onOpenProject: (slug: string) => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}) {
  const [previewSlug, setPreviewSlug] = useState(projects[0].slug);
  const [activeSection, setActiveSection] = useState("#work");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (
      typeof document !== "undefined" &&
      document.documentElement.dataset.theme === "light"
    ) {
      return "light";
    }
    try {
      return window.localStorage.getItem("suriya-theme") === "light"
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const preview =
    projects.find(project => project.slug === previewSlug) ?? projects[0];
  const resumeHref = owner.resumePath
    ? `${base}${owner.resumePath}`
    : undefined;
  useEffect(() => {
    const targets = sections
      .map(item => document.getElementById(item.href.slice(1)))
      .filter((target): target is HTMLElement => target instanceof HTMLElement);
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      entries => {
        const current = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(`#${current.target.id}`);
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0, 0.25, 0.6] }
    );
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f3f3ef" : "#080b0b");
    try {
      window.localStorage.setItem("suriya-theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);
  useModalAccessibility(menuOpen, menuRef, onCloseMenu);
  const close = onCloseMenu;
  return (
    <>
      <header className="site-header" id="top">
        <a
          className="brand-lockup"
          href="#top"
          aria-label="Suriya Nateshkhanna, home"
        >
          <span className="brand-symbol" aria-hidden="true">
            <i />
            <b />
          </span>
          <span>
            SURIYA<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {sections.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? "is-current" : undefined}
              aria-current={activeSection === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-end">
          <p className="header-meta mono" aria-label="UI/UX, brand identity, interactive design">
            <span className="header-meta-rule" aria-hidden="true" />
            <span>
              UI/UX <i aria-hidden="true">·</i> BRAND IDENTITY <i aria-hidden="true">·</i> INTERACTIVE
            </span>
          </p>
          <div className="header-actions">
          <button
            className="command-trigger"
            onClick={onOpenPalette}
            aria-label="Open command palette"
          >
            <span className="mono">⌘ K</span>
          </button>
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={theme === "light"}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            onClick={() =>
              setTheme(current => (current === "light" ? "dark" : "light"))
            }
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
            <span className="mono">{theme === "light" ? "DARK" : "LIGHT"}</span>
          </button>
          <a
            className="resume-button"
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            Resume <span className="resume-pending">PDF ↗</span>
          </a>
          <button
            className={`menu-trigger${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={onToggleMenu}
          >
            <span />
            <span />
          </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className={`menu-overlay${menuOpen ? " is-open" : ""}`}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Full-screen navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        tabIndex={-1}
      >
        <div className="menu-overlay-top">
          <p className="mono">
            SURIYA NATESHKHANNA <span>·</span> INDEX
          </p>
          <button
            className="menu-close"
            data-overlay-autofocus
            onClick={close}
            aria-label="Close navigation"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="menu-overlay-body">
          <nav
            className="overlay-links"
            aria-label="Explore portfolio sections"
          >
            {sections.map(item => (
              <a key={item.href} href={item.href} onClick={close}>
                <span className="mono">{item.index}</span>
                <span>{item.label}</span>
                <span className="overlay-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
            <a
              className="overlay-resume"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              <span className="mono">06</span>
              <span>Resume</span>
              <small>Open PDF ↗</small>
            </a>
          </nav>
          <aside className="menu-preview" aria-label="Project preview">
            <p className="mono">SELECTED WORK / {preview.number}</p>
            <button
              className="menu-preview-image"
              onClick={() => {
                close();
                onOpenProject(preview.slug);
              }}
              aria-label={`Open ${preview.title} case study`}
            >
              <img src={`${base}${preview.image}`} alt="" />
              <span aria-hidden="true">↗</span>
            </button>
            <div className="menu-preview-caption">
              <strong>{preview.title}</strong>
              <span className="mono">{preview.type}</span>
            </div>
            <div
              className="preview-index"
              aria-label="Choose a project preview"
            >
              {projects.map(project => (
                <button
                  key={project.slug}
                  onFocus={() => setPreviewSlug(project.slug)}
                  onMouseEnter={() => setPreviewSlug(project.slug)}
                  onClick={() => {
                    close();
                    onOpenProject(project.slug);
                  }}
                  aria-label={`Open ${project.title}`}
                  aria-pressed={previewSlug === project.slug}
                >
                  {project.number}
                </button>
              ))}
            </div>
          </aside>
        </div>
        <div className="menu-overlay-bottom">
          <span className="mono">
            GAME DESIGN · UI/UX · VISUAL COMMUNICATION
          </span>
          <a href={`mailto:${owner.email}`}>{owner.email}</a>
        </div>
      </div>
    </>
  );
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onOpenProject: (slug: string) => void;
}

export function CommandPalette({
  open,
  onClose,
  onOpenProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLElement>(null);
  useModalAccessibility(open, paletteRef, onClose);

  const commands = useMemo(
    () => [
      {
        id: "work",
        label: "Go to selected work",
        kind: "SECTION",
        action: () => {
          document
            .querySelector("#work")
            ?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "about",
        label: "Go to about",
        kind: "SECTION",
        action: () => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "skills",
        label: "Explore skills",
        kind: "SECTION",
        action: () => {
          document
            .querySelector("#skills")
            ?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "lab",
        label: "Open interaction lab",
        kind: "SECTION",
        action: () => {
          document
            .querySelector("#lab")
            ?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "contact",
        label: "Get in touch",
        kind: "SECTION",
        action: () => {
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      ...projects.map(project => ({
        id: project.slug,
        label: `Open ${project.title}`,
        kind: "PROJECT",
        action: () => onOpenProject(project.slug),
      })),
    ],
    [onClose, onOpenProject]
  );

  const filtered = commands.filter(command =>
    `${command.label} ${command.kind}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="palette-backdrop"
      role="presentation"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={paletteRef}
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby="palette-title"
        tabIndex={-1}
      >
        <div className="palette-heading">
          <p className="mono" id="palette-title">
            COMMAND / EXPLORE
          </p>
          <button onClick={onClose} aria-label="Close command palette">
            ESC <span>×</span>
          </button>
        </div>
        <label className="sr-only" htmlFor="command-search">
          Search sections and projects
        </label>
        <input
          ref={inputRef}
          data-overlay-autofocus
          id="command-search"
          className="palette-input"
          placeholder="Where would you like to go?"
          value={query}
          onChange={event => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={event => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive(current => Math.min(current + 1, filtered.length - 1));
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive(current => Math.max(0, current - 1));
            }
            if (event.key === "Enter") {
              event.preventDefault();
              filtered[active]?.action();
            }
          }}
        />
        <div
          className="palette-results"
          role="listbox"
          aria-label="Available commands"
        >
          {filtered.length ? (
            filtered.map((command, index) => (
              <button
                key={command.id}
                role="option"
                aria-selected={active === index}
                className={active === index ? "is-active" : ""}
                onMouseEnter={() => setActive(index)}
                onClick={command.action}
              >
                <span>{command.label}</span>
                <span className="mono">{command.kind}</span>
              </button>
            ))
          ) : (
            <p className="palette-empty">No matching command.</p>
          )}
        </div>
        <p className="palette-foot mono">
          ↑ ↓ TO NAVIGATE <span>↵ TO OPEN</span> <span>ESC TO CLOSE</span>
        </p>
      </section>
    </div>
  );
}

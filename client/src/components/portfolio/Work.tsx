import { useEffect, useRef, useState } from "react";
import {
  filters,
  projects,
  type PortfolioProject,
  type ProjectFilter,
} from "@/data/portfolio";

const base = import.meta.env.BASE_URL;

export function WorkSection({
  onOpenProject,
}: {
  onOpenProject: (slug: string) => void;
}) {
  const [filter, setFilter] = useState<ProjectFilter>("ALL");
  const visible = projects.filter(
    project => filter === "ALL" || project.discipline === filter
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>(".project-grid .reveal")
        .forEach(node => node.classList.add("is-visible"));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filter]);

  return (
    <section
      className="section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">
            <span className="section-index mono">01 / 05</span> SELECTED WORK
          </p>
          <h2 id="work-title">
            Ideas, made
            <br />
            <em>tangible.</em>
          </h2>
        </div>
        <p className="section-heading-note">
          A collection of game design, UI/UX, visual communication, and
          cinematic projects. Open a project to explore the work.
        </p>
      </div>
      <div className="work-toolbar">
        <div
          className="filter-list"
          role="group"
          aria-label="Filter projects by discipline"
        >
          {filters.map(item => (
            <button
              key={item}
              className={`filter-chip${filter === item ? " is-selected" : ""}`}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mono work-count" aria-live="polite">
          {String(visible.length).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")} PROJECTS
        </p>
      </div>
      {visible.length ? (
        <div className="project-grid" aria-live="polite">
          {visible.map((project, index) => (
            <article
              className={`project-tile project-tile-${index + 1} reveal`}
              key={`${filter}-${project.slug}`}
            >
              <button
                className="project-open"
                onClick={() => onOpenProject(project.slug)}
                aria-label={`Open ${project.title} case study`}
              >
                <span className="project-image-wrap">
                  <img
                    src={`${base}${project.image}`}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-image-vignette" aria-hidden="true" />
                  <span className="project-open-mark" aria-hidden="true">
                    ↗
                  </span>
                  <span className="project-number mono">
                    {project.number} / 06
                  </span>
                </span>
                <span className="project-caption">
                  <span>
                    <strong>{project.title}</strong>
                    <small>{project.type}</small>
                  </span>
                  <span className="project-year mono">{project.year}</span>
                </span>
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-work" role="status">
          <span className="mono">NO PROJECT LISTED</span>
          <p>No selected project is currently listed in this discipline.</p>
        </div>
      )}
      <div className="work-index">
        <span className="mono">AN EDITORIAL INDEX</span>
        <div>
          {projects.map(project => (
            <button
              key={project.slug}
              onClick={() => onOpenProject(project.slug)}
            >
              {project.number}
              <span>{project.title}</span>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectDialog({
  project,
  onClose,
  onOpenProject,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenProject: (slug: string) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  if (!project) return null;
  const projectIndex = projects.findIndex(item => item.slug === project.slug);
  const previous =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];
  const supportingNotes = [
    {
      key: "research",
      label: "Research & references",
      value: project.caseStudy?.research,
    },
    {
      key: "iterations",
      label: "Explorations & iterations",
      value: project.caseStudy?.iterations,
    },
    {
      key: "prototypes",
      label: "Wireframes & prototypes",
      value: project.caseStudy?.prototypes,
    },
    {
      key: "outcomes",
      label: "Final outcomes",
      value: project.caseStudy?.outcomes,
    },
    {
      key: "learnings",
      label: "Learnings & reflections",
      value: project.caseStudy?.learnings,
    },
  ];

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      aria-labelledby="case-title"
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <span className="pointer-mark case-dialog-pointer" aria-hidden="true">
        <i />
        <b>VIEW</b>
      </span>
      <div className="case-dialog-inner">
        <div className="case-dialog-top">
          <p className="mono">CASE STUDY / {project.number}</p>
          <button
            className="dialog-close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close case study"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <header className="case-heading">
          <p className="eyebrow">
            {project.type}
            <span> · </span>
            {project.discipline}
          </p>
          <h2 id="case-title">{project.title}</h2>
          <p>{project.summary}</p>
        </header>
        <div className="case-media">
          {project.video ? (
            <video
              controls
              playsInline
              preload="none"
              poster={`${base}${project.image}`}
              aria-label={`${project.title} project video`}
            >
              <source src={`${base}${project.video}`} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          ) : (
            <img src={`${base}${project.image}`} alt={project.imageAlt} />
          )}
        </div>
        <div className="case-content-grid">
          <aside className="case-facts" aria-label="Project details">
            <p className="mono">PROJECT NOTES</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>Not supplied</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
            </dl>
          </aside>
          <div className="case-narrative">
            <section>
              <p className="mono">01 / THE CHALLENGE</p>
              <h3>What needed to work.</h3>
              <p>{project.challenge}</p>
            </section>
            <section>
              <p className="mono">02 / THE APPROACH</p>
              <h3>How the idea took shape.</h3>
              <p>{project.solution}</p>
            </section>
            <details className="case-details-extra">
              <summary>
                Research, prototypes &amp; outcomes{" "}
                <span aria-hidden="true">↗</span>
              </summary>
              <div className="case-details-extra-grid">
                {supportingNotes.map((note, index) => (
                  <section
                    className={note.value ? "" : "case-detail-placeholder"}
                    key={note.key}
                  >
                    <p className="mono">
                      {String(index + 3).padStart(2, "0")} /{" "}
                      {note.label.toUpperCase()}
                    </p>
                    <h3>{note.label}</h3>
                    <p>
                      {note.value ||
                        "Not supplied in the source material. Add verified project notes here before publishing."}
                    </p>
                  </section>
                ))}
              </div>
            </details>
            <p className="case-note">
              Project facts are drawn from the existing portfolio. Missing
              process material and duration details have not been inferred.
            </p>
            {project.externalUrl && (
              <a
                className="button button-outline"
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
              >
                {project.externalLabel ?? "View project"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
        {project.gallery?.length ? (
          <div className="case-gallery">
            <div className="case-gallery-heading">
              <p className="mono">SELECTED PROJECT IMAGES</p>
              <span className="mono">
                {String(project.gallery.length).padStart(2, "0")} FRAMES
              </span>
            </div>
            <div className="case-gallery-grid">
              {project.gallery.map(item => (
                <figure key={item.src}>
                  <img
                    src={`${base}${item.src}`}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </div>
        ) : null}
        <nav className="case-next-prev" aria-label="Case study navigation">
          <button onClick={() => onOpenProject(previous.slug)}>
            <span className="mono">← PREVIOUS</span>
            <strong>{previous.title}</strong>
          </button>
          <button onClick={() => onOpenProject(next.slug)}>
            <span className="mono">NEXT →</span>
            <strong>{next.title}</strong>
          </button>
        </nav>
      </div>
    </dialog>
  );
}

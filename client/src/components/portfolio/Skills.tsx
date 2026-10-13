import { useState } from "react";
import { disciplines, projects } from "@/data/portfolio";

export function SkillsSection({ onOpenProject }: { onOpenProject: (slug: string) => void }) {
  const [activeId, setActiveId] = useState(disciplines[0].id);
  const active = disciplines.find((discipline) => discipline.id === activeId) ?? disciplines[0];
  const relatedProjects = projects.filter((project) => active.projectSlugs.includes(project.slug));

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading reveal">
        <div><p className="eyebrow"><span className="section-index mono">03 / 05</span> THE WORKING TOOLKIT</p><h2 id="skills-title">A practice in<br /><em>many dimensions.</em></h2></div>
        <p className="section-heading-note">Connected disciplines, not a scorecard. Choose a node to see its related skills, tools, and work.</p>
      </div>
      <div className="skills-interface reveal">
        <div className="discipline-nav" role="group" aria-label="Choose a design discipline">
          {disciplines.map((discipline) => <button key={discipline.id} className={`discipline-node${activeId === discipline.id ? " is-active" : ""}`} onClick={() => setActiveId(discipline.id)} aria-pressed={activeId === discipline.id}>
            <span className="discipline-node-index mono">{discipline.index}</span><span className="discipline-node-name">{discipline.label}</span><span className="discipline-node-mark" aria-hidden="true">↗</span>
          </button>)}
          <div className="discipline-connector" aria-hidden="true" />
        </div>
        <div className="discipline-detail" aria-live="polite">
          <div className="discipline-detail-heading"><span className="mono">DISCIPLINE / {active.index}</span><span className="discipline-live"><i /> IN VIEW</span></div>
          <h3>{active.label}</h3><p className="discipline-description">{active.description}</p>
          <div className="skill-chip-list" aria-label={`${active.label} skills`}>{active.skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div>
          <div className="discipline-context">
            <div><p className="mono">TOOLS IN THIS PRACTICE</p><p>{active.tools.join(" · ")}</p></div>
            <div><p className="mono">RELATED WORK</p>{relatedProjects.length ? <div className="related-projects">{relatedProjects.map((project) => <button key={project.slug} onClick={() => onOpenProject(project.slug)}>{project.title}<span aria-hidden="true">↗</span></button>)}</div> : <p>No selected project is currently listed for this discipline.</p>}</div>
          </div>
        </div>
      </div>
      <details className="skills-accessible-list"><summary>View all skills as a simple list</summary><div className="skills-list-grid">{disciplines.slice(0, 3).map((discipline) => <section key={discipline.id}><h3>{discipline.label}</h3><ul>{discipline.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>)}<section><h3>Tools</h3><ul>{disciplines[3].skills.map((tool) => <li key={tool}>{tool}</li>)}</ul></section></div></details>
      <p className="skills-note mono">NO PROFICIENCY SCORES · JUST THE MATERIALS OF THE PRACTICE</p>
    </section>
  );
}

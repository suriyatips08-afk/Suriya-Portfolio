import { education, experience, owner } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading reveal">
        <div><p className="eyebrow"><span className="section-index mono">02 / 05</span> PROFILE / DESIGN APPROACH</p><h2 id="about-title">A systems thinker<br />with a <em>design lens.</em></h2></div>
        <p className="about-lead">{owner.introduction}</p>
      </div>
      <div className="about-body-grid">
        <aside className="about-philosophy reveal">
          <span className="philosophy-mark" aria-hidden="true">“</span>
          <p>{owner.philosophy}</p>
          <span className="mono">DESIGN PRINCIPLES</span>
        </aside>
        <div className="about-path reveal">
          <div className="path-heading"><p className="mono">01 / EXPERIENCE</p><span className="mono">EXPERIENCE</span></div>
          <ol className="timeline">
            {experience.map((item, index) => <li key={item.title}>
              <span className="timeline-index mono">0{index + 1}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-copy"><p className="mono">{item.date}</p><h3>{item.title}</h3><p>{item.organization}</p></div>
            </li>)}
          </ol>
          <div className="education-card">
            <p className="mono">02 / EDUCATION</p>
            <h3>{education.qualification}</h3>
            <p>{education.institution} <span>·</span> {education.location}</p>
            <span className="education-status">{education.status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

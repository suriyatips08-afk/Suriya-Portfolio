import { useState, type FormEvent } from "react";
import { owner, socialLinks } from "@/data/portfolio";

const base = import.meta.env.BASE_URL;

export function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Hi Suriya,\n\n${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${owner.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app should open with a draft. Please review it and send; if it does not open, use the direct email link below."
    );
  };

  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-orbit" aria-hidden="true">
        <i />
        <b />
      </div>
      <div className="contact-heading reveal">
        <p className="eyebrow">
          <span className="section-index mono">05 / 05</span> THE NEXT CHAPTER
        </p>
        <h2 id="contact-title">
          Have an idea?
          <br />
          <em>Let's make it interactive.</em>
        </h2>
        <p>
          I'm interested in thoughtful design, engaging digital experiences, and
          opportunities to build things that make people curious.
        </p>
      </div>
      <div className="contact-layout">
        <form className="contact-form reveal" onSubmit={submit} noValidate>
          <div className="form-row">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "error-name" : undefined}
            />
            {errors.name && (
              <span className="field-error" id="error-name">
                {errors.name}
              </span>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && (
              <span className="field-error" id="error-email">
                {errors.email}
              </span>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="contact-message">A little about the idea</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "error-message" : undefined}
            />
            {errors.message && (
              <span className="field-error" id="error-message">
                {errors.message}
              </span>
            )}
          </div>
          <button className="button button-primary form-submit" type="submit">
            Prepare an email <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note" role="status" aria-live="polite">
            {status}
          </p>
          <p className="form-disclaimer">
            This opens a draft in your email app; it is not sent by this
            website.
          </p>
        </form>
        <aside className="contact-side reveal">
          <p className="mono">DIRECT CHANNELS</p>
          <a className="contact-email" href={`mailto:${owner.email}`}>
            {owner.email}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="social-link-list">
            {socialLinks
              .filter(link => link.label !== "Email")
              .map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
          </div>
          <div className="resume-card">
            <span className="mono">RESUME / PDF</span>
            <p>
              View my experience, skills, education, and selected
              responsibilities.
            </p>
            <a
              className="button button-outline resume-card-link"
              href={`${base}${owner.resumePath}`}
              target="_blank"
              rel="noreferrer"
            >
              Open resume PDF <span aria-hidden="true">↗</span>
            </a>
            <small>Opens in a new tab.</small>
          </div>
        </aside>
      </div>
    </section>
  );
}

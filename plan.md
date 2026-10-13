# Suriya — Interactive Portfolio: Implementation Plan

## Scope and source of truth

Maintain the live portfolio in the user-selected public GitHub repository `suriyatips08-afk/Suriya-Portfolio`. The user has authorized updates to this repository and its GitHub Pages deployment. Keep the site static, responsive, and data-driven; treat existing content and the user-supplied design references as the source of truth.

Keep content in an editable data module. Reuse the six named projects, authentic descriptions/assets, verified email, Behance, and LinkedIn links, and the supplied resume PDF. Do not create fake metrics, client relationships, outcomes, studies, qualifications, or other project facts. Use clearly identified editable prompts for missing case-study details. The approved contact-form behavior is client validation followed by an email draft addressed to `suriyanatesh0406@gmail.com`; explain that the visitor must send the draft, and never show a false submission-success message. There is no configured email backend/service or credential.

## Implementation approach

Use the already initialized React 19 + TypeScript + Vite project, existing installed dependencies, CSS, and static frontend mode (`pnpm dev:static`, `pnpm build:static`). Do not provision a server or database and do not add packages unless an observed need justifies it. Use data-driven React components, semantic HTML, CSS custom properties, lightweight SVG/CSS for diagrams, and restrained motion. The hero is a minimal near-black typographic stage built from live accessible text and inline SVG/CSS horizon lighting; it does not need a background photograph or video. Keep the page single-route for static hosting; do not add client-only project routes or a backend. Configure relative asset URLs/build base so the eventual deployment works at a GitHub Pages project path. Provide a static `manus-routes.json` declaring `/` before starting the preview server.

Optimize reused imagery for delivery; lazy-load non-critical project media; use original local artwork where it exists. Do not depend on invented/generated depictions of the designer or unrelated stock imagery. Keep any large original video media optional/lazy and avoid loading it on the initial page.

### Planned project structure

- `client/index.html` — page title, description, Open Graph/Twitter metadata, favicon references, and meaningful initial HTML content for crawlers/no-JS visitors; omit canonical and `og:url` until the real public origin is chosen.
- `client/public/manus-routes.json` — the actual single-page route manifest; `client/public/favicon.svg`, copied social-preview art at `client/public/og-cover.png`, and optimized original project artwork under `client/public/portfolio/`.
- `client/src/data/portfolio.ts` — editable owner details, exact supplied biography/timeline, six project records, category/tool/skill content, and original links.
- `client/src/components/portfolio/` — persistent navigation, command palette, hero, work filters/cards, case-study dialog, about timeline, skills constellation/list, interactive lab, contact form and footer.
- `client/src/pages/Home.tsx` — accessible single-page composition and section anchors.
- `client/src/styles/portfolio.css` and `client/src/index.css` — responsive design system, components, focus states, reduced-motion overrides, and mobile-specific presentation.
- `README.md` — verification notes, existing interactions, live destination, external service requirements, and known limitations.
- `.github/workflows/deploy-pages.yml` — deploy the static build to the selected GitHub Pages repository.
- `app.config.ts` — durable HTTPS platform-logo metadata for the new Manus project.
- `plan.md` and `TODO.md` — approved design/architecture and complete acceptance clauses.

## Design system

- **Design movement:** neo-editorial digital-studio / carefully art-directed post-internet minimalism; expressive rather than template-like.
- **Core principles:** 1) let real project imagery and clear language lead; 2) make every interaction reveal information or provide meaningful feedback; 3) use cinematic restraint and generous negative space; 4) keep accessibility, responsive clarity, and performance intact.
- **Color philosophy:** deep ink (`#080B0B`) gives the original work room to breathe; warm near-white (`#F1F1E8`) keeps reading comfortable; ownable acid-chartreuse (`#D6FF62`) signals active exploration; icy blue (`#A9DDF0`) is a restrained secondary signal, never a competing accent. Muted text and borders maintain readable contrast.
- **Layout paradigm:** an asymmetrical, left-aligned editorial hero balanced by a sweeping abstract horizon on the right; keep navigation and edge metadata sparse, then transition into an asymmetric project gallery and editorial timeline.
- **Signature elements:** the orbital crosshair wordmark; oversized, widely tracked SURIYA lettering with a lime period; a luminous curved horizon ribbon, quiet chapter index, and edge-aligned metadata.
- **Interaction philosophy:** make interactions feel like precise instruments; visible, reversible control with useful state and keyboard/touch parity. No decorative control that does nothing.
- **Animation:** short, purposeful 200–650 ms reveals and modal transitions with carefully eased motion; subtle hero parallax at low amplitude; no forced slow scrolling or unnecessary perpetual rendering; disable/simplify motion under `prefers-reduced-motion` and on touch-first devices.
- **Typography:** Space Grotesk 300 for the oversized, geometric SURIYA wordmark; Space Grotesk 300 for tracked uppercase navigation; DM Sans 400 for readable supporting copy; system monospace for compact metadata and micro-CTAs. Load the actual 300 weight and keep the wordmark’s letter spacing and fluid scale aligned to the supplied reference.
- **Brand essence:** “A multidisciplinary design practice that turns systems, interfaces, and stories into experiences people want to explore.” Personality: curious, deliberate, imaginative.
- **Brand voice:** precise, personal, quietly confident. Example lines: “Design systems with a sense of wonder.” “Curiosity, carefully composed.” CTAs use direct verbs such as “Explore selected work” and “Open a case study.”
- **Wordmark/mark:** custom-spaced SURIYA wordmark paired with the implemented CSS-drawn orbital crosshair mark; a small lime period is the hero’s single sharp color accent.
- **Signature brand color:** acid-chartreuse `#D6FF62`.

## Product behavior and constraints

The landing page will match the latest supplied screenshot: a near-black full-viewport stage; compact crosshair wordmark at upper left; centered WORK / ABOUT / SKILLS / LAB / CONTACT navigation; a small UI/UX · BRAND IDENTITY · INTERACTIVE signature at upper right; left-aligned DIGITAL DESIGNER label, oversized SURIYA. wordmark, original design statement, and EXPLORE MY WORK action; an abstract luminous lime horizon on the right; a restrained 01 / 05 chapter marker, scroll cue, and only verified social links at the lower right. Show the composition immediately on arrival rather than gating it behind an intro curtain. Keep the page responsive, readable, and reduced-motion aware. Do not change the subsequent portfolio sections or invent social destinations. Preserve working navigation, theme control, and the Cmd/Ctrl+K command palette.

Projects remain: Colonial Parkway (2D Image Sequence), Sanamahi's Blade (World Design), PayPal Redesign (UI/UX), Zenon (AI Security UX Case Study), Life Below Water (Animation Project), and Requiem for the Endgame (Cinematic Project). Filters must include ALL / GAME DESIGN / UI/UX / BRANDING / MOTION & CINEMATIC. Branding has no supplied named project, so its real empty state must say that no selected project is currently listed rather than inventing one. Each case-study dialog uses actual current site content/media where present, has accessible open/close and previous/next controls, and labels missing facts as editable placeholders.

The About section uses the supplied multidisciplinary introduction and accurate education/experience timeline (MIT World Peace University, Pune; B.Des. Visual Communication in progress; EXL Services Chennai UI/UX Internship, June–August 2026; freelance Brand and UI/UX Design, March 2024–September 2025; Visual Communication Pavilion Representative, November 2025–April 2026). Do not overstate seniority. The skills visualization uses every supplied skill/tool, highlights related real projects by discipline, and provides an accessible list alternative without proficiency percentages.

The lab consists of four working, resettable demos: a pointer/parameter-reactive generative composition; an interface playground with functional stateful controls; a small playable mechanic with feedback/rules; and a responsive type experiment driven by pointer or text input. Make applicable interactions keyboard and touch operable.

The contact form validates name/email/message, exposes accessible error guidance, and opens a mailto draft addressed to the verified existing email. It must clearly tell the visitor to review and send the draft; it cannot claim that email was sent. Resume controls remain visibly present but inactive/descriptive until the authentic PDF is supplied. This limitation is documented in the README and TODO.

## Search/discovery, static deployment, and material dependencies

Set a descriptive title and meta description, social preview tags, semantic headings, meaningful alt text, SVG favicon, and crawler-visible content in initial HTML. Use static Vite output and relative assets suitable for the active GitHub Pages project path; `.github/workflows/deploy-pages.yml` deploys `dist/public` from `main` to the current public site. The live URL is `https://suriyatips08-afk.github.io/Suriya-Portfolio/`. No credentials are needed to develop/build/preview. A configured email provider/server would be required only to replace the approved mailto handoff with direct server-side delivery.

## Project files

`client/` contains the React/Vite experience and public assets; `README.md` documents operation and the active deployment; `plan.md` and `TODO.md` preserve agreed decisions and required behaviors.

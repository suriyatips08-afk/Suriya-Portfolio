# Suriya — Interactive Portfolio: Implementation Plan

## Scope and source of truth

Build a new, independent portfolio project at `/home/ubuntu/suriya-portfolio`, based on the approved direction and authentic material from `https://suriyatips08-afk.github.io/Suriya-Portfolio/`. Do not edit, connect, push to, or publish over the original website/repository. The project will be a static, responsive portfolio with a Manus Preview and GitHub Pages setup instructions for a future, separately chosen repository.

Keep content in an editable data module. Reuse the six named projects, source descriptions/assets, and the published site's email, Behance, and LinkedIn links. Do not create fake metrics, client relationships, outcomes, studies, qualifications, or other project facts. Use clearly identified editable prompts for missing case-study details. The source does not contain a valid resume PDF: its Resume URL is a local Windows path and `poster.pdf` is a 64 MB project poster. Do not relabel that poster as a resume; provide a truthful inactive resume slot until the correct PDF is supplied. The approved contact-form behavior is client validation followed by an email draft addressed to `suriyanatesh0406@gmail.com`; explain that the visitor must send the draft, and never show a false submission-success message. There is no configured email backend/service or credential.

## Implementation approach

Use the already initialized React 19 + TypeScript + Vite project, existing installed dependencies, CSS, and static frontend mode (`pnpm dev:static`, `pnpm build:static`). Do not provision a server or database and do not add packages unless an observed need justifies it. Use data-driven React components, semantic HTML, CSS custom properties, lightweight SVG/CSS for diagrams, and restrained motion. The hero is a minimal near-black typographic stage built from live accessible text and inline SVG/CSS horizon lighting; it does not need a background photograph or video. Keep the page single-route for static hosting; do not add client-only project routes or a backend. Configure relative asset URLs/build base so the eventual deployment works at a GitHub Pages project path. Provide a static `manus-routes.json` declaring `/` before starting the preview server.

Optimize reused imagery for delivery; lazy-load non-critical project media; use original local artwork where it exists. Do not depend on invented/generated depictions of the designer or unrelated stock imagery. Keep any large original video media optional/lazy and avoid loading it on the initial page.

### Planned project structure

- `client/index.html` — page title, description, Open Graph/Twitter metadata, favicon references, and meaningful initial HTML content for crawlers/no-JS visitors; omit canonical and `og:url` until the real public origin is chosen.
- `client/public/manus-routes.json` — the actual single-page route manifest; `client/public/favicon.svg`, copied social-preview art at `client/public/og-cover.png`, and optimized original project artwork under `client/public/portfolio/`.
- `client/src/data/portfolio.ts` — editable owner details, exact supplied biography/timeline, six project records, category/tool/skill content, and original links.
- `client/src/components/portfolio/` — reusable intro, persistent navigation, command palette, hero, work filters/cards, case-study dialog, about timeline, skills constellation/list, interactive lab, contact form and footer.
- `client/src/pages/Home.tsx` — accessible single-page composition and section anchors.
- `client/src/styles/portfolio.css` and `client/src/index.css` — responsive design system, components, focus states, reduced-motion overrides, and mobile-specific presentation.
- `README.md` — setup/build/test steps, the included GitHub Pages workflow for a separate repository, external service requirements, and known limitations (actual resume PDF and any future email backend).
- `.github/workflows/deploy-pages.yml` — deploy the static build to GitHub Pages only after the user creates/selects a new destination repository.
- `app.config.ts` — durable HTTPS platform-logo metadata for the new Manus project.
- `plan.md` and `TODO.md` — approved design/architecture and complete acceptance clauses.

## Design system

- **Design movement:** neo-editorial digital-studio / carefully art-directed post-internet minimalism; expressive rather than template-like.
- **Core principles:** 1) let real project imagery and clear language lead; 2) make every interaction reveal information or provide meaningful feedback; 3) use cinematic restraint and generous negative space; 4) keep accessibility, responsive clarity, and performance intact.
- **Color philosophy:** deep ink (`#080B0B`) gives the original work room to breathe; warm near-white (`#F1F1E8`) keeps reading comfortable; ownable acid-chartreuse (`#D6FF62`) signals active exploration; icy blue (`#A9DDF0`) is a restrained secondary signal, never a competing accent. Muted text and borders maintain readable contrast.
- **Layout paradigm:** asymmetrical editorial columns, oversized index numbers, alternating project scale, offset captions, and an editorial timeline rather than a centered stack of identical cards.
- **Signature elements:** the existing orbital crosshair wordmark; a centered, custom-spaced SURIYA title with one lime-outline letter; a fine curved horizon arc with a single central glow/ray and sparse metadata.
- **Interaction philosophy:** make interactions feel like precise instruments; visible, reversible control with useful state and keyboard/touch parity. No decorative control that does nothing.
- **Animation:** short, purposeful 200–650 ms reveals and modal transitions with carefully eased motion; subtle hero parallax at low amplitude; no forced slow scrolling or unnecessary perpetual rendering; disable/simplify motion under `prefers-reduced-motion` and on touch-first devices.
- **Typography:** Space Grotesk 300 for the oversized, geometric SURIYA wordmark; Space Grotesk 300 for tracked uppercase navigation; DM Sans 400 for readable supporting copy; system monospace for the tightly tracked metadata, tagline, and micro-CTAs. Load the actual 300 weight and keep the wordmark’s letter spacing, slim outline accent, and fluid scale aligned to the supplied reference.
- **Brand essence:** “A multidisciplinary design practice that turns systems, interfaces, and stories into experiences people want to explore.” Personality: curious, deliberate, imaginative.
- **Brand voice:** precise, personal, quietly confident. Example lines: “Design systems with a sense of wonder.” “Curiosity, carefully composed.” CTAs use direct verbs such as “Explore selected work” and “Open a case study.”
- **Wordmark/mark:** custom-spaced SURIYA wordmark paired with the implemented CSS-drawn orbital crosshair mark; oversized lime-outline “R” lettering anchors the hero.
- **Signature brand color:** acid-chartreuse `#D6FF62`.

## Product behavior and constraints

The hero will match the supplied minimal neon-horizon reference: a centered SURIYA wordmark; a restrained two-line “CRAFTING DIGITAL EXPERIENCES THAT FEEL ALIVE.” tagline; “DIGITAL DESIGNER” and supplied discipline labels in small edge-aligned metadata; the original design statement at lower left; and the working About, Explore Work, scroll, and command actions arranged across the lower edge. Draw the fine curved horizon and center light ray in inline SVG/CSS on near-black, with reduced-motion support. Change only the hero composition, not other sections. A brief optional first-visit intro will include skip/continue controls and reduced-motion handling. Desktop may use a restrained contextual cursor; mobile will use native pointer/touch behavior. Provide working scroll/anchor actions, a persistent accessible menu and a Cmd/Ctrl+K command palette limited to implemented actions.

Projects remain: Colonial Parkway (2D Image Sequence), Sanamahi's Blade (World Design), PayPal Redesign (UI/UX), Zenon (AI Security UX Case Study), Life Below Water (Animation Project), and Requiem for the Endgame (Cinematic Project). Filters must include ALL / GAME DESIGN / UI/UX / BRANDING / MOTION & CINEMATIC. Branding has no supplied named project, so its real empty state must say that no selected project is currently listed rather than inventing one. Each case-study dialog uses actual current site content/media where present, has accessible open/close and previous/next controls, and labels missing facts as editable placeholders.

The About section uses the supplied multidisciplinary introduction and accurate education/experience timeline (MIT World Peace University, Pune; B.Des. Visual Communication in progress; EXL Services Chennai UI/UX Internship, June–August 2026; freelance Brand and UI/UX Design, March 2024–September 2025; Visual Communication Pavilion Representative, November 2025–April 2026). Do not overstate seniority. The skills visualization uses every supplied skill/tool, highlights related real projects by discipline, and provides an accessible list alternative without proficiency percentages.

The lab consists of four working, resettable demos: a pointer/parameter-reactive generative composition; an interface playground with functional stateful controls; a small playable mechanic with feedback/rules; and a responsive type experiment driven by pointer or text input. Make applicable interactions keyboard and touch operable.

The contact form validates name/email/message, exposes accessible error guidance, and opens a mailto draft addressed to the verified existing email. It must clearly tell the visitor to review and send the draft; it cannot claim that email was sent. Resume controls remain visibly present but inactive/descriptive until the authentic PDF is supplied. This limitation is documented in the README and TODO.

## Search/discovery, static deployment, and material dependencies

Set a descriptive title and meta description, social preview tags, semantic headings, meaningful alt text, SVG favicon, and crawler-visible content in initial HTML. Do not publish guessed canonical/og:url/sitemap origins: the destination/new repository is not yet selected. Keep the README explicit about setting those absolute URLs once the new public origin is known. Use static Vite output and relative assets suitable for a GitHub Pages subpath; never configure or deploy to the original repository. No credentials are needed to develop/build/preview. A real resume PDF is required to activate resume links; a configured email provider/server would be required only to replace the approved mailto handoff with direct server-side delivery.

## Project files

`client/` contains the React/Vite experience and public assets; `README.md` documents operation and independent deployment; `plan.md` and `TODO.md` preserve the agreed decisions and required behaviors. The original clone at `/home/ubuntu/suriya-portfolio-audit` is reference-only and will not be modified.

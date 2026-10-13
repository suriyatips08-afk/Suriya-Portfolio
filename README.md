## Verification snapshot

- `pnpm check` — passed.
- `pnpm test` — passed: 2 existing test files, 6 tests. These cover the starter platform/auth modules, not exhaustive end-to-end UI behavior.
- `pnpm build:static` — passed; Vite produced the static site in `dist/public/`.
- Live preview checks — `/`, `/manus-routes.json`, the single `/` route declaration, favicon, social-preview image, representative project images and project videos returned HTTP 200.
- Browser review — confirmed the Game Design filter reduces the visible project count, a project case study opens and its next/previous controls change the displayed project, Escape closes the case study, the command palette responds to Cmd/Ctrl+K, and a blank contact form reports accessible errors without opening an email draft. Desktop and mobile layouts were reviewed in Preview.
- Palette check — secondary label text `#858e88` has contrast ratios of 5.85:1, 5.46:1 and 5.21:1 on the ink, soft-ink and raised backgrounds respectively.

A valid form submission was not sent during testing: submitting opens the visitor's mail client with a draft, and that visitor remains responsible for sending it. The supplied authentic resume PDF is included at `client/public/SuriyaNateshkhanna_Resume.pdf` and linked from the navigation and contact section. The public canonical/`og:url` and user-selected GitHub Pages repository have not been supplied, so absolute destination tags remain unset and the public Pages workflow has not been run.

The first-visit curtain, full-screen menu and command palette now contain keyboard focus, return it to the invoking control when closed, and mark unrelated page regions inert while open.

Focused keyboard verification passed in Preview: the menu and command palette move focus into the overlay, keep Tab within it, make underlying app regions inert, close with Escape, and return focus to their invoking controls.

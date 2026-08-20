# Faaiz Ali Ahmad — Portfolio

An interactive black-and-white portfolio featuring a cinematic space theme,
animated transitions, floating project and skill sections, professional
experience, case studies, education, and a contact form.

## Run locally

Requires Node.js 22.

```bash
npm install
npm run dev
```

## Validate a production build

```bash
npm run build
```

## Deploy with Vercel

Connect this GitHub repository to Vercel and deploy the `main` branch. Keep the
Vercel Output Directory setting blank; the Nitro adapter creates the required
deployment output automatically.

## Main project files

- `app/page.tsx` contains the portfolio content and interactive overlays.
- `app/globals.css` contains the responsive layouts and visual styling.
- `app/layout.tsx` contains the page title and portfolio metadata.
- `public/assets/` contains the portrait, fonts, images, and interactive scene assets.

## Technology

React, TypeScript, vinext, Vite, CSS, WebGL, and Three.js-based scene assets.

# Krishiv Modi — Developer Portfolio

A single-page developer portfolio built with **React + Vite + Tailwind CSS v4 + Framer Motion**.
Pure frontend — no backend required.

## Stack
- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (scroll/entry animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  data/portfolio.js     content lives here (name, projects, skills, education...)
  components/
    Nav.jsx              editor-tab-style sticky nav
    Hero.jsx             terminal-typing intro
    About.jsx
    Projects.jsx          code-editor-styled project cards
    Skills.jsx
    Education.jsx
    Contact.jsx
    BrandIcons.jsx        GitHub/LinkedIn svg icons
  App.jsx
  index.css              design tokens (@theme block) + global styles
```

## Customize

- Content: edit `src/data/portfolio.js` (projects, skills, education, links).
- Colors/fonts: edit the `@theme` block at the top of `src/index.css`.
- Resume download: drop your resume PDF into `public/` as `Krishiv_Modi_Resume.pdf`.
- Add a project: add an object to the `projects` array in `src/data/portfolio.js`.

## Deploy

Push to GitHub, then import the repo on Vercel (vercel.com/new) - it auto-detects Vite.
Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.

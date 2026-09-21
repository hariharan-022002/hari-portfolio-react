# Hari Haran — Portfolio (React + Tailwind)

A rebuild of the original Flask/HTML portfolio as a modern, animated React
single-page app, styled with Tailwind CSS and animated with Framer Motion.

## What's new vs. the old site

- **React + Vite** instead of server-rendered Flask/Jinja templates
- **Tailwind CSS** design system (see `tailwind.config.js` for the color/type tokens)
- **Framer Motion** scroll-reveal and hover animations throughout
- An animated canvas **node-network background** in the hero (nods to the
  "network" in neural network — an original interactive touch, not a stock effect)
- A typewriter effect that rotates through your dual identity: AI/data
  science + web development
- Scroll-spy navigation, animated skill bars, and a working contact form
  (still wired to your existing Formspree endpoint)
- GitHub links surfaced on every project card and in the About section —
  addressing the "no visible GitHub link" gap from your resume review

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev       # start the local dev server (usually http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  App.jsx                    # composes all sections
  index.css                  # Tailwind directives + small custom utilities
  data/content.js            # ALL your text content lives here — edit this file
  components/
    Navbar.jsx
    Hero.jsx
    NetworkBackground.jsx    # the animated canvas background
    About.jsx
    Education.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx
public/assets/                # your existing images, carried over
```

## Customizing content

Almost everything you'd want to change — your bio, projects, skills, socials,
email/phone — lives in **`src/data/content.js`**. You shouldn't need to touch
the components themselves to update text, add a project, or add a skill.

To add a project, add an object to the `projects` array with an image placed
in `public/assets/`.

## Deploying

This is a static Vite build, so it deploys the same places the old site did:

- **Vercel**: import the repo, framework preset "Vite", no config needed
- **Netlify**: build command `npm run build`, publish directory `dist`
- **GitHub Pages**: run `npm run build` and deploy the `dist/` folder

## Design notes

- Colors: near-black `#0B0D12` background, warm amber `#F2994A` accent
  (carried over from the original logo/brand), teal `#4FD1C5` as a second
  accent representing the data/ML side of your work
- Type: Space Grotesk (headings), Inter (body), JetBrains Mono (labels,
  code-comment-style section eyebrows like `// 01 — About`)
- The `prefers-reduced-motion` setting is respected in the background animation

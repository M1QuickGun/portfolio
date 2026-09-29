# Portfolio

My personal site: projects, about, resume, and contact. Plain HTML/CSS/JS, no build step.

## Edit it

All text lives in `content.js`: your name, links, bio, skills, resume timeline, and projects.
To add a project, copy one of the entries in `PROJECTS`. A project with no `highlights`
shows as a dimmed "coming soon" card with no detail page.

Screenshots: put images in `img/` and set `image: "img/whatever.png"` on the project.
Profile photo: set `photo: "img/me.jpg"` in `SITE`.

Resume: `resume.pdf` is generated from `RESUME`, `SITE`, and each project's `resume` line
in `content.js`, laid out by `resume.html`. Run `node build-resume.js` to rebuild it
locally (it fails if the resume spills onto a second page). A GitHub Action rebuilds and
commits it automatically whenever `content.js` changes.

## Daily updates

A scheduled Claude agent checks my GitHub each day and, when there's meaningful new work,
opens a PR updating `content.js`. Its instructions are in `UPDATING.md`.

## Preview locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Hosting

Render **Static Site** (free, doesn't sleep): connect the GitHub repo, leave the build
command empty, set the publish directory to `.`. Every push to `main` redeploys.

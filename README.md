# Portfolio

My personal site: projects, about, resume, and contact. Plain HTML/CSS/JS, no build step.

## Edit it

All text lives in `content.js`: your name, links, bio, skills, resume timeline, and projects.
To add a project, copy one of the entries in `PROJECTS`. A project with no `highlights`
shows as a dimmed "coming soon" card with no detail page.

Screenshots: put images in `img/` and set `image: "img/whatever.png"` on the project.
Profile photo: set `photo: "img/me.jpg"` in `SITE`. Resume: save it as `resume.pdf` here.

## Preview locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Hosting

Render **Static Site** (free, doesn't sleep): connect the GitHub repo, leave the build
command empty, set the publish directory to `.`. Every push to `main` redeploys.

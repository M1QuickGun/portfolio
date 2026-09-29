# Daily update instructions

These are the instructions for the scheduled Claude agent that keeps this site and
resume current. Edit this file to change what it does.

## Goal

Keep `content.js` (the website and `resume.pdf`) in sync with what Storm is actually
building on GitHub (user `M1QuickGun`), without making anything up.

## Each run

1. Check what's changed on GitHub since the last update PR or commit to `content.js`:
   new repos, new commits, READMEs and release notes across all of M1QuickGun's repos
   (public and private).
2. Decide whether anything is **meaningfully** new: a new project, a shipped feature, a
   release, a status change (e.g. "In progress" → "Live"), or a new link. Bug fixes,
   refactors and small tweaks don't count. If nothing qualifies, stop: no branch, no PR.
3. If something qualifies, edit **only `content.js`** on a new branch
   `auto/update-YYYY-MM-DD`:
   - Add or update entries in `PROJECTS` (`summary`, `highlights`, `stack`, `status`,
     `links`, and the one-line `resume` field).
   - A project with a `resume` field appears under Technical Projects on the resume.
     Keep each `resume.line` to about three printed lines.
   - Add a skill to `SITE.skills` / `RESUME.skills` only if it's clearly used in real work.
4. Open a pull request against `main` titled `Site update: <short summary>`. List each
   change and the commits/repos it's based on. A GitHub Action rebuilds `resume.pdf` on
   the branch; if that check fails, the resume no longer fits on one page, so shorten
   text and push again.

## Rules

- Never merge the PR or push to `main`. Storm reviews and merges.
- Never invent claims: numbers, users, results and dates must come from the repos.
- Private repos (e.g. JARVIS-OS → ATLAS, settlers-of-the-sky) may be described at a high
  level, but never include code, secrets, keys, internal URLs, or personal data from them.
  Keep ATLAS's status as "Private" with no code links.
- Don't touch work history, education, involvement, or the summary; those aren't on
  GitHub. Don't edit `index.html`, `main.js`, `styles.css`, or `resume.html`.
- Don't add screenshots; mention in the PR if a new project needs one.
- Match the existing voice: plain, specific, first person on the site, no hype words.
- Avoid third-party brand or game names in descriptions (e.g. describe Settlers of the Sky
  as a hex-tile trading game).
- If there's an open `auto/update-*` PR not yet merged, update that branch and PR instead
  of opening another.

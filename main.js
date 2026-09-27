// Tiny hash router: #/, #/projects, #/projects/<id>, #/about, #/resume, #/contact.

const $page = document.getElementById("page");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const initials = (t) => t.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).map((w) => w[0]).join("").slice(0, 2);
let filter = "All";

function thumb(p) {
  return p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)}"${p.imageFit === "contain" ? ' class="contain"' : ""}>`
    : `<span>${esc(initials(p.title))}</span>`;
}

function card(p) {
  const soon = !p.highlights.length;
  const tag = soon ? "div" : "a";
  return `<${tag} class="card${soon ? " soon" : ""}" ${soon ? "" : `href="#/projects/${p.id}"`}>
    <div class="thumb">${thumb(p)}</div>
    <div class="card-body">
      <div class="card-head"><h3>${esc(p.title)}</h3><span class="badge">${esc(p.status)}</span></div>
      <p>${esc(p.summary)}</p>
      <div class="row">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
    </div>
  </${tag}>`;
}

const pages = {
  home() {
    const featured = PROJECTS.filter((p) => p.highlights.length).slice(0, 2);
    const resume = SITE.links.resume ? `<a class="btn" href="${esc(SITE.links.resume)}" target="_blank" rel="noopener">Download resume</a>` : "";
    const [before, gold, after] = SITE.headline;
    return `<section class="hero">
        <p class="greet">${esc(SITE.greeting)}</p>
        <h1 class="name">${esc(SITE.name)}</h1>
        <p class="lead">${esc(before)}<span class="gold">${esc(gold)}</span>${esc(after)}</p>
        <p>${esc(SITE.heroSub)}</p>
        <div class="row"><a class="btn primary" href="#/projects">View projects</a>${resume}</div>
      </section>
      <p class="eyebrow">Featured</p>
      <div class="grid">${featured.map(card).join("")}</div>`;
  },

  projects() {
    const cats = ["All", ...new Set(PROJECTS.map((p) => p.category))];
    const shown = PROJECTS.filter((p) => filter === "All" || p.category === filter);
    return `<h1 class="page-title">Projects</h1>
      <p class="page-sub">Things I've built, from multiplayer games to AI systems.</p>
      <div class="filters">${cats.map((c) => `<button data-filter="${esc(c)}" class="${c === filter ? "on" : ""}">${esc(c)}</button>`).join("")}</div>
      <div class="grid">${shown.map(card).join("")}</div>`;
  },

  project(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return pages.notFound();
    return `<a class="back" href="#/projects">← All projects</a>
      <div class="detail-head">
        <span class="badge">${esc(p.status)}</span>${p.year ? ` <span class="muted" style="font-size:14px">&nbsp;${esc(p.year)}</span>` : ""}
        <h1>${esc(p.title)}</h1>
        <p>${esc(p.summary)}</p>
        <div class="row">${p.links.map((l, i) => `<a class="btn${i === 0 ? " primary" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>
      </div>
      ${p.image ? `<img class="detail-img" src="${esc(p.image)}" alt="${esc(p.title)}">` : ""}
      <div class="section"><h2>Highlights</h2>
        <ul class="highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div>
      <div class="section"><h2>Built with</h2>
        <div class="row">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>`;
  },

  about() {
    const photo = SITE.photo ? `<img src="${esc(SITE.photo)}" alt="${esc(SITE.name)}">` : esc(SITE.initials);
    return `<h1 class="page-title">About</h1><p class="page-sub">${esc(SITE.subline)}</p>
      <div class="about">
        <div class="avatar">${photo}</div>
        <div>
          ${SITE.about.map((p) => `<p>${esc(p)}</p>`).join("")}
          <div class="section"><h2>Skills</h2>
            <div class="row">${SITE.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>
        </div>
      </div>`;
  },

  resume() {
    const built = PROJECTS.filter((p) => p.highlights.length)
      .map((p) => ({ title: p.title, org: p.summary, when: p.year || "" }));
    const item = (r) => `<div><div class="t-head"><span>${esc(r.title)}</span><span class="t-when">${esc(r.when)}</span></div><div class="muted">${esc(r.org)}</div></div>`;
    const dl = SITE.links.resume ? `<a class="btn primary" href="${esc(SITE.links.resume)}" target="_blank" rel="noopener">Download PDF</a>` : "";
    return `<h1 class="page-title">Resume</h1><p class="page-sub">The short version. The full one is a PDF.</p>
      <div class="section"><h2>Education</h2><div class="timeline">${SITE.timeline.map(item).join("")}</div></div>
      <div class="section"><h2>Projects</h2><div class="timeline">${built.map(item).join("")}</div></div>
      <div class="section"><h2>Skills</h2><div class="row">${SITE.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>
      <div class="section">${dl}</div>`;
  },

  contact() {
    const L = SITE.links;
    const rows = [
      L.email && { label: "Email", note: L.email, url: `mailto:${L.email}` },
      L.github && { label: "GitHub", note: L.github.replace(/^https?:\/\/(www\.)?/, ""), url: L.github },
      L.linkedin && { label: "LinkedIn", note: "", url: L.linkedin },
    ].filter(Boolean);
    return `<h1 class="page-title">Contact</h1><p class="page-sub">${esc(SITE.openTo)}</p>
      <div class="links">${rows.map((r) => `<a class="link" href="${esc(r.url)}" target="_blank" rel="noopener"><span>${esc(r.label)}<small>${esc(r.note)}</small></span><span>→</span></a>`).join("")}</div>`;
  },

  notFound() {
    return `<h1 class="page-title">Page not found</h1><p class="page-sub"><a href="#/">Go home</a></p>`;
  },
};

function route() {
  const [, tab = "", sub] = location.hash.replace(/^#/, "").split("/");
  const key = tab || "home";
  const html = key === "projects" && sub ? pages.project(sub) : (pages[key] || pages.notFound)();

  $page.innerHTML = `<div class="fade">${html}</div>`;
  document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("on", a.dataset.tab === key));
  const pageName = key === "home" ? "" : ` · ${key[0].toUpperCase()}${key.slice(1)}`;
  document.title = `${SITE.name}${pageName}`;
  window.scrollTo(0, 0);
}

$page.addEventListener("click", (e) => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  filter = b.dataset.filter;
  route();
});

document.getElementById("brand").innerHTML = `<img src="img/logo.svg" alt=""><span>${esc(SITE.name)}</span>`;
document.getElementById("foot").innerHTML = `© ${new Date().getFullYear()} ${esc(SITE.name)} · Built from scratch in plain HTML, CSS, and JavaScript. <a href="https://github.com/M1QuickGun/portfolio" target="_blank" rel="noopener">View the source</a>`;
window.addEventListener("hashchange", route);
route();

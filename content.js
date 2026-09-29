// Everything the site says lives here. Edit this file to change the text,
// add a project, or fill in your links; the pages are built from it.

const SITE = {
  name: "Storm Wassel",
  initials: "SW",
  greeting: "Hi, I'm",
  // [before, gold highlight, after]
  headline: ["I build things that ", "actually get used", " — by my friends, by me, and hopefully by your team."],
  heroSub: "Mathematics graduate · analytics · software",
  subline: "B.S. Mathematics · M.S. Applied Business Analytics candidate · Jacksonville, FL",
  openTo: "Open to data, analytics, and software roles.",

  links: {
    email: "stormwassel@gmail.com", // set to "" to hide it on the Contact page
    github: "https://github.com/M1QuickGun",
    linkedin: "https://www.linkedin.com/in/storm-wassel-7b2b3a361",
    resume: "resume.pdf",
  },

  about: [
    "I graduated from Jacksonville University in 2026 with a B.S. in Mathematics and University Honors, and I'm now working toward an M.S. in Applied Business Analytics. I like problems where math, code, and business data overlap.",
    "My academic work includes research on prime parking functions in combinatorics and machine learning projects in Python. Outside class, most of what I build starts as something I or my friends actually need: a way to keep playing our house-ruled board game online, or an assistant that handles the busywork of a job search.",
  ],

  skills: ["Python", "Java", "C++", "JavaScript", "MySQL", "Machine learning", "Statistics",
           "Data visualization", "Excel", "Node.js", "Git / GitHub", "Google Colab"],

  // Resume timeline, newest first.
  timeline: [
    { title: "M.S. Applied Business Analytics", org: "Jacksonville University · expected 2027", when: "Now" },
    { title: "B.S. Mathematics", org: "Jacksonville University · University Honors, 3.73 GPA · Pi Mu Epsilon", when: "2023–2026" },
    { title: "Research: prime parking functions", org: "Combinatorics research on mathematical patterns and statistical relationships", when: "" },
  ],
};

// category: used by the filter chips on the Projects page.
// status: short badge text. image: optional screenshot path (e.g. "img/settlers.png").
const PROJECTS = [
  {
    id: "settlers",
    title: "Settlers of the Sky",
    category: "Games",
    status: "Live",
    year: "2026",
    image: "img/settlers-closeup.webp",
    gallery: [
      { src: "img/settlers.webp", caption: "Mid-game: player panels, dice, resource bar, and action drawers" },
      { src: "img/settlers-board.webp", caption: "The whole board, drawn in code: floating islands, sky-whale ports, and an incoming raider airship" },
      { src: "img/settlers-build.webp", caption: "Build drawer with costs and remaining pieces" },
      { src: "img/settlers-lobby.webp", caption: "House rules the host picks in the lobby" },
      { src: "img/settlers-mobile.webp", caption: "Phone layout", tall: true },
    ],
    summary: "A real-time multiplayer strategy and trading game on a hex-tile board for 2–6 players, with an expansion ruleset and house rules picked per game.",
    stack: ["Node.js", "Express", "Socket.IO", "Canvas", "JavaScript"],
    links: [{ label: "Play it", url: "https://settlers-of-the-sky.onrender.com" }],
    highlights: [
      "Real-time multiplayer over Socket.IO: create a game, share an invite link, play from any browser.",
      "The server enforces every rule and only sends each player what they're allowed to see, so hands stay private.",
      "A full expansion ruleset layered on the base game: defensive units, recurring invasion events, city upgrades, and an action-card deck.",
      "House rules are configurable from the lobby, because my friends and I never play by the book.",
      "All artwork is drawn in code: 2.5D floating islands, sky-whale ports, animations, and synthesized sound.",
      "Automated tests include bots playing complete 2–6 player games. Deployed on Render from GitHub.",
    ],
  },
  {
    id: "atlas",
    title: "ATLAS",
    category: "AI",
    status: "Private",
    year: "2026",
    image: "img/atlas-architecture.svg",
    imageFit: "contain",
    summary: "A personal AI operating system: specialised agents, persistent memory, and a task engine that automates real work with a human approval step before anything consequential.",
    stack: ["Python", "OpenAI API", "SQLite", "FastAPI", "React", "Playwright", "pytest"],
    links: [],
    highlights: [
      "Multi-agent design: an orchestrator delegates to research, personal, and developer agents, each with a whitelisted set of tools.",
      "Tool registry with per-agent permissions, audit logging, and cost tracking on every model call.",
      "Persistent memory, a task engine and scheduler, and an objective planner that breaks goals into steps.",
      "Read-only Gmail and Calendar integration using the narrowest OAuth scopes.",
      "An end-to-end job search pipeline: candidate profile, job fit scoring, and tailored application packages, with a hard human approval step before anything is submitted.",
      "A live Control Center dashboard (React + FastAPI) shows what ATLAS is doing, what it's waiting on, and why anything failed.",
      "Built in reviewed, test-first phases: over 2,400 automated tests.",
    ],
  },
  {
    id: "broken-blade",
    title: "Broken Blade",
    category: "Games",
    status: "In progress",
    year: "2026",
    image: "img/broken-blade-hall.webp",
    gallery: [
      { src: "img/broken-blade-hilt.webp", caption: "Storm starts with only the hilt: a short, basic slash" },
      { src: "img/broken-blade-reach.webp", caption: "Each recovered piece of the blade lengthens its reach" },
      { src: "img/broken-blade-undercroft.webp", caption: "The Undercroft, reached by dropping through the ruined entry" },
    ],
    summary: "A dark fantasy metroidvania I'm building for an eventual Steam release. The sword that sealed an ancient evil has shattered, and each piece grants a new ability. Early build with placeholder art.",
    stack: ["Godot 4", "GDScript", "Python"],
    links: [],
    highlights: [
      "Story and world design are my own: the last surviving prince returns after twenty years to a kingdom split between fragments of the evil, each bound to a piece of the blade.",
      "Ability-gated map design: an ice dash first, then the player chooses the order of a fire double jump and a lightning zip line, so both routes have to work.",
      "Tight platforming: variable jump height, a grace window for late jumps, input buffering, and safe-ground respawns after hazards.",
      "Four-way melee combat with pogo bounces off enemies and spikes, hit-stop, knockback, and attack reach that grows with each blade piece.",
      "Rooms are written as text maps and turned into collision, hazards, doors and enemies in code, so new areas are quick to sketch and test.",
      "An automated playtest drives the character through a full route and saves screenshots, which caught a level-layout bug before any manual play.",
    ],
  },
  {
    id: "settlers-analytics",
    title: "Game analytics",
    category: "Data",
    status: "Coming soon",
    summary: "Logging every roll, trade, and build from Settlers games to produce post-game reports and train a smarter AI opponent.",
    stack: ["SQL", "Python", "Simulation"],
    links: [],
    highlights: [],
  },
];

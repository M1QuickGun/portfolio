// Everything the site says lives here. Edit this file to change the text,
// add a project, or fill in your links; the pages are built from it.

const SITE = {
  name: "Storm Wassel",
  initials: "SW",
  headline: "I build things where math meets software.",
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
    image: "img/settlers.webp",
    summary: "A private online Catan-style game for 2–6 players, with the full Cities & Knights expansion and house rules picked per game.",
    stack: ["Node.js", "Express", "Socket.IO", "Canvas", "JavaScript"],
    links: [{ label: "Play it", url: "https://settlers-of-the-sky.onrender.com" }],
    highlights: [
      "Real-time multiplayer over Socket.IO: create a game, share an invite link, play from any browser.",
      "The server enforces every rule and only sends each player what they're allowed to see, so hands stay private.",
      "Full Cities & Knights expansion: knights, barbarians, city improvements, metropolises, and progress cards.",
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
    id: "catan-analytics",
    title: "Catan analytics",
    category: "Data",
    status: "Coming soon",
    summary: "Logging every roll, trade, and build from Settlers games to produce post-game reports and train a smarter AI opponent.",
    stack: ["SQL", "Python", "Simulation"],
    links: [],
    highlights: [],
  },
];

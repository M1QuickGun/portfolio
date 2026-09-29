// Renders resume.html (filled from content.js) to resume.pdf with headless Chrome.
// Usage: node build-resume.js   (set CHROME=/path/to/chrome if it isn't found)
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { pathToFileURL } = require("url");

const candidates = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);
const chrome = candidates.find(p => fs.existsSync(p));
if (!chrome) throw new Error("Chrome not found; set CHROME to its path.");

const profile = fs.mkdtempSync(path.join(os.tmpdir(), "resume-chrome-"));
const src = pathToFileURL(path.join(__dirname, "resume.html")).href;
const out = path.join(__dirname, "resume.pdf");

execFileSync(chrome, [
  "--headless=new", "--disable-gpu", "--no-sandbox",
  "--no-pdf-header-footer", "--no-first-run", `--user-data-dir=${profile}`,
  "--virtual-time-budget=10000", // let Google Fonts load before printing
  `--print-to-pdf=${out}`,
  src,
], { stdio: ["ignore", "ignore", "ignore"] });
fs.rmSync(profile, { recursive: true, force: true });

const pages = (fs.readFileSync(out, "latin1").match(/\/Type\s*\/Page(?!s)/g) || []).length;
console.log(`resume.pdf: ${pages} page(s)`);
if (pages !== 1) {
  console.error("Resume must fit on one page; tighten the text in content.js.");
  process.exit(1);
}

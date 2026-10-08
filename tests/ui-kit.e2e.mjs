import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { spawn } from "node:child_process";

const port = 3100 + Math.floor(Math.random() * 700);
const url = `http://127.0.0.1:${port}`;
let server;
let html;

function expectMatch(pattern, label) {
  assert.equal(pattern.test(html), true, `Missing ${label}`);
}

before(async () => {
  server = spawn(
    "npm",
    ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
    {
      cwd: new URL("..", import.meta.url),
      detached: true,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: "ignore",
    },
  );

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited early with code ${server.exitCode}`);
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        html = await response.text();
        return;
      }
    } catch {
      // Server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Timed out waiting for Next.js");
});

after(() => {
  if (server?.pid) {
    try {
      process.kill(-server.pid, "SIGTERM");
    } catch {
      // Process already exited.
    }
  }
});

test("renders the complete boilerplate sections", () => {
  for (const label of [
    "Foundations",
    "Buttons",
    "Forms",
    "Feedback",
    "Data display",
    "Overlays",
  ]) {
    expectMatch(new RegExp(`>${label}<`), `section: ${label}`);
  }

  for (const example of [
    "Primary",
    "Secondary",
    "Outline",
    "Ghost",
    "Destructive",
    "Loading",
    "Disabled",
    "Empty state",
    "Pagination",
  ]) {
    expectMatch(new RegExp(example), `example: ${example}`);
  }
});

test("renders a labelled, production-style form", () => {
  assert.match(html, /<form[^>]*>/);
  assert.match(html, /for="full-name"/);
  assert.match(html, /id="full-name"/);
  assert.match(html, /for="email"/);
  assert.match(html, /id="email"[^>]*type="email"/);
  assert.match(html, /for="company-size"/);
  assert.match(html, /id="company-size"/);
  assert.match(html, /for="project-brief"/);
  assert.match(html, /id="project-brief"/);
  assert.match(html, /type="checkbox"/);
  assert.match(html, /type="radio"/);
  assert.match(html, /role="switch"/);
  assert.match(html, /aria-labelledby="email-notifications-label"/);
  assert.match(html, /data-slot="switch-thumb"/);
  assert.doesNotMatch(html, /translate-x-5/);
  assert.match(html, />Submit request</);
});

test("renders accessible interactive-pattern triggers", () => {
  assert.match(html, /role="tablist"/);
  assert.match(html, /role="tab"[^>]*aria-selected="true"/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /aria-haspopup="dialog"/);
  assert.match(html, />Show toast</);
  assert.match(html, /<table/);
  assert.doesNotMatch(html, /video\.azbahri\.link\/media/);
});

test("renders advanced interactive components and animated icons", () => {
  for (const label of [
    "Command palette",
    "Dropdown menu",
    "Combobox",
    "File upload",
    "Range slider",
    "Stepper",
    "Tooltip",
  ]) {
    expectMatch(new RegExp(label), `advanced component: ${label}`);
  }

  assert.match(html, /aria-haspopup="menu"/);
  assert.match(html, /role="combobox"/);
  assert.match(html, /type="file"/);
  assert.match(html, /type="range"/);
  assert.match(html, /class="[^"]*icon-motion/);
});

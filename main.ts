// The joke about the demo — one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (UTF-8, 1-280 Unicode code points).
// Node 22, stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "At the demo, my AI coding agent presented my project, fixed a bug live, and took the applause — I just stood beside it nodding along, like a tour guide in a museum I didn't build.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke must be 1-280 code points, got ${codePoints}`);
}
if (!JOKE.trim()) {
  throw new Error("joke must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${codePoints} code points to /output/entry.txt`);

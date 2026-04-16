#!/usr/bin/env node
/**
 * Removes the Next.js output directory (.next) so the next build/dev run
 * starts from a clean slate. Retries on Windows when `.next/trace` or other
 * files are briefly locked (AV, indexer, lingering Node).
 */
const fs = require("fs");
const path = require("path");

const nextDir = path.join(process.cwd(), ".next");
const maxAttempts = 5;
const delayMs = 400;

function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* spin */
  }
}

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log("Removed", nextDir);
    process.exit(0);
  } catch (err) {
    if (err && err.code === "ENOENT") {
      console.log("Nothing to remove:", nextDir);
      process.exit(0);
    }
    if (attempt === maxAttempts) {
      console.error(
        "Could not remove .next after",
        maxAttempts,
        "attempts. Close dev servers / other Node processes, then retry.\n",
        err
      );
      process.exit(1);
    }
    sleep(delayMs * attempt);
  }
}

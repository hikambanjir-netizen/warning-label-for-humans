import { mkdirSync, writeFileSync } from "node:fs";

// One-line safety warning label for humans (make.fun bounty
// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85).
// Funny first, plausible second; the laugh lands in the last few words.
const LINE =
  "WARNING: Human ships with no off switch, no warranty, and a detailed opinion on everything it learned five minutes ago.";

mkdirSync("/output", { recursive: true });

// Gate: the entry must be exactly one non-blank line of 1-160 characters.
const chars = [...LINE];
if (LINE.trim().length === 0 || chars.length > 160 || LINE.includes("\n")) {
  throw new Error(`entry line failed the gate (${chars.length} chars)`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");

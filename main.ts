// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
// Writes a single excuse line to /output/entry.txt and validates it
// against the competition gate: UTF-8 text, 1-200 characters,
// single line, not only whitespace. After writing, it reads the file
// back and re-validates the exact bytes on disk, so a truncated or
// mangled write can never pass silently.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Nope. It's 3 AM — last time you woke me up at this hour, you bought a monkey JPEG and blamed me for it.";

function validate(text: string): void {
  // Count Unicode code points, not UTF-16 code units, so the gate's
  // character limit is measured the way a reader sees the line.
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // The excuse only works at 3 AM: refuse to ship a line that lost the hour.
  if (!text.includes("3 AM")) {
    throw new Error("entry must name the 3 AM hour");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back what was actually written and validate it too.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("round-trip check failed: file on disk differs from entry");
}
validate(written);
console.log(`Wrote ${[...written].length} characters to /output/entry.txt`);

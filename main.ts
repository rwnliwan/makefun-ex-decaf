// makefun-ex-decaf — entry for "Describe Your Ex in One Word"
// (make.fun competition u-puan-describe-your-ex-in-one-word-9fc6ebe7)
//
// The program writes exactly one word, "decaf", to /output/entry.txt.
// No input is read, no network is used. The word is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "decaf";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

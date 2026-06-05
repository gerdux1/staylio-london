#!/usr/bin/env node
/**
 * Optimise picked hero candidates → public/locations/{slug}.jpg in both repos.
 *
 * Input: /tmp/hero-candidates/{repo}/{slug}/picked.png  (you copy your chosen
 *        cand_N.png → picked.png in each slug dir before running this).
 *        Falls back to cand_1.png if picked.png missing.
 *
 * Output:
 *   ~/staylio-london/public/locations/{slug}.jpg   (~250KB q85 mozjpeg)
 *   ~/nournest-london/public/locations/{slug}.jpg
 *
 * Target final dimensions: 3000x1600 (upscale from 1536x1024 via mitchell filter).
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import os from "node:os";

const ROOT = "/tmp/hero-candidates";
const REPOS = {
  staylio: path.join(os.homedir(), "staylio-london"),
  nournest: path.join(os.homedir(), "nournest-london"),
};
const TARGET_W = 3000;
const TARGET_H = 1600;

const briefs = JSON.parse(await fs.readFile(new URL("./briefs.json", import.meta.url), "utf8").catch(() => "[]"));
// Fallback: read repos × slugs from filesystem
async function discover() {
  const out = [];
  for (const repo of Object.keys(REPOS)) {
    const repoDir = path.join(ROOT, repo);
    let entries;
    try { entries = await fs.readdir(repoDir); } catch { continue; }
    for (const slug of entries) {
      const sd = path.join(repoDir, slug);
      const stat = await fs.stat(sd);
      if (stat.isDirectory()) out.push({ repo, slug });
    }
  }
  return out;
}

const items = briefs.length ? briefs : await discover();
console.log(`Optimising ${items.length} heroes...`);
for (const { repo, slug } of items) {
  const dir = path.join(ROOT, repo, slug);
  let src = path.join(dir, "picked.png");
  try { await fs.access(src); }
  catch { src = path.join(dir, "cand_1.png"); }
  const dst = path.join(REPOS[repo], "public", "locations", `${slug}.jpg`);
  await fs.mkdir(path.dirname(dst), { recursive: true });
  const meta = await sharp(src).metadata();
  const buf = await sharp(src)
    .resize({
      width: TARGET_W,
      height: TARGET_H,
      fit: "cover",
      position: "centre",
      kernel: "mitchell",
    })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toBuffer();
  await fs.writeFile(dst, buf);
  const kb = (buf.length / 1024).toFixed(0);
  console.log(`  ${repo}:${slug.padEnd(30)} ${meta.width}x${meta.height} → ${TARGET_W}x${TARGET_H} ${kb}KB → ${dst}`);
}
console.log("Done.");

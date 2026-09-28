// Renders each project's coded reel to an MP4 by stepping its animations frame
// by frame in headless Chrome, then encoding the frames with ffmpeg.
//
//   npm run reels                 render every reel to public/reels/<slug>.mp4
//   npm run reels -- viralz       render one reel
//   npm run reels -- --stills 2,5,9,12,14   save stills to .reel-frames/ for review
//
// Needs the dev server (npm run dev) and ffmpeg on PATH.

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";

const baseUrl = process.env.REEL_URL ?? "http://localhost:43123";
const fps = 30;
const duration = 15;
const allSlugs = ["viralz", "snappd", "gogrow"];

const args = process.argv.slice(2);
const stillsIndex = args.indexOf("--stills");
const stills =
  stillsIndex === -1 ? null : args[stillsIndex + 1].split(",").map(Number);
const requested = args.filter((arg, index) => !arg.startsWith("--") && index !== stillsIndex + 1);
const slugs = requested.length > 0 ? requested : allSlugs;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});

async function openReel(slug) {
  await page.goto(`${baseUrl}/reels/?slug=${slug}`, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})));
  });
  await page.waitForTimeout(300);
}

async function seek(seconds) {
  await page.evaluate((time) => {
    for (const animation of document.getAnimations()) {
      animation.pause();
      animation.currentTime = time * 1000;
    }
  }, seconds);
}

const reel = page.locator(".reel");

for (const slug of slugs) {
  await openReel(slug);

  if (stills) {
    mkdirSync(".reel-frames", { recursive: true });
    for (const time of stills) {
      await seek(time);
      await reel.screenshot({ path: join(".reel-frames", `${slug}-${time}.png`) });
    }
    console.log(`${slug}: saved ${stills.length} stills to .reel-frames/`);
    continue;
  }

  const frameDir = join(".reel-frames", slug);
  rmSync(frameDir, { recursive: true, force: true });
  mkdirSync(frameDir, { recursive: true });

  const totalFrames = fps * duration;
  for (let frame = 0; frame < totalFrames; frame += 1) {
    await seek(frame / fps);
    await reel.screenshot({
      path: join(frameDir, `${String(frame).padStart(4, "0")}.png`),
    });
  }

  mkdirSync("public/reels", { recursive: true });
  execFileSync(
    "ffmpeg",
    [
      "-loglevel", "error",
      "-y",
      "-framerate", String(fps),
      "-i", join(frameDir, "%04d.png"),
      "-c:v", "libx264",
      "-preset", "slow",
      "-crf", "20",
      "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",
      join("public/reels", `${slug}.mp4`),
    ],
    { stdio: "inherit" },
  );
  rmSync(frameDir, { recursive: true, force: true });
  console.log(`${slug}: wrote public/reels/${slug}.mp4`);
}

await browser.close();

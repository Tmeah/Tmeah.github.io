import { useLayoutEffect, useRef, type ReactNode } from "react";
import { reelDuration, toKeyframes, type Track } from "@/components/reels/timeline";
import type { ProjectTheme } from "@/content/types";

type ReelStageProps = {
  slug: ProjectTheme;
  name: string;
  tracks: Track[];
  posterAt: number;
  children: ReactNode;
};

const chromeTracks: Track[] = [
  {
    target: ".reel__progress span",
    frames: [
      { at: 0, transform: "scaleX(0)" },
      { at: reelDuration, transform: "scaleX(1)" },
    ],
  },
  {
    target: ".reel__second",
    frames: [
      { at: 0, "--reel-second": 0, ease: `steps(${reelDuration}, end)` },
      { at: reelDuration, "--reel-second": reelDuration },
    ],
  },
];

// A 16:9 stage that scales every element with its width (1em is 1% of the
// stage), and plays its tracks on one shared 15 second loop. It rests on the
// poster frame until it scrolls into view, so it never shows an empty stage.
export function ReelStage({ slug, name, tracks, posterAt, children }: ReelStageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const animations = [...tracks, ...chromeTracks].flatMap((track) => {
      const keyframes = toKeyframes(track.frames);
      return Array.from(root.querySelectorAll(track.target)).map((element) =>
        element.animate(keyframes, {
          duration: reelDuration * 1000,
          iterations: Infinity,
          fill: "both",
        }),
      );
    });
    animations.forEach((animation) => {
      animation.pause();
      animation.currentTime = posterAt * 1000;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => animations.forEach((animation) => animation.cancel());
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        animations.forEach((animation) =>
          entry.isIntersecting ? animation.play() : animation.pause(),
        );
      },
      { threshold: 0.1 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [tracks, posterAt]);

  return (
    <div
      ref={rootRef}
      className={`reel reel--${slug}`}
      data-reel={slug}
      role="img"
      aria-label={`${name} motion reel`}
    >
      <div className="reel__canvas" aria-hidden>
        {children}
        <div className="reel__chrome">
          <span className="reel__tag">
            {name} <span>/ Showreel</span>
          </span>
          <span className="reel__time">
            00:<span className="reel__second" /> / 00:15
          </span>
          <span className="reel__progress">
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}

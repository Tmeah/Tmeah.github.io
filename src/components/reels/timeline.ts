export const reelDuration = 15;

export const ease = {
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  in: "cubic-bezier(0.7, 0, 0.84, 0)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  back: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  linear: "linear",
} as const;

type FrameValue = string | number;

// A keyframe positioned in seconds on the reel's 15 second loop. `ease` shapes
// the motion from this frame to the next one, like a keyframe in After Effects.
export type Frame = {
  at: number;
  ease?: string;
  [property: string]: FrameValue | undefined;
};

export type Track = {
  target: string;
  frames: Frame[];
};

function toKeyframe(frame: Frame, offset: number): Keyframe {
  const keyframe: Keyframe = { offset, easing: frame.ease ?? ease.linear };
  for (const [property, value] of Object.entries(frame)) {
    if (property !== "at" && property !== "ease" && value !== undefined) {
      keyframe[property] = value;
    }
  }
  return keyframe;
}

export function toKeyframes(frames: Frame[]): Keyframe[] {
  const sorted = [...frames].sort((a, b) => a.at - b.at);
  const keyframes = sorted.map((frame) => toKeyframe(frame, frame.at / reelDuration));
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  if (first.at > 0) {
    keyframes.unshift({ ...toKeyframe(first, 0), easing: ease.linear });
  }
  if (last.at < reelDuration) {
    keyframes.push(toKeyframe(last, 1));
  }
  return keyframes;
}

type Pose = Omit<Frame, "at" | "ease">;

// Hidden, then eased into `shown` at `start`, held, then eased out to `hidden`
// (or `exit` when given) at `end`.
export function inOut(
  target: string,
  start: number,
  end: number,
  hidden: Pose,
  shown: Pose,
  options: { inFor?: number; outFor?: number; exit?: Pose; inEase?: string } = {},
): Track {
  const inFor = options.inFor ?? 0.8;
  const outFor = options.outFor ?? 0.45;
  return {
    target,
    frames: [
      { at: start, ...hidden, ease: options.inEase ?? ease.out },
      { at: start + inFor, ...shown },
      { at: end, ...shown, ease: ease.in },
      { at: end + outFor, ...(options.exit ?? hidden) },
    ],
  };
}

// Eases into `shown` at `start` and holds it to the end of the loop.
export function enter(
  target: string,
  start: number,
  hidden: Pose,
  shown: Pose,
  options: { inFor?: number; inEase?: string } = {},
): Track {
  return {
    target,
    frames: [
      { at: start, ...hidden, ease: options.inEase ?? ease.out },
      { at: start + (options.inFor ?? 0.8), ...shown },
    ],
  };
}

// Draws an SVG stroke (drawn with pathLength=1 and stroke-dasharray: 1) on from
// its start. The stroke stays invisible until drawing starts, because an
// undrawn stroke with round caps still paints a dot.
export function draw(target: string, start: number, duration: number): Track {
  return {
    target,
    frames: [
      { at: start, strokeDashoffset: 1, opacity: 0 },
      { at: start + 0.03, strokeDashoffset: 1, opacity: 1, ease: ease.inOut },
      { at: start + duration, strokeDashoffset: 0, opacity: 1 },
    ],
  };
}

// Line masks: text slides in from below its clipping line and out above it.
// Far enough that tall italic ascenders never peek over the mask.
export const maskIn = {
  hidden: { transform: "translateY(150%)" },
  shown: { transform: "translateY(0%)" },
};
export const maskOut = { exit: { transform: "translateY(-150%)" } };

// Brief flashes, one per scene cut.
export function flashes(target: string, cuts: number[], peak = 0.7): Track {
  return {
    target,
    frames: cuts.flatMap((cut) => [
      { at: cut - 0.12, opacity: 0, ease: ease.out },
      { at: cut, opacity: peak, ease: ease.out },
      { at: cut + 0.45, opacity: 0 },
    ]),
  };
}

// Fades from `color` at the start of the loop and back into it at the end, so
// the loop point is invisible.
export function loopFade(target: string): Track {
  return {
    target,
    frames: [
      { at: 0, opacity: 1, ease: ease.out },
      { at: 0.4, opacity: 0 },
      { at: reelDuration - 0.45, opacity: 0, ease: ease.in },
      { at: reelDuration, opacity: 1 },
    ],
  };
}

export const rise = (distance = 3) => ({
  hidden: { opacity: 0, transform: `translateY(${distance}em)` },
  shown: { opacity: 1, transform: "translateY(0em)" },
});

export const pop = {
  hidden: { opacity: 0, transform: "scale(0.4)" },
  shown: { opacity: 1, transform: "scale(1)" },
};

export function stagger(
  count: number,
  build: (index: number) => Track,
): Track[] {
  return Array.from({ length: count }, (_, index) => build(index));
}

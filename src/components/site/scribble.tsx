import type { ReactNode } from "react";

type ScribbleProps = {
  children: ReactNode;
  mark?: "underline" | "circle";
};

const marks = {
  underline: {
    viewBox: "0 0 200 24",
    d: "M4 15 C 48 7, 118 4, 196 10 M 18 21 C 72 15, 132 14, 184 17",
  },
  circle: {
    viewBox: "0 0 200 80",
    d: "M 156 12 C 104 0, 20 6, 9 38 C 0 66, 74 78, 140 72 C 190 67, 204 34, 170 16 C 140 2, 80 4, 44 13",
  },
} as const;

// A word with a hand-drawn marker stroke that draws itself in once the word is
// on screen.
export function Scribble({ children, mark = "underline" }: ScribbleProps) {
  const { viewBox, d } = marks[mark];
  return (
    <span className={`scribble scribble--${mark}`}>
      {children}
      <svg className="scribble__mark drawn" viewBox={viewBox} preserveAspectRatio="none" aria-hidden>
        <path d={d} pathLength={1} />
      </svg>
    </span>
  );
}

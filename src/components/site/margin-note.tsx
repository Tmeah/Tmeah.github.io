import type { ReactNode } from "react";

type MarginNoteProps = {
  children: ReactNode;
  arrow: "left" | "down";
  className?: string;
};

const arrows = {
  left: {
    viewBox: "0 0 70 30",
    paths: ["M66 20 C 50 4, 26 3, 8 14", "M18 5 L 7 14 L 19 21"],
  },
  down: {
    viewBox: "0 0 40 60",
    paths: ["M8 4 C 30 14, 33 36, 20 54", "M10 45 L 20 55 L 29 45"],
  },
} as const;

// A handwritten note with a hand-drawn arrow pointing at whatever it's about.
export function MarginNote({ children, arrow, className }: MarginNoteProps) {
  const { viewBox, paths } = arrows[arrow];
  return (
    <span className={`margin-note margin-note--${arrow}${className ? ` ${className}` : ""}`}>
      <span className="note">{children}</span>
      <svg className="margin-note__arrow drawn" viewBox={viewBox} aria-hidden>
        {paths.map((d) => (
          <path key={d} d={d} pathLength={1} />
        ))}
      </svg>
    </span>
  );
}

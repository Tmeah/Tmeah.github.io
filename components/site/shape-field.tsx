"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const shapes = [
  "/shapes/blob-a.svg",
  "/shapes/blob-a.svg",
  "/shapes/blob-a.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-c.svg",
  "/shapes/blob-c.svg",
  "/shapes/blob-c.svg",
];

const scaleFactor = 1 / 20;

export function ShapeField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function onMove(event: MouseEvent) {
      if (reduceMotion.matches || !fieldRef.current) {
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;
        fieldRef.current
          ?.querySelectorAll<HTMLElement>(".shape")
          .forEach((shape, index) => {
            const direction = index % 2 !== 0 ? -1 : 1;
            shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
          });
      });
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="shapes" ref={fieldRef} aria-hidden>
      {shapes.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt=""
          width={80}
          height={60}
          className={`shape shape--${index}`}
          priority={index < 3}
        />
      ))}
    </div>
  );
}

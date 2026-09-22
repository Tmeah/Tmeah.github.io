"use client";

import { useCallback } from "react";

const blobs = [
  { src: "/shapes/blob-a.svg", className: "shape shape--0" },
  { src: "/shapes/blob-a.svg", className: "shape shape--1" },
  { src: "/shapes/blob-a.svg", className: "shape shape--2" },
  { src: "/shapes/blob-b.svg", className: "shape shape--3" },
  { src: "/shapes/blob-b.svg", className: "shape shape--4" },
  { src: "/shapes/blob-b.svg", className: "shape shape--5" },
  { src: "/shapes/blob-c.svg", className: "shape shape--6" },
  { src: "/shapes/blob-c.svg", className: "shape shape--7" },
  { src: "/shapes/blob-c.svg", className: "shape shape--8" },
];

export function BlobField() {
  const onMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const shapes = event.currentTarget.querySelectorAll<HTMLElement>(".shape");
    const x = event.clientX / 20;
    const y = event.clientY / 20;
    shapes.forEach((shape, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
    });
  }, []);

  return (
    <div className="hero" onMouseMove={onMove}>
      {blobs.map((blob) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={blob.className} src={blob.src} alt="" className={blob.className} />
      ))}
    </div>
  );
}

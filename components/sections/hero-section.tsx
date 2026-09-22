"use client";

import { useCallback, type MouseEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaEnvelope, FaFilePdf } from "react-icons/fa6";
import { heroCopy, siteConfig } from "@/lib/content/site";

const blobs = [
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

export function HeroSection() {
  const onMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const shapes = event.currentTarget.querySelectorAll<HTMLElement>(".shape");
    const x = event.clientX / 20;
    const y = event.clientY / 20;
    shapes.forEach((shape, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
    });
  }, []);

  return (
    <section className="hero" id="top" onMouseMove={onMove}>
      {blobs.map((src, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={index} src={src} alt="" className={`shape shape--${index}`} />
      ))}
      <div className="hero__content">
        <h1 className="hero__title">
          Hey
          <br />
          <span>I&apos;m Tausif.</span>
        </h1>
        <p className="hero__para">
          I am a <strong className="text-[#0074d9]">full stack developer</strong>{" "}
          at Pobl Tech. {heroCopy.subheadline}
        </p>
        <div className="hero__links">
          <a href="#contact" aria-label="Contact">
            <FaEnvelope />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={siteConfig.cvPath} download aria-label="Download CV">
            <FaFilePdf />
          </a>
        </div>
      </div>
      <a href="#contact" className="mail-fab" aria-label="Contact">
        <FaEnvelope />
      </a>
    </section>
  );
}

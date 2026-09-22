"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/lib/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" aria-label="Tausif Meah home">
          <Image
            src="/brand/logo.jpg"
            alt="Tausif Meah"
            width={60}
            height={60}
            className="rounded-xl"
            priority
          />
        </Link>
        <ul className="site-nav__links">
          {siteConfig.nav.map((item) => (
            <li
              key={item.href}
              className={item.label === "Skills" || item.label === "About" ? "hide-sm" : undefined}
            >
              <a
                className={
                  item.label === "Contact"
                    ? "site-nav__link site-nav__cta"
                    : "site-nav__link"
                }
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li className="md:hidden">
            <button
              type="button"
              className="site-nav__link"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
            >
              Menu
            </button>
          </li>
        </ul>
      </nav>
      {open ? (
        <div className="px-6 pb-4 md:hidden">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="block py-2 font-bold" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

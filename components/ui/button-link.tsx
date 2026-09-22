import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

type ButtonLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  className,
  children,
  variant,
  size,
  download,
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    download;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

import type { Plugin } from "vite";
import { revealTargets } from "../src/components/site/reveal-targets";

const defaultBackground = "html{background:#f5f5f3}html.dark{background:#0e0e10}";

const caseStudyBackgrounds: Record<string, string> = {
  viralz: "html{background:#000}",
  gogrow: "html{background:#0a0a0a}",
  snappd: "html{background:#fdf8f3}html.dark{background:#2b2522}",
};

function backgroundFor(filename: string) {
  const slug = filename.match(/projects\/([^/]+)\/index\.html$/)?.[1];
  return (slug && caseStudyBackgrounds[slug]) || defaultBackground;
}

const moduleScript = /<script type="module"([^>]*\bsrc="[^"]+"[^>]*)><\/script>\s*/g;

// Hidden until ScrollReveal animates them in. Set from CSS so prerendered HTML
// never flashes visible first; falls back to visible if the app never boots.
const revealStyle = `@media (prefers-reduced-motion:no-preference){html.js:not(.no-reveal) :is(${revealTargets}):not(.is-revealed){opacity:0}}`;

const bootScript = [
  "(function(){var h=document.documentElement;h.classList.add('js');",
  "setTimeout(function(){if(!h.classList.contains('hydrated'))h.classList.add('no-reveal')},4000);",
  "var slug=function(u){if(!u)return null;var m=new URL(u,location.href).pathname.match(/^\\/projects\\/([^/]+)\\/?$/);return m?m[1]:null};",
  "addEventListener('pagereveal',function(e){if(!e.viewTransition)return;",
  "var a=window.navigation&&navigation.activation,s=slug(location.href)||slug(a&&a.from&&a.from.url);if(!s)return;",
  "var r=document.querySelector('[data-reel=\"'+s+'\"]');if(!r)return;var b=r.getBoundingClientRect();",
  "if(b.bottom>0&&b.top<innerHeight){r.style.viewTransitionName='project-reel';e.viewTransition.finished.finally(function(){r.style.viewTransitionName=''})}})})();",
].join("");

// Paints each page in its own background colour before any CSS or JS loads.
// Pages are prerendered, so the HTML can paint before the app boots.
export function firstPaint(): Plugin {
  return {
    name: "first-paint",
    transformIndexHtml: {
      order: "post",
      handler(html, context) {
        const scripts: string[] = [];
        const withoutScripts = html.replace(moduleScript, (_tag, attributes: string) => {
          // The dev server isn't prerendered, so hold the first frame for the app there.
          const blocking = context.server ? ' blocking="render"' : "";
          scripts.push(`<script type="module"${blocking}${attributes}></script>`);
          return "";
        });
        const style = `<style>${backgroundFor(context.filename)}${revealStyle}</style>\n    <script>${bootScript}</script>`;
        return withoutScripts.replace(
          /\s*<\/head>/,
          `\n    ${[style, ...scripts].join("\n    ")}\n  </head>`,
        );
      },
    },
  };
}

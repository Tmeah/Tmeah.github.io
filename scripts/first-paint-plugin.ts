import type { Plugin } from "vite";

const defaultBackground = "html{background:#f5f5f5}html.dark{background:#242424}";

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

// Paints each page in its own background colour before any CSS or JS loads, and
// holds the first frame until the app has rendered. Without this, every
// navigation flashes a blank white page.
export function firstPaint(): Plugin {
  return {
    name: "first-paint",
    transformIndexHtml: {
      order: "post",
      handler(html, context) {
        const scripts: string[] = [];
        const withoutScripts = html.replace(moduleScript, (_tag, attributes: string) => {
          scripts.push(`<script type="module" blocking="render"${attributes}></script>`);
          return "";
        });
        const style = `<style>${backgroundFor(context.filename)}</style>`;
        return withoutScripts.replace(
          /\s*<\/head>/,
          `\n    ${[style, ...scripts].join("\n    ")}\n  </head>`,
        );
      },
    },
  };
}

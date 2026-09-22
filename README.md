# Tausif Meah — Portfolio

Next.js portfolio for [tausifmeah.co.uk](https://tausifmeah.co.uk): experience, flagship case studies (Viralz, GoGrow, Snappd), skills aligned to the 2026 CV, and contact via EmailJS with mailto fallback.

## Stack

- Next.js (App Router, static export)
- TypeScript, Tailwind CSS, shadcn/ui
- next-themes, Framer Motion (reduced-motion aware)
- EmailJS (optional env vars)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static output is written to `out/` for GitHub Pages.

## Deploy to GitHub Pages

1. Push this repository to `Tmeah/Tmeah.github.io` (or your user/organization Pages repo).
2. In GitHub **Settings → Pages**, set source to **GitHub Actions**.
3. Add repository secrets (optional, for the contact form):
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys `out/`.
5. Keep `public/CNAME` as `tausifmeah.co.uk` for the custom domain.

## Content updates

- Site copy and links: `lib/content/site.ts`
- Experience: `lib/content/experience.ts`
- Skills: `lib/content/skills.ts`
- Projects and archive: `lib/content/projects.ts`
- CV PDF: replace `public/cv/Tausif-Meah-CV-2026.pdf`
- Project screenshots: add WebP files under `public/projects/`

## Legacy static site

The previous HTML/CSS portfolio lives under `archive/legacy-static/` for reference.

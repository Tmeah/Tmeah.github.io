# Tausif Meah — Portfolio

Next.js portfolio for [tausifmeah.co.uk](https://tausifmeah.co.uk). It keeps the original site's look (big "Hey / I'm Tausif." hero, animated triangles, About/Contact panel) and showcases Viralz, Snappd, and GoGrow in each product's own branding, with a case study page for each.

## Stack

- Next.js (App Router, static export), TypeScript
- Hand-written CSS in `app/site.css`, `app/showcase.css`, and `app/case-study.css`
- `next-themes` for light/dark mode (follows the system setting, remembers the visitor's choice)
- Font Awesome icons from cdnjs
- EmailJS for the contact form (optional env vars), with a mailto fallback

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

## Dev site (no Vercel)

### Option A — Share local work instantly

With the dev server running (`npm run dev`), in another terminal:

```bash
npm run tunnel
```

That starts a **Cloudflare Tunnel** and prints a public `https://….trycloudflare.com` URL. No Vercel account required. The link stops when you stop the tunnel.

### Option B — Stable dev subdomain (`dev.tausifmeah.co.uk`)

GitHub Pages only (same stack as production):

1. Create a **`dev`** branch and push it to your GitHub Pages repo.
2. In DNS, add **CNAME** `dev` → `tmeah.github.io` (or your `*.github.io` host).
3. In GitHub **Settings → Pages**, use **GitHub Actions** (same as production).
4. The workflow [`.github/workflows/deploy-dev.yml`](.github/workflows/deploy-dev.yml) runs on pushes to **`dev`**, sets `public/CNAME` to `dev.tausifmeah.co.uk`, and deploys.

**Note:** One Pages site per repo shares a single custom domain in GitHub settings. For **production** (`tausifmeah.co.uk`) and **dev** (`dev.tausifmeah.co.uk`) at the same time, use either:

- **`dev` branch** deploys to the Pages URL while you test, then **`main`** redeploys production, or  
- A **second repository** (e.g. `portfolio-dev`) with its own Pages + `dev.tausifmeah.co.uk` CNAME.

## Deploy to GitHub Pages (production)

1. Push this repository to `Tmeah/Tmeah.github.io` (or your user/organization Pages repo).
2. In GitHub **Settings → Pages**, set source to **GitHub Actions**.
3. Add repository secrets (optional, for the contact form):
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys `out/`.
5. Keep `public/CNAME` as `tausifmeah.co.uk` for the custom domain.

## Content updates

- Site copy, "Now" strip, About text, and skill logos: `lib/content/site.ts`
- Experience list in the About panel: `lib/content/experience.ts`
- Projects, case studies, and archive: `lib/content/projects.ts`
- CV PDF: replace `public/cv/Tausif-Meah-CV-2026.pdf`
- Project screenshots: `public/projects/<name>.webp` (desktop) and `<name>-phone.webp` (phone)
- Background triangles: `public/shapes/`

## Legacy static site

The previous HTML/CSS portfolio lives under `archive/legacy-static/` for reference.

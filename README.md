# Tausif Meah — Portfolio

Portfolio for [tausifmeah.co.uk](https://tausifmeah.co.uk). It keeps the original site's look (big "Hey / I'm Tausif." hero, animated triangles, About/Contact panel) and showcases Viralz, Snappd, and GoGrow in each product's own branding, with a case study page for each.

## Stack

- [Vite](https://vite.dev) with React and TypeScript, built as plain static HTML pages
- Hand-written CSS in `src/styles/`
- Light/dark mode that follows the system setting and remembers the visitor's choice
- Font Awesome icons and Google Fonts from CDNs
- EmailJS for the contact form (optional env vars), with a mailto fallback

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:43123](http://localhost:43123).

## Production build

```bash
npm run build
npm run preview
```

Static output is written to `dist/` for GitHub Pages. `npm run preview` serves it on port 43124.

## Project layout

- `index.html`, `archive/index.html`, `projects/<name>/index.html`, `404.html`: one HTML file per page, with its own title and social preview tags
- `src/pages/`: the script each page loads
- `src/components/`: shared UI (nav, footer, triangles, phone frame, project cards, About/Contact panel)
- `src/content/`: all copy and links
- `public/`: images, CV, favicon, `CNAME`, `robots.txt`, `sitemap.xml`

## Dev site

### Share local work instantly

With the dev server running (`npm run dev`), in another terminal:

```bash
npm run tunnel
```

That starts a Cloudflare Tunnel and prints a public `https://….trycloudflare.com` URL. The link stops when you stop the tunnel.

### Stable dev subdomain (`dev.tausifmeah.co.uk`)

1. Create a **`dev`** branch and push it to your GitHub Pages repo.
2. In DNS, add **CNAME** `dev` → `tmeah.github.io` (or your `*.github.io` host).
3. In GitHub **Settings → Pages**, use **GitHub Actions**.
4. The workflow [`.github/workflows/deploy-dev.yml`](.github/workflows/deploy-dev.yml) runs on pushes to **`dev`**, sets `public/CNAME` to `dev.tausifmeah.co.uk`, and deploys.

One Pages site per repo shares a single custom domain in GitHub settings. To run production (`tausifmeah.co.uk`) and dev (`dev.tausifmeah.co.uk`) at the same time, use a second repository (for example `portfolio-dev`) with its own Pages and `dev.tausifmeah.co.uk` CNAME.

## Deploy to GitHub Pages (production)

1. Push this repository to `Tmeah/Tmeah.github.io` (or your user/organization Pages repo).
2. In GitHub **Settings → Pages**, set source to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.
4. Keep `public/CNAME` as `tausifmeah.co.uk` for the custom domain.

## Contact form (Cloudflare Worker + Resend)

The form posts to the Worker in `workers/contact`, which sends the message through Resend with the visitor's address as reply-to. The endpoint lives in `siteConfig.contactEndpoint`.

```bash
cd workers/contact
npm install
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npx wrangler deploy
```

Allowed origins, the recipient, and the sender are in `wrangler.toml`. Until `tausifmeah.co.uk` is verified in Resend, the sender must stay `onboarding@resend.dev`, which can only deliver to the email on your Resend account.

## Content updates

- Site copy, "Now" strip, About text, and skill logos: `src/content/site.ts`
- Experience list in the About panel: `src/content/experience.ts`
- Projects, case studies, and archive: `src/content/projects.ts`
- Page titles and descriptions: the matching HTML file
- CV PDF: replace `public/cv/Tausif-Meah-CV-2026.pdf`
- Project screenshots: `public/projects/<name>.webp` (desktop) and `<name>-phone.webp` (phone screen)
- Background triangles: `public/shapes/`

## Legacy static site

The previous HTML/CSS portfolio lives under `legacy/` for reference.

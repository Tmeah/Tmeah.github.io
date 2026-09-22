#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3000}"
URL="http://127.0.0.1:${PORT}"

if ! curl -sf "$URL" >/dev/null; then
  echo "Nothing is listening on $URL"
  echo "Start the app first: npm run dev"
  exit 1
fi

echo "Opening a public HTTPS link to your local dev server (Cloudflare Tunnel, not Vercel)."
echo "Press Ctrl+C to stop the tunnel."
exec cloudflared tunnel --url "$URL"

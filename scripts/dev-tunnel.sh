#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3000}"
URL="http://127.0.0.1:${PORT}"

if ! curl -sf "$URL" >/dev/null; then
  echo "Nothing is listening on $URL"
  echo "Start the app first: npm run dev -- --port ${PORT}"
  exit 1
fi

if curl -sf "$URL" | grep -q "Directory listing for"; then
  echo "Port ${PORT} is serving a folder listing, not the Next.js app."
  echo "Stop any 'python -m http.server' on that port, then run:"
  echo "  npm run dev -- --port ${PORT}"
  exit 1
fi

echo "Opening a public HTTPS link to your local dev server (Cloudflare Tunnel, not Vercel)."
echo "Press Ctrl+C to stop the tunnel."
exec cloudflared tunnel --url "$URL"

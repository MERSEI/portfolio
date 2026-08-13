#!/usr/bin/env bash
# Renders the CV HTML to PDF in public/ using headless Chromium.
#
# Usage: ./resume/build.sh
# Override the browser with CHROME=/path/to/chrome if it isn't on PATH.

set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
out="$here/../public"

chrome="${CHROME:-}"
if [ -z "$chrome" ]; then
  for candidate in \
    /opt/pw-browsers/chromium \
    "$(command -v chromium || true)" \
    "$(command -v chromium-browser || true)" \
    "$(command -v google-chrome || true)" \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  do
    if [ -n "$candidate" ] && [ -x "$candidate" ]; then chrome="$candidate"; break; fi
  done
fi

if [ -z "$chrome" ]; then
  echo "No Chromium/Chrome found. Set CHROME=/path/to/chrome and retry." >&2
  exit 1
fi

for locale in en ru; do
  "$chrome" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --no-pdf-header-footer \
    --print-to-pdf="$out/Alex-Fialko-CV-${locale^^}.pdf" \
    "file://$here/resume-$locale.html" 2>/dev/null
  echo "→ public/Alex-Fialko-CV-${locale^^}.pdf"
done

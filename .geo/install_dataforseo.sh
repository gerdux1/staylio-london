#!/usr/bin/env bash
# Run ONCE: bash ~/staylio-london/.geo/install_dataforseo.sh
#
# Wires DataForSEO creds into ~/.claude/settings.json. Prompts for username
# and API password (hidden). Password is never echoed to terminal and never
# enters Claude's chat transcript.
#
# Prerequisite: free DataForSEO account at https://app.dataforseo.com/register
# (sign-up bundles ~$1 free credit — covers all 91 keywords in this project).
# After sign-up, copy your API password from the API Access tab.

set -euo pipefail

SETTINGS="${HOME}/.claude/settings.json"
if [ ! -f "${SETTINGS}" ]; then
    echo "✗ ${SETTINGS} not found" >&2
    exit 1
fi

echo "════════════════════════════════════════"
echo "║   DataForSEO credential setup        ║"
echo "════════════════════════════════════════"
echo ""
echo "Get creds at: https://app.dataforseo.com → sign in → API Access"
echo ""

read -rp "DataForSEO username (email): " DFSE_USERNAME
if [ -z "${DFSE_USERNAME}" ]; then
    echo "✗ Username cannot be empty." >&2
    exit 1
fi

read -rsp "DataForSEO API password (hidden): " DFSE_PASSWORD
echo ""
if [ -z "${DFSE_PASSWORD}" ]; then
    echo "✗ Password cannot be empty." >&2
    exit 1
fi

python3 - "${SETTINGS}" "${DFSE_USERNAME}" "${DFSE_PASSWORD}" <<'PYEOF'
import json, sys
sp, u, p = sys.argv[1], sys.argv[2], sys.argv[3]
with open(sp) as f:
    s = json.load(f)
if "mcpServers" not in s or "dataforseo" not in s["mcpServers"]:
    print("✗ dataforseo MCP block missing from settings.json — re-run staging first", file=sys.stderr)
    sys.exit(1)
s["mcpServers"]["dataforseo"]["env"]["DATAFORSEO_USERNAME"] = u
s["mcpServers"]["dataforseo"]["env"]["DATAFORSEO_PASSWORD"] = p
with open(sp, "w") as f:
    json.dump(s, f, indent=2)
print(f"✓ creds written to {sp}")
PYEOF

echo ""
echo "→ Restart Claude Code (Cmd+Q, reopen) so the MCP loads."
echo "→ Then in a new session, ask: 'rerun the seo-dataforseo agents on the 91 keywords'."

#!/bin/bash
# Wrapper - calls master deploy script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_NAME="DESIGN-SYSTEM"

# Find master script (go up to siteplus/)
MASTER_SCRIPT=""
DIR="$SCRIPT_DIR"
while [ "$DIR" != "/" ]; do
    if [ -f "$DIR/deploy-all.sh" ]; then
        MASTER_SCRIPT="$DIR/deploy-all.sh"
        break
    fi
    DIR="$(dirname "$DIR")"
done

if [ -z "$MASTER_SCRIPT" ]; then
    echo "ERROR: deploy-all.sh not found!"
    exit 1
fi

exec "$MASTER_SCRIPT" --template "$TEMPLATE_NAME" "$@"

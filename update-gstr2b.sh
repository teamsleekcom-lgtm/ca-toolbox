#!/usr/bin/env bash
# Rebuilds the GSTR-2B Reconciler and refreshes the copy served at catoolbox.in/gstr2b/
# Usage: bash update-gstr2b.sh
set -e
cd "$(dirname "$0")/gstr2b-reconciler/frontend"
MSYS_NO_PATHCONV=1 MSYS2_ARG_CONV_EXCL="*" npm run build --silent -- --base=/gstr2b/
cd ../..
rm -rf gstr2b
cp -r gstr2b-reconciler/frontend/dist gstr2b
echo "Updated ./gstr2b — commit and push to publish on catoolbox.in."

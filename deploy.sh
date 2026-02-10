# #!/bin/bash
# set -e

# APP_DIR=/home/app/vacrw
# cd $APP_DIR

# echo ">>> Pulling latest code..."
# git reset --hard
# git pull origin main

# echo ">>> Installing dependencies..."
# if [ -f .yarnrc.yml ]; then
#   yarn install --immutable
# else
#   yarn install --frozen-lockfile
# fi

# echo ">>> Building Next.js..."
# yarn build

# echo ">>> Reloading PM2..."
# pm2 reload vacrw

# echo ">>> Done."

set -euo pipefail

APP_DIR=/home/app/vacrw
cd "$APP_DIR"

echo ">>> Pulling latest code..."
git reset --hard
git pull origin main

echo ">>> Installing dependencies..."
if [ -f .yarnrc.yml ]; then
  echo "Yarn Berry detected"
  corepack enable || true
  yarn install --immutable
else
  echo "Yarn Classic detected"
  # Ensure Yarn v1 (prevents lockfile mismatch)
  if ! yarn -v 2>/dev/null | grep -q '^1\.'; then
    npm install -g yarn@1.22.22
  fi
  yarn install --frozen-lockfile
fi

echo ">>> Building Next.js..."
yarn build

echo ">>> Reloading PM2..."
# If process exists, reload; otherwise start it
if pm2 describe vacrw >/dev/null 2>&1; then
  pm2 reload vacrw
else
  # Start Next.js via PM2 (port 3000 by default; change if needed)
  pm2 start node_modules/next/dist/bin/next --name vacrw -- start -p 3000
  pm2 save
fi

echo ">>> Done."
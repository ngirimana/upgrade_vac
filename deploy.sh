#!/bin/bash
set -euo pipefail

APP_DIR=/home/app/vacrw
APP_NAME=vacrw
PORT=3000

cd "$APP_DIR"

echo ">>> Pulling latest code..."
git reset --hard
git pull origin main

echo ">>> Tool versions:"
node -v
yarn -v

echo ">>> Ensure Yarn 4.12.0 via Corepack..."
corepack enable || true
corepack prepare yarn@4.12.0 --activate

echo ">>> Yarn version after corepack:"
yarn -v

echo ">>> Installing dependencies (immutable)..."
yarn install --immutable

echo ">>> Building Next.js..."
yarn build

echo ">>> Reloading PM2..."
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_NAME"
else
  pm2 start node_modules/next/dist/bin/next --name "$APP_NAME" -- start -p "$PORT"
  pm2 save
fi

echo ">>> Done."
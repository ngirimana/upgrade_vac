#!/bin/bash
set -euo pipefail

APP_DIR=/home/app/vacrw
APP_NAME=vacrw
PORT=3000

cd "$APP_DIR"

echo ">>> Versions:"
node -v
yarn -v
pm2 -v || true

echo ">>> Pulling latest code..."
git reset --hard
git pull origin main

echo ">>> Installing dependencies..."
yarn install --frozen-lockfile

echo ">>> Building Next.js..."
yarn build

echo ">>> Reloading PM2..."
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
else
  pm2 start node_modules/next/dist/bin/next --name "$APP_NAME" -- start -p "$PORT"
  pm2 save
fi

echo ">>> Done."
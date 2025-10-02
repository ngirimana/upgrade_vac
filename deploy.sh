#!/bin/bash
set -e

APP_DIR=/home/app/vacrw
cd $APP_DIR

echo ">>> Pulling latest code..."
git reset --hard
git pull origin main

echo ">>> Installing dependencies..."
if [ -f .yarnrc.yml ]; then
  yarn install --immutable
else
  yarn install --frozen-lockfile
fi

echo ">>> Building Next.js..."
yarn build

echo ">>> Reloading PM2..."
pm2 reload vacrw

echo ">>> Done."

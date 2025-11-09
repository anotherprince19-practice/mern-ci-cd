#!/bin/bash
# Helper to run on EC2 after files are copied (combined proxy + app)
set -e
APP_PATH="${1:-/home/ubuntu/mern-app}"
cd "$APP_PATH"
# optionally load .env: export $(cat .env | xargs)
docker compose pull || true
docker compose up -d --build

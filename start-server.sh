#!/bin/bash
cd "$(dirname "$0")"
echo "Sunucu başlatılıyor: http://127.0.0.1:3000"
echo "Durdurmak için Ctrl+C basın."
echo ""
npm run dev

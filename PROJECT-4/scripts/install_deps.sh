#!/bin/bash
cd /home/ubuntu/my-app
rm -rf node_modules package-lock.json
npm install --cache /home/ubuntu/.npm --no-audit
chmod -R u+w node_modules package-lock.json 2>/dev/null || true 

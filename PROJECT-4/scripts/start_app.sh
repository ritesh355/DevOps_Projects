#!/bin/bash
cd /home/ubuntu/my-app
nohup npm start > app.log 2>&1 &  # Runs app in background, logs to app.log

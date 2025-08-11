#!/bin/sh

# Entrypoint for Docker container; drops privileges after fixing bind mount permissions


useradd snowbot

chown -R snowbot:snowbot /home/snowbot

su snowbot
exec node dist/main.js
 
#trying to debug
#exec su -s /bin/bash -c "node dist/main.js" snowbot

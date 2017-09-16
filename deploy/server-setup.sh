#!/bin/bash
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo apt-get install build-essential -y
sudo apt-get install nginx -y
sudo apt-get install git -y
cd /opt/
git clone https://github.com/letscodeguru/nodejs-news-api.git
cd nodejs-news-api/
npm install 
npm install -g pm2
pm2 start ./bin/www
cp ./deploy/nginx.conf /etc/nginx/sites-available/default
systemctl restart nginx
  #https://hooks.slack.com/services/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
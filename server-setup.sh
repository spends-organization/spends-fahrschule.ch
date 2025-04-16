#!/bin/bash

# Exit on error
set -e

# Update system
sudo apt update
sudo apt upgrade -y

# Install Node.js (if not already installed)
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# Install Nginx
sudo apt install -y nginx

# Configure firewall
sudo apt install -y ufw
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

# Create directory for application
DEPLOY_DIR="/var/www/"
sudo mkdir -p $DEPLOY_DIR
sudo chown -R $USER:$USER $DEPLOY_DIR

# Create Nginx config
cat > /tmp/your-app.conf <<EOF
server {
    listen 80;
    server_name spends-fahrschule.ch www.spends-fahrschule.ch;
    root /var/www/;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Add caching for static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add-header Cache-Control "public, no-transform";
    }
}
EOF

sudo mv /tmp/your-app.conf /etc/nginx/sites-available/your-app.conf
sudo ln -sf /etc/nginx/sites-available/your-app.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install Certbot for HTTPS
sudo apt install -y snapd
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -sf /snap/bin/certbot /usr/bin/certbot

# Get SSL certificate
sudo certbot --nginx --agree-tos --non-interactive --redirect \
    --email development.laki@gmail.com \
    -d spends-fahrschule.ch -d www.spends-fahrschule.ch

echo "Server setup complete!" 
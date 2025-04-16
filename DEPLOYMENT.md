# Deployment Guide

This guide will help you deploy your React application to your Ubuntu VPS using GitHub Actions.

## Prerequisites

1. An Ubuntu VPS server
2. A domain with DNS records pointed to your VPS IP
3. GitHub repository for your project

## Deployment Steps

### 1. Set Up GitHub Secrets

In your GitHub repository, go to Settings > Secrets and Variables > Actions and add the following secrets:

- `EMAIL`: Your email address
- `SERVER_HOST`: Your VPS IP address or hostname
- `SERVER_SSH_KEY`: Your private SSH key (entire key including BEGIN and END lines)
- `SERVER_SUDO_PASSWORD`: The sudo password for your VPS user
- `SERVER_USERNAME`: Your VPS username (e.g., `root` or `ubuntu`)

### 2. Set Up Your VPS

1. Make the server setup script executable and run it:

```bash
chmod +x server-setup.sh
```

2. Before running the script, edit it to replace:
   - `your-domain.com` with your actual domain
   - `your-email@example.com` with your email address
   - `/var/www/your-app` with your preferred deployment path

3. Run the script:

```bash
./server-setup.sh
```

### 3. Push Changes to GitHub

Once you push changes to your main branch, GitHub Actions will automatically:
1. Build your application
2. Deploy it to your VPS
3. Restart Nginx to apply changes

### 4. Verify Deployment

Visit your domain in a web browser to verify that the deployment was successful.

## Troubleshooting

- **SSH Issues**: Ensure your SSH key is correctly configured in GitHub secrets and on your VPS
- **Nginx Issues**: Check Nginx logs with `sudo journalctl -u nginx`
- **GitHub Actions**: Review the Actions tab in your GitHub repository for any workflow errors
- **Manual Deploy**: If needed, you can manually deploy by building locally and using `rsync`

## Additional Configuration

### Custom Domain and HTTPS

The server setup script includes Certbot configuration for HTTPS. If you need to add more domains:

```bash
sudo certbot --nginx -d newdomain.com -d www.newdomain.com
```

### Logs and Monitoring

To view application logs, check the Nginx logs:

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Generating SSH Key

To generate an SSH key for the `SERVER_SSH_KEY` secret:

```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
cat ~/.ssh/id_rsa
```

Copy the entire output (including BEGIN and END lines) for the `SERVER_SSH_KEY` GitHub secret. 
# Spend's Fahrschule Website

A modern, responsive website for Spend's Fahrschule, a driving school based in Winterthur, Switzerland. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🚗 Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance
- 🔒 Privacy Policy and Legal Notice
- 📍 Interactive Google Maps integration
- 💬 WhatsApp integration for easy contact
- 📦 Package selection system
- 🌐 Multi-language support

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide Icons
- Google Maps API

## Project Structure

```
src/
├── components/     # React components
├── config/        # Configuration files
├── pages/         # Page components
└── main.tsx       # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/spends-fahrschule.ch.git
cd spends-fahrschule.ch
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Deployment

### GitHub Actions Workflow

The project uses GitHub Actions for automated deployment to a VPS. The workflow is defined in `.github/workflows/deploy.yml` and includes:

1. **Build Process:**
   - Checks out the code
   - Sets up Node.js
   - Installs dependencies
   - Builds the project

2. **Deployment:**
   - Uses SSH key authentication
   - Deploys files using rsync
   - Restarts Nginx server

### Required GitHub Secrets

The following secrets must be set in your GitHub repository:

- `SERVER_SSH_KEY`: Private SSH key for server authentication
- `SERVER_HOST`: Server IP address or domain
- `SERVER_USERNAME`: SSH username (default: root)

### Manual Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy the `dist` directory to your server:
```bash
rsync -avz --delete dist/ root@91.200.102.173:/var/www/spends-fahrschule.ch/
```

**Note:** The actual deployment directory is `/var/www/spends-fahrschule.ch` (not `/var/www/your-app` as shown in the workflow file).

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

### Contact Information

Update contact details in `src/config/contact.ts`:

```typescript
export const contact = {
  phone: "+41 XX XXX XX XX",
  whatsapp: "41XXXXXXXXX",
  email: "your@email.com",
  // ... other contact details
};
```

### Packages and Pricing

Update pricing and packages in `src/config/packages.ts`:

```typescript
export const packages = [
  {
    title: "Package Name",
    price: "CHF XXX",
    // ... other package details
  }
];
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Spend's Fahrschule
- Website: [spends-fahrschule.ch](https://spends-fahrschule.ch)
- Email: info@spends-fahrschule.ch
- Phone: +41 76 430 56 58

## Server Information

### Production Server Details

**Server Access:**
- **IP Address**: `91.200.102.173`
- **SSH User**: `root`
- **OS**: Ubuntu 22.04.5 LTS

**Website Location:**
- **Website Directory**: `/var/www/spends-fahrschule.ch`
- **Nginx Config**: `/etc/nginx/sites-available/spends-fahrschule.ch`
- **Enabled Config**: `/etc/nginx/sites-enabled/spends-fahrschule.ch`

**Services:**
- **Web Server**: Nginx (auto-starts on boot: `enabled`)
- **SSL Certificate**: Let's Encrypt (managed by Certbot)
- **Domains**: `spends-fahrschule.ch` and `www.spends-fahrschule.ch`

**Important Notes:**
- ✅ Nginx is configured to auto-start after reboot
- ✅ Website files are located in `/var/www/spends-fahrschule.ch`
- ✅ SSL certificates are automatically renewed by Certbot
- ⚠️ Server requires periodic updates and may need reboot after updates

**Quick Server Commands:**
```bash
# Check Nginx status
systemctl status nginx

# Restart Nginx
systemctl restart nginx

# Check website directory
ls -la /var/www/spends-fahrschule.ch

# View Nginx configuration
cat /etc/nginx/sites-available/spends-fahrschule.ch

# Check SSL certificate
certbot certificates
```

**Safe Update and Reboot Procedure:**
```bash
# 1. Check Nginx auto-start (should be 'enabled')
systemctl is-enabled nginx

# 2. Install updates
apt update
apt upgrade -y

# 3. Reboot server (Nginx will auto-start)
reboot

# 4. After reboot, verify website is running
systemctl status nginx
curl -I https://spends-fahrschule.ch
```

**⚠️ Important:** The website will automatically be available after reboot because Nginx is configured to auto-start. No manual intervention needed.

## Server Maintenance

The repository includes two maintenance scripts to help keep the server healthy and up-to-date:

### Scripts Overview

1. `server-maintenance.sh`: Main maintenance script that:
   - Monitors disk space usage (warns if above 80%)
   - Checks if Nginx is running and restarts if needed
   - Installs security updates automatically
   - Sends status emails to development.laki@gmail.com
   - Logs all activities to `/var/log/server-maintenance.log`

2. `setup-maintenance.sh`: One-time setup script that:
   - Installs required packages (mailutils, postfix)
   - Configures the mail server
   - Sets up the maintenance directory
   - Creates a weekly cron job

### Installation

1. Copy the scripts to your server:
```bash
scp server-maintenance.sh root@your-server-ip:/root/maintenance/
scp setup-maintenance.sh root@your-server-ip:/root/
```

2. SSH into your server and run the setup:
```bash
ssh root@your-server-ip
cd /root
chmod +x setup-maintenance.sh
./setup-maintenance.sh
```

3. During setup, when prompted for Postfix configuration:
   - Choose "Internet Site"
   - Use "spends-fahrschule.ch" as the system mail name

### Schedule

The maintenance script runs automatically every Sunday at 3 AM. You can check the schedule with:
```bash
crontab -l
```

### Logs and Monitoring

- Maintenance logs: `/var/log/server-maintenance.log`
- Status emails are sent to development.laki@gmail.com after each run
- Email status types:
  - SUCCESS: Everything is normal
  - WARNING: Disk space is above 80%
  - ERROR: Nginx was down or updates failed

### Manual Run

To run the maintenance script manually:
```bash
/root/maintenance/server-maintenance.sh
```

<!-- Security scan triggered at 2025-10-08 08:50:11 -->
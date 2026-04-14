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
Deployed on netlify.

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

<!-- Security scan triggered at 2025-10-08 08:50:11 -->

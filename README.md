# BlueStone Energy - Modern React Website

A modern, clean website for BlueStone Energy built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, clean UI design
- 🎨 Tailwind CSS for styling
- 🌐 Bilingual support (English/Arabic) with RTL support
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🎯 Component-based architecture

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router DOM** - Navigation (ready for future use)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── pages/          # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── AdvisoryPage.jsx
│   │   │   ├── TradingPage.jsx
│   │   │   └── ContactPage.jsx
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Textarea.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx  # Language management
│   ├── lib/
│   │   └── utils.js        # Utility functions
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features in Detail

### Language Support
- Toggle between English and Arabic
- Automatic RTL (Right-to-Left) layout for Arabic
- Font switching (Inter for English, IBM Plex Sans Arabic for Arabic)
- All content translated

### Pages
- **Home**: Hero section, company overview, statistics, services, values, and product focus
- **About**: Company information, vision, mission, and values
- **Advisory**: Strategic and commercial advisory services
- **Trading**: Product portfolio and trading capabilities
- **Contact**: Contact form with validation

## Contact Form Email Setup (PHP + SMTP)

The contact form now posts to `contact.php`, which sends email to:

- `ach@bluestoneenergy.energy`

### Files Added

- `contact.php` - Receives form data (`POST` JSON), validates input, and sends email using SMTP.
- `mail_config.php` - SMTP credentials/settings file to edit before deployment.

### SMTP Settings (Hostinger)

- Outgoing server (SMTP): `smtp.hostinger.com`
- Port: `465`
- Encryption: `SSL`
- Incoming server (IMAP): `imap.hostinger.com` (port `993`, SSL)
- Incoming server (POP): `pop.hostinger.com` (port `995`, SSL)

### Deployment Steps

1. Build frontend:
   ```bash
   npm run build
   ```
2. Upload `dist` content to your hosting public folder.
3. Upload `contact.php` and `mail_config.php` to the same public folder.
4. Edit `mail_config.php` and set:
   - `smtp_username`
   - `smtp_password`
   - `from_email`
5. Ensure `from_email` is a mailbox authorized for your Hostinger SMTP account.
6. Submit the Contact form from the live site and verify delivery to `ach@bluestoneenergy.energy`.

### Notes

- Keep `mail_config.php` on server only with real credentials; do not expose it to the frontend.
- Local `npm run dev` does not execute PHP. Test email sending on PHP-enabled hosting/local PHP server.

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on cards and buttons
- Fade-in animations for sections

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
- `primary`: Deep blue (#0E1C2A)
- `secondary`: Slate blue (#2C3E50)
- `accent`: Mineral teal (#2FA4A9)
- `muted`: Stone grey (#E6E8EA)

### Content
- Edit translations in `src/contexts/LanguageContext.jsx`
- Modify page content in respective page components
- Update company information in the context file

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 BlueStone Energy. All rights reserved.

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

© 2024 BlueStone Energy. All rights reserved.

# Aarovan.ai React Website

This is a React + Vite conversion of the Aarovan.ai website, maintaining the exact same CSS styling and implementation as the original HTML files.

## Features

- ⚡️ Built with React + Vite for fast development
- 🎨 Tailwind CSS with custom theme configuration
- 🧭 React Router for seamless navigation
- 📱 Fully responsive design
- 🎯 Component-based architecture

## Project Structure

```
aarovan-react/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Reusable navigation component
│   │   └── Footer.jsx         # Reusable footer component
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   ├── About.jsx          # About page
│   │   ├── Features.jsx       # Features page
│   │   ├── Team.jsx           # Team page
│   │   └── Contact.jsx        # Contact page
│   ├── App.jsx                # Main app with routing
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template with Tailwind config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd aarovan-react
```

2. Install dependencies (if not already done):
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Routes

- `/` - Home page
- `/about` - About page
- `/features` - Features page
- `/team` - Team page
- `/contact` - Contact page

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Inter and Noto Serif fonts
- **Material Symbols** - Icon library

## Custom Styling

The project uses custom Tailwind configuration with Material Design 3 color tokens:
- Custom color palette matching the original design
- Custom font families (Noto Serif for headlines, Inter for body)
- Custom border radius values
- Glass morphism effects
- Gradient utilities

## Notes

- All CSS classes and styling are preserved from the original HTML files
- Navigation automatically highlights the active page
- All images use the original Googleusercontent URLs
- The implementation maintains the exact same visual appearance as the HTML version

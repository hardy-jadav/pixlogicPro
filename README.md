# Cared4Paws - Pet Care Services Website

A modern, responsive website for Cared4Paws, a professional pet care service offering grooming, boarding, training, and veterinary care. Built with pure HTML, Tailwind CSS, and Font Awesome icons—all running locally without any CDN dependencies.

## 📋 Project Overview

Cared4Paws is a comprehensive pet care platform that provides:
- Pet grooming services
- Pet boarding and daycare
- Dog training programs
- Veterinary care
- Pet photography and updates

The website features a clean, modern design with responsive layouts, smooth animations, and an intuitive user experience.

## 🛠️ Technologies Used

### Core Libraries
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework for rapid UI development
- **Font Awesome** (v6.5.1) - Comprehensive icon library (self-hosted)
- **Inter Font** (v5.0.16) - Modern, readable typeface from Fontsource

### Build Tools
- **PostCSS** (v8.4.33) - CSS processing and transformation
- **Autoprefixer** (v10.4.17) - Automatic CSS vendor prefixing

### Development Environment
- Node.js for package management
- Local development server for testing
- No external dependencies or CDNs required

## 📁 Project Structure

```
PIXLOGIX PROJECT/
│
├── src/
│   ├── assets/
│   │   ├── fonts/               # Custom font files (if any)
│   │   ├── icons/               # SVG icons (dogFoot.svg, doubleDogIcon.svg, etc.)
│   │   └── images/              # Image assets organized by category
│   │       ├── main/            # Hero images, about section images
│   │       ├── moments/         # Gallery and testimonial images
│   │       ├── service/         # Service-related images
│   │       ├── team/            # Team member photos
│   │       └── update/          # Recent updates and blog images
│   │
│   ├── css/
│   │   ├── fonts.css            # Font imports and typography styles
│   │   ├── main.css             # Tailwind imports and custom component styles
│   │   └── variables.css        # CSS custom properties and design tokens
│   │
│   ├── js/
│   │   └── main.js              # Main JavaScript functionality
│   │
│   └── pages/
│       └── index.html           # Main homepage with all sections
│
├── dist/
│   └── output.css               # Compiled Tailwind CSS (auto-generated)
│
├── node_modules/                # Project dependencies
│
├── package.json                 # Project configuration and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS build configuration
└── README.md                    # This documentation
```

## 🎨 Custom Styles and Design System

### CSS Architecture
The project uses a modular CSS approach with three main style files:

#### `variables.css`
Contains CSS custom properties for consistent theming:
- Brand colors (primary: #f16e53, blue: #6a89b6)
- Spacing scales and typography sizes
- Shadow definitions and border radius
- Transition timings

#### `main.css`
- Imports Tailwind CSS base, components, and utilities
- Defines custom component classes (`.btn-primary`, `.card`, `.container-custom`)
- Includes utility classes for icons and animations
- Custom section title styles with icon backgrounds

#### `fonts.css`
- Imports the Inter font family from Fontsource
- Defines font stacks and weights
- Ensures consistent typography across the site

### Image Formats and Optimization
The project uses multiple image formats for optimal performance:

- **PNG** (.png) - For images with transparency (logos, icons)
- **JPEG/JPG** (.jpg) - For photographs (team photos, service images)
- **WebP** (.webp) - Modern format for better compression (hero images, galleries)
- **SVG** (.svg) - Vector graphics for icons and scalable elements

Images are organized in subfolders by content type for easy maintenance.

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Step 1: Install Dependencies
```bash
npm install
```

This installs all required packages including Tailwind CSS, Font Awesome, and build tools.

### Step 2: Start Development Server
```bash
npm run dev
```

This command:
- Watches for CSS changes
- Automatically compiles Tailwind CSS to `dist/output.css`
- Keeps the development server running

### Step 3: View the Website
Open `src/pages/index.html` in your browser or use a live server:
- **VS Code**: Install "Live Server" extension
- **Terminal**: `python -m http.server 8000` (Python 3)

## 📦 Available Scripts

```bash
npm run dev      # Start development server with file watching
npm run build    # Create production-ready minified CSS
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

### Performance Optimized
- Self-hosted fonts and icons (no external requests)
- Optimized images in multiple formats
- Minimal CSS bundle size

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly

### Interactive Elements
- Smooth animations with CSS transitions
- Hover effects and micro-interactions
- Responsive navigation menu
- FAQ accordion functionality

## 🔧 Customization Guide

### Adding New Colors
Edit `src/css/variables.css`:
```css
:root {
  --color-new-feature: #your-color;
}
```

### Modifying Typography
Update font sizes in `tailwind.config.js` or use custom classes in `main.css`.

### Adding New Icons
1. Place SVG files in `src/assets/icons/`
2. Reference in HTML: `<img src="../assets/icons/your-icon.svg" alt="Icon">`

### Creating New Components
Add component classes in `src/css/main.css`:
```css
.new-component {
  @apply your-tailwind-classes;
}
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern mobile browsers

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Upload to Web Server
1. Run production build
2. Upload the entire project (except `node_modules/`)
3. Ensure server serves `src/pages/index.html` as the homepage

## 🆘 Troubleshooting

### CSS Not Loading?
- Verify `npm run dev` is running
- Check `dist/output.css` exists and is linked in HTML
- Confirm Tailwind config includes correct template paths

### Images Not Showing?
- Check file paths in HTML (relative to `src/pages/`)
- Ensure images are in correct subfolders
- Verify file formats are supported

### Fonts Not Loading?
- Confirm `@fontsource/inter` is installed
- Check `src/css/fonts.css` imports

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Fontsource Fonts](https://fontsource.org)
- [WebP Image Format](https://developers.google.com/speed/webp)

## 📄 License

This project is built for Cared4Paws pet care services. Feel free to use as a reference for similar projects.

---

**Built with ❤️ for pets and their families**

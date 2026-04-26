# PIXLOGIX - Professional HTML & Tailwind CSS Project

A modern, industry-standard web project setup using pure HTML, Tailwind CSS, and Font Awesome icons—all running locally without any CDN dependencies.

## 📁 Project Structure

```
PIXLOGIX/
│
├── src/
│   ├── assets/
│   │   ├── images/              # Image files (hero banners, logos, features, etc.)
│   │   ├── icons/               # Custom SVG icons (optional)
│   │   └── fonts/               # Self-hosted fonts (if needed)
│   │
│   ├── css/
│   │   ├── main.css             # Tailwind entry point & custom styles
│   │   ├── variables.css        # CSS custom properties & variables
│   │   └── fonts.css            # Font imports (Fontsource/Inter)
│   │
│   ├── js/
│   │   └── main.js              # Main JavaScript file
│   │
│   └── pages/
│       └── index.html           # Home page
│
├── dist/
│   └── output.css               # Generated Tailwind CSS (Do not edit)
│
├── node_modules/                # Project dependencies
│
├── package.json                 # Project metadata & dependencies
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

## 🚀 Quick Start

### Step 1: Initialize Node.js Project
```bash
npm init -y
```

### Step 2: Install Dependencies

**Install Development Dependencies (Build Tools):**
```bash
npm install -D tailwindcss postcss autoprefixer
```

**Install Production Dependencies (Fonts & Icons):**
```bash
npm install @fortawesome/fontawesome-free @fontsource/inter
```

### Step 3: Initialize Tailwind & PostCSS
```bash
npx tailwindcss init -p
```

### Step 4: Run Development Server
```bash
npm run dev
```

This will:
- Watch for CSS changes
- Automatically compile Tailwind CSS to `dist/output.css`
- Keep the process running in the terminal

### Step 5: Open HTML File
Open `src/pages/index.html` in your browser or use a live server extension:
- **VS Code**: Install "Live Server" extension by Ritwick Dey
- **Terminal**: `python -m http.server 8000` (Python 3)

## 📦 Dependencies

### Dev Dependencies
- **tailwindcss** (v3.4.1) - CSS utility framework
- **postcss** (v8.4.33) - CSS transformer
- **autoprefixer** (v10.4.17) - Browser prefix handler

### Production Dependencies
- **@fortawesome/fontawesome-free** (v6.5.1) - Icon library
- **@fontsource/inter** (v5.0.16) - Inter font family

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Watches CSS files and regenerates output.css on changes

### Production Build
```bash
npm run build
```
Creates a minified production-ready CSS file

## 🎨 Customization

### Tailwind Configuration
Edit `tailwind.config.js` to:
- Add custom colors
- Extend spacing
- Define font families
- Add custom plugins

### CSS Variables
Edit `src/css/variables.css` to define:
- Color schemes
- Spacing values
- Shadow styles
- Border radius values
- Transition durations

### Fonts
To add more fonts from Fontsource:
1. Install: `npm install @fontsource/[font-name]`
2. Import in `src/css/fonts.css`

## 🎯 Adding Font Awesome Icons

Font Awesome is already installed locally. Use icons like:
```html
<i class="fas fa-home"></i>                    <!-- Solid icon -->
<i class="far fa-heart"></i>                   <!-- Regular icon -->
<i class="fab fa-facebook"></i>                <!-- Brand icon -->
<i class="fas fa-icon-name icon-lg"></i>       <!-- With size class -->
```

Find all icons at: [FontAwesome Icons](https://fontawesome.com/icons)

Size classes available:
- `.icon-sm` - 16px
- `.icon-md` - 24px
- `.icon-lg` - 32px
- `.icon-xl` - 48px

## 🏗️ Building Components

### Buttons
```html
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>
```

### Cards
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Animations
Add `data-animate` attribute to elements for fade-in-up animation:
```html
<div data-animate>Content with animation</div>
```

## 📱 Responsive Design

Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

Example:
```html
<div class="text-base md:text-lg lg:text-xl">Responsive text</div>
```

## 🔍 Browser Support

All modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Best Practices

1. **Keep HTML semantic** - Use proper semantic tags (header, nav, main, footer)
2. **Use Tailwind utilities** - Don't write custom CSS when Tailwind has utilities
3. **Organize assets** - Keep images, fonts, and icons in their respective folders
4. **Minify production** - Always run `npm run build` before deployment
5. **No CDN needed** - All assets are local for better performance

## 🚀 Deployment

### Local Testing
```bash
npm run dev          # Start dev server
# In another terminal:
python -m http.server 8000
```

### Production Build
```bash
npm run build        # Creates minified dist/output.css
```

### Upload to Server
1. Run `npm run build`
2. Upload all files to your server
3. Point server to `src/pages/index.html`

## 🆘 Troubleshooting

### Tailwind CSS not applying?
- Ensure `npm run dev` is running
- Check that HTML file links to `dist/output.css`
- Verify template paths in `tailwind.config.js`

### Font Awesome icons not showing?
- Check that `node_modules/@fortawesome/fontawesome-free` exists
- Ensure Font Awesome CSS is linked in HTML
- Use correct icon names (e.g., `fas`, `far`, `fab`)

### Node modules missing?
```bash
npm install
```

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Fontsource Fonts](https://fontsource.org)
- [MDN Web Docs](https://developer.mozilla.org)

## 📄 License

MIT - Feel free to use this project for personal and commercial purposes.

---

**Built with ❤️ using HTML, Tailwind CSS & Font Awesome**

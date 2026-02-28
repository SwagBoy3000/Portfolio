# 🌐 SwagBoy3000's Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?logo=github)](https://swagboy3000.github.io/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://swagboy3000.github.io/)

> *My personal space on the web - a modern, responsive portfolio showcasing my journey as a Computer Science student at USTHB.*

## 🌟 Highlights

- **🎨 Beautiful Dark/Light Theme** - Catppuccin color scheme with persistent theme switching
- **📱 Fully Responsive Design** - Optimized for all devices with mobile-first approach
- **✨ Smooth Animations** - AOS (Animate On Scroll) library integration for elegant transitions
- **🎯 Custom Scrollbar** - SimpleBar implementation for sleek scrolling experience
- **🧭 Floating Navigation** - Intuitive navigation with active section highlighting
- **⚡ Zero Framework Bloat** - Pure HTML, CSS, and vanilla JavaScript for maximum performance
- **🎨 Professional Design** - Clean, modern interface with Montserrat typography

## ℹ️ Overview

This is my personal portfolio website where I showcase my projects, skills, and experience as a Computer Science student at the **University of Science and Technology Houari Boumediene (USTHB)**. Built from scratch using core web technologies, it demonstrates my front-end development capabilities, attention to detail, and understanding of modern web design principles.

The portfolio features:
- **Advanced theming** with Catppuccin color palette (Latte & Mocha variants)
- **Smooth scrolling** with custom scroll container
- **Section-based navigation** with automatic active state tracking
- **Persistent user preferences** via localStorage
- **Accessibility-focused** design with semantic HTML

### ✍️ Author

I'm **Idir** ([@SwagBoy3000](https://github.com/SwagBoy3000)), a Computer Science student at USTHB passionate about building elegant, functional web applications. This portfolio is a living document of my development journey - I'll be adding more projects as I continue learning and creating.

**Location:** Algeria 🇩🇿  
**University:** USTHB (University of Science and Technology Houari Boumediene)  
**Focus:** Full-Stack Development, Web Technologies, Software Engineering

## 🚀 Live Demo

Check out the live portfolio here: **[swagboy3000.github.io](https://swagboy3000.github.io/)**

## ✨ Features

### 🎨 **Theme System**
- Catppuccin Latte (Light) and Mocha (Dark) themes
- Persistent theme selection using localStorage
- Smooth color transitions between themes
- Custom color variables for easy customization

### 🧭 **Navigation**
- Floating side navigation with icon indicators
- Active section auto-detection on scroll
- Smooth scroll to section functionality
- Responsive navigation layout

### 📱 **Responsive Design**
- Mobile-first approach
- Breakpoints for tablets and desktops
- Fluid typography and spacing
- Optimized touch targets

### ✨ **Animations**
- AOS (Animate On Scroll) integration
- Custom easing and timing
- Fade-in, fade-up, and slide animations
- Performance-optimized transitions

### 🎯 **Custom Scrollbar**
- SimpleBar for consistent cross-browser scrolling
- Custom styling matching theme colors
- Smooth scroll performance

## 📋 Sections

### 🏠 **Home/Header**
- Hero section with profile image
- Social media links (GitHub, LinkedIn)
- Call-to-action buttons
- Dynamic greeting

### 📄 **Resume**
- Skills showcase
- Experience timeline
- Education details
- Downloadable CV option

### 💼 **Projects**
- Project cards with descriptions
- Live demo and source code links
- Technology stack tags
- Featured work highlighting

### ❓ **FAQs**
- Common questions about my work
- Development philosophy
- Collaboration information

### 📬 **Contact**
- Contact form integration
- Social media links
- Professional email
- Response time expectations

## 🛠️ Built With

### Core Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling, animations, and layouts
  - Custom properties (CSS variables)
  - Flexbox & Grid layouts
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Interactive functionality
  - DOM manipulation
  - Event handling
  - localStorage API
  - Smooth scrolling

### Libraries & Tools
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** - Scroll animations (v2.3+)
- **[SimpleBar](https://github.com/Grsmto/simplebar)** - Custom scrollbar
- **[Unicons](https://iconscout.com/unicons)** - Icon library
- **[Google Fonts](https://fonts.google.com/)** - Montserrat typography
- **GitHub Pages** - Static site hosting

### Design System
- **[Catppuccin](https://github.com/catppuccin/catppuccin)** - Color scheme
  - Latte variant for light mode
  - Mocha variant for dark mode

## 💻 Local Development

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server (Python, Node.js, or VS Code Live Server)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/SwagBoy3000/SwagBoy3000.github.io.git

# Navigate to the directory
cd SwagBoy3000.github.io

# Option 1: Open directly in browser
# Simply open index.html in your preferred browser

# Option 2: Use Python's built-in server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server -p 8000
# Then visit http://localhost:8000

# Option 4: Use VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

### Project Structure
```
SwagBoy3000.github.io/
├── index.html              # Main HTML structure
├── index.css               # Global styles and theme variables
├── index.js                # JavaScript functionality
├── package.json            # Project metadata
├── .gitignore              # Git ignore rules
├── README.md               # This file
└── 13ba2f96...jpeg         # Profile image
```

## 🧩 Code Architecture

### JavaScript Modules

#### **Theme System** (`initializeDarkTheme()`)
```javascript
// Handles theme switching with localStorage persistence
- Toggle between light/dark modes
- Save user preference
- Update icon indicators
- Apply theme on page load
```

#### **Floating Navigation** (`initializeFloatNav()`)
```javascript
// Manages navigation state based on scroll position
- Track active section
- Highlight current nav item
- Handle click navigation
- Smooth scroll integration
```

#### **Smooth Scrolling** (`initializeSmoothScroll()`)
```javascript
// Provides smooth scroll behavior for anchor links
- Intercept hash navigation
- Smooth scroll to target
- Update browser history
- Work with SimpleBar container
```

#### **AOS Integration**
```javascript
// Initialize and manage scroll animations
- Configure animation settings
- Handle scroll container
- Refresh on scroll events
- Mirror animations
```

### CSS Architecture

#### **CSS Custom Properties**
```css
:root {
  /* Theme colors - Catppuccin Latte */
  --color-primary: #8839ef;
  --color-gray-0: #dce0e8;
  /* ... more variables */
}

.dark-theme-variables {
  /* Theme colors - Catppuccin Mocha */
  --color-primary: #cba6f7;
  --color-gray-0: #1e1e2e;
  /* ... more variables */
}
```

#### **Responsive Breakpoints**
```css
--container-w-lg: 74%;   /* Desktop */
--container-w-md: 90%;   /* Tablet */
--container-w-sm: 94%;   /* Mobile */
```

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `index.css`:
```css
:root {
  --color-primary: #8839ef;        /* Main accent color */
  --color-primary-variant: rgba(136, 57, 239, 0.5);
  /* Modify other color variables as needed */
}
```

### Adding Sections
1. Add HTML section in `index.html`
2. Add navigation link in `.float_nav`
3. Add corresponding styles in `index.css`
4. Update JavaScript section tracking if needed

### Modifying Animations
Customize AOS settings in `index.js`:
```javascript
AOS.init({
  duration: 800,        // Animation duration
  easing: 'ease-in-out', // Timing function
  once: false,          // Repeat animations
  mirror: true,         // Animate on scroll up
  offset: 120          // Offset from viewport
});
```

## 📊 Performance Features

- **Lazy Loading** - Images and content load on demand
- **Minimal Dependencies** - Only essential libraries included
- **Optimized Assets** - Compressed images and minified code ready
- **Fast Load Time** - Static site with no server-side processing
- **CDN Resources** - Libraries loaded from fast CDNs
- **Hardware Acceleration** - CSS transforms for smooth animations

## 🔧 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Base: 320px - 767px

/* Tablet */
Medium: 768px - 1023px

/* Desktop */
Large: 1024px+
```

## 🚀 Deployment

This site is automatically deployed via **GitHub Pages**:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Live site updates within 1-2 minutes
4. Available at `https://swagboy3000.github.io/`

### Custom Domain (Optional)
To use a custom domain:
1. Add `CNAME` file with your domain
2. Configure DNS with your provider
3. Enable HTTPS in GitHub Pages settings

## 📈 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Integrate contact form backend
- [ ] Add more project showcases
- [ ] Implement project filtering/search
- [ ] Add testimonials section
- [ ] Create multilingual support (English/French/Arabic)
- [ ] Add resume download functionality
- [ ] Implement accessibility improvements (ARIA labels)
- [ ] Add analytics integration
- [ ] Create automated Lighthouse CI checks

## 🤝 Featured Projects

### [CLI Quiz Game](https://github.com/SwagBoy3000/CLI_Quiz) 🎯
Interactive Python quiz application with question management, save/load functionality, and beautiful terminal UI.

### [Note MERN](https://github.com/SwagBoy3000/Note_MERN) 📝
Full-stack note-taking application built with MongoDB, Express, React, and Node.js.

*More projects being added regularly!*

## 💭 Connect With Me

Got suggestions, opportunities, or just want to connect?

- 📧 **Email:** [Your Email Here]
- 💼 **LinkedIn:** [Your LinkedIn]
- 🐙 **GitHub:** [@SwagBoy3000](https://github.com/SwagBoy3000)
- 🌐 **Portfolio:** [swagboy3000.github.io](https://swagboy3000.github.io/)

### Contributing
While this is a personal portfolio, I'm open to suggestions! If you spot a bug or have an idea for improvement:
- Open an [issue](https://github.com/SwagBoy3000/SwagBoy3000.github.io/issues)
- Submit a pull request
- Reach out directly

This portfolio is constantly evolving as I learn and grow as a developer. Feel free to explore the code and let me know what you think!

## 📄 License

This project is open source and available for educational purposes. Feel free to use it as inspiration for your own portfolio, but please don't copy it wholesale - make it your own! 🎨

---

**Built with 💜 by SwagBoy3000 | CS Student @ USTHB**

*Last Updated: February 2026*
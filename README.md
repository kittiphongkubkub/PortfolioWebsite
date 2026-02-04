# 🎨 Portfolio Website

A stunning, modern portfolio website featuring video background, smooth GSAP animations, glassmorphism effects, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)

## ✨ Features

### 🎬 Visual Excellence
- **Video Background**: Immersive full-screen video background in hero section
- **Glassmorphism Effects**: Modern frosted glass aesthetic on cards and overlays
- **Vibrant Gradients**: Eye-catching purple, blue, and pink gradient color scheme
- **Smooth Animations**: Professional GSAP-powered scroll animations throughout

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with video background and social links
2. **About Section**: Personal introduction with animated statistics
3. **Projects Section**: Portfolio showcase with 6 project cards and hover effects
4. **Skills Section**: Categorized skills display (Frontend, Backend, Tools)
5. **Contact Section**: Contact form and information with social links

### 🎯 Animations & Interactions
- Scroll-triggered GSAP animations for all sections
- Stagger animations for cards and lists
- Parallax scrolling effect on video background
- Interactive hover effects with scale and transform
- Custom cursor with smooth following
- Counter animation for statistics
- Mobile-responsive navigation

### 🎨 Design Highlights
- **Modern Typography**: Inter font family from Google Fonts
- **Color Palette**: 
  - Primary: Purple to Blue gradient (#667eea → #764ba2)
  - Secondary: Pink gradient (#f093fb → #f5576c)
  - Accent: Cyan gradient (#4facfe → #00f2fe)
- **Dark Theme**: Optimized for dark mode aesthetics
- **Responsive**: Fully responsive design for all screen sizes

## 🚀 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript ES6+**: Interactive functionality
- **GSAP 3.12.5**: Professional animation library
- **ScrollTrigger**: Scroll-based animation plugin
- **Font Awesome 6.5**: Icon library

## 📂 Project Structure

```
Portfolio Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling with animations
├── script.js           # JavaScript with GSAP animations
├── README.md           # Project documentation
└── background/
    └── background-1.mp4  # Hero section video background
```

## 🎯 How to Use

### Method 1: Direct Open
1. Simply open `index.html` in your web browser
2. That's it! No server or build process required

### Method 2: Local Server (Recommended)
For better video loading and performance:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### 1. Personal Information
Edit `index.html` to update:
- Your name in the hero section
- Job title/subtitle
- About section content
- Contact information (email, phone, location)
- Social media links

### 2. Projects
Replace the 6 placeholder projects with your own:
- Update project titles
- Change descriptions
- Modify technology tags
- Add live demo and GitHub links
- (Optional) Replace placeholder icons with actual project images

### 3. Skills
Customize the skills sections:
- Add or remove skill cards
- Change skill categories
- Update icons (using Font Awesome classes)

### 4. Colors
Modify colors in `styles.css` under the `:root` section:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    /* ... modify other colors ... */
}
```

### 5. Video Background
Replace `background/background-1.mp4` with your own video:
- Keep file size optimized (< 10MB recommended)
- Use MP4 format for best compatibility
- Recommended resolution: 1920x1080

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌟 Features in Detail

### GSAP Animations
All animations are optimized for performance:
- Hero section: Sequential fade-in with stagger
- Sections: Scroll-triggered animations
- Cards: Scale and transform on hover
- Cursor: Custom smooth-following cursor (desktop only)
- Stats: Counter animation on scroll

### Performance Optimizations
- Video pauses when out of viewport
- Smooth scroll behavior
- Optimized animation timing
- Lazy-loaded animations with ScrollTrigger
- GPU-accelerated transforms

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 License

This project is free to use for personal and commercial purposes.

## 💡 Tips

1. **Images**: Replace icon placeholders with real project screenshots for better visual impact
2. **Content**: Keep descriptions concise and impactful
3. **Performance**: Optimize video file size for faster loading
4. **SEO**: Update meta tags in `<head>` for better search engine visibility
5. **Analytics**: Add Google Analytics or similar for tracking

## 📧 Contact

© Kittiphong Toadonthong


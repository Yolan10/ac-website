# ActiveCampaign Agency Partner Program Website

A professional, responsive HTML website for promoting the ActiveCampaign Agency Partner Program. This website is designed to educate and convert agencies, consultants, and freelancers into ActiveCampaign partners.

## 🎯 Overview

This is a complete multi-page HTML website featuring:
- Modern, responsive design
- Pure HTML/CSS/JavaScript (no frameworks required)
- Fast loading and SEO optimized
- Mobile-first responsive layout
- Comprehensive content about the partner program

## 📁 Project Structure

```
ac-website/
├── index.html              # Homepage
├── about.html              # About the Program
├── benefits.html           # Partner Benefits
├── how-it-works.html       # Process & Requirements
├── resources.html          # Partner Resources
├── success-stories.html    # Case Studies & Testimonials
├── faq.html                # Frequently Asked Questions
├── apply.html              # Application & Contact
├── css/
│   ├── main.css            # Base styles & layout
│   ├── components.css      # Reusable components
│   └── responsive.css      # Mobile responsiveness
├── js/
│   ├── main.js             # Navigation & interactions
│   └── faq.js              # FAQ accordion functionality
├── assets/
│   └── images/             # Image assets (placeholder)
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Simple HTTP Server (Recommended for Testing)

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have it installed)
npx serve

# Using PHP
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

### Option 2: Direct File Access

Simply open `index.html` in your web browser. All pages will work without a server.

## 🌐 Deployment Options

### 1. Netlify (Easiest - Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Steps:**
1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop the entire project folder
3. Your site is live! Netlify provides a free domain or connect your own.

**Using Git:**
```bash
# Push to GitHub first, then:
1. Go to Netlify Dashboard
2. Click "New site from Git"
3. Select your repository
4. Deploy!
```

### 2. Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Import Git repository
2. Click Deploy
3. Done!

### 3. GitHub Pages

```bash
# Push to GitHub repository
git add .
git commit -m "Initial commit"
git push origin main

# Then in GitHub:
1. Go to Settings → Pages
2. Select branch: main
3. Select folder: / (root)
4. Save

# Your site will be live at:
# https://yourusername.github.io/repo-name/
```

### 4. AWS S3 + CloudFront

```bash
# Create S3 bucket
aws s3 mb s3://your-bucket-name

# Upload files
aws s3 sync . s3://your-bucket-name --exclude ".git/*"

# Enable static website hosting
aws s3 website s3://your-bucket-name --index-document index.html

# Optional: Set up CloudFront CDN for HTTPS and better performance
```

### 5. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

### 6. Traditional Web Hosting (cPanel, etc.)

1. Compress the entire project into a .zip file
2. Upload via FTP or File Manager
3. Extract in public_html or www directory
4. Done!

**Compatible with:**
- Bluehost
- HostGator
- SiteGround
- GoDaddy
- Any hosting provider with static file support

## 🎨 Customization

### Colors

Edit CSS variables in `css/main.css`:

```css
:root {
  --primary-color: #0066CC;     /* Main blue */
  --secondary-color: #6C5CE7;   /* Purple accent */
  --accent-color: #00D084;      /* Green for CTAs */
  /* ... more colors */
}
```

### Content

All content is in HTML files. Simply edit the text in each page:

- **Homepage**: `index.html`
- **About**: `about.html`
- **Benefits**: `benefits.html`
- **How It Works**: `how-it-works.html`
- **Resources**: `resources.html`
- **Success Stories**: `success-stories.html`
- **FAQ**: `faq.html`
- **Apply**: `apply.html`

### Navigation

The navigation is identical across all pages. Update the navigation in each HTML file if you add new pages.

### Images

Place your images in the `assets/images/` folder and reference them:

```html
<img src="assets/images/your-image.jpg" alt="Description">
```

## 📱 Features

### Responsive Design
- Mobile-first approach
- Works perfectly on phones, tablets, and desktops
- Breakpoints: 480px, 768px, 1024px, 1400px

### Interactive Elements
- Sticky navigation with mobile hamburger menu
- Smooth scrolling
- FAQ accordion (expand/collapse)
- Form validation
- Hover effects and animations
- Scroll-to-top button

### SEO Optimized
- Semantic HTML5
- Meta tags for social sharing
- Fast loading (no external dependencies)
- Clean, crawlable structure

### Accessibility
- ARIA labels
- Keyboard navigation support
- High contrast ratios
- Alt text support for images

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Load Time**: < 2 seconds
- **Page Size**: ~50KB (HTML + CSS + JS combined)
- **No external dependencies**: Everything is self-contained
- **No build process required**: Deploy as-is

## 🛠️ Development

### Making Changes

1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes
3. No build step required!

### Testing Locally

```bash
# Simple test server
python3 -m http.server 8000
```

### Code Quality

- Clean, commented code
- Modular CSS structure
- Semantic HTML
- Vanilla JavaScript (no jQuery needed)

## 📋 Pages Overview

1. **Homepage** (`index.html`)
   - Hero section with CTA
   - Key statistics
   - Feature highlights
   - Process overview
   - Testimonials

2. **About** (`about.html`)
   - Program mission
   - About ActiveCampaign
   - Who should join
   - Partner values

3. **Benefits** (`benefits.html`)
   - Detailed benefit list
   - Commission structure
   - Partner tiers
   - ROI calculator example

4. **How It Works** (`how-it-works.html`)
   - Application process
   - Step-by-step guide
   - Requirements
   - Timeline

5. **Resources** (`resources.html`)
   - Training & certification
   - Marketing materials
   - Sales tools
   - Technical documentation

6. **Success Stories** (`success-stories.html`)
   - Partner case studies
   - Testimonials
   - Success metrics
   - Real results

7. **FAQ** (`faq.html`)
   - Common questions
   - Interactive accordion
   - Organized by category
   - Search functionality

8. **Apply** (`apply.html`)
   - Application link to official site
   - Contact form
   - Next steps
   - Requirements reminder

## 🔗 Important Links

- [ActiveCampaign Partner Signup](https://www.activecampaign.com/partner/signup.php)
- [ActiveCampaign Website](https://www.activecampaign.com)
- [Help Center](https://help.activecampaign.com)

## 📝 License

This website template is created for promoting the ActiveCampaign Agency Partner Program.

## 🤝 Support

For questions about the website:
- Open an issue in this repository

For questions about the partner program:
- Email: partners@activecampaign.com
- Visit: [ActiveCampaign Partner Program](https://www.activecampaign.com/partner)

## ✨ Credits

Designed and developed for ActiveCampaign Agency Partner Program promotion.

---

**Ready to Deploy?** Choose one of the deployment options above and get your site live in minutes!

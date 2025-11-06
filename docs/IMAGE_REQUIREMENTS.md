# Image Requirements & Sources

This document details all images needed for the website with exact sources from Unsplash and Pexels.

## License Information

**Unsplash License:**
- Free to use for commercial and non-commercial purposes
- No permission needed
- Attribution appreciated but not required
- https://unsplash.com/license

**Pexels License:**
- Free for personal and commercial use
- No attribution required
- Modification allowed
- https://www.pexels.com/license/

---

## Image Categories & Requirements

### 1. HERO IMAGES (Homepage & Landing Pages)

**Purpose:** Large, inspiring background images for hero sections

**Specifications:**
- Resolution: 1920x1080px minimum
- Format: JPG (optimized for web, 70-80% quality)
- File size: <300KB each
- Style: Professional, modern, inspiring

**Required Images (3):**

1. **hero-partnership.jpg** (Homepage)
   - Theme: Business partnership, handshake, collaboration
   - Suggested sources:
     - Unsplash: https://unsplash.com/photos/two-person-handshaking-8uZPynIu-rQ
     - Alternative: https://unsplash.com/photos/people-sitting-down-near-table-with-assorted-laptop-computers-QBpZGqEMsKg
   - Backup: Pexels search "business handshake"

2. **hero-success.jpg** (About/Success Stories)
   - Theme: Team success, celebration, achievement
   - Suggested sources:
     - Unsplash: https://unsplash.com/photos/people-sitting-near-table-with-laptop-computer-376KN_ISplE
     - Alternative: https://unsplash.com/photos/group-of-people-using-laptop-computer-Oalh2MojUuk
   - Backup: Pexels search "team success"

3. **hero-growth.jpg** (Benefits/How It Works)
   - Theme: Growth, charts, analytics, progress
   - Suggested sources:
     - Unsplash: https://unsplash.com/photos/macbook-pro-on-black-textile-hpjSkU2UYSU
     - Alternative: https://unsplash.com/photos/person-using-macbook-pro-on-person-s-lap-npxXWgQ33ZQ
   - Backup: Pexels search "business growth laptop"

---

### 2. BACKGROUND IMAGES (Sections)

**Purpose:** Subtle backgrounds for sections and content areas

**Specifications:**
- Resolution: 1920x1080px
- Format: JPG
- File size: <200KB
- Style: Abstract, geometric, subtle

**Required Images (2):**

1. **abstract-gradient.jpg**
   - Theme: Abstract gradient, blue/purple tones
   - Suggested sources:
     - Unsplash: https://unsplash.com/photos/a-close-up-of-a-wall-with-a-pattern-on-it-5E5N49RWtbA
     - Alternative: https://unsplash.com/photos/a-purple-and-blue-abstract-background-with-curves-uClXX2NTlKM

2. **geometric-pattern.jpg**
   - Theme: Subtle geometric pattern, light colors
   - Suggested sources:
     - Unsplash: https://unsplash.com/photos/white-textile-in-close-up-photography-XJXWbfSo2f0
     - Alternative: https://unsplash.com/photos/gray-and-black-hive-printed-textile-FV3GConVSss

---

### 3. CONTENT PLACEHOLDER IMAGES

**Purpose:** Replace emoji placeholders in content sections

**Specifications:**
- Resolution: 800x600px
- Format: JPG
- File size: <150KB
- Style: Professional, relevant to context

**Required Images (5):**

1. **partnership-graphic.jpg** (About page - Partnership section)
   - Theme: Two professionals collaborating, modern office
   - Unsplash: https://unsplash.com/photos/two-women-sitting-at-a-table-looking-at-a-computer-screen-IgUR1iX0mqM
   - Alternative: https://unsplash.com/photos/man-and-woman-near-table-bzqU01v-G54

2. **dashboard-preview.jpg** (Resources page - Portal preview)
   - Theme: Analytics dashboard, charts, data visualization
   - Unsplash: https://unsplash.com/photos/turned-on-monitoring-screen-m_HRfLhgABo
   - Alternative: https://unsplash.com/photos/black-flat-screen-computer-monitor-pypeCEaJeZY

3. **success-celebration.jpg** (Success Stories page)
   - Theme: Team celebrating, high-five, achievement
   - Unsplash: https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-mfB1B1s4sMc
   - Alternative: https://unsplash.com/photos/three-men-laughing-while-looking-in-the-laptop-inside-room-QckxruozjRg

4. **chart-growth.jpg** (Success Stories - Case study visuals)
   - Theme: Upward trending chart, business growth
   - Unsplash: https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA
   - Alternative: https://unsplash.com/photos/space-gray-iphone-6-turned-on-displaying-stock-market-chart-hChSg6FL9_k

5. **rocket-launch.jpg** (Success Stories - Another case study)
   - Theme: Rocket launch metaphor or business launch
   - Unsplash: https://unsplash.com/photos/nasa-rocket-launch-during-daytime-Q1p7bh3SHj8
   - Alternative: Use abstract growth graphic instead

---

### 4. FAVICON & TOUCH ICONS

**Purpose:** Browser tab icon and mobile home screen icons

**Specifications:**
- favicon.ico: 32x32px, ICO format
- apple-touch-icon.png: 180x180px, PNG format
- android-chrome-192.png: 192x192px, PNG format

**Design:**
- Use ActiveCampaign "AC" letters or lightning bolt
- Simple, recognizable at small sizes
- Brand colors (blue/purple)

**Options:**
1. Create using online tool: https://realfavicongenerator.net/
2. Use Font Awesome bolt icon as base
3. Simple "AC" monogram

---

## Download Instructions

### Method 1: Manual Download (Recommended)

1. Visit each Unsplash/Pexels URL listed above
2. Click "Download" button (usually top-right)
3. Select appropriate size (Large or Original)
4. Save to corresponding folder in `assets/images/`

### Method 2: Unsplash API (Advanced)

```bash
# Using Unsplash Source API for quick testing
# Example: Download random business photo
curl "https://source.unsplash.com/1920x1080/?business,partnership" -o hero-partnership.jpg
```

### Method 3: Use Provided URLs Script

See `download-images.sh` script for automated download using curl.

---

## Folder Structure

```
assets/images/
├── hero/
│   ├── hero-partnership.jpg (1920x1080, <300KB)
│   ├── hero-success.jpg (1920x1080, <300KB)
│   └── hero-growth.jpg (1920x1080, <300KB)
│
├── backgrounds/
│   ├── abstract-gradient.jpg (1920x1080, <200KB)
│   └── geometric-pattern.jpg (1920x1080, <200KB)
│
├── content/
│   ├── partnership-graphic.jpg (800x600, <150KB)
│   ├── dashboard-preview.jpg (800x600, <150KB)
│   ├── success-celebration.jpg (800x600, <150KB)
│   ├── chart-growth.jpg (800x600, <150KB)
│   └── rocket-launch.jpg (800x600, <150KB)
│
└── icons/
    ├── favicon.ico (32x32)
    ├── apple-touch-icon.png (180x180)
    └── android-chrome-192.png (192x192)
```

---

## Image Optimization

Before adding to repository:

1. **Compress images:**
   - Online: https://tinypng.com/ or https://squoosh.app/
   - CLI: `imagemagick` or `jpegoptim`

2. **Target file sizes:**
   - Hero images: <300KB
   - Content images: <150KB
   - Backgrounds: <200KB

3. **Quality settings:**
   - JPG: 70-80% quality
   - PNG: Use pngquant for compression

---

## HTML Implementation

Once images are downloaded, update HTML files:

### Homepage (index.html)
```html
<!-- Add to hero section -->
<section class="hero" style="background-image: url('assets/images/hero/hero-partnership.jpg');">
```

### About (about.html)
```html
<!-- Replace content placeholder -->
<div class="content-image">
  <img src="assets/images/content/partnership-graphic.jpg" alt="Partnership collaboration" />
</div>
```

### And so on for other pages...

---

## Next Steps

1. ☐ Download all 10 required images
2. ☐ Optimize images (compress to target sizes)
3. ☐ Organize in proper folders
4. ☐ Create favicon.ico and touch icons
5. ☐ Update HTML files with image references
6. ☐ Test image loading on all pages
7. ☐ Create IMAGE_CREDITS.md with attributions

---

**Last Updated:** 2024-11-06
**Status:** Ready for download

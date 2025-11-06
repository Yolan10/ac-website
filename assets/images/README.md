# Images Directory

This directory contains all images used in the ActiveCampaign Agency Partner website.

## Current Status

🟡 **SVG Placeholders** - Temporary placeholders are in place

To add real images:
1. Run `../../download-images.sh` from root directory
2. Or manually download from `../../docs/IMAGE_REQUIREMENTS.md`

## Directory Structure

```
images/
├── hero/               # Hero section backgrounds (1920x1080)
│   ├── hero-partnership.svg (placeholder)
│   ├── hero-success.svg (placeholder)
│   └── hero-growth.svg (placeholder)
│
├── backgrounds/        # Section backgrounds (1920x1080)
│   ├── abstract-gradient.svg (placeholder)
│   └── geometric-pattern.svg (placeholder)
│
├── content/           # Content images (800x600)
│   ├── partnership-graphic.svg (placeholder)
│   ├── dashboard-preview.svg (placeholder)
│   ├── success-celebration.svg (placeholder)
│   ├── chart-growth.svg (placeholder)
│   └── rocket-launch.svg (placeholder)
│
├── icons/             # Favicon and app icons
│   └── favicon.svg (ready to use)
│
├── LICENSE.md         # Image licenses and credits
└── README.md          # This file
```

## Image Requirements

### Hero Images
- **Dimensions:** 1920x1080px
- **Format:** JPG (optimized)
- **Max size:** 300KB
- **Usage:** Hero section backgrounds

### Background Images
- **Dimensions:** 1920x1080px
- **Format:** JPG (optimized)
- **Max size:** 200KB
- **Usage:** Section backgrounds

### Content Images
- **Dimensions:** 800x600px
- **Format:** JPG or PNG
- **Max size:** 150KB
- **Usage:** Content illustrations

### Icons
- **favicon.svg:** 32x32px (scalable)
- **apple-touch-icon:** 180x180px (needed)
- **android-chrome:** 192x192px (needed)

## Quick Start

### Option 1: Use Placeholders (Current)
SVG placeholders are already in place. The website works but shows placeholder graphics.

### Option 2: Download Sample Images
```bash
cd ../.. # Go to root
chmod +x download-images.sh
./download-images.sh
```
This downloads random professional images from Unsplash.

### Option 3: Manual Selection (Recommended)
1. Review `docs/IMAGE_REQUIREMENTS.md`
2. Visit provided Unsplash/Pexels URLs
3. Download specific images
4. Save to appropriate folders
5. Optimize file sizes
6. Update `LICENSE.md` with credits

## Image Optimization

Before committing images:

```bash
# Using ImageMagick
convert input.jpg -quality 80 -resize 1920x1080 output.jpg

# Using online tools
# - https://tinypng.com/
# - https://squoosh.app/
```

## Attribution

While not required by Unsplash/Pexels licenses, attribution is appreciated:

1. Update `LICENSE.md` with photographer credits
2. Optionally add attribution in website footer

## Need Help?

- See full requirements: `../../docs/IMAGE_REQUIREMENTS.md`
- View implementation plan: `../../docs/IMPLEMENTATION_PLAN.md`
- Check licenses: `LICENSE.md`

---

**Last Updated:** 2024-11-06

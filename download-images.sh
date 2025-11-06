#!/bin/bash

# Script to download images from Unsplash
# NOTE: This downloads sample images. For production, manually select specific images.

echo "🖼️  Downloading images from Unsplash..."
echo ""

# Create directories
mkdir -p assets/images/{hero,backgrounds,content,icons}

# Function to download with retry
download_image() {
  local url=$1
  local output=$2
  local name=$3

  echo "📥 Downloading: $name"
  curl -L "$url" -o "$output" --silent --show-error --fail

  if [ $? -eq 0 ]; then
    echo "   ✓ Saved to: $output"
  else
    echo "   ✗ Failed to download $name"
  fi
}

echo "=== HERO IMAGES ==="
echo ""

# Hero images (using Unsplash Source API for random professional images)
download_image \
  "https://source.unsplash.com/1920x1080/?business,partnership,professional" \
  "assets/images/hero/hero-partnership.jpg" \
  "Partnership Hero"

download_image \
  "https://source.unsplash.com/1920x1080/?team,success,office" \
  "assets/images/hero/hero-success.jpg" \
  "Success Hero"

download_image \
  "https://source.unsplash.com/1920x1080/?growth,analytics,laptop" \
  "assets/images/hero/hero-growth.jpg" \
  "Growth Hero"

echo ""
echo "=== BACKGROUND IMAGES ==="
echo ""

download_image \
  "https://source.unsplash.com/1920x1080/?abstract,gradient,blue" \
  "assets/images/backgrounds/abstract-gradient.jpg" \
  "Abstract Gradient"

download_image \
  "https://source.unsplash.com/1920x1080/?pattern,geometric,minimal" \
  "assets/images/backgrounds/geometric-pattern.jpg" \
  "Geometric Pattern"

echo ""
echo "=== CONTENT IMAGES ==="
echo ""

download_image \
  "https://source.unsplash.com/800x600/?collaboration,meeting,professional" \
  "assets/images/content/partnership-graphic.jpg" \
  "Partnership Graphic"

download_image \
  "https://source.unsplash.com/800x600/?dashboard,analytics,data" \
  "assets/images/content/dashboard-preview.jpg" \
  "Dashboard Preview"

download_image \
  "https://source.unsplash.com/800x600/?celebration,team,office" \
  "assets/images/content/success-celebration.jpg" \
  "Success Celebration"

download_image \
  "https://source.unsplash.com/800x600/?chart,growth,business" \
  "assets/images/content/chart-growth.jpg" \
  "Chart Growth"

download_image \
  "https://source.unsplash.com/800x600/?rocket,launch,startup" \
  "assets/images/content/rocket-launch.jpg" \
  "Rocket Launch"

echo ""
echo "=== CHECKING FILE SIZES ==="
echo ""

if command -v du &> /dev/null; then
  echo "Hero images:"
  du -h assets/images/hero/*.jpg 2>/dev/null | head -3
  echo ""
  echo "Background images:"
  du -h assets/images/backgrounds/*.jpg 2>/dev/null | head -2
  echo ""
  echo "Content images:"
  du -h assets/images/content/*.jpg 2>/dev/null | head -5
fi

echo ""
echo "✅ Download complete!"
echo ""
echo "⚠️  NOTE: These are random sample images from Unsplash Source API."
echo "   For production, manually download specific images from:"
echo "   - See docs/IMAGE_REQUIREMENTS.md for exact URLs"
echo "   - Optimize images before use (compress to <300KB)"
echo ""
echo "Next steps:"
echo "1. Review downloaded images"
echo "2. Replace with specific images from IMAGE_REQUIREMENTS.md if needed"
echo "3. Run image optimization: ./optimize-images.sh"
echo "4. Update HTML files to use these images"

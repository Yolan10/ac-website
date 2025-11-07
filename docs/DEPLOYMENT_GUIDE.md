# Deployment Guide
## ActiveCampaign Agency Partner Program Website

**Version:** 1.1.0
**Status:** Production Ready
**Date:** November 6, 2024

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Hosting Options](#hosting-options)
3. [Deployment Methods](#deployment-methods)
4. [Configuration](#configuration)
5. [Post-Deployment Tasks](#post-deployment-tasks)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying to production, verify all items below:

### ✅ Content Review
- [ ] All text content reviewed and approved
- [ ] Legal pages reviewed by legal team (Privacy, Terms, Cookies)
- [ ] Contact information accurate and current
- [ ] Commission structure matches current program terms
- [ ] Partner agreement template reviewed and approved
- [ ] All placeholder text replaced with production content

### ✅ Testing Complete
- [ ] All 131 automated tests passing (see TEST_RESULTS.md)
- [ ] Manual cross-browser testing completed
- [ ] Mobile device testing on iOS and Android
- [ ] Form submissions tested end-to-end
- [ ] All links verified (internal and external)
- [ ] Legal page links in footer working
- [ ] Downloadable resources accessible

### ✅ Technical Readiness
- [ ] Domain name purchased and DNS configured
- [ ] SSL certificate obtained (or auto-provision available)
- [ ] Hosting account set up with appropriate resources
- [ ] Backup strategy in place
- [ ] Analytics tracking code ready (Google Analytics, etc.)
- [ ] Form backend API endpoint configured (if applicable)

### ✅ Assets & Resources
- [ ] Replace SVG placeholders with actual photos (see IMAGE_REQUIREMENTS.md)
- [ ] Optimize images for web (compress, resize)
- [ ] Favicon displaying correctly
- [ ] Apple touch icon working on iOS devices
- [ ] All Font Awesome icons loading correctly

---

## Hosting Options

This is a static website (HTML/CSS/JavaScript only) with no server-side processing required. Choose from these hosting options:

### Option 1: Netlify (Recommended)
**Best for:** Quick deployment with continuous integration

**Pros:**
- Free tier available
- Automatic HTTPS (SSL)
- CDN included
- Easy custom domain setup
- Git-based deployment
- Automatic form handling
- Instant cache invalidation

**Setup:**
1. Create account at netlify.com
2. Connect GitHub repository
3. Configure build settings (none required for static site)
4. Deploy automatically on git push

**Configuration:**
```toml
# netlify.toml (create in root directory)
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Option 2: Vercel
**Best for:** Modern deployment with edge network

**Pros:**
- Excellent performance
- Free SSL certificates
- Built-in CDN
- GitHub integration
- Preview deployments

**Setup:**
1. Create account at vercel.com
2. Import GitHub repository
3. Configure project settings
4. Deploy

**Configuration:**
```json
// vercel.json (create in root directory)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### Option 3: GitHub Pages
**Best for:** Simple, free hosting for public repositories

**Pros:**
- Completely free
- Easy setup
- Automatic HTTPS
- Custom domain support

**Setup:**
1. Go to repository Settings → Pages
2. Select branch (usually main or gh-pages)
3. Choose root folder
4. Save and wait for deployment

**Limitations:**
- Public repositories only (or GitHub Pro for private)
- No server-side processing
- Limited to 1GB repository size

### Option 4: AWS S3 + CloudFront
**Best for:** Enterprise deployment with full control

**Pros:**
- Highly scalable
- Full control over infrastructure
- Low cost at scale
- Integrated with AWS ecosystem

**Setup:**
1. Create S3 bucket with public access
2. Enable static website hosting
3. Upload files to bucket
4. Create CloudFront distribution
5. Configure custom domain and SSL

**Estimated Cost:** $5-20/month depending on traffic

### Option 5: Traditional Web Hosting (cPanel/Plesk)
**Best for:** Existing hosting accounts

**Pros:**
- Works with existing hosting plans
- FTP/SFTP access
- File manager available
- Familiar interface

**Setup:**
1. Upload files via FTP or File Manager
2. Configure SSL certificate (Let's Encrypt)
3. Point domain to hosting server
4. Test deployment

---

## Deployment Methods

### Method 1: Git-Based Deployment (Recommended)

**For Netlify/Vercel:**

1. **Connect Repository:**
   ```bash
   # Already using GitHub, so just authorize in hosting platform
   ```

2. **Configure Build:**
   - Build command: (leave empty for static site)
   - Publish directory: `.` (root)
   - Branch: `main` or your production branch

3. **Deploy:**
   - Automatic on every push to main branch
   - Preview deployments for pull requests

**Benefits:**
- Automated deployments
- Version control
- Easy rollbacks
- Preview environments

### Method 2: Manual Upload

**For Traditional Hosting:**

1. **Prepare Files:**
   ```bash
   # From project root, upload these to hosting:
   # - All .html files (8 main pages)
   # - css/ folder (5 CSS files)
   # - js/ folder (4 JavaScript files)
   # - assets/ folder (images, downloads)
   # - legal/ folder (3 legal pages)
   ```

2. **Upload via FTP:**
   ```bash
   # Using FileZilla or similar FTP client
   Host: ftp.yourdomain.com
   Username: your_username
   Password: your_password
   Port: 21 (or 22 for SFTP)
   ```

3. **Set Permissions:**
   - Directories: 755
   - Files: 644

### Method 3: CLI Deployment

**For AWS S3:**
```bash
# Install AWS CLI
aws configure

# Sync files to S3
aws s3 sync . s3://your-bucket-name --exclude ".git/*" --exclude "docs/*" --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**For Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Configuration

### 1. Domain Configuration

**DNS Records:**
```
Type    Name    Value                       TTL
A       @       [Your hosting IP]           3600
CNAME   www     yourdomain.com              3600
```

**For Netlify/Vercel:**
```
Type    Name    Value                       TTL
CNAME   @       [provided by platform]      3600
CNAME   www     [provided by platform]      3600
```

### 2. SSL Certificate

**Automatic (Netlify/Vercel):**
- SSL certificate provisioned automatically
- No configuration needed

**Manual (Traditional Hosting):**
- Use Let's Encrypt (free)
- Install via cPanel or Certbot
- Renews automatically every 90 days

### 3. Form Backend Configuration

The website currently uses simulated form submission. To connect to a real backend:

**Option A: Netlify Forms (Easiest)**
```html
<!-- Add to form tag in apply.html -->
<form id="contact-form" netlify>
```

**Option B: Custom API**
Update `js/forms.js`:
```javascript
// Line ~250: Replace submitForm function endpoint
const response = await fetch('https://your-api.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

**Option C: Third-Party Services**
- Formspree: formspree.io
- Google Forms backend
- Zapier webhooks
- Make (formerly Integromat)

### 4. Analytics Integration

**Google Analytics 4:**
Add to all HTML pages before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Alternative Analytics:**
- Plausible Analytics (privacy-focused)
- Matomo (self-hosted)
- Fathom Analytics

### 5. Environment-Specific Settings

**Production Optimizations:**
```html
<!-- Add to all pages for better performance -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
```

---

## Post-Deployment Tasks

### Immediate (Day 1)

- [ ] **Verify All Pages Load:** Test all 8 main pages + 3 legal pages
- [ ] **Test Forms:** Submit test application via apply.html
- [ ] **Check Mobile:** Verify on iOS and Android devices
- [ ] **SSL Verification:** Confirm HTTPS works and no mixed content warnings
- [ ] **Test Downloads:** Verify all 4 downloadable resources work
- [ ] **Verify Calculator:** Test commission calculator on benefits.html
- [ ] **Check FAQ Search:** Test FAQ search functionality
- [ ] **Social Links:** Verify social media links (update with real accounts)
- [ ] **Newsletter Form:** Test newsletter subscription in footer

### Week 1

- [ ] **Google Search Console:** Submit sitemap and verify ownership
- [ ] **Google Analytics:** Verify tracking is working
- [ ] **Monitor Forms:** Check form submissions are being received
- [ ] **Performance Check:** Run PageSpeed Insights test
- [ ] **Accessibility Audit:** Run Lighthouse accessibility test
- [ ] **Cross-Browser Test:** Test on Chrome, Firefox, Safari, Edge
- [ ] **Monitor Errors:** Check browser console for JavaScript errors
- [ ] **Backup Verification:** Ensure automatic backups are working

### Month 1

- [ ] **Review Analytics:** Check traffic patterns and user behavior
- [ ] **SEO Audit:** Verify Google indexing all pages correctly
- [ ] **Content Review:** Update any outdated information
- [ ] **Image Replacement:** Replace SVG placeholders with real photos
- [ ] **Performance Optimization:** Implement any needed speed improvements
- [ ] **User Feedback:** Gather and review initial user feedback
- [ ] **A/B Testing:** Consider testing different CTAs or layouts

---

## Monitoring & Maintenance

### Uptime Monitoring

**Tools:**
- UptimeRobot (free tier: uptimerobot.com)
- Pingdom
- StatusCake
- Built-in monitoring (Netlify/Vercel)

**Configuration:**
- Monitor main page (index.html)
- Check interval: 5 minutes
- Alert via email/SMS on downtime

### Performance Monitoring

**Google PageSpeed Insights:**
- Run monthly performance audits
- Target: 90+ mobile score, 95+ desktop score

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Monitoring Tools:**
- Google Search Console (Core Web Vitals report)
- Lighthouse CI
- WebPageTest

### Security Monitoring

**Regular Tasks:**
- Review security headers (securityheaders.com)
- Check SSL certificate expiration
- Update Font Awesome CDN version (check for updates)
- Review Content Security Policy

**Security Headers to Verify:**
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Content Updates

**Quarterly Review:**
- Update commission structure if changed
- Review legal pages for regulatory changes
- Update success stories with new case studies
- Refresh FAQ with common questions
- Add new downloadable resources as needed

**Annual Review:**
- Full content audit
- Update copyright year in footer
- Comprehensive testing (all 131 tests)
- Image refresh and optimization
- Performance optimization review

---

## Troubleshooting

### Issue: Pages Not Loading

**Symptoms:** 404 errors on page navigation

**Solutions:**
1. Verify all HTML files uploaded to correct directory
2. Check file permissions (644 for files, 755 for folders)
3. Clear browser cache and CDN cache
4. Verify routing configuration for single-page app behavior

### Issue: Forms Not Submitting

**Symptoms:** Form submission fails or shows error

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify forms.js is loading correctly
3. Confirm API endpoint is configured and accessible
4. Check CORS settings on backend API
5. Test with simulated submission (default behavior)

### Issue: SSL Certificate Warnings

**Symptoms:** "Not Secure" warning in browser

**Solutions:**
1. Verify SSL certificate is installed and valid
2. Check for mixed content (HTTP resources on HTTPS page)
3. Update all external resources to HTTPS URLs
4. Clear browser cache and test in incognito mode

### Issue: Slow Loading Times

**Symptoms:** Pages take > 3 seconds to load

**Solutions:**
1. Enable CDN (Cloudflare, Netlify CDN, CloudFront)
2. Compress images (use tools like TinyPNG, ImageOptim)
3. Enable gzip/brotli compression on server
4. Minimize CSS/JavaScript files
5. Use browser caching headers

### Issue: Calculator Not Working

**Symptoms:** Commission calculator not updating values

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify calculator.js is loading (check Network tab)
3. Clear browser cache
4. Test in different browser
5. Verify calculator.css is not blocking functionality

### Issue: Mobile Menu Not Opening

**Symptoms:** Hamburger menu doesn't toggle on mobile

**Solutions:**
1. Verify main.js is loading correctly
2. Check for JavaScript errors in console
3. Test viewport meta tag is present
4. Verify Font Awesome icons are loading
5. Clear mobile browser cache

### Issue: Search Not Working

**Symptoms:** Unable to search in console

**Solutions:**
1. Create sitemap.xml file
2. Submit to Google Search Console
3. Wait 1-2 weeks for indexing
4. Verify robots.txt allows crawling
5. Check for noindex meta tags (remove if present)

---

## Additional Resources

### Documentation
- [TEST_RESULTS.md](TEST_RESULTS.md) - Complete test results and verification
- [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) - Manual testing checklist
- [IMAGE_REQUIREMENTS.md](../assets/images/IMAGE_REQUIREMENTS.md) - Image specifications and sources
- [CALCULATOR_GUIDE.md](CALCULATOR_GUIDE.md) - Calculator functionality documentation
- [CHANGELOG.md](CHANGELOG.md) - Complete development history

### External Resources
- [Web.dev Best Practices](https://web.dev/learn)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [SSL Test](https://www.ssllabs.com/ssltest/)
- [Security Headers](https://securityheaders.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Support Contacts
- **Technical Issues:** [Your Dev Team Email]
- **Content Updates:** [Your Content Team Email]
- **Hosting Support:** [Your Hosting Provider]
- **Domain Support:** [Your Domain Registrar]

---

## Deployment Checklist Summary

Use this quick checklist before going live:

- [ ] All tests passing (131/131)
- [ ] Content reviewed and approved
- [ ] Legal pages reviewed
- [ ] Real images uploaded
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics installed
- [ ] Forms configured
- [ ] Cross-browser tested
- [ ] Mobile tested
- [ ] Performance verified (90+ score)
- [ ] Security headers configured
- [ ] Backup system active
- [ ] Monitoring tools configured
- [ ] Team trained on updates

---

**Status:** Ready for Production Deployment ✅

**Last Updated:** November 6, 2024
**Maintained By:** Development Team
**Version:** 1.1.0

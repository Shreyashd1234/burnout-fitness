# 🚀 Website Performance Optimization Guide

## 📸 Image Compression

### Step 1: Install Sharp (Image Processing Library)
```bash
npm install sharp
```

### Step 2: Run Image Compression
```bash
node compress-images.js
```

This will:
- Compress all images in `src/gallery/`
- Resize images to max 800x800px
- Reduce quality to 80% (still looks great)
- Save compressed images to `src/gallery/compressed/`
- Show you the size reduction for each image

### Step 3: Use Compressed Images
After compression, you can either:
1. **Replace original images** with compressed ones
2. **Update Gallery.tsx** to import from compressed folder

## ⚡ Additional Performance Optimizations

### 1. Lazy Loading (Already Added)
- Images now use `loading="lazy"` attribute
- Only loads images when they come into view

### 2. Image Format Optimization
- Convert images to WebP format for even better compression
- Use modern image formats like AVIF for better performance

### 3. CDN Integration
- Consider using a CDN like Cloudinary or AWS S3
- Serve images from multiple locations worldwide

### 4. Progressive Loading
- Show low-quality placeholder while high-quality image loads
- Implement blur-up technique

## 🎯 Expected Results

After compression, you should see:
- **50-80% reduction** in image file sizes
- **Faster page load times**
- **Better user experience**
- **Reduced bandwidth usage**

## 📊 Performance Monitoring

Use these tools to monitor performance:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools Network tab

## 🔧 Quick Commands

```bash
# Install sharp for image compression
npm install sharp

# Run image compression
node compress-images.js

# Check current image sizes
ls -lh src/gallery/*.jpg
```

## 💡 Tips for Better Performance

1. **Optimize images before uploading**
2. **Use appropriate image formats** (WebP, AVIF)
3. **Implement responsive images** with srcset
4. **Consider using a CDN**
5. **Enable gzip compression** on your server
6. **Use browser caching** for static assets 
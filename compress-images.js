const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to compress images
async function compressImages() {
  const galleryPath = './src/gallery';
  const compressedPath = './src/gallery/compressed';
  
  // Create compressed directory if it doesn't exist
  if (!fs.existsSync(compressedPath)) {
    fs.mkdirSync(compressedPath, { recursive: true });
  }

  try {
    const files = fs.readdirSync(galleryPath);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png')
    );

    console.log(`Found ${imageFiles.length} images to compress...`);

    for (const file of imageFiles) {
      const inputPath = path.join(galleryPath, file);
      const outputPath = path.join(compressedPath, file);
      
      console.log(`Compressing ${file}...`);
      
      await sharp(inputPath)
        .resize(800, 800, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: 80, 
          progressive: true 
        })
        .toFile(outputPath);
      
      // Get file sizes
      const originalSize = fs.statSync(inputPath).size;
      const compressedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
      
      console.log(`✓ ${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(compressedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    }

    console.log('\n🎉 All images compressed successfully!');
    console.log(`📁 Compressed images saved to: ${compressedPath}`);
    console.log('\n💡 To use compressed images:');
    console.log('1. Replace the original images with compressed ones');
    console.log('2. Or update the import paths in Gallery.tsx to use compressed folder');
    
  } catch (error) {
    console.error('Error compressing images:', error);
  }
}

// Run the compression
compressImages(); 
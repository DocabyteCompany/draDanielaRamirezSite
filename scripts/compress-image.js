const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/imgs';
const inputFile = 'hero-background.jpg';
const outputFile = 'hero-background.webp';

const inputPath = path.join(inputDir, inputFile);
const outputPath = path.join(inputDir, outputFile);

if (fs.existsSync(inputPath)) {
  console.log(`Optimizing ${inputPath}...`);
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`Successfully created ${outputPath}`);
    })
    .catch(err => {
      console.error('Error optimizing image:', err);
    });
} else {
  console.error(`Input file not found: ${inputPath}`);
} 
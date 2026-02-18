import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE = join(import.meta.dirname, '..', 'public', 'images', 'hospital', 'instalaciones');

const toRotate = [
  { file: 'recepcion.webp', degrees: 90 },
  { file: 'area-de-hospitalizacion_4.webp', degrees: 90 },
];

for (const { file, degrees } of toRotate) {
  const filePath = join(BASE, file);
  console.log(`Rotating ${file} by ${degrees}°...`);
  const input = readFileSync(filePath);
  const output = await sharp(input).rotate(degrees).webp({ quality: 80 }).toBuffer();
  writeFileSync(filePath, output);
  console.log(`  ✓ Done (${(output.length / 1024).toFixed(0)}KB)`);
}

console.log('All rotations complete!');

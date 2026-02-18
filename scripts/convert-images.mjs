import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const SOURCE_BASE = '/Users/josecarlosrivera/Desktop/Contenido web hospital santa fe';
const DEST_BASE = '/Users/josecarlosrivera/.gemini/antigravity/playground/holographic-eagle/hospital-santafe/public/images/hospital';

const QUALITY = 80;
const MAX_WIDTH = 1200;

// Mapping: source subfolder → destination subfolder + filename transform
const FOLDERS = [
  {
    src: 'Especialidades',
    dest: 'especialidades',
    transform: (name) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-'),
  },
  {
    src: 'Fotografías médicos principales',
    dest: 'medicos',
    transform: (name) => {
      const map = {
        'Dr. Javier Barajas': 'dr-javier-barajas',
        'Dra. María González': 'dra-maria-gonzalez',
      };
      return map[name] || name.toLowerCase().replace(/\s+/g, '-');
    },
  },
  {
    src: 'Instalaciones/Fotos de instalaciones',
    dest: 'instalaciones',
    transform: (name) => {
      return name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[()]/g, '');
    },
  },
  {
    src: 'Paquetes de maternidad',
    dest: 'maternidad',
    transform: (name) => {
      return name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-');
    },
  },
  {
    src: 'Servicios',
    dest: 'servicios',
    transform: (name) => {
      return name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-');
    },
  },
];

let totalConverted = 0;
let totalSaved = 0;

for (const folder of FOLDERS) {
  const srcDir = join(SOURCE_BASE, folder.src);
  const destDir = join(DEST_BASE, folder.dest);

  let files;
  try {
    files = await readdir(srcDir);
  } catch (e) {
    console.error(`  Skipping ${srcDir}: ${e.message}`);
    continue;
  }

  const imageFiles = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));
  console.log(`\n${folder.src} → ${folder.dest} (${imageFiles.length} images)`);

  for (const file of imageFiles) {
    const srcPath = join(srcDir, file);
    const nameWithoutExt = basename(file, extname(file));
    const destName = folder.transform(nameWithoutExt) + '.webp';
    const destPath = join(destDir, destName);

    try {
      const srcStat = await stat(srcPath);
      const srcSize = srcStat.size;

      await sharp(srcPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(destPath);

      const destStat = await stat(destPath);
      const destSize = destStat.size;
      const saved = ((1 - destSize / srcSize) * 100).toFixed(1);

      console.log(`  ${file} (${(srcSize / 1024).toFixed(0)}KB) → ${destName} (${(destSize / 1024).toFixed(0)}KB) [${saved}% smaller]`);
      totalConverted++;
      totalSaved += srcSize - destSize;
    } catch (e) {
      console.error(`  ERROR: ${file}: ${e.message}`);
    }
  }
}

console.log(`\nDone! ${totalConverted} images converted. Total savings: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);

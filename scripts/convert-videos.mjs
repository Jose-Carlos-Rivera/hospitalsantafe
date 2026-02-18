import { execSync } from 'child_process';
import { createRequire } from 'module';
import { statSync } from 'fs';

const require = createRequire(import.meta.url);
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const SOURCE_BASE = '/Users/josecarlosrivera/Desktop/Contenido web hospital santa fe';
const DEST_DIR = '/Users/josecarlosrivera/.gemini/antigravity/playground/holographic-eagle/hospital-santafe/public/videos';

const videos = [
  { src: 'Habitaciones/Habitación Master Suite-1.mov', dest: 'habitacion-master-suite.mp4' },
  { src: 'Habitaciones/Habitación Suite.mov', dest: 'habitacion-suite.mp4' },
  { src: 'Habitaciones/HabitaciónNormal.mov', dest: 'habitacion-normal.mp4' },
  { src: 'Instalaciones/Cafeteria.mov', dest: 'cafeteria.mp4' },
  { src: 'Instalaciones/Cuneros.mov', dest: 'cuneros.mp4' },
  { src: 'Instalaciones/Quirofanos.mov', dest: 'quirofanos.mp4' },
  { src: 'Instalaciones/Instalaciones.mov', dest: 'instalaciones.mp4' },
  { src: 'Servicios/Cesárea.mov', dest: 'cesarea.mp4' },
];

for (const video of videos) {
  const srcPath = `${SOURCE_BASE}/${video.src}`;
  const destPath = `${DEST_DIR}/${video.dest}`;

  console.log(`\nConverting: ${video.src} → ${video.dest}`);

  try {
    const srcStat = statSync(srcPath);
    console.log(`  Source: ${(srcStat.size / 1024 / 1024).toFixed(1)}MB`);

    // H.264, 720p max, web-optimized with faststart for streaming
    execSync(
      `"${ffmpegPath}" -i "${srcPath}" -c:v libx264 -preset medium -crf 23 -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -c:a aac -b:a 128k -movflags +faststart -y "${destPath}"`,
      { stdio: 'pipe', timeout: 300000 }
    );

    const destStat = statSync(destPath);
    const saved = ((1 - destStat.size / srcStat.size) * 100).toFixed(1);
    console.log(`  Output: ${(destStat.size / 1024 / 1024).toFixed(1)}MB [${saved}% smaller]`);
  } catch (e) {
    console.error(`  ERROR: ${e.message?.slice(0, 200)}`);
  }
}

console.log('\nDone! All videos converted.');

'use client';

import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function VideoPlayer({ src, className, style }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={`video-player ${className ?? ''}`} style={style}>
      {/* Play button overlay */}
      <div
        className={`video-player__overlay ${playing ? 'video-player__overlay--hidden' : ''}`}
        onClick={handlePlay}
      >
        <div className="video-player__play-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z" />
          </svg>
        </div>
        <span className="video-player__label">Ver video</span>
      </div>

      <video
        ref={videoRef}
        controls
        preload="metadata"
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

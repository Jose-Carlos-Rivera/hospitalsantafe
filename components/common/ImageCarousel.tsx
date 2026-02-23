'use client';

import { useState, useCallback } from 'react';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <img
          src={images[0].src}
          alt={images[0].alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: '#eee',
    }}>
      {/* Current Image */}
      <img
        key={currentIndex}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Left Arrow */}
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
        aria-label="Foto anterior"
        style={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          fontWeight: 'bold',
          lineHeight: 1,
          zIndex: 5,
        }}
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
        aria-label="Siguiente foto"
        style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          fontWeight: 'bold',
          lineHeight: 1,
          zIndex: 5,
        }}
      >
        ›
      </button>

      {/* Dots indicator */}
      <div style={{
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 5,
        zIndex: 5,
      }}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(idx); }}
            aria-label={`Foto ${idx + 1}`}
            style={{
              width: idx === currentIndex ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: idx === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'width 0.3s ease, background 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Photo counter */}
      <div style={{
        position: 'absolute',
        top: 10,
        right: 10,
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '3px 8px',
        borderRadius: 10,
        fontSize: '12px',
        fontWeight: 600,
        zIndex: 5,
      }}>
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

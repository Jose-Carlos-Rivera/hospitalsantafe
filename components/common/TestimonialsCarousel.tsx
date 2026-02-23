'use client';

import { useState, useEffect, useCallback } from 'react';

interface Testimonio {
  id: string;
  nombre: string;
  texto: string;
  servicio: string;
  estrellas: number;
}

interface Props {
  testimonios: Testimonio[];
}

const STAR_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const QUOTE_SVG = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
  </svg>
);

export default function TestimonialsCarousel({ testimonios }: Props) {
  // Show 3 at a time on desktop, 1 on mobile
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonios.length / itemsPerPage);

  const next = useCallback(() => {
    setCurrentPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, totalPages]);

  const visibleTestimonios = testimonios.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  if (testimonios.length === 0) return null;

  return (
    <div style={{ position: 'relative' }}>
      {/* Cards Grid */}
      <div className="testimonials-grid" style={{ minHeight: '280px' }}>
        {visibleTestimonios.map((t) => (
          <div key={t.id} className="testimonial-card" data-animate>
            <div className="testimonial-card__quote">{QUOTE_SVG}</div>
            <p className="testimonial-card__text">&ldquo;{t.texto}&rdquo;</p>
            <div className="testimonial-card__author">
              <span className="testimonial-card__name">{t.nombre}</span>
              {t.servicio && (
                <span style={{ fontSize: '12px', color: 'var(--color-primary-600)', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                  {t.servicio}
                </span>
              )}
              <div className="testimonial-card__stars">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <span key={i}>{STAR_SVG}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation — only show if more than 1 page */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: 'var(--space-6)',
        }}>
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Testimonios anteriores"
            style={{
              background: 'var(--color-primary-50)',
              border: '1px solid var(--color-primary-200)',
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-700)',
              transition: 'background 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                aria-label={`Página ${i + 1}`}
                style={{
                  width: currentPage === i ? 24 : 10,
                  height: 10,
                  borderRadius: 5,
                  border: 'none',
                  background: currentPage === i ? 'var(--color-primary-600)' : 'var(--color-neutral-300)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Siguientes testimonios"
            style={{
              background: 'var(--color-primary-50)',
              border: '1px solid var(--color-primary-200)',
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-700)',
              transition: 'background 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}

      {/* Counter text */}
      {totalPages > 1 && (
        <p style={{
          textAlign: 'center',
          fontSize: '13px',
          color: 'var(--color-neutral-500)',
          marginTop: 'var(--space-3)',
        }}>
          {currentPage + 1} de {totalPages}
        </p>
      )}
    </div>
  );
}

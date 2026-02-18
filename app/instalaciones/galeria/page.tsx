'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lightbox from '@/components/common/Lightbox';
import '../instalaciones.css';

const galeriaImages = [
  // Recepción
  { src: '/images/hospital/instalaciones/recepcion.webp', alt: 'Recepción del Hospital Santa Fe', categoria: 'instalaciones' },
  // Quirófanos (8)
  { src: '/images/hospital/instalaciones/quirofanos.webp', alt: 'Quirófano principal', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_1.webp', alt: 'Quirófano equipado', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_2.webp', alt: 'Área de quirófanos', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_3.webp', alt: 'Equipo quirúrgico', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_4.webp', alt: 'Sala de operaciones', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_5.webp', alt: 'Instrumental quirúrgico', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_6.webp', alt: 'Monitor de quirófano', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_7.webp', alt: 'Quirófano vista completa', categoria: 'quirofanos' },
  // Hospitalización (6)
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion.webp', alt: 'Área de hospitalización', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_1.webp', alt: 'Pasillo de hospitalización', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_3.webp', alt: 'Zona de hospitalización', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_4.webp', alt: 'Área de enfermería', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_51.webp', alt: 'Estación de enfermería', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_5.webp', alt: 'Hospitalización general', categoria: 'hospitalizacion' },
  // Habitaciones (3)
  { src: '/images/hospital/instalaciones/cuartos.webp', alt: 'Habitación Normal', categoria: 'habitaciones' },
  { src: '/images/hospital/instalaciones/cuartos_1.webp', alt: 'Habitación Suite', categoria: 'habitaciones' },
  { src: '/images/hospital/instalaciones/cuartos_2.webp', alt: 'Habitación Mastersuite', categoria: 'habitaciones' },
  // Cafetería (2)
  { src: '/images/hospital/instalaciones/cafeteria.webp', alt: 'Cafetería Del Buen Comer', categoria: 'cafeteria' },
  { src: '/images/hospital/instalaciones/cafeteria_1.webp', alt: 'Cafetería interior', categoria: 'cafeteria' },
  // Consultorios (2)
  { src: '/images/hospital/instalaciones/consultorios.webp', alt: 'Consultorio médico', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/consultorios_1.webp', alt: 'Área de consultorios', categoria: 'instalaciones' },
  // Estacionamiento (3)
  { src: '/images/hospital/instalaciones/estacionamiento_1.webp', alt: 'Estacionamiento principal', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/estacionamiento_2.webp', alt: 'Estacionamiento vista', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/estacionamiento_3.webp', alt: 'Estacionamiento del hospital', categoria: 'instalaciones' },
];

const categorias = [
  { id: 'todas', label: 'Todas' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'quirofanos', label: 'Quirófanos' },
  { id: 'hospitalizacion', label: 'Hospitalización' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'cafeteria', label: 'Cafetería' },
];

export default function GaleriaPage() {
  const [filtro, setFiltro] = useState('todas');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filteredImages = filtro === 'todas'
    ? galeriaImages
    : galeriaImages.filter(img => img.categoria === filtro);

  const openLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="page-hero page-hero--galeria">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/instalaciones">Instalaciones</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Galería</span>
          </nav>
          <h1>Galería Fotográfica</h1>
          <p className="page-hero__subtitle">
            Conoce nuestras instalaciones, habitaciones, equipos médicos y áreas especializadas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galeria-filters">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`galeria-filter-btn ${filtro === cat.id ? 'active' : ''}`}
                onClick={() => setFiltro(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)', marginBottom: 'var(--space-6)' }}>
            Mostrando {filteredImages.length} {filteredImages.length === 1 ? 'foto' : 'fotos'}
            {filtro !== 'todas' ? ` de ${categorias.find(c => c.id === filtro)?.label}` : ''}
          </p>

          <div className="galeria-grid">
            {filteredImages.map((img, index) => (
              <div key={index} className="galeria-item" onClick={() => openLightbox(index)}>
                <img src={img.src} alt={img.alt} />
                <div className="galeria-item__overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span style={{ color: 'white', fontSize: 'var(--text-sm)', marginTop: '8px' }}>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)', marginTop: 'var(--space-8)' }}>
            Próximamente más fotos de nuestras instalaciones y servicios.
          </p>
        </div>
      </section>

      <Lightbox
        images={filteredImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % filteredImages.length)}
      />
    </>
  );
}

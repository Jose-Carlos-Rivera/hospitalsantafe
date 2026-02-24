'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoPlayer from '@/components/common/VideoPlayer';
import Lightbox from '@/components/common/Lightbox';
import '../instalaciones.css';

const galeriaImages = [
  // Recepción (4)
  { src: '/images/hospital/instalaciones/recepcion.webp', alt: 'Recepción del Hospital Santa Fe', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/recepcion-2.webp', alt: 'Recepción del hospital', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/recepcion-principal.webp', alt: 'Recepción principal del Hospital Santa Fe', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/recepcion-dr-juan-manuel-1.webp', alt: 'Recepción con Dr. Juan Manuel', categoria: 'instalaciones' },
  // Entrada y Estacionamiento (3)
  { src: '/images/hospital/instalaciones/entrada-estacionamiento-nosotros.webp', alt: 'Fachada del Hospital Santa Fe', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/estacionamiento_1.webp', alt: 'Estacionamiento principal', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/estacionamiento_3.webp', alt: 'Estacionamiento del hospital', categoria: 'instalaciones' },
  // Quirófanos (4)
  { src: '/images/hospital/instalaciones/quirofanos.webp', alt: 'Quirófano principal', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_1.webp', alt: 'Quirófano equipado', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_2.webp', alt: 'Área de quirófanos', categoria: 'quirofanos' },
  { src: '/images/hospital/instalaciones/quirofanos_3.webp', alt: 'Equipo quirúrgico', categoria: 'quirofanos' },
  // Hospitalización (4)
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion.webp', alt: 'Área de hospitalización', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_1.webp', alt: 'Pasillo de hospitalización', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_4.webp', alt: 'Área de enfermería', categoria: 'hospitalizacion' },
  { src: '/images/hospital/instalaciones/area-de-hospitalizacion_5.webp', alt: 'Hospitalización general', categoria: 'hospitalizacion' },
  // Habitaciones — Cuartos generales (3)
  { src: '/images/hospital/instalaciones/cuartos.webp', alt: 'Habitación Normal', categoria: 'habitaciones' },
  { src: '/images/hospital/instalaciones/cuartos_1.webp', alt: 'Habitación Suite', categoria: 'habitaciones' },
  { src: '/images/hospital/instalaciones/cuartos_2.webp', alt: 'Habitación Mastersuite', categoria: 'habitaciones' },
  // Habitaciones — Normal (1)
  { src: '/images/hospital/habitaciones/normal-1.webp', alt: 'Habitación Normal', categoria: 'habitaciones' },
  // Habitaciones — Suite (2)
  { src: '/images/hospital/habitaciones/suite-1.webp', alt: 'Suite vista 1', categoria: 'habitaciones' },
  { src: '/images/hospital/habitaciones/suite-2.webp', alt: 'Suite vista 2', categoria: 'habitaciones' },
  // Habitaciones — Mastersuite (4)
  { src: '/images/hospital/habitaciones/mastersuite-1.webp', alt: 'Mastersuite vista 1', categoria: 'habitaciones' },
  { src: '/images/hospital/habitaciones/mastersuite-2.webp', alt: 'Mastersuite vista 2', categoria: 'habitaciones' },
  { src: '/images/hospital/habitaciones/mastersuite-6.webp', alt: 'Mastersuite vista 3', categoria: 'habitaciones' },
  { src: '/images/hospital/habitaciones/mastersuite-bano.webp', alt: 'Baño de la Mastersuite', categoria: 'habitaciones' },
  // Cuneros (1)
  { src: '/images/hospital/instalaciones/cuneros.webp', alt: 'Área de cuneros', categoria: 'instalaciones' },
  // Farmacia (1)
  { src: '/images/hospital/instalaciones/farmacia-nueva.webp', alt: 'Farmacia del Hospital Santa Fe', categoria: 'instalaciones' },
  // Cafetería (2)
  { src: '/images/hospital/instalaciones/cafeteria.webp', alt: 'Cafetería Del Buen Comer', categoria: 'cafeteria' },
  { src: '/images/hospital/instalaciones/cafeteria_1.webp', alt: 'Cafetería interior', categoria: 'cafeteria' },
  // Consultorios (2)
  { src: '/images/hospital/instalaciones/consultorios.webp', alt: 'Consultorio médico', categoria: 'instalaciones' },
  { src: '/images/hospital/instalaciones/consultorios_1.webp', alt: 'Área de consultorios', categoria: 'instalaciones' },
  // Capilla (1)
  { src: '/images/hospital/instalaciones/capilla.webp', alt: 'Capilla del Hospital Santa Fe', categoria: 'instalaciones' },
  // Pasillos (1)
  { src: '/images/hospital/instalaciones/pasillos-1.webp', alt: 'Pasillos interiores', categoria: 'instalaciones' },
  // Sala General (1)
  { src: '/images/hospital/instalaciones/sala-general.webp', alt: 'Sala General', categoria: 'instalaciones' },
];

const galeriaVideos = [
  { src: '/videos/instalaciones.mp4', label: 'Instalaciones', categoria: 'videos' },
  { src: '/videos/quirofanos.mp4', label: 'Quirófanos', categoria: 'videos' },
  { src: '/videos/cuneros.mp4', label: 'Cuneros', categoria: 'videos' },
  { src: '/videos/cafeteria.mp4', label: 'Cafetería', categoria: 'videos' },
  { src: '/videos/farmacia.mp4', label: 'Farmacia', categoria: 'videos' },
  { src: '/videos/habitacion-normal.mp4', label: 'Habitación Normal', categoria: 'videos' },
  { src: '/videos/habitacion-suite.mp4', label: 'Habitación Suite', categoria: 'videos' },
  { src: '/videos/habitacion-master-suite.mp4', label: 'Habitación Mastersuite', categoria: 'videos' },
];

const categorias = [
  { id: 'todas', label: 'Todas' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'quirofanos', label: 'Quirófanos' },
  { id: 'hospitalizacion', label: 'Hospitalización' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'cafeteria', label: 'Cafetería' },
  { id: 'videos', label: 'Videos' },
];

export default function GaleriaPage() {
  const [filtro, setFiltro] = useState('todas');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filteredImages = filtro === 'todas' || filtro !== 'videos'
    ? (filtro === 'todas' ? galeriaImages : galeriaImages.filter(img => img.categoria === filtro))
    : [];

  const filteredVideos = filtro === 'todas' || filtro === 'videos'
    ? galeriaVideos
    : [];

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
            Mostrando {filteredImages.length + filteredVideos.length} {filteredImages.length + filteredVideos.length === 1 ? 'elemento' : 'elementos'}
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
                </div>
              </div>
            ))}
          </div>

          {/* Videos Grid */}
          {filteredVideos.length > 0 && (
            <>
              {filteredImages.length > 0 && (
                <h3 style={{ textAlign: 'center', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)', color: 'var(--color-primary-900)', fontSize: 'var(--text-xl)', fontWeight: 700 }}>
                  Videos
                </h3>
              )}
              <div className="galeria-videos-grid">
                {filteredVideos.map((vid, index) => (
                  <div key={index} className="galeria-video-item">
                    <VideoPlayer src={vid.src} style={{ width: '100%', aspectRatio: '9/16' }} />
                    <p className="galeria-video-caption">{vid.label}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)', marginTop: 'var(--space-8)' }}>
            Próximamente más fotos y videos de nuestras instalaciones y servicios.
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

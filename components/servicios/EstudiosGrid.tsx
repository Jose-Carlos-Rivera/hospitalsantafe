'use client';

import { useState, useMemo } from 'react';
import SectionSearch from '@/components/common/SectionSearch';
import ScrollReveal from '@/components/common/ScrollReveal';
import { normalizeText } from '@/lib/data/search-index';
import type { EstudioImagen } from '@/lib/data/estudios-imagen';

interface Props {
  estudios: EstudioImagen[];
}

const suggestions = ['Rayos X', 'Ecosonograma', 'Doppler', 'Colonoscopía', 'Endoscopía', 'Electrocardiograma'];

export default function EstudiosGrid({ estudios }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalizeText(searchQuery);
    if (!q) return estudios;
    return estudios.filter(
      (est) =>
        normalizeText(est.nombre).includes(q) ||
        normalizeText(est.descripcion).includes(q) ||
        normalizeText(est.descripcionLarga).includes(q) ||
        (est.indicaciones && est.indicaciones.some((i) => normalizeText(i).includes(q))) ||
        (est.tipos && est.tipos.some((t) => normalizeText(t.nombre).includes(q) || normalizeText(t.descripcion).includes(q)))
    );
  }, [estudios, searchQuery]);

  return (
    <>
      <SectionSearch
        placeholder="Buscar estudio de imagen..."
        totalLabel="estudios"
        totalCount={estudios.length}
        filteredCount={filtered.length}
        onSearch={setSearchQuery}
        suggestions={suggestions}
      />

      <ScrollReveal stagger className="estudios-grid">
        {filtered.map((estudio) => (
          <div key={estudio.id} className="estudio-card" data-animate>
            <div className="estudio-card__header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={estudio.iconPath} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>{estudio.nombre}</h3>
            </div>

            <p className="estudio-card__desc">{estudio.descripcionLarga}</p>

            {/* Indicaciones */}
            {estudio.indicaciones && estudio.indicaciones.length > 0 && (
              <div className="estudio-card__indicaciones">
                <h4>Indicaciones:</h4>
                <ul>
                  {estudio.indicaciones.map((ind, idx) => (
                    <li key={idx}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sub-tipos (ecosonogramas) */}
            {estudio.tipos && estudio.tipos.length > 0 && (
              <div className="estudio-tipos-section">
                <h4>Tipos de estudio disponibles:</h4>
                <div className="estudio-tipos-grid">
                  {estudio.tipos.map((tipo, idx) => (
                    <div key={idx} className={`estudio-tipo-item ${(tipo as any).destacado ? 'estudio-tipo-item--destacado' : ''}`}>
                      <strong>{tipo.nombre}</strong>
                      <p>{tipo.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Procedimiento (endoscopia) */}
            {estudio.procedimiento && (
              <div className="estudio-card__procedimiento">
                <h4>Procedimiento:</h4>
                <p>{estudio.procedimiento}</p>
              </div>
            )}

            {/* Detalles: tiempo, preparación */}
            <div className="estudio-card__details">
              <div className="estudio-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{estudio.tiempo}</span>
              </div>
              <div className="estudio-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span><strong>Preparación:</strong> {estudio.preparacion}</span>
              </div>
            </div>

            <div className="estudio-card__footer">
              <a
                href={`https://wa.me/523331198625?text=${encodeURIComponent(`Hola, me gustaría agendar un estudio de ${estudio.nombre}`)}`}
                className="btn btn--whatsapp btn--small"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </>
  );
}

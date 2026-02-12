'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import SectionSearch from '@/components/common/SectionSearch';
import ScrollReveal from '@/components/common/ScrollReveal';
import { normalizeText } from '@/lib/data/search-index';
import type { Especialidad } from '@/lib/data/especialidades';

interface Props {
  especialidades: Especialidad[];
}

const suggestions = ['Ginecología', 'Pediatría', 'Cardiología', 'Traumatología', 'Cirugía', 'Dermatología'];

export default function EspecialidadesGrid({ especialidades }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalizeText(searchQuery);
    if (!q) return especialidades;
    return especialidades.filter(
      (esp) =>
        normalizeText(esp.nombre).includes(q) ||
        normalizeText(esp.descripcion).includes(q) ||
        esp.servicios.some((s) => normalizeText(s).includes(q))
    );
  }, [especialidades, searchQuery]);

  return (
    <>
      <SectionSearch
        placeholder="Buscar especialidad..."
        totalLabel="especialidades"
        totalCount={especialidades.length}
        filteredCount={filtered.length}
        onSearch={setSearchQuery}
        suggestions={suggestions}
      />

      <ScrollReveal stagger className="especialidades-grid">
        {filtered.map((esp) => (
          <Link
            key={esp.slug}
            href={`/servicios/especialidades/${esp.slug}`}
            className="especialidad-card"
            data-animate
          >
            <div className="especialidad-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d={esp.iconPath} />
              </svg>
            </div>
            <h3>{esp.nombre}</h3>
            <p>{esp.descripcion}</p>
            <span className="card-link-inline">
              Ver más
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </ScrollReveal>
    </>
  );
}

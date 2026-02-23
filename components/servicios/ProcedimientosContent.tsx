'use client';

import { useState, useMemo } from 'react';
import SectionSearch from '@/components/common/SectionSearch';
import ScrollReveal from '@/components/common/ScrollReveal';
import { normalizeText } from '@/lib/data/search-index';
import { procedimientosQuirurgicos } from '@/lib/data/paquetes';
import { getWhatsAppUrl } from '@/lib/data/navigation';

const suggestions = ['Ginecología', 'Cirugía General', 'Urología', 'Cirugía Plástica', 'Apendicectomía', 'Histerectomía'];

export default function ProcedimientosContent() {
  const [searchQuery, setSearchQuery] = useState('');

  const totalCategorias = procedimientosQuirurgicos.length;

  // Filter categories by category name OR by individual procedure names
  const filteredCategorias = useMemo(() => {
    const q = normalizeText(searchQuery);
    if (!q) return procedimientosQuirurgicos;

    return procedimientosQuirurgicos.filter(
      (cat) =>
        normalizeText(cat.nombre).includes(q) ||
        cat.procedimientos.some((proc) => normalizeText(proc).includes(q))
    );
  }, [searchQuery]);

  const filteredCount = filteredCategorias.length;

  return (
    <>
      <ScrollReveal>
        <div data-animate style={{ textAlign: 'center', marginBottom: 'var(--space-8)', marginTop: 'var(--space-12)' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: 'var(--space-4)' }}>
            Cirugías por Especialidad
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-neutral-700)', maxWidth: '700px', margin: '0 auto' }}>
            Contamos con especialistas certificados en diversas áreas quirúrgicas. Solicita tu cotización por WhatsApp.
          </p>
        </div>
      </ScrollReveal>

      <SectionSearch
        placeholder="Buscar cirugía o especialidad..."
        totalLabel="especialidades"
        totalCount={totalCategorias}
        filteredCount={filteredCount}
        onSearch={setSearchQuery}
        suggestions={suggestions}
      />

      <div className="procedimientos-grid">
        {filteredCategorias.map((categoria) => (
          <ScrollReveal key={categoria.nombre}>
            <div
              id={categoria.nombre.toLowerCase().replace(/\s+/g, '-')}
              className="procedimiento-categoria-card"
              data-animate
            >
              <h3 className="procedimiento-categoria-card__title">{categoria.nombre}</h3>
              <ul className="procedimiento-categoria-card__list">
                {categoria.procedimientos.map((proc, idx) => (
                  <li key={idx}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {proc}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl(`Hola, me gustaría información sobre procedimientos de ${categoria.nombre}`)}
                className="btn btn--whatsapp btn--small"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '100%', marginTop: 'auto' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import SectionSearch from '@/components/common/SectionSearch';
import ScrollReveal from '@/components/common/ScrollReveal';
import { normalizeText } from '@/lib/data/search-index';
import type { CategoriaPaquete } from '@/lib/data/paquetes';

interface Props {
  categoriasPaquetes: CategoriaPaquete[];
}

const suggestions = ['Cesárea', 'Artroscopía', 'Bariátrica', 'Liposucción', 'Colecistectomía', 'Hernia'];

export default function PaquetesContent({ categoriasPaquetes }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  // Count total paquetes
  const totalPaquetes = useMemo(
    () => categoriasPaquetes.reduce((sum, cat) => sum + cat.paquetes.length, 0),
    [categoriasPaquetes]
  );

  // Filter categories and paquetes
  const filteredCategorias = useMemo(() => {
    const q = normalizeText(searchQuery);
    if (!q) return categoriasPaquetes;

    return categoriasPaquetes
      .map((cat) => ({
        ...cat,
        paquetes: cat.paquetes.filter(
          (paq) =>
            normalizeText(paq.nombre).includes(q) ||
            (paq.descripcion && normalizeText(paq.descripcion).includes(q)) ||
            (paq.indicaciones && paq.indicaciones.some((i) => normalizeText(i).includes(q))) ||
            paq.incluye.some((i) => normalizeText(i).includes(q)) ||
            normalizeText(cat.nombre).includes(q)
        ),
      }))
      .filter((cat) => cat.paquetes.length > 0);
  }, [categoriasPaquetes, searchQuery]);

  const filteredCount = filteredCategorias.reduce((sum, cat) => sum + cat.paquetes.length, 0);

  return (
    <>
      <SectionSearch
        placeholder="Buscar paquete o procedimiento..."
        totalLabel="paquetes"
        totalCount={totalPaquetes}
        filteredCount={filteredCount}
        onSearch={setSearchQuery}
        suggestions={suggestions}
      />

      {filteredCategorias.map((categoria) => (
        <div key={categoria.id} id={categoria.id} className="paquete-categoria">
          <ScrollReveal>
            <h2 className="paquete-categoria__title" data-animate>{categoria.nombre}</h2>
            <p className="paquete-categoria__desc" data-animate>{categoria.descripcion}</p>
          </ScrollReveal>

          {/* Link a maternidad si es la categoría de maternidad */}
          {categoria.id === 'maternidad' && (
            <ScrollReveal>
              <div className="paquete-maternidad-link" data-animate>
                <p>Conoce todos los detalles de nuestros paquetes de maternidad, beneficios, tipos de habitaciones y preguntas frecuentes.</p>
                <Link href="/maternidad" className="btn btn--rosa">
                  Ver paquetes de maternidad completos →
                </Link>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal stagger className="paquetes-grid">
            {categoria.paquetes.map((paquete) => (
              <div key={paquete.id} className={`paquete-card ${paquete.destacado ? 'paquete-card--destacado' : ''}`} data-animate>
                {paquete.destacado && (
                  <span className="paquete-card__badge">Más solicitado</span>
                )}
                <h3 className="paquete-card__nombre">{paquete.nombre}</h3>
                <div className="paquete-card__precio">{paquete.precio}</div>

                {paquete.descripcion && (
                  <p className="paquete-card__descripcion">{paquete.descripcion}</p>
                )}

                {paquete.indicaciones && paquete.indicaciones.length > 0 && (
                  <div className="paquete-card__indicaciones">
                    <h4>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Indicado para:
                    </h4>
                    <ul>
                      {paquete.indicaciones.map((ind, idx) => (
                        <li key={idx}>{ind}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <h4 className="paquete-card__incluye-title">Incluye:</h4>
                <ul className="paquete-card__lista">
                  {paquete.incluye.map((item, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {paquete.desglose && paquete.desglose.length > 0 && (
                  <div className="paquete-card__desglose">
                    <h4>Desglose de costos:</h4>
                    <table>
                      <tbody>
                        {paquete.desglose.map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.concepto}</td>
                            <td className="desglose-monto">{item.monto}</td>
                          </tr>
                        ))}
                        <tr className="desglose-total">
                          <td>Total</td>
                          <td className="desglose-monto">{paquete.precio}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {paquete.nota && (
                  <p className="paquete-card__nota">{paquete.nota}</p>
                )}

                <a
                  href={`https://wa.me/523331198625?text=${encodeURIComponent(`Hola, me interesa información sobre el paquete de ${paquete.nombre}`)}`}
                  className="btn btn--whatsapp btn--medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Consultar por WhatsApp
                </a>
              </div>
            ))}
          </ScrollReveal>
        </div>
      ))}
    </>
  );
}

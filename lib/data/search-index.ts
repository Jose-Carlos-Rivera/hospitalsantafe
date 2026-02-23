import { especialidades } from './especialidades';
import { categoriasPaquetes } from './paquetes';
import { estudiosImagen } from './estudios-imagen';

/**
 * Normalize text for accent-insensitive search.
 * Strips diacritics (é→e, ñ→n, etc.) and lowercases.
 */
export function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export type SearchCategory = 'especialidad' | 'paquete' | 'estudio' | 'pagina' | 'instalacion';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  keywords: string[];
  href: string;
}

// ── Static pages ──
const staticPages: SearchItem[] = [
  {
    id: 'page-inicio',
    title: 'Inicio',
    description: 'Página principal del Hospital Santa Fe',
    category: 'pagina',
    keywords: ['inicio', 'home', 'hospital', 'santa fe', 'zapotlanejo'],
    href: '/',
  },
  {
    id: 'page-nosotros',
    title: 'Nosotros',
    description: 'Conoce nuestra historia, misión y valores',
    category: 'pagina',
    keywords: ['nosotros', 'historia', 'mision', 'vision', 'valores', 'quienes somos'],
    href: '/nosotros',
  },
  {
    id: 'page-contacto',
    title: 'Contacto',
    description: 'Información de contacto, ubicación y horarios',
    category: 'pagina',
    keywords: ['contacto', 'telefono', 'whatsapp', 'direccion', 'ubicacion', 'mapa', 'horarios', 'urgencias'],
    href: '/contacto',
  },
  {
    id: 'page-maternidad',
    title: 'Maternidad',
    description: 'Paquetes de maternidad, parto y cesárea',
    category: 'pagina',
    keywords: ['maternidad', 'embarazo', 'parto', 'cesarea', 'bebe', 'prenatal', 'posparto'],
    href: '/maternidad',
  },
  {
    id: 'page-servicios',
    title: 'Servicios Médicos',
    description: 'Todos nuestros servicios médicos',
    category: 'pagina',
    keywords: ['servicios', 'medicos', 'especialidades', 'paquetes', 'estudios'],
    href: '/servicios',
  },
  {
    id: 'page-urgencias',
    title: 'Urgencias 24/7',
    description: 'Servicio de urgencias las 24 horas del día',
    category: 'pagina',
    keywords: ['urgencias', 'emergencia', '24 horas', 'accidente', 'ambulancia'],
    href: '/contacto',
  },
  {
    id: 'page-habitaciones',
    title: 'Habitaciones',
    description: 'Habitaciones privadas y cómodas para tu recuperación',
    category: 'instalacion',
    keywords: ['habitaciones', 'cuarto', 'hospedaje', 'cama', 'privada', 'recuperacion'],
    href: '/instalaciones/habitaciones',
  },
  {
    id: 'page-farmacia',
    title: 'Farmacia',
    description: 'Farmacia hospitalaria con medicamentos disponibles las 24 horas',
    category: 'instalacion',
    keywords: ['farmacia', 'medicamentos', 'medicinas', 'receta'],
    href: '/instalaciones/farmacia',
  },
  {
    id: 'page-cafeteria',
    title: 'Cafetería',
    description: 'Cafetería con alimentos y bebidas para pacientes y visitantes',
    category: 'instalacion',
    keywords: ['cafeteria', 'comida', 'alimentos', 'restaurante'],
    href: '/instalaciones/cafeteria',
  },
  {
    id: 'page-galeria',
    title: 'Galería',
    description: 'Galería de fotos de nuestras instalaciones',
    category: 'instalacion',
    keywords: ['galeria', 'fotos', 'imagenes', 'instalaciones'],
    href: '/instalaciones/galeria',
  },
  {
    id: 'page-cuneros',
    title: 'Cuneros y Neonatología',
    description: 'Atención especializada para recién nacidos',
    category: 'pagina',
    keywords: ['cuneros', 'neonatologia', 'recien nacido', 'bebe', 'neonatal', 'tamiz'],
    href: '/servicios/cuneros',
  },
];

// ── Build full index ──
function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [...staticPages];

  // Especialidades (26)
  for (const esp of especialidades) {
    items.push({
      id: `esp-${esp.slug}`,
      title: esp.nombre,
      description: esp.descripcion,
      category: 'especialidad',
      keywords: [
        esp.nombre.toLowerCase(),
        ...(esp.subtitulo ? [esp.subtitulo.toLowerCase()] : []),
        ...esp.servicios.map(s => s.toLowerCase()),
        ...(esp.destacados || []).map(d => d.toLowerCase()),
        esp.slug.replace(/-/g, ' '),
      ],
      href: `/servicios/especialidades/${esp.slug}`,
    });
  }

  // Paquetes (all categories)
  for (const cat of categoriasPaquetes) {
    for (const paq of cat.paquetes) {
      items.push({
        id: `paq-${paq.id}`,
        title: paq.nombre,
        description: paq.descripcion || `Paquete de ${cat.nombre}: ${paq.precio}`,
        category: 'paquete',
        keywords: [
          paq.nombre.toLowerCase(),
          cat.nombre.toLowerCase(),
          paq.precio.toLowerCase(),
          ...(paq.indicaciones || []).map(i => i.toLowerCase()),
          ...(paq.incluye || []).slice(0, 3).map(i => i.toLowerCase()),
        ],
        href: `/servicios/paquetes#${cat.id}`,
      });
    }
  }

  // Estudios de imagen (9)
  for (const est of estudiosImagen) {
    items.push({
      id: `est-${est.id}`,
      title: est.nombre,
      description: est.descripcion,
      category: 'estudio',
      keywords: [
        est.nombre.toLowerCase(),
        ...(est.indicaciones || []).map(i => i.toLowerCase()),
        ...(est.tipos || []).map(t => t.nombre.toLowerCase()),
      ],
      href: '/servicios/estudios-imagen',
    });
  }

  return items;
}

let _cachedIndex: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (!_cachedIndex) {
    _cachedIndex = buildSearchIndex();
  }
  return _cachedIndex;
}

/**
 * Search across all items with scoring.
 * Title match = 10pts, keyword match = 5pts, description match = 2pts.
 */
export function searchAll(query: string): SearchItem[] {
  const index = getSearchIndex();
  const q = normalizeText(query);

  if (!q) return [];

  const terms = q.split(/\s+/).filter(t => t.length >= 2);
  if (terms.length === 0) return [];

  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of index) {
    let score = 0;
    const titleNorm = normalizeText(item.title);
    const descNorm = normalizeText(item.description);

    for (const term of terms) {
      // Title match (highest priority)
      if (titleNorm.includes(term)) {
        score += 10;
        // Bonus for exact start
        if (titleNorm.startsWith(term)) score += 5;
      }

      // Keyword match (keywords are already lowercase but may have accents)
      if (item.keywords.some(kw => normalizeText(kw).includes(term))) {
        score += 5;
      }

      // Description match
      if (descNorm.includes(term)) {
        score += 2;
      }
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  // Sort by score descending, limit to 12
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 12).map(s => s.item);
}

/**
 * Get popular/suggested search items for empty state.
 */
export const popularSearches: { label: string; href: string }[] = [
  { label: 'Urgencias', href: '/contacto' },
  { label: 'Maternidad', href: '/maternidad' },
  { label: 'Especialidades', href: '/servicios/especialidades' },
  { label: 'Procedimientos Quirúrgicos', href: '/servicios/paquetes' },
  { label: 'Estudios de Imagen', href: '/servicios/estudios-imagen' },
  { label: 'Habitaciones', href: '/instalaciones/habitaciones' },
  { label: 'Instalaciones', href: '/instalaciones' },
  { label: 'Contacto', href: '/contacto' },
];

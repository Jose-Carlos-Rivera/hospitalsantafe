import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';
import { logoutAction } from '../actions';

export default async function AdminDashboard() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect('/admin');
  }

  const sections = [
    {
      href: '/admin/dashboard/testimonios',
      title: 'Testimonios',
      desc: 'Agregar, editar y eliminar reseñas de pacientes',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/precios',
      title: 'Precios y Contacto',
      desc: 'Precios de paquetes, habitaciones y datos de contacto',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/horarios',
      title: 'Horarios',
      desc: 'Horarios de consultas, farmacia, cafetería y más',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/doctores',
      title: 'Doctores',
      desc: 'Agregar, editar y eliminar médicos del equipo',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/cafeteria',
      title: 'Cafetería',
      desc: 'Menú, secciones y precios de la cafetería',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/habitaciones',
      title: 'Habitaciones',
      desc: 'Tipos de habitación, amenidades y descripciones',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/farmacia',
      title: 'Farmacia',
      desc: 'Servicios y productos de la farmacia',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/faqs',
      title: 'Preguntas Frecuentes',
      desc: 'FAQs de la sección de maternidad',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/estadisticas',
      title: 'Estadísticas',
      desc: 'Números de la barra de confianza del inicio',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/nosotros',
      title: 'Nosotros',
      desc: 'Misión, visión y valores del hospital',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="admin-topbar">
        <div className="admin-topbar__brand">
          <img src="/images/logo-fondo-blanco.webp" alt="HSF" className="admin-topbar__logo" />
          <span>Panel Admin</span>
        </div>
        <div className="admin-topbar__actions">
          <a href="/" target="_blank" className="admin-topbar__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Ver sitio
          </a>
          <form action={logoutAction}>
            <button type="submit" className="admin-btn-logout">
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>

      {/* Page Content */}
      <div className="admin-page">
        <div className="admin-dashboard-header">
          <h1>Hospital Santa Fe</h1>
          <p>Selecciona una sección para editar su contenido</p>
        </div>

        <div className="admin-cards-grid">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="admin-nav-card">
              <div className="admin-nav-card__icon">{s.icon}</div>
              <span className="admin-nav-card__title">{s.title}</span>
              <span className="admin-nav-card__desc">{s.desc}</span>
            </Link>
          ))}
        </div>

        <div className="admin-card" style={{ marginTop: '8px' }}>
          <h2>¿Cómo funciona?</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px', color: '#555', margin: 0 }}>
            <li>Entra a la sección que quieres modificar.</li>
            <li>Realiza los cambios (agregar, editar o eliminar).</li>
            <li>Presiona <strong>Guardar cambios</strong>.</li>
            <li>Espera <strong>~2 minutos</strong> mientras el sitio se actualiza automáticamente.</li>
            <li>Visita el sitio para ver los cambios aplicados.</li>
          </ol>
        </div>
      </div>
    </>
  );
}

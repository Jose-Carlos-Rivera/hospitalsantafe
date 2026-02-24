import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';
import { logoutAction } from '../../actions';
import HorariosClient from './HorariosClient';
import horariosData from '@/lib/data/horarios.json';

export default async function HorariosPage() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect('/admin');
  }

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
            <button type="submit" className="admin-btn-logout">Cerrar sesion</button>
          </form>
        </div>
      </div>

      {/* Page Content */}
      <div className="admin-page">
        <div className="admin-section-header">
          <Link href="/admin/dashboard">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Volver
          </Link>
          <h1>Horarios</h1>
        </div>

        <div className="admin-info-note">
          Los cambios se guardan en GitHub y el sitio se actualiza automaticamente en <strong>~1-2 minutos</strong>.
        </div>

        <HorariosClient initialData={horariosData} />
      </div>
    </>
  );
}

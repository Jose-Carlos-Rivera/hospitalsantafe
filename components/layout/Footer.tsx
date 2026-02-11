import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main container">
                <div className="footer__grid">
                    {/* Column 1: Logo & Tagline */}
                    <div className="footer__column">
                        <Link href="/" className="footer__logo">
                            <div className="logo">
                                <div className="logo__icon">
                                    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                                        <path d="M20 2 L20 18 M20 22 L20 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M12 20 L28 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <div className="logo__text">
                                    <span className="logo__name">HOSPITAL</span>
                                    <span className="logo__subtitle">Santa Fe</span>
                                </div>
                            </div>
                        </Link>
                        <p className="footer__tagline">Vivimos para servir</p>
                        <p className="footer__description">
                            Atención médica de calidad y personalizada desde 2003
                        </p>
                    </div>

                    {/* Column 2: Enlaces Rápidos */}
                    <div className="footer__column">
                        <h3 className="footer__title">Servicios</h3>
                        <ul className="footer__links">
                            <li><Link href="/maternidad">Maternidad</Link></li>
                            <li><Link href="/servicios">Especialidades</Link></li>
                            <li><Link href="/estudios">Estudios de Imagen</Link></li>
                            <li><Link href="/paquetes">Paquetes Quirúrgicos</Link></li>
                            <li><Link href="/paquetes/cirugia-plastica">Cirugía Plástica</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Hospital */}
                    <div className="footer__column">
                        <h3 className="footer__title">Hospital</h3>
                        <ul className="footer__links">
                            <li><Link href="/nosotros">Quiénes Somos</Link></li>
                            <li><Link href="/nosotros/instalaciones">Instalaciones</Link></li>
                            <li><Link href="/nosotros/habitaciones">Habitaciones</Link></li>
                            <li><Link href="/nosotros/galeria">Galería</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contacto */}
                    <div className="footer__column">
                        <h3 className="footer__title">Contacto</h3>
                        <ul className="footer__contact">
                            <li>
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <div>
                                    <a href="tel:7344205">73-44205</a>
                                    <a href="tel:3331198625">333-119-8625</a>
                                </div>
                            </li>
                            <li>
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <div>
                                    Calle Galeana No.22<br />
                                    Santa Fe, Zapotlanejo, Jalisco
                                </div>
                            </li>
                            <li>
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div>
                                    Urgencias 24 horas<br />
                                    365 días del año
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-content">
                        <p className="footer__copyright">
                            © {new Date().getFullYear()} Hospital Santa Fe. Todos los derechos reservados.
                        </p>
                        <div className="footer__legal">
                            <Link href="/aviso-privacidad">Aviso de Privacidad</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

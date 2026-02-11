import Link from 'next/link';
import '../instalaciones.css';

export default function Habitaciones() {
    return (
        <>
            <section className="instalaciones-hero">
                <div className="container">
                    <h1>HABITACIONES</h1>
                    <p className="lead">
                        Espacios cómodos y seguros para tu recuperación
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="habitaciones-container">
                        {/* Habitación Compartida */}
                        <div className="habitacion-card">
                            <div className="habitacion-image">
                                <img
                                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop"
                                    alt="Habitación compartida"
                                />
                            </div>
                            <div className="habitacion-info">
                                <h2>Habitación Compartida</h2>
                                <p className="habitacion-precio">$800 / día</p>

                                <h3>Características:</h3>
                                <ul>
                                    <li>Cama hospitalaria con control eléctrico</li>
                                    <li>Baño compartido</li>
                                    <li>Televisión</li>
                                    <li>Aire acondicionado</li>
                                    <li>Alimentación incluida para el paciente</li>
                                    <li>Un acompañante permitido</li>
                                </ul>
                            </div>
                        </div>

                        {/* Habitación Privada */}
                        <div className="habitacion-card featured">
                            <div className="habitacion-badge">Más solicitada</div>
                            <div className="habitacion-image">
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop"
                                    alt="Habitación privada"
                                />
                            </div>
                            <div className="habitacion-info">
                                <h2>Habitación Privada</h2>
                                <p className="habitacion-precio">$1,200 / día</p>

                                <h3>Características:</h3>
                                <ul>
                                    <li>Cama hospitalaria de lujo</li>
                                    <li>Baño privado completo</li>
                                    <li>Televisión de pantalla plana</li>
                                    <li>Aire acondicionado individual</li>
                                    <li>Alimentación para paciente y acompañante</li>
                                    <li>Sofá cama para acompañante</li>
                                    <li>Refrigerador</li>
                                    <li>WiFi de alta velocidad</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="info-box">
                        <h3>Información Importante</h3>
                        <p>
                            Todas nuestras habitaciones cuentan con llamado de enfermería las 24 horas y
                            personal médico disponible en todo momento.
                        </p>
                        <p>
                            <strong>Check-in:</strong> Previa asignación médica<br />
                            <strong>Check-out:</strong> Hasta las 12:00 PM (mediodía)
                        </p>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Necesitas hospitalización?</h2>
                    <Link href="/contacto" className="btn btn--primary btn--large">
                        Contactar ahora
                    </Link>
                </div>
            </section>
        </>
    );
}

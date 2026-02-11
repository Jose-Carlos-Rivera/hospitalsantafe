import Link from 'next/link';
import '../instalaciones.css';

export default function Cafeteria() {
    return (
        <>
            <section className="instalaciones-hero">
                <div className="container">
                    <h1>CAFETERÍA</h1>
                    <p className="lead">
                        Alimentación saludable para pacientes, familiares y visitantes
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cafeteria-content">
                        <div className="cafeteria-image">
                            <img
                                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&h=600&fit=crop"
                                alt="Cafetería del hospital"
                            />
                        </div>

                        <div className="content-text">
                            <h2>Cafetería Hospital Santa Fe</h2>
                            <p>
                                Nuestra cafetería ofrece opciones de comida saludable, snacks y bebidas para
                                todos nuestros visitantes y personal del hospital.
                            </p>

                            <div className="horarios-box">
                                <h3>Horario de Servicio</h3>
                                <div className="horario-item">
                                    <strong>Lunes a Domingo:</strong>
                                    <span>7:00 AM - 8:00 PM</span>
                                </div>
                            </div>

                            <h3>Menú</h3>
                            <div className="menu-section">
                                <h4>Desayunos (7:00 AM - 11:00 AM)</h4>
                                <ul>
                                    <li>Desayunos completos desde $50</li>
                                    <li>Pan dulce y café</li>
                                    <li>Jugos naturales</li>
                                    <li>Fruta fresca</li>
                                </ul>

                                <h4>Comidas (1:00 PM - 5:00 PM)</h4>
                                <ul>
                                    <li>Menú del día $80</li>
                                    <li>Platos à la carta</li>
                                    <li>Ensaladas</li>
                                    <li>Comida balanceada para diabéticos</li>
                                </ul>

                                <h4>Todo el día</h4>
                                <ul>
                                    <li>Café y bebidas calientes</li>
                                    <li>Refrescos y agua</li>
                                    <li>Snacks saludables</li>
                                    <li>Sandwiches</li>
                                </ul>
                            </div>

                            <div className="info-box">
                                <strong>Servicio a habitaciones:</strong> Disponible para pacientes.
                                Pregunta al personal de enfermería.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Tienes alguna pregunta?</h2>
                    <Link href="/contacto" className="btn btn--primary btn--large">
                        Contactar ahora
                    </Link>
                </div>
            </section>
        </>
    );
}

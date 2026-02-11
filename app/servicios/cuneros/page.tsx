import Link from 'next/link';
import '../servicios.css';

export default function Cuneros() {
    return (
        <>
            <section className="servicios-hero">
                <div className="container">
                    <h1>CUNEROS</h1>
                    <p className="lead">
                        Atención especializada para tu recién nacido
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-split">
                        <div className="content-text">
                            <h2>Cuidado Neonatal de Calidad</h2>
                            <p>
                                Nuestro cunero cuenta con personal especializado en el cuidado de recién
                                nacidos, proporcionando monitoreo constante y atención inmediata.
                            </p>

                            <h3>Servicios incluidos:</h3>
                            <ul className="servicios-lista">
                                <li>Monitoreo continuo 24/7</li>
                                <li>Enfermeras especializadas en neonatología</li>
                                <li>Control de signos vitales</li>
                                <li>Tamiz neonatal</li>
                                <li>Vacunación inicial</li>
                                <li>Registro civil en el hospital</li>
                            </ul>

                            <div className="highlight-box">
                                <h4>Cunero de Cuidados Especiales</h4>
                                <p>
                                    Para bebés que requieren atención médica adicional, contamos con cunero
                                    de cuidados intermedios con equipo especializado.
                                </p>
                            </div>
                        </div>

                        <div className="content-image">
                            <img
                                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=700&fit=crop"
                                alt="Cunero - Bebé recién nacido"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Esperas un bebé?</h2>
                    <p className="lead">Conoce nuestros paquetes de maternidad</p>
                    <Link href="/servicios/paquetes" className="btn btn--primary btn--large">
                        Ver paquetes
                    </Link>
                </div>
            </section>
        </>
    );
}

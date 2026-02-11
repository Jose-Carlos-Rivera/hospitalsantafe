import Link from 'next/link';
import '../servicios.css';

export default function Paquetes() {
    return (
        <>
            <section className="servicios-hero">
                <div className="container">
                    <h1>PAQUETES DE MATERNIDAD</h1>
                    <p className="lead">
                        Tu embarazo y parto en las mejores manos
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="paquetes-container">
                        {/* Paquete Parto */}
                        <div className="paquete-grande">
                            <div className="paquete-header">
                                <h2>Paquete Parto</h2>
                                <div className="paquete-precio-grande">$11,000</div>
                            </div>

                            <div className="paquete-contenido">
                                <h3>Incluye:</h3>
                                <ul>
                                    <li>✓ Atención médica del parto</li>
                                    <li>✓ Habitación compartida (24 horas)</li>
                                    <li>✓ Medicamentos básicos</li>
                                    <li>✓ Cunero para el bebé</li>
                                    <li>✓ Tamiz neonatal</li>
                                    <li>✓ Alimentación para la mamá</li>
                                    <li>✓ Kit de maternidad</li>
                                </ul>

                                <div className="apartado-info">
                                    <strong>Apartado desde $500 pesos</strong>
                                    <p>Facilidades de pago disponibles</p>
                                </div>
                            </div>
                        </div>

                        {/* Paquete Cesárea */}
                        <div className="paquete-grande">
                            <div className="paquete-header">
                                <h2>Paquete Cesárea</h2>
                                <div className="paquete-precio-grande">$15,000</div>
                            </div>

                            <div className="paquete-contenido">
                                <h3>Incluye:</h3>
                                <ul>
                                    <li>✓ Cirugía de cesárea</li>
                                    <li>✓ Anestesia (epidural o general)</li>
                                    <li>✓ Habitación compartida (48 horas)</li>
                                    <li>✓ Medicamentos post-operatorios</li>
                                    <li>✓ Cunero para el bebé</li>
                                    <li>✓ Tamiz neonatal</li>
                                    <li>✓ Alimentación para la mamá</li>
                                    <li>✓ Kit de maternidad</li>
                                    <li>✓ Seguimiento post-quirúrgico</li>
                                </ul>

                                <div className="apartado-info">
                                    <strong>Apartado desde $500 pesos</strong>
                                    <p>Facilidades de pago disponibles</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Información Adicional */}
                    <div className="info-adicional">
                        <h3>Información Importante</h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <h4>Consultas Prenatales</h4>
                                <p>Durante el embarazo, tendrás consultas prenatales con descuento especial</p>
                            </div>
                            <div className="info-item">
                                <h4>Habitación Privada</h4>
                                <p>Opción de upgrade a habitación privada por $800 adicionales por día</p>
                            </div>
                            <div className="info-item">
                                <h4>Acompañante</h4>
                                <p>Se permite un acompañante durante toda la estancia hospitalaria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Lista para apartar tu paquete?</h2>
                    <p className="lead">Contáctanos para más información y facilidades de pago</p>
                    <Link href="/contacto" className="btn btn--primary btn--large">
                        Contactar ahora
                    </Link>
                </div>
            </section>
        </>
    );
}

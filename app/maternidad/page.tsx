import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import type { Metadata } from 'next';
import { getWhatsAppUrl, PHONE_LANDLINE, PHONE_LANDLINE_DISPLAY } from '@/lib/data/navigation';
import './page.css';

export const metadata: Metadata = {
    title: 'Paquetes de Maternidad',
    description: 'Paquetes de maternidad desde $11,000. Consultas prenatales, ecosonogramas 3D/4D, atención por especialistas. Apartado desde $500 pesos.',
};

export default function MaternidadPage() {
    return (
        <>
            {/* Hero Maternidad */}
            <section className="hero-maternidad">
                <div className="hero-maternidad__content container">
                    <div className="hero-icon">
                        <img
                            src="/images/hospital/maternidad/paquetes-de-maternidad.webp"
                            alt="Paquetes de Maternidad Hospital Santa Fe"
                            style={{ width: '100%', maxWidth: '500px', borderRadius: 'var(--radius-xl)', margin: '0 auto var(--space-6)' }}
                        />
                    </div>
                    <h1 className="hero-maternidad__title">
                        Paquetes de Maternidad
                    </h1>
                    <p className="hero-maternidad__subtitle">
                        Tu embarazo en buenas manos &bull; Atenci&oacute;n personalizada desde 2003
                    </p>
                </div>
            </section>

            {/* Beneficios */}
            <section className="section benefits">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>¿Por qué elegir Hospital Santa Fe?</h2>
                        <p className="text-neutral">Cuidamos de ti y tu bebé con experiencia y calidez</p>
                    </div>

                    <ScrollReveal stagger className="grid grid--4">
                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3>Precios accesibles</h3>
                            <p>Paquetes desde $11,000 con facilidad de pago</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <h3>Apartado $500</h3>
                            <p>Aparta tu paquete con solo $500 pesos</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3>Consultas incluidas</h3>
                            <p>Consultas prenatales con especialistas</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                    <polyline points="17 2 12 7 7 2" />
                                </svg>
                            </div>
                            <h3>Ecos 2D/3D/4D</h3>
                            <p>Ultrasonidos de última generación</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                </svg>
                            </div>
                            <h3>Instalaciones modernas</h3>
                            <p>Espacios higiénicos y confortables</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4M12 8h.01" />
                                </svg>
                            </div>
                            <h3>Especialistas</h3>
                            <p>Ginecólogos y pediatras certificados</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <h3>Cunero RN</h3>
                            <p>Atención inmediata para recién nacidos</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3>Material estéril</h3>
                            <p>100% desechable de la mejor calidad</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Trato personalizado</h3>
                            <p>Calidez y amabilidad en cada momento</p>
                        </div>

                        <div className="benefit-card" data-animate>
                            <div className="benefit-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                                    <rect x="9" y="9" width="6" height="6" />
                                </svg>
                            </div>
                            <h3>Estacionamiento</h3>
                            <p>Amplio para pacientes y familiares</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Paquetes Comparativos */}
            <section className="section packages-comparison">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Nuestros Paquetes</h2>
                        <p className="text-neutral">Elige el paquete que mejor se adapte a tus necesidades</p>
                    </div>

                    <ScrollReveal stagger className="packages-grid">
                        {/* Paquete Parto */}
                        <div className="package-card" data-animate>
                            <img src="/images/hospital/maternidad/paquete-parto.webp" alt="Paquete de Parto" style={{ width: '100%', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }} />
                            <div className="package-card__header">
                                <h3>Paquete de Parto</h3>
                                <div className="package-card__price">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">11,000</span>
                                    <span className="price-note">*</span>
                                </div>
                                <p className="price-description">Habitación Normal</p>
                            </div>

                            <div className="package-card__content">
                                <h4>Incluye:</h4>
                                <ul className="package-list">
                                    <li>Atención de parto por especialista</li>
                                    <li>Honorarios médicos (ginecólogo)</li>
                                    <li>Honorarios de pediatra</li>
                                    <li>Hospitalización por 1 día</li>
                                    <li>Atención del recién nacido en cuneros</li>
                                    <li>Medicamentos de rutina (analgésicos, antibióticos)</li>
                                    <li>Incubadora y oxígeno por 3 horas</li>
                                    <li>Anestesia peridural</li>
                                    <li>Pañalera con pañales y lácteos</li>
                                </ul>

                                <a
                                    href={getWhatsAppUrl('Hola, me interesa información sobre el Paquete de Parto Natural de $11,000')}
                                    className="btn btn--rosa"
                                    style={{ width: '100%', marginTop: 'var(--space-6)' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Solicitar información
                                </a>
                            </div>

                            <div className="package-card__footer">
                                <p>*Apartado con $500 pesos • Abonos mensuales durante control prenatal</p>
                            </div>
                        </div>

                        {/* Paquete Cesárea */}
                        <div className="package-card package-card--featured" data-animate>
                            <img src="/images/hospital/maternidad/paquete-cesarea.webp" alt="Paquete de Ces&aacute;rea" style={{ width: '100%', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }} />
                            <div className="package-badge">M&aacute;s popular</div>
                            <div className="package-card__header">
                                <h3>Paquete de Ces&aacute;rea</h3>
                                <div className="package-card__price">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">15,000</span>
                                    <span className="price-note">*</span>
                                </div>
                                <p className="price-description">Habitación Normal</p>
                            </div>

                            <div className="package-card__content">
                                <h4>Incluye:</h4>
                                <ul className="package-list">
                                    <li>Operación cesárea programada</li>
                                    <li>Anestesia (bloqueo regional)</li>
                                    <li>Honorarios médicos (ginecólogo)</li>
                                    <li>Honorarios de pediatra</li>
                                    <li>Hospitalización por 2 días</li>
                                    <li>Atención del recién nacido en cuneros</li>
                                    <li>Alimentos para mamá y recién nacido</li>
                                    <li>Medicamentos de rutina (analgésicos, antibióticos)</li>
                                    <li>Material quirúrgico desechable</li>
                                </ul>

                                <a
                                    href={getWhatsAppUrl('Hola, me interesa información sobre el Paquete de Cesárea de $15,000')}
                                    className="btn btn--rosa"
                                    style={{ width: '100%', marginTop: 'var(--space-6)' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Solicitar información
                                </a>
                            </div>

                            <div className="package-card__footer">
                                <p>*Apartado con $500 pesos • Abonos mensuales durante control prenatal</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="payment-info text-center">
                        <div className="payment-features">
                            <div className="payment-feature">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                <p>Aceptamos tarjetas de crédito y débito (Visa, MasterCard)</p>
                            </div>
                            <div className="payment-feature">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                <p>Meses sin intereses con tarjetas Bancomer</p>
                            </div>
                            <div className="payment-feature">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <p>Facilidad de pago: Aparta con $500 y abona mensualmente</p>
                            </div>
                        </div>
                        <p className="text-neutral text-sm" style={{ marginTop: 'var(--space-4)' }}>
                            * Precio sujeto a valoración médica. Consulta disponibilidad para habitaciones Suite y Master Suite con costo adicional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tipos de Habitaciones */}
            <section className="section room-types">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Tipos de Habitaciones</h2>
                        <p className="text-neutral">Elige el nivel de confort que prefieras para tu estadía</p>
                    </div>

                    <ScrollReveal stagger className="grid grid--3">
                        <div className="room-card" data-animate>
                            <div className="room-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                    <polyline points="17 2 12 7 7 2" />
                                </svg>
                            </div>
                            <h3>Habitación Normal</h3>
                            <p className="room-description">Privada con todas las amenidades básicas</p>
                            <ul className="room-amenities">
                                <li>Cama eléctrica</li>
                                <li>TV con Megacable</li>
                                <li>Aire acondicionado</li>
                                <li>Baño privado completo</li>
                                <li>Espacio para acompañante</li>
                            </ul>
                            <p className="room-price">Incluida en paquete</p>
                        </div>

                        <div className="room-card room-card--featured" data-animate>
                            <div className="room-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                    <polyline points="17 2 12 7 7 2" />
                                </svg>
                            </div>
                            <h3>Suite</h3>
                            <p className="room-description">Mayor espacio y comodidad premium</p>
                            <ul className="room-amenities">
                                <li>Cama eléctrica</li>
                                <li>TV con Megacable</li>
                                <li>Minisplit Frío/Calor</li>
                                <li>Baño privado amplio</li>
                                <li>Área de visitas</li>
                                <li>Espacio para acompañante</li>
                            </ul>
                            <p className="room-price">Costo adicional</p>
                        </div>

                        <div className="room-card" data-animate>
                            <div className="room-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                    <polyline points="17 2 12 7 7 2" />
                                </svg>
                            </div>
                            <h3>Master Suite</h3>
                            <p className="room-description">Máximo confort para toda la familia</p>
                            <ul className="room-amenities">
                                <li>Cama eléctrica</li>
                                <li>TV con Megacable</li>
                                <li>Minisplit Frío/Calor</li>
                                <li>Baño privado de lujo</li>
                                <li>Sala de estar</li>
                                <li>Espacio familiar premium</li>
                            </ul>
                            <p className="room-price">Costo adicional</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="section faq">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Preguntas Frecuentes</h2>
                        <p className="text-neutral">Resolvemos tus dudas sobre nuestros paquetes de maternidad</p>
                    </div>

                    <ScrollReveal stagger className="faq-list">
                        <details className="faq-item" data-animate>
                            <summary>¿Puede mi familiar estar presente durante el parto?</summary>
                            <p>Sí, puede estar presente un familiar durante el parto o la cesárea si así lo desea. Entendemos la importancia del apoyo emocional en este momento tan especial.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Cuánto debo de abonar cada mes?</summary>
                            <p>No hay una cantidad fija obligatoria. Lo recomendable es abonar mínimo $500 pesos cada mes durante tu control prenatal para que el paquete esté casi pagado al final del embarazo. Puedes hacer abonos mayores según tu conveniencia.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Tienen diferentes tipos de habitaciones?</summary>
                            <p>Sí, tenemos 3 tipos de habitaciones: Habitación Normal (Privada) incluida en el paquete, Habitación Suite con mayor espacio, y Habitación Master Suite con amenidades premium. Las Suite y Master Suite tienen un costo adicional.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Puedo traer a mi ginecólogo(a) a atender mi parto?</summary>
                            <p>Claro que sí, puedes solicitar que tu ginecólogo(a) de confianza atienda tu parto en nuestras instalaciones. Solo es necesario comentarlo con anticipación para coordinar días u horarios según disponibilidad del especialista.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Aceptan tarjetas de crédito y débito?</summary>
                            <p>Sí, aceptamos todas las tarjetas de débito y de crédito Visa y MasterCard. Excepto American Express.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Se puede pagar a meses sin intereses?</summary>
                            <p>Actualmente tenemos el servicio de meses sin intereses disponible con tarjetas Bancomer. Consulta las opciones de plazo al momento de realizar tu pago.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Tienen servicio de urgencias las 24 horas?</summary>
                            <p>Sí, el servicio de urgencias está disponible las 24 horas del día, los 365 días del año. Contamos con personal médico y de enfermería de guardia en todo momento.</p>
                        </details>

                        <details className="faq-item" data-animate>
                            <summary>¿Los ecosonogramas 3D/4D tienen costo adicional?</summary>
                            <p>Los ecosonogramas 2D de rutina están incluidos en las consultas prenatales. Los ecosonogramas 3D/4D/5D tienen precio especial para pacientes con paquete de maternidad. Consulta tarifas en tu cita prenatal.</p>
                        </details>
                    </ScrollReveal>
                </div>
            </section>

            {/* Video Cuneros */}
            <section className="section" style={{ background: 'var(--color-rosa-50)' }}>
                <div className="container">
                    <ScrollReveal>
                        <div data-animate style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-rosa-700)' }}>Conoce Nuestros Cuneros</h3>
                            <VideoPlayer src="/videos/cuneros.mp4" style={{ width: '100%', aspectRatio: '9/16' }} />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Final */}
            <section className="section cta-final">
                <div className="container text-center">
                    <ScrollReveal>
                    <h2 data-animate>¿Lista para dar el siguiente paso?</h2>
                    <p className="text-neutral mb-8" data-animate>Contáctanos y agenda tu consulta prenatal. Nuestros especialistas te atenderán con calidez</p>

                    <div className="cta-buttons" data-animate>
                        <a
                            href={getWhatsAppUrl('Hola, me interesa información sobre los paquetes de maternidad')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--rosa btn--large"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp
                        </a>

                        <a href={`tel:${PHONE_LANDLINE}`} className="btn btn--rosa-outline btn--large">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Llamar: {PHONE_LANDLINE_DISPLAY}
                        </a>
                    </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

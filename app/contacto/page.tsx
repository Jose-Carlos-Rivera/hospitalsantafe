import './contacto.css';

export default function Contacto() {
    return (
        <>
            <section className="contacto-hero">
                <div className="container">
                    <h1>CONTACTO</h1>
                    <p className="lead">
                        Estamos aquí para atenderte. Contáctanos por cualquiera de estos medios
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contacto-grid">
                        {/* Información de Contacto */}
                        <div className="contacto-info">
                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <h3>Ubicación</h3>
                                <p>
                                    Av. Hidalgo #123<br />
                                    Col. Centro<br />
                                    Zapotlanejo, Jalisco<br />
                                    C.P. 45430
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <h3>Teléfonos</h3>
                                <p>
                                    <strong>Conmutador:</strong><br />
                                    <a href="tel:+523731234567" className="phone-link">(373) 123-4567</a>
                                </p>
                                <p className="urgencias-phone">
                                    <strong>Urgencias 24/7:</strong><br />
                                    <a href="tel:+523731234568" className="phone-link">(373) 123-4568</a>
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:contacto@hospitalsantafe.com" className="email-link">
                                        contacto@hospitalsantafe.com
                                    </a>
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h3>Horarios</h3>
                                <p>
                                    <strong>Urgencias:</strong> 24/7<br />
                                    <strong>Consultas:</strong> Lun-Vie 8AM-8PM<br />
                                    <strong>Sábados:</strong> 9AM-2PM
                                </p>
                            </div>
                        </div>

                        {/* Formulario de Contacto */}
                        <div className="contacto-form-container">
                            <h2>Envíanos un Mensaje</h2>
                            <form className="contacto-form">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre completo *</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        required
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono *</label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            required
                                            placeholder="(373) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="asunto">Asunto *</label>
                                    <select id="asunto" name="asunto" required>
                                        <option value="">Selecciona un asunto</option>
                                        <option value="consulta">Consulta general</option>
                                        <option value="cita">Agendar cita</option>
                                        <option value="maternidad">Paquetes de maternidad</option>
                                        <option value="estudios">Estudios de imagen</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje *</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={6}
                                        required
                                        placeholder="Escribe tu mensaje aquí..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn--primary btn--large">
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="mapa-section">
                <div className="container">
                    <h2 className="text-center">Cómo Llegar</h2>
                    <div className="mapa-container">
                        <div className="mapa-placeholder">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <p>Mapa de Google próximamente</p>
                            <p className="direccion-texto">
                                Av. Hidalgo #123, Col. Centro, Zapotlanejo, Jalisco
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

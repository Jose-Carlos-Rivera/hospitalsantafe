import Link from 'next/link';
import '../servicios.css';

export default function EstudiosImagen() {
    const estudios = [
        {
            nombre: "Rayos X",
            descripcion: "Estudios radiológicos digitales de alta resolución",
            precio: "Desde $200"
        },
        {
            nombre: "Ultrasonido",
            descripcion: "Estudios de ultrasonido 4D y Doppler",
            precio: "Desde $350"
        },
        {
            nombre: "Electrocardiograma",
            descripcion: "Estudio del ritmo cardíaco",
            precio: "$150"
        },
        {
            nombre: "Mastografía",
            descripcion: "Detección temprana de cáncer de mama",
            precio: "$450"
        }
    ];

    return (
        <>
            <section className="servicios-hero">
                <div className="container">
                    <h1>ESTUDIOS DE IMAGEN</h1>
                    <p className="lead">
                        Tecnología de vanguardia para diagnósticos precisos
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="estudios-grid">
                        {estudios.map((estudio, index) => (
                            <div key={index} className="estudio-card">
                                <h3>{estudio.nombre}</h3>
                                <p>{estudio.descripcion}</p>
                                <div className="precio">{estudio.precio}</div>
                            </div>
                        ))}
                    </div>

                    <div className="info-box">
                        <h3>¿Necesitas un estudio?</h3>
                        <p>Contamos con equipos de última generación y personal altamente capacitado.</p>
                        <p><strong>Resultados rápidos:</strong> La mayoría de estudios están listos en 24-48 horas.</p>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Requieres estudios de imagen?</h2>
                    <Link href="/contacto" className="btn btn--primary btn--large">
                        Agendar estudio
                    </Link>
                </div>
            </section>
        </>
    );
}

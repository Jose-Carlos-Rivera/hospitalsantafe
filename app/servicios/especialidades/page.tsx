import Link from 'next/link';
import '../servicios.css';

export default function Especialidades() {
    const especialidades = [
        {
            nombre: "Medicina General",
            descripcion: "Atención médica integral para toda la familia",
            icono: "👨‍⚕️"
        },
        {
            nombre: "Ginecología y Obstetricia",
            descripcion: "Cuidado integral de la salud femenina y maternidad",
            icono: "🤱"
        },
        {
            nombre: "Pediatría",
            descripcion: "Atención especializada para el cuidado de tus hijos",
            icono: "👶"
        },
        {
            nombre: "Cardiología",
            descripcion: "Diagnóstico y tratamiento de enfermedades cardiovasculares",
            icono: "❤️"
        },
        {
            nombre: "Traumatología",
            descripcion: "Especialistas en lesiones del sistema músculo-esquelético",
            icono: "🦴"
        },
        {
            nombre: "Cirugía General",
            descripcion: "Procedimientos quirúrgicos con tecnología avanzada",
            icono: "⚕️"
        },
        {
            nombre: "Medicina Interna",
            descripcion: "Diagnóstico y tratamiento de enfermedades en adultos",
            icono: "🩺"
        },
        {
            nombre: "Anestesiología",
            descripcion: "Manejo del dolor y anestesia segura",
            icono: "💉"
        }
    ];

    return (
        <>
            <section className="servicios-hero">
                <div className="container">
                    <h1>ESPECIALIDADES MÉDICAS</h1>
                    <p className="lead">
                        Contamos con médicos especialistas certificados para brindarte la mejor atención
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="especialidades-grid">
                        {especialidades.map((esp, index) => (
                            <div key={index} className="especialidad-card">
                                <div className="especialidad-icon">{esp.icono}</div>
                                <h3>{esp.nombre}</h3>
                                <p>{esp.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Necesitas una consulta?</h2>
                    <p className="lead">Agenda tu cita con nuestros especialistas</p>
                    <Link href="/contacto" className="btn btn--primary btn--large">
                        Contactar ahora
                    </Link>
                </div>
            </section>
        </>
    );
}

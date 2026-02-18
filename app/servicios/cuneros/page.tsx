import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import { getWhatsAppUrl } from '@/lib/data/navigation';
import '../servicios.css';

export const metadata = {
  title: 'Cuneros y Neonatología',
  description: 'Cunero con atención especializada las 24 horas, seguridad de primer nivel, servicio de video, cuidados neonatales y enfermeras especializadas en Hospital Santa Fe, Zapotlanejo.',
};

const serviciosCunero = [
  {
    titulo: 'Monitoreo continuo 24/7',
    descripcion: 'Vigilancia constante de signos vitales del recién nacido con equipo de última generación.',
  },
  {
    titulo: 'Enfermeras especializadas',
    descripcion: 'Personal de enfermería con especialidad en neonatología y cuidados del recién nacido.',
  },
  {
    titulo: 'Tamiz neonatal',
    descripcion: 'Prueba de detección temprana de enfermedades metabólicas realizada en las primeras horas de vida.',
  },
  {
    titulo: 'Vacunación inicial',
    descripcion: 'Aplicación de las primeras vacunas (BCG y Hepatitis B) según el esquema nacional de vacunación.',
  },
  {
    titulo: 'Prueba de audición',
    descripcion: 'Tamiz auditivo neonatal para detectar problemas de audición desde el nacimiento.',
  },
  {
    titulo: 'Registro civil en el hospital',
    descripcion: 'Trámite del acta de nacimiento sin salir del hospital, con apoyo del personal administrativo.',
  },
  {
    titulo: 'Asesoría en lactancia materna',
    descripcion: 'Orientación y apoyo profesional para iniciar y mantener una lactancia exitosa.',
  },
  {
    titulo: 'Control de signos vitales',
    descripcion: 'Medición periódica de temperatura, frecuencia cardíaca, respiración y saturación de oxígeno.',
  },
];

const seguridadItems = [
  {
    titulo: 'Doble chapa de seguridad',
    descripcion: 'Acceso al área de cuneros protegido con sistema de doble chapa para máxima seguridad.',
  },
  {
    titulo: 'Vidrio templado de alta seguridad',
    descripcion: 'Ventanas y divisiones con vidrio templado resistente que permite la visibilidad sin comprometer la protección.',
  },
  {
    titulo: 'Videovigilancia 24 horas',
    descripcion: 'Sistema de cámaras de vigilancia que monitorean el área de cuneros las 24 horas del día, los 365 días del año.',
  },
  {
    titulo: 'Brazalete de identificación',
    descripcion: 'Brazalete identificativo para el bebé y la mamá desde el momento del nacimiento, garantizando la correcta identificación.',
  },
  {
    titulo: 'Control estricto de entrada',
    descripcion: 'Solo personal autorizado y familiares directos con identificación pueden acceder al área de cuneros.',
  },
  {
    titulo: 'Visitas restringidas',
    descripcion: 'Horarios y número de visitantes controlados para mantener un ambiente seguro y tranquilo para los recién nacidos.',
  },
];

const cuidadosRN = [
  {
    titulo: 'Ictericia fisiológica',
    descripcion: 'Es normal que algunos bebés presenten un tono amarillento en la piel durante los primeros días de vida. Nuestro equipo médico monitorea y trata con fototerapia cuando es necesario.',
    dato: 'Aparece entre el 2° y 3° día de vida',
  },
  {
    titulo: 'Baja de peso',
    descripcion: 'Es completamente normal que tu bebé pierda un poco de peso durante los primeros días. Esto se recupera rápidamente con la alimentación adecuada.',
    dato: 'Hasta 10% del peso al nacer entre el 3° y 4° día',
  },
  {
    titulo: 'Eritema tóxico',
    descripcion: 'Pequeñas manchas rojizas que pueden aparecer en la piel del bebé. Es una condición benigna y temporal que no requiere tratamiento.',
    dato: 'Aparece entre el 2° y 3° día, desaparece solo',
  },
  {
    titulo: 'Ciclo sueño-vigilia',
    descripcion: 'Los recién nacidos pasan la mayor parte del día dormidos. Es normal y necesario para su desarrollo. Irán regulando su ciclo gradualmente.',
    dato: '~17.5 horas de sueño al día (75% del tiempo)',
  },
];

export default function CunerosPage() {
  return (
    <>
      <section className="page-hero page-hero--cuneros">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Cuneros</span>
          </nav>
          <h1>Cuneros y Neonatología</h1>
          <p className="page-hero__subtitle">
            Bienvenido Bebé — El primer hogar de tu recién nacido fuera del vientre materno, con la mejor atención especializada las 24 horas.
          </p>
        </div>
      </section>

      {/* Intro + Servicios */}
      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <ScrollReveal>
                <h2 data-animate>Cuidado Neonatal de Calidad</h2>
                <p data-animate>
                  En Hospital Santa Fe comprendemos que los primeros días de vida de tu bebé son los más importantes.
                  Nuestro cunero está diseñado para brindar un ambiente seguro, cálido y controlado donde tu recién
                  nacido recibirá la mejor atención médica desde el primer momento.
                </p>
                <p data-animate>
                  Contamos con personal de enfermería especializado en neonatología que vigila a cada bebé
                  de manera individualizada, asegurando que todas sus necesidades sean atendidas oportunamente.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h3 data-animate>Servicios incluidos</h3>
                <ul className="servicios-lista" data-animate>
                  {serviciosCunero.map((servicio, index) => (
                    <li key={index}>
                      <strong>{servicio.titulo}:</strong> {servicio.descripcion}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <div>
              <div className="content-image">
                <img
                  src="/images/hospital/instalaciones/area-de-hospitalizacion_3.webp"
                  alt="Cunero - Cuidado neonatal en Hospital Santa Fe"
                />
              </div>
              <VideoPlayer
                src="/videos/cuneros.mp4"
                style={{ width: '100%', marginTop: 'var(--space-6)', aspectRatio: '9/16' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paquete de Video */}
      <section className="section" style={{ background: 'var(--color-rosa-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Paquete de Video — Un Recuerdo para Siempre</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                Captura los momentos más especiales del nacimiento de tu bebé con nuestro servicio profesional de video.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger className="info-grid">
            <div className="info-item" data-animate>
              <h4>Filmación desde el parto</h4>
              <p>Nuestro equipo documenta desde antes del parto hasta los primeros momentos de vida de tu bebé, con discreción y profesionalismo.</p>
            </div>
            <div className="info-item" data-animate>
              <h4>Cámaras HD profesionales</h4>
              <p>Utilizamos equipo de video de alta definición para capturar cada detalle con la mejor calidad de imagen.</p>
            </div>
            <div className="info-item" data-animate>
              <h4>Edición personalizada</h4>
              <p>Cada video es editado de manera personalizada, creando un recuerdo único que tu familia atesorará por siempre.</p>
            </div>
            <div className="info-item" data-animate>
              <h4>Reunión familiar del bebé</h4>
              <p>Incluye la filmación de los primeros momentos del bebé con la familia, capturando esas expresiones y emociones irrepetibles.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Seguridad */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Seguridad de Primer Nivel</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                La seguridad de tu bebé es nuestra prioridad absoluta. Contamos con múltiples sistemas de protección.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger className="info-grid">
            {seguridadItems.map((item, index) => (
              <div key={index} className="info-item" data-animate>
                <h4>{item.titulo}</h4>
                <p>{item.descripcion}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Cuidados del Recién Nacido */}
      <section className="section" style={{ background: 'var(--color-neutral-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Cuidados del Recién Nacido</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                Es normal que los recién nacidos presenten ciertos cambios durante sus primeros días de vida. Aquí te explicamos qué esperar.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger className="info-grid">
            {cuidadosRN.map((cuidado, index) => (
              <div key={index} className="info-item" data-animate>
                <h4>{cuidado.titulo}</h4>
                <p>{cuidado.descripcion}</p>
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-rosa-600)', marginTop: 'var(--space-2)' }}>
                  {cuidado.dato}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Info para Padres */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="info-adicional">
              <h3 data-animate>Información para Padres</h3>
              <div className="info-grid">
                <div className="info-item" data-animate>
                  <h4>Cunero de Cuidados Especiales</h4>
                  <p>
                    Para bebés que requieren atención médica adicional, contamos con cunero de cuidados
                    intermedios equipado con incubadoras, monitores cardiorrespiratorios y equipo de fototerapia
                    para el tratamiento de ictericia neonatal.
                  </p>
                </div>
                <div className="info-item" data-animate>
                  <h4>Horarios de Visita</h4>
                  <p>
                    Los padres pueden visitar a su bebé en cualquier momento. Para familiares,
                    el horario de visita es de 10:00 AM a 8:00 PM. Se permite máximo 2 visitantes
                    a la vez para mantener un ambiente tranquilo.
                  </p>
                </div>
                <div className="info-item" data-animate>
                  <h4>Alojamiento Conjunto</h4>
                  <p>
                    Cuando las condiciones del bebé y la mamá lo permiten, fomentamos el alojamiento
                    conjunto para fortalecer el vínculo madre-hijo y facilitar la lactancia materna.
                  </p>
                </div>
                <div className="info-item" data-animate>
                  <h4>Alta del Recién Nacido</h4>
                  <p>
                    Antes del alta, el pediatra realiza una revisión completa del bebé y orienta
                    a los padres sobre cuidados en casa, alimentación, signos de alarma y las citas
                    de seguimiento necesarias.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-final">
        <div className="container">
          <ScrollReveal>
            <div className="cta-final__content" data-animate>
              <h2>¿Esperas un bebé?</h2>
              <p>Conoce nuestros paquetes de maternidad que incluyen el servicio de cunero. Agenda una visita para conocer nuestras instalaciones.</p>
              <div className="cta-final__buttons">
                <a
                  href={getWhatsAppUrl('Hola, me gustaría información sobre los cuneros y paquetes de maternidad')}
                  className="btn btn--rosa btn--large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Información por WhatsApp
                </a>
                <Link href="/maternidad" className="btn btn--rosa-outline btn--large">
                  Ver paquetes de maternidad
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

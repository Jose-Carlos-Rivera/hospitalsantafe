export interface Especialidad {
  slug: string;
  nombre: string;
  subtitulo?: string;
  descripcion: string;
  descripcionLarga: string;
  iconPath: string;
  imagen: string;
  servicios: string[];
  destacados?: string[];
  horario: string;
  urgencias?: boolean;
}

export const especialidades: Especialidad[] = [
  {
    slug: "angiologia",
    nombre: "Angiología",
    subtitulo: "Cirugía Vascular",
    descripcion: "Diagnóstico y tratamiento de enfermedades de venas y arterias.",
    descripcionLarga: "El servicio de Angiología del Hospital Santa Fe se especializa en el diagnóstico y tratamiento de enfermedades del sistema vascular, incluyendo venas y arterias. Atendemos insuficiencia venosa, varices, trombosis venosa profunda, pie diabético, oclusión arterial y realizamos ultrasonido Doppler vascular para un diagnóstico preciso. Nuestros angiólogos ofrecen tratamientos tanto conservadores como quirúrgicos para mejorar la circulación y calidad de vida.",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    imagen: "/images/hospital/especialidades/angiologia.webp",
    servicios: [
      "Insuficiencia venosa",
      "Varices y arañitas vasculares",
      "Trombosis venosa profunda",
      "Pie diabético",
      "Oclusión arterial",
      "Ultrasonido Doppler vascular",
      "Escleroterapia"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "cardiologia",
    nombre: "Cardiología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio.",
    descripcionLarga: "El servicio de Cardiología del Hospital Santa Fe se especializa en la prevención, diagnóstico y tratamiento de enfermedades cardiovasculares. Realizamos consulta cardiológica completa, valoración prequirúrgica, estudios de gabinete, electrocardiogramas, monitoreo Holter de 24 horas, eco-cardiogramas y radiografías digitales. Contamos con equipo moderno para brindar un diagnóstico preciso y un plan de tratamiento personalizado para cada paciente.",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    imagen: "/images/hospital/especialidades/cardiologia.webp",
    servicios: [
      "Consulta cardiológica",
      "Valoración prequirúrgica",
      "Estudios de gabinete",
      "Electrocardiograma",
      "Ecocardiograma",
      "Monitoreo Holter 24hrs",
      "Radiografías digitales",
      "Valoración de riesgo cardiovascular",
      "Tratamiento de hipertensión y arritmias"
    ],
    destacados: [
      "Consulta Cardiológica completa",
      "Valoración Prequirúrgica",
      "Electrocardiogramas y Holter",
      "Eco-cardiogramas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "cirugia-general",
    nombre: "Cirugía General y Laparoscópica",
    descripcion: "Cirugía abdominal abierta y laparoscópica, enfermedades de la vesícula, hernias y urgencias.",
    descripcionLarga: "El servicio de Cirugía General realiza procedimientos quirúrgicos programados y de urgencia, tanto abiertos como laparoscópicos. Nos especializamos en cirugía abdominal abierta y laparoscópica de mínima invasión, lo que permite menor dolor, recuperación más rápida y menos cicatrices. Atendemos enfermedades de la vesícula, hernias, tumoraciones, manga gástrica, fístula, diverticulitis y una amplia gama de patologías quirúrgicas. Contamos con radiografías, ultrasonidos y análisis de laboratorio para un diagnóstico completo.",
    iconPath: "M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z",
    imagen: "/images/hospital/especialidades/cirugia-general.webp",
    servicios: [
      "Cirugía abdominal abierta y laparoscópica",
      "Colecistectomía (vesícula)",
      "Apendicectomía",
      "Hernioplastía (inguinal, umbilical, hiatal)",
      "Manga gástrica",
      "Fístula y diverticulitis",
      "Tumoraciones abdominales",
      "Radiografías y ultrasonidos",
      "Análisis de laboratorio",
      "Cirugía de emergencia 24 horas"
    ],
    destacados: [
      "Cirugía Laparoscópica de mínima invasión",
      "Enfermedades de la vesícula",
      "Radiografías y Ultrasonidos",
      "Urgencias 24 Horas"
    ],
    horario: "Lunes a Viernes 8:00 - 18:00 | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "cirugia-plastica",
    nombre: "Cirugía Plástica",
    descripcion: "Más de 10 procedimientos estéticos y reconstructivos: liposucción, mamoplastia, abdominoplastia y más.",
    descripcionLarga: "Nuestro servicio de Cirugía Plástica y Reconstructiva ofrece una amplia gama de procedimientos estéticos y reconstructivos realizados por cirujanos certificados. Desde liposucción y mamoplastia de aumento hasta abdominoplastia y ritidectomía, cada procedimiento se planifica de forma individualizada para lograr resultados naturales y seguros en un entorno hospitalario controlado. También ofrecemos tratamientos como Botox, blefaroplastia, balón intragástrico para obesidad, y electrofulguracion para verrugas y mezquinos. Aceptamos tarjetas de crédito y débito (Visa y Mastercard).",
    iconPath: "M7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V3.5C6 2.67 6.67 2 7.5 2S9 2.67 9 3.5v4.67c1.16.42 2 1.52 2 2.83 0 1.66-1.34 3-3 3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z",
    imagen: "/images/hospital/especialidades/cirugia-plastica.webp",
    servicios: [
      "Liposucción (lipoescultura)",
      "Mamoplastia de aumento (implantes)",
      "Mamoplastia de reducción",
      "Pexia de Mama (levantamiento)",
      "Abdominoplastia (limpectomía)",
      "Ritidectomía (lifting facial)",
      "Braquioplastia (brazos)",
      "Blefaroplastia (párpados)",
      "Botox",
      "Balón Intragástrico",
      "Verrugas y electrofulguracion",
      "Rinoplastía",
      "Cirugía reconstructiva"
    ],
    destacados: [
      "Más de 10 procedimientos estéticos y reconstructivos",
      "Liposucción, mamoplastia y abdominoplastia",
      "Balón Intragástrico para obesidad",
      "Aceptamos Visa y Mastercard"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "fisioterapia",
    nombre: "Fisioterapia",
    descripcion: "Rehabilitación física integral para lesiones, postoperatorios y padecimientos crónicos.",
    descripcionLarga: "El servicio de Fisioterapia del Hospital Santa Fe ofrece rehabilitación física integral para pacientes con lesiones musculoesqueléticas, postoperatorios, padecimientos crónicos y neurológicos. Nuestros fisioterapeutas diseñan programas personalizados de ejercicios terapéuticos, terapia manual, electroterapia y técnicas de rehabilitación para restaurar la movilidad, reducir el dolor y mejorar la calidad de vida de cada paciente.",
    iconPath: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7",
    imagen: "/images/hospital/especialidades/fisioterapia.webp",
    servicios: [
      "Rehabilitación musculoesquelética",
      "Rehabilitación postoperatoria",
      "Terapia manual y masoterapia",
      "Electroterapia y ultrasonido terapéutico",
      "Ejercicios terapéuticos personalizados",
      "Rehabilitación neurológica",
      "Tratamiento del dolor crónico"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "geriatria",
    nombre: "Geriatría",
    descripcion: "Atención médica especializada para adultos mayores con enfoque integral y preventivo.",
    descripcionLarga: "El servicio de Geriatría del Hospital Santa Fe se dedica a la atención integral del adulto mayor. Nuestros geriatras realizan valoraciones geriátricas completas, manejo de enfermedades crónico-degenerativas propias de la edad, prevención de caídas, evaluación cognitiva, manejo de polifarmacia y promoción del envejecimiento saludable. Trabajamos de manera multidisciplinaria para mejorar la calidad de vida de nuestros pacientes de la tercera edad.",
    iconPath: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7",
    imagen: "/images/hospital/especialidades/geriatria.webp",
    servicios: [
      "Valoración geriátrica integral",
      "Manejo de enfermedades crónico-degenerativas",
      "Prevención de caídas",
      "Evaluación cognitiva y memoria",
      "Manejo de polifarmacia",
      "Envejecimiento saludable",
      "Cuidados paliativos"
    ],
    horario: "Lunes a Viernes 9:00 - 17:00 | Previa cita"
  },
  {
    slug: "ginecologia-obstetricia",
    nombre: "Ginecología y Obstetricia",
    descripcion: "Cuidado integral de la mujer: embarazo, parto, salud reproductiva y ginecológica.",
    descripcionLarga: "Nuestro departamento de Ginecología y Obstetricia brinda atención especializada en todas las etapas de la vida de la mujer. Desde el control prenatal hasta el parto, cuidados postparto, salud reproductiva y prevención de enfermedades ginecológicas. Contamos con paquetes completos de maternidad que incluyen partos naturales y cesáreas, ultrasonido obstétrico 3D/4D, y tecnología de vanguardia para garantizar la seguridad de mamá y bebé. Realizamos Papanicolaou, colposcopía y cirugía ginecológica.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    imagen: "/images/hospital/especialidades/ginecologia.webp",
    servicios: [
      "Control prenatal",
      "Parto natural y cesárea",
      "Paquetes de Maternidad",
      "Ultrasonido obstétrico 3D/4D",
      "Papanicolaou y colposcopía",
      "Cirugía ginecológica",
      "Planificación familiar",
      "Atención de embarazo de alto riesgo",
      "Control postparto",
      "Enfermedades de la mujer"
    ],
    destacados: [
      "Paquetes de Maternidad completos",
      "Ultrasonido 3D/4D",
      "Partos y Cesáreas",
      "Papanicolaou y colposcopía"
    ],
    horario: "Lunes a Viernes 9:00 - 19:00 | Sábado 9:00 - 14:00"
  },
  {
    slug: "medicina-general",
    nombre: "Medicina General",
    descripcion: "Atención primaria integral para toda la familia, con enfoque preventivo y curativo.",
    descripcionLarga: "Nuestro servicio de Medicina General ofrece atención primaria integral para pacientes de todas las edades. Realizamos diagnósticos oportunos, tratamientos preventivos y curativos, así como seguimiento continuo de enfermedades crónicas. Nuestros médicos generales son el primer punto de contacto para cualquier problema de salud y coordinan con especialistas cuando es necesario. Ofrecemos consultas de revisión general, check-ups preventivos y certificados médicos, siempre con un trato humano y personalizado.",
    iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    imagen: "/images/hospital/especialidades/medicina-general.webp",
    servicios: [
      "Consulta médica general",
      "Check-ups preventivos",
      "Control de enfermedades crónicas (diabetes, hipertensión)",
      "Certificados médicos",
      "Valoración preoperatoria",
      "Referencia a especialistas",
      "Atención de infecciones respiratorias y gastrointestinales",
      "Control de peso y orientación nutricional"
    ],
    horario: "Lunes a Viernes 8:00 - 20:00 | Sábado 9:00 - 14:00",
    urgencias: true
  },
  {
    slug: "medicina-interna",
    nombre: "Medicina Interna",
    descripcion: "Diagnóstico y manejo integral de enfermedades complejas en adultos.",
    descripcionLarga: "El internista es el especialista en el diagnóstico y tratamiento de enfermedades complejas en pacientes adultos. En Hospital Santa Fe, nuestros internistas manejan enfermedades crónico-degenerativas, infecciones complejas, y realizan valoraciones integrales para pacientes hospitalizados, coordinando con otros especialistas según las necesidades del paciente. Ofrecemos un enfoque integral que abarca desde la prevención hasta el manejo de patologías multisistémicas.",
    iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    imagen: "/images/hospital/especialidades/internista.webp",
    servicios: [
      "Diagnóstico de enfermedades complejas",
      "Manejo de diabetes y enfermedades metabólicas",
      "Control de hipertensión arterial",
      "Enfermedades respiratorias crónicas",
      "Valoración integral hospitalaria",
      "Coordinación multidisciplinaria",
      "Infecciones complejas",
      "Enfermedades crónico-degenerativas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "nefrologia",
    nombre: "Nefrología",
    descripcion: "Especialistas en enfermedades del riñón y vías urinarias altas.",
    descripcionLarga: "El servicio de Nefrología atiende enfermedades del riñón, desde insuficiencia renal y cálculos hasta nefropatía diabética e hipertensiva. Nuestros nefrólogos realizan diagnósticos precisos y planes de tratamiento para preservar la función renal y mejorar la calidad de vida de los pacientes.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    imagen: "/images/hospital/especialidades/nefrologia.webp",
    servicios: [
      "Diagnóstico de insuficiencia renal",
      "Nefropatía diabética e hipertensiva",
      "Cálculos renales complejos",
      "Infecciones urinarias recurrentes",
      "Control de electrolitos",
      "Valoración prediálisis"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "neurologia",
    nombre: "Neurología",
    descripcion: "Atención de migraña, tumores craneales, dolor de espalda, convulsiones y enfermedades neurológicas.",
    descripcionLarga: "El servicio de Neurología atiende padecimientos del cerebro, médula espinal y nervios periféricos. Nuestros especialistas diagnostican y tratan dolores de cabeza y migraña, tumores craneales, dolor de origen nervioso, dolor de nervio ciático, dolor de espalda, convulsiones, parálisis y realizan electroencefalogramas. Ofrecemos evaluación de deterioro cognitivo con un enfoque integral y personalizado.",
    iconPath: "M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z",
    imagen: "/images/hospital/especialidades/neurologia.webp",
    servicios: [
      "Dolores de cabeza y migraña",
      "Tumores craneales",
      "Dolor de origen nervioso",
      "Dolor de nervio ciático",
      "Dolor de espalda",
      "Convulsiones y epilepsia",
      "Parálisis",
      "Electroencefalograma",
      "Evaluación de deterioro cognitivo"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "nutricion",
    nombre: "Nutrición",
    descripcion: "Planes de alimentación personalizados para una vida saludable y control de enfermedades.",
    descripcionLarga: "El servicio de Nutrición del Hospital Santa Fe ofrece atención nutricional personalizada para pacientes de todas las edades. Nuestros nutriólogos elaboran planes de alimentación adaptados a las necesidades individuales, ya sea para control de peso, manejo de enfermedades crónicas como diabetes e hipertensión, nutrición deportiva, o alimentación durante el embarazo y lactancia. Realizamos evaluaciones antropométricas y seguimiento continuo para lograr los objetivos de salud de cada paciente.",
    iconPath: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-4.5-6.02-5-9.02-5s-5.01.5-5.01.5v4.5h14.03zm-14.03 3h14.03v2H2V17.99z",
    imagen: "/images/hospital/especialidades/nutricion.webp",
    servicios: [
      "Planes de alimentación personalizados",
      "Control de peso y obesidad",
      "Nutrición para diabetes e hipertensión",
      "Nutrición deportiva",
      "Alimentación en embarazo y lactancia",
      "Evaluación antropométrica",
      "Educación nutricional"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "oftalmologia",
    nombre: "Oftalmología",
    descripcion: "Diagnóstico y tratamiento de enfermedades de los ojos y problemas de la visión.",
    descripcionLarga: "El servicio de Oftalmología del Hospital Santa Fe se especializa en el diagnóstico y tratamiento de enfermedades oculares. Nuestros oftalmólogos atienden problemas de la visión como miopía, hipermetropía, astigmatismo y presbicia, así como enfermedades como cataratas, glaucoma, retinopatía diabética y degeneración macular. Realizamos exámenes de la vista completos, cirugía de cataratas, tratamiento de pterigión y atención de urgencias oftalmológicas.",
    iconPath: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    imagen: "/images/hospital/especialidades/oftalmologia.webp",
    servicios: [
      "Examen de la vista completo",
      "Cirugía de cataratas",
      "Tratamiento de glaucoma",
      "Retinopatía diabética",
      "Pterigión",
      "Miopía, hipermetropía y astigmatismo",
      "Urgencias oftalmológicas"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "otorrinolaringologia",
    nombre: "Otorrinolaringología",
    subtitulo: "Oído, Nariz y Garganta",
    descripcion: "Tratamiento de zumbido de oídos, sinusitis, ronquido, amígdalas y cirugía de oído, nariz y garganta.",
    descripcionLarga: "Nuestros otorrinolaringólogos atienden padecimientos del oído, nariz, garganta y estructuras relacionadas de cabeza y cuello. Tratamos zumbido de oídos, tapón de cerilla, alergia y nariz congestionada, ronquido, vértigo, rinitis, sinusitis, amígdalas, adenoides, otitis, sordera, sangrado de nariz, y realizamos cirugía de oídos, nariz y garganta. Atendemos tanto a pacientes adultos como pediátricos.",
    iconPath: "M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z",
    imagen: "/images/hospital/especialidades/otorrino.webp",
    servicios: [
      "Zumbido de oídos",
      "Tapón de cerilla",
      "Alergia y nariz congestionada",
      "Ronquido y apnea del sueño",
      "Vértigo, rinitis y sinusitis",
      "Amígdalas y adenoides (amigdalectomía y adenoidectomía)",
      "Otitis y sordera",
      "Sangrado de nariz",
      "Cirugía de oídos, nariz y garganta",
      "Septoplastía (desviación de tabique)"
    ],
    destacados: [
      "Especialistas en Oído, Nariz y Garganta",
      "Cirugía de amígdalas y adenoides",
      "Tratamiento de sinusitis y ronquido"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "pediatria",
    nombre: "Pediatría",
    descripcion: "Atención especializada para recién nacidos, niños y adolescentes desde el nacimiento.",
    descripcionLarga: "Nuestros pediatras brindan atención médica integral desde el nacimiento hasta la adolescencia. Ofrecemos atención de bebés desde el momento de nacer, control del niño sano, diagnóstico y tratamiento de enfermedades pediátricas, esquemas de vacunación completos y orientación nutricional para el desarrollo óptimo de sus hijos. Contamos con atención especializada del recién nacido, incluyendo cuidados neonatales cuando sea necesario.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    imagen: "/images/hospital/especialidades/pediatria.webp",
    servicios: [
      "Atención de bebés desde el nacimiento",
      "Control del niño sano",
      "Vacunación y esquemas completos",
      "Enfermedades respiratorias e infecciosas",
      "Nutrición infantil y orientación alimentaria",
      "Desarrollo y crecimiento",
      "Atención de urgencias pediátricas",
      "Diagnóstico y tratamiento de enfermedades de la infancia hasta la adolescencia"
    ],
    destacados: [
      "Atención de bebés desde el nacimiento",
      "Control del niño sano",
      "Neonatología",
      "Urgencias pediátricas"
    ],
    horario: "Lunes a Viernes 9:00 - 19:00 | Sábado 9:00 - 14:00"
  },
  {
    slug: "psicologia",
    nombre: "Psicología",
    descripcion: "Atención psicológica profesional para niños, adolescentes y adultos.",
    descripcionLarga: "El servicio de Psicología del Hospital Santa Fe ofrece atención profesional para el bienestar emocional y mental de nuestros pacientes. Nuestros psicólogos brindan terapia individual, de pareja y familiar, manejo de ansiedad y depresión, evaluación psicológica, terapia infantil y adolescente, manejo del duelo y apoyo en crisis emocionales. Trabajamos con un enfoque integral y confidencial para ayudar a cada paciente a mejorar su salud mental.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-2h-2v2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07C10.87 14.09 11 14.5 11 15h2c0-.69.33-1.32.85-1.71.36-.27.69-.56.97-.89.09-.09.17-.19.25-.29.01-.01.02-.03.03-.04.37-.47.61-1.01.71-1.6.33-1.86-.92-3.59-2.2-3.43z",
    imagen: "/images/hospital/especialidades/psicologia.webp",
    servicios: [
      "Terapia individual",
      "Terapia de pareja y familiar",
      "Manejo de ansiedad y depresión",
      "Evaluación psicológica",
      "Terapia infantil y adolescente",
      "Manejo del duelo",
      "Apoyo en crisis emocionales"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "reumatologia",
    nombre: "Reumatología",
    descripcion: "Diagnóstico y tratamiento de enfermedades reumáticas, articulares y autoinmunes.",
    descripcionLarga: "El servicio de Reumatología del Hospital Santa Fe se especializa en el diagnóstico y tratamiento de enfermedades que afectan las articulaciones, músculos, huesos y tejidos conectivos. Nuestros reumatólogos atienden artritis reumatoide, lupus, osteoartritis, gota, fibromialgia, espondilitis anquilosante y otras enfermedades autoinmunes. Ofrecemos un enfoque integral que combina tratamiento farmacológico con rehabilitación para mejorar la calidad de vida del paciente.",
    iconPath: "M8 2v2H4v4H2V4a2 2 0 0 1 2-2h4zm8 0h4a2 2 0 0 1 2 2v4h-2V4h-4V2zM2 16v4a2 2 0 0 0 2 2h4v-2H4v-4H2zm20 0v4h-4v2h4a2 2 0 0 0 2-2v-4h-2zM7 7h10v10H7V7z",
    imagen: "/images/hospital/especialidades/reumatologia.webp",
    servicios: [
      "Artritis reumatoide",
      "Lupus eritematoso sistémico",
      "Osteoartritis y artrosis",
      "Gota",
      "Fibromialgia",
      "Espondilitis anquilosante",
      "Enfermedades autoinmunes"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "traumatologia-ortopedia",
    nombre: "Traumatología y Ortopedia",
    descripcion: "Atención de problemas músculo-esqueléticos, cirugías, artroscopía y rehabilitación.",
    descripcionLarga: "Nuestros traumatólogos y ortopedistas atienden todo tipo de lesiones del sistema musculoesquelético. Ofrecemos atención de problemas músculo-esqueléticos, cirugías, artroscopía, radiografías y fluoroscopía. Realizamos prótesis totales de rodilla y cadera, artroscopía de rodilla y tobillo, tratamiento de hernias de disco, fracturas y luxaciones, reparación de ligamentos y meniscos, y atendemos el desgaste de rodilla. También tratamos enfermedades del desarrollo en los niños.",
    iconPath: "M8 2v2H4v4H2V4a2 2 0 0 1 2-2h4zm8 0h4a2 2 0 0 1 2 2v4h-2V4h-4V2zM2 16v4a2 2 0 0 0 2 2h4v-2H4v-4H2zm20 0v4h-4v2h4a2 2 0 0 0 2-2v-4h-2zM7 7h10v10H7V7z",
    imagen: "/images/hospital/especialidades/ortopedia.webp",
    servicios: [
      "Prótesis totales de rodilla y cadera",
      "Artroscopía de rodilla y tobillo",
      "Hernias de disco",
      "Fracturas y luxaciones",
      "Ligamentos y meniscos",
      "Desgaste de rodilla",
      "Enfermedades del desarrollo en los niños",
      "Radiografías y fluoroscopía",
      "Rehabilitación ortopédica",
      "Férulas e inmovilización"
    ],
    destacados: [
      "Artroscopía de rodilla y tobillo",
      "Prótesis totales de rodilla y cadera",
      "Atención de problemas músculo-esqueléticos"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "urologia",
    nombre: "Urología",
    descripcion: "Cálculos renales, cirugía de próstata, circuncisión e infecciones de vías urinarias.",
    descripcionLarga: "El servicio de Urología atiende padecimientos del aparato urinario en hombres y mujeres, así como del sistema reproductor masculino. Nuestros urólogos diagnostican y tratan cálculos renales, realizan cirugía de próstata, circuncisión, y atienden infecciones de vías urinarias. Contamos con análisis de laboratorio completos y técnicas de mínima invasión para procedimientos quirúrgicos urológicos.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    imagen: "/images/hospital/especialidades/urologia.webp",
    servicios: [
      "Cálculos renales y vías urinarias",
      "Cirugía de próstata",
      "Circuncisión",
      "Infecciones de vías urinarias",
      "Incontinencia urinaria",
      "Cirugía urológica de mínima invasión",
      "Análisis de laboratorio"
    ],
    destacados: [
      "Cálculos renales",
      "Cirugía de próstata",
      "Circuncisión"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  }
];

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find(e => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return especialidades.map(e => e.slug);
}

export function getRelatedEspecialidades(currentSlug: string, count: number = 4): Especialidad[] {
  const currentIndex = especialidades.findIndex(e => e.slug === currentSlug);
  const others = especialidades.filter(e => e.slug !== currentSlug);
  const result: Especialidad[] = [];
  for (let i = 1; result.length < count && i <= others.length; i++) {
    result.push(others[(currentIndex + i) % others.length]);
  }
  return result;
}

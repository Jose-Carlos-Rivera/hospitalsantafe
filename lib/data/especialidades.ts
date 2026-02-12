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
    slug: "medicina-general",
    nombre: "Medicina General",
    descripcion: "Atención primaria integral para toda la familia, con enfoque preventivo y curativo.",
    descripcionLarga: "Nuestro servicio de Medicina General ofrece atención primaria integral para pacientes de todas las edades. Realizamos diagnósticos oportunos, tratamientos preventivos y curativos, así como seguimiento continuo de enfermedades crónicas. Nuestros médicos generales son el primer punto de contacto para cualquier problema de salud y coordinan con especialistas cuando es necesario. Ofrecemos consultas de revisión general, check-ups preventivos y certificados médicos, siempre con un trato humano y personalizado.",
    iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    imagen: "https://plus.unsplash.com/premium_photo-1664474763335-9c5068a35180?w=800&q=80",
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
    horario: "Lunes a Viernes 8:00 - 20:00 | Sábado 9:00 - 14:00"
  },
  {
    slug: "ginecologia-obstetricia",
    nombre: "Ginecología y Obstetricia",
    descripcion: "Cuidado integral de la mujer: embarazo, parto, salud reproductiva y ginecológica.",
    descripcionLarga: "Nuestro departamento de Ginecología y Obstetricia brinda atención especializada en todas las etapas de la vida de la mujer. Desde el control prenatal hasta el parto, cuidados postparto, salud reproductiva y prevención de enfermedades ginecológicas. Contamos con paquetes completos de maternidad que incluyen partos naturales y cesáreas, ultrasonido obstétrico 3D/4D, y tecnología de vanguardia para garantizar la seguridad de mamá y bebé. Realizamos Papanicolaou, colposcopía y cirugía ginecológica.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    imagen: "https://plus.unsplash.com/premium_photo-1726877044838-46a703d4f836?w=800&q=80",
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
    slug: "pediatria",
    nombre: "Pediatría y Neonatología",
    descripcion: "Atención especializada para recién nacidos, niños y adolescentes desde el nacimiento.",
    descripcionLarga: "Nuestros pediatras brindan atención médica integral desde el nacimiento hasta la adolescencia. Ofrecemos atención de bebés desde el momento de nacer, control del niño sano, diagnóstico y tratamiento de enfermedades pediátricas, esquemas de vacunación completos y orientación nutricional para el desarrollo óptimo de sus hijos. Contamos con servicio de neonatología para la atención especializada del recién nacido, incluyendo cuidados intensivos neonatales cuando sea necesario.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    imagen: "https://plus.unsplash.com/premium_photo-1664474882541-f796f30d3eb5?w=800&q=80",
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
      "Urgencias pediátricas 24/7"
    ],
    horario: "Lunes a Viernes 9:00 - 19:00 | Sábado 9:00 - 14:00 | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "cardiologia",
    nombre: "Cardiología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio.",
    descripcionLarga: "El servicio de Cardiología del Hospital Santa Fe se especializa en la prevención, diagnóstico y tratamiento de enfermedades cardiovasculares. Realizamos consulta cardiológica completa, valoración prequirúrgica, estudios de gabinete, electrocardiogramas, monitoreo Holter de 24 horas, eco-cardiogramas y radiografías digitales. Contamos con equipo moderno para brindar un diagnóstico preciso y un plan de tratamiento personalizado para cada paciente.",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    imagen: "https://plus.unsplash.com/premium_photo-1718349374495-b1d09644f973?w=800&q=80",
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
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "traumatologia-ortopedia",
    nombre: "Traumatología y Ortopedia",
    descripcion: "Atención de problemas músculo-esqueléticos, cirugías, artroscopía y rehabilitación.",
    descripcionLarga: "Nuestros traumatólogos y ortopedistas atienden todo tipo de lesiones del sistema musculoesquelético. Ofrecemos atención de problemas músculo-esqueléticos, cirugías, artroscopía, radiografías y fluoroscopía. Realizamos prótesis totales de rodilla y cadera, artroscopía de rodilla y tobillo, tratamiento de hernias de disco, fracturas y luxaciones, reparación de ligamentos y meniscos, y atendemos el desgaste de rodilla. También tratamos enfermedades del desarrollo en los niños.",
    iconPath: "M8 2v2H4v4H2V4a2 2 0 0 1 2-2h4zm8 0h4a2 2 0 0 1 2 2v4h-2V4h-4V2zM2 16v4a2 2 0 0 0 2 2h4v-2H4v-4H2zm20 0v4h-4v2h4a2 2 0 0 0 2-2v-4h-2zM7 7h10v10H7V7z",
    imagen: "https://plus.unsplash.com/premium_photo-1718098584727-3676fb1bc401?w=800&q=80",
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
      "Atención de problemas músculo-esqueléticos",
      "Urgencias 24 Horas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "cirugia-general",
    nombre: "Cirugía General y Laparoscópica",
    descripcion: "Cirugía abdominal abierta y laparoscópica, enfermedades de la vesícula, hernias y urgencias.",
    descripcionLarga: "El servicio de Cirugía General realiza procedimientos quirúrgicos programados y de urgencia, tanto abiertos como laparoscópicos. Nos especializamos en cirugía abdominal abierta y laparoscópica de mínima invasión, lo que permite menor dolor, recuperación más rápida y menos cicatrices. Atendemos enfermedades de la vesícula, hernias, tumoraciones, manga gástrica, fístula, diverticulitis y una amplia gama de patologías quirúrgicas. Contamos con radiografías, ultrasonidos y análisis de laboratorio para un diagnóstico completo.",
    iconPath: "M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z",
    imagen: "https://plus.unsplash.com/premium_photo-1661371727499-46fc9d980103?w=800&q=80",
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
    slug: "medicina-interna",
    nombre: "Medicina Interna",
    descripcion: "Diagnóstico y manejo integral de enfermedades complejas en adultos.",
    descripcionLarga: "El internista es el especialista en el diagnóstico y tratamiento de enfermedades complejas en pacientes adultos. En Hospital Santa Fe, nuestros internistas manejan enfermedades crónico-degenerativas, infecciones complejas, y realizan valoraciones integrales para pacientes hospitalizados, coordinando con otros especialistas según las necesidades del paciente. Ofrecemos un enfoque integral que abarca desde la prevención hasta el manejo de patologías multisistémicas.",
    iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    imagen: "https://images.unsplash.com/photo-1758691462413-b07dee2933fe?w=800&q=80",
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
    slug: "anestesiologia",
    nombre: "Anestesiología",
    descripcion: "Manejo del dolor y anestesia segura para procedimientos quirúrgicos.",
    descripcionLarga: "Nuestros anestesiólogos garantizan la seguridad y confort del paciente durante cualquier procedimiento quirúrgico. Ofrecemos anestesia general, regional y local, así como manejo avanzado del dolor postoperatorio. Realizamos valoración preanestésica completa para minimizar riesgos y personalizar el tipo de anestesia según cada paciente. También ofrecemos bloqueos nerviosos especializados para procedimientos de maternidad.",
    iconPath: "M4.5 11H11v-1H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V4.5c0-.28.22-.5.5-.5s.5.22.5.5V9h3.5c.28 0 .5.22.5.5s-.22.5-.5.5H12v1h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H12v4.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V12H4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z",
    imagen: "https://plus.unsplash.com/premium_photo-1753267731404-71b70899d002?w=800&q=80",
    servicios: [
      "Anestesia general",
      "Anestesia regional (epidural, espinal)",
      "Anestesia local",
      "Valoración preanestésica",
      "Manejo del dolor postoperatorio",
      "Bloqueos nerviosos para maternidad"
    ],
    horario: "Disponible según programación quirúrgica"
  },
  {
    slug: "urologia",
    nombre: "Urología",
    descripcion: "Cálculos renales, cirugía de próstata, circuncisión e infecciones de vías urinarias.",
    descripcionLarga: "El servicio de Urología atiende padecimientos del aparato urinario en hombres y mujeres, así como del sistema reproductor masculino. Nuestros urólogos diagnostican y tratan cálculos renales, realizan cirugía de próstata, circuncisión, y atienden infecciones de vías urinarias. Contamos con análisis de laboratorio completos y técnicas de mínima invasión para procedimientos quirúrgicos urológicos. Ofrecemos atención de urgencias las 24 horas.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    imagen: "https://plus.unsplash.com/premium_photo-1722608200931-5c787cf3053d?w=800&q=80",
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
      "Circuncisión",
      "Urgencias 24 Horas"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "otorrinolaringologia",
    nombre: "Otorrinolaringología",
    subtitulo: "Oído, Nariz y Garganta",
    descripcion: "Tratamiento de zumbido de oídos, sinusitis, ronquido, amígdalas y cirugía de oído, nariz y garganta.",
    descripcionLarga: "Nuestros otorrinolaringólogos atienden padecimientos del oído, nariz, garganta y estructuras relacionadas de cabeza y cuello. Tratamos zumbido de oídos, tapón de cerilla, alergia y nariz congestionada, ronquido, vértigo, rinitis, sinusitis, amígdalas, adenoides, otitis, sordera, sangrado de nariz, y realizamos cirugía de oídos, nariz y garganta. Atendemos tanto a pacientes adultos como pediátricos, con urgencias disponibles las 24 horas.",
    iconPath: "M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z",
    imagen: "https://images.unsplash.com/photo-1632054890601-224e2e65bebb?w=800&q=80",
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
      "Tratamiento de sinusitis y ronquido",
      "Urgencias 24 Horas"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "dermatologia",
    nombre: "Dermatología",
    subtitulo: "Resección de Lesiones en Piel",
    descripcion: "Enfermedades de la piel, tumores, infecciones, verrugas y cirugías de lesiones cutáneas.",
    descripcionLarga: "Nuestros dermatólogos atienden una amplia gama de padecimientos de la piel. Ofrecemos dermatología general y resección de lesiones en piel, incluyendo tratamiento de enfermedades de la piel, tumores cutáneos, infecciones, verrugas, mezquinos, y cirugías de lesiones de la piel. Realizamos detección temprana de cáncer de piel, biopsias, tratamiento de acné, dermatitis y alergias cutáneas, siempre priorizando la salud y bienestar del paciente.",
    iconPath: "M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58a7.98 7.98 0 0 0 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31z",
    imagen: "https://plus.unsplash.com/premium_photo-1661690006627-91872c2a1171?w=800&q=80",
    servicios: [
      "Dermatología y resección de lesiones en piel",
      "Enfermedades de la piel",
      "Tumores cutáneos",
      "Infecciones de la piel",
      "Verrugas y mezquinos",
      "Cirugías de lesiones de la piel",
      "Tratamiento de acné",
      "Detección de cáncer de piel",
      "Biopsias de piel"
    ],
    destacados: [
      "Dermatología y resección de lesiones",
      "Cirugías de lesiones cutáneas",
      "Tratamiento de verrugas y mezquinos"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "gastroenterologia",
    nombre: "Gastroenterología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del hígado, vesícula, páncreas, estómago y colon.",
    descripcionLarga: "El servicio de Gastroenterología del Hospital Santa Fe se especializa en el diagnóstico y tratamiento de enfermedades del sistema digestivo. Atendemos enfermedades del hígado, vesícula biliar, páncreas, estómago, intestino delgado y colon. Realizamos estudios de endoscopías, colonoscopías, ultrasonido, radiografías y análisis laboratoriales para una atención integral y diagnóstico preciso.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-2h-2v2zm0-10h2v6h-2V6z",
    imagen: "https://plus.unsplash.com/premium_photo-1722694840298-0a724ea1ceeb?w=800&q=80",
    servicios: [
      "Endoscopías",
      "Colonoscopías",
      "Enfermedades del hígado",
      "Vesícula biliar",
      "Páncreas",
      "Estómago e intestino delgado",
      "Enfermedades del colon",
      "Ultrasonido abdominal",
      "Radiografías y análisis laboratoriales",
      "Enfermedad por reflujo (ERGE)",
      "Síndrome de intestino irritable"
    ],
    destacados: [
      "Endoscopías y colonoscopías",
      "Enfermedades de hígado, vesícula y páncreas",
      "Análisis laboratoriales completos",
      "Urgencias 24 Horas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "neurologia",
    nombre: "Neurología y Neurocirugía",
    descripcion: "Atención de migraña, tumores craneales, dolor de espalda, convulsiones y cirugía de columna.",
    descripcionLarga: "El servicio de Neurología y Neurocirugía atiende padecimientos del cerebro, médula espinal y nervios periféricos. Nuestros especialistas diagnostican y tratan dolores de cabeza y migraña, tumores craneales, dolor de origen nervioso, dolor de nervio ciático, dolor de espalda, convulsiones, parálisis, y realizan cirugía de columna. Ofrecemos electroencefalograma y evaluación de deterioro cognitivo con un enfoque integral y personalizado.",
    iconPath: "M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z",
    imagen: "https://plus.unsplash.com/premium_photo-1754337619480-08e6c262167f?w=800&q=80",
    servicios: [
      "Dolores de cabeza y migraña",
      "Tumores craneales",
      "Dolor de origen nervioso",
      "Dolor de nervio ciático",
      "Dolor de espalda",
      "Convulsiones y epilepsia",
      "Parálisis",
      "Cirugía de columna",
      "Electroencefalograma",
      "Evaluación de deterioro cognitivo"
    ],
    destacados: [
      "Neurocirugía",
      "Cirugía de columna",
      "Atención de migraña y tumores craneales",
      "Dolor de nervio ciático y espalda"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "cirugia-plastica",
    nombre: "Cirugía Plástica y Reconstructiva",
    descripcion: "Más de 10 procedimientos estéticos y reconstructivos: liposucción, mamoplastia, abdominoplastia y más.",
    descripcionLarga: "Nuestro servicio de Cirugía Plástica y Reconstructiva ofrece una amplia gama de procedimientos estéticos y reconstructivos realizados por cirujanos certificados. Desde liposucción y mamoplastia de aumento hasta abdominoplastia y ritidectomía, cada procedimiento se planifica de forma individualizada para lograr resultados naturales y seguros en un entorno hospitalario controlado. También ofrecemos tratamientos como Botox, blefaroplastia, balón intragástrico para obesidad, y electrofulguracion para verrugas y mezquinos. Aceptamos tarjetas de crédito y débito (Visa y Mastercard).",
    iconPath: "M7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V3.5C6 2.67 6.67 2 7.5 2S9 2.67 9 3.5v4.67c1.16.42 2 1.52 2 2.83 0 1.66-1.34 3-3 3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z",
    imagen: "https://plus.unsplash.com/premium_photo-1661375181457-3538f9835d2b?w=800&q=80",
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
    slug: "maxilofacial",
    nombre: "Cirugía Maxilofacial",
    descripcion: "Cirugía especializada de cara, mandíbula y estructuras faciales.",
    descripcionLarga: "La Cirugía Maxilofacial trata padecimientos quirúrgicos de la cara, mandíbula, boca y estructuras faciales. Nuestros especialistas realizan extracciones de terceros molares, cirugía ortognática, tratamiento de fracturas faciales y reconstrucción maxilofacial, siempre con un enfoque que prioriza la funcionalidad y la estética.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    imagen: "https://plus.unsplash.com/premium_photo-1661506751989-ba193e32dd6a?w=800&q=80",
    servicios: [
      "Extracción de terceros molares",
      "Cirugía ortognática",
      "Fracturas faciales",
      "Reconstrucción maxilofacial",
      "Quistes y tumores de mandíbula",
      "Implantes dentales"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "nefrologia",
    nombre: "Nefrología",
    descripcion: "Especialistas en enfermedades del riñón y vías urinarias altas.",
    descripcionLarga: "El servicio de Nefrología atiende enfermedades del riñón, desde insuficiencia renal y cálculos hasta nefropatía diabética e hipertensiva. Nuestros nefrólogos realizan diagnósticos precisos y planes de tratamiento para preservar la función renal y mejorar la calidad de vida de los pacientes.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    imagen: "https://plus.unsplash.com/premium_photo-1722947097131-7b3a90198c40?w=800&q=80",
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
  // ===== NUEVAS ESPECIALIDADES =====
  {
    slug: "cirugia-pediatrica",
    nombre: "Cirugía Pediátrica",
    descripcion: "Procedimientos quirúrgicos especializados para recién nacidos, niños y adolescentes.",
    descripcionLarga: "El servicio de Cirugía Pediátrica del Hospital Santa Fe se dedica a la atención quirúrgica especializada de pacientes desde recién nacidos hasta adolescentes. Nuestros cirujanos pediátricos realizan procedimientos de hernias pediátricas, apendicectomía, cirugía de malformaciones congénitas, circuncisión y urgencias quirúrgicas pediátricas, siempre con un enfoque adaptado a las necesidades especiales de los pacientes más pequeños.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    imagen: "https://plus.unsplash.com/premium_photo-1726873540542-5b1ed34bb452?w=800&q=80",
    servicios: [
      "Cirugía neonatal",
      "Hernias pediátricas",
      "Apendicectomía pediátrica",
      "Cirugía de malformaciones congénitas",
      "Circuncisión pediátrica",
      "Urgencias quirúrgicas pediátricas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "angiologia",
    nombre: "Angiología",
    subtitulo: "Cirugía Vascular",
    descripcion: "Diagnóstico y tratamiento de enfermedades de venas y arterias.",
    descripcionLarga: "El servicio de Angiología del Hospital Santa Fe se especializa en el diagnóstico y tratamiento de enfermedades del sistema vascular, incluyendo venas y arterias. Atendemos insuficiencia venosa, varices, trombosis venosa profunda, pie diabético, oclusión arterial y realizamos ultrasonido Doppler vascular para un diagnóstico preciso. Nuestros angiólogos ofrecen tratamientos tanto conservadores como quirúrgicos para mejorar la circulación y calidad de vida.",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    imagen: "https://plus.unsplash.com/premium_photo-1677850091307-2af2da4236b6?w=800&q=80",
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
    slug: "torax-cardiovascular",
    nombre: "Cirugía de Tórax y Cardiovascular",
    descripcion: "Enfermedades del tórax, cirugía de varices, pie diabético y sudoración excesiva.",
    descripcionLarga: "El servicio de Cirugía de Tórax y Cardiovascular del Hospital Santa Fe atiende enfermedades del tórax, sudoración excesiva de manos y cara, manejo integral del pie diabético, insuficiencia venosa, trombosis venosa, escleroterapia (inyección de varices), cirugía de varices y oclusión arterial aguda y crónica. Contamos con broncoscopías, ultrasonido Doppler, radiografías digitales y análisis laboratoriales para un diagnóstico completo.",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    imagen: "https://plus.unsplash.com/premium_photo-1722707492932-4cead104ce4a?w=800&q=80",
    servicios: [
      "Enfermedades del tórax",
      "Sudoración excesiva de manos y cara",
      "Manejo integral del pie diabético",
      "Insuficiencia venosa y trombosis venosa",
      "Escleroterapia (inyección de varices)",
      "Cirugía de varices",
      "Oclusión arterial aguda y crónica",
      "Broncoscopías",
      "Ultrasonido Doppler",
      "Radiografías digitales",
      "Análisis laboratoriales"
    ],
    destacados: [
      "Cirugía Torácica y Vascular",
      "Manejo integral del pie diabético",
      "Escleroterapia y cirugía de varices",
      "Urgencias 24 Horas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Urgencias 24/7",
    urgencias: true
  },
  {
    slug: "odontologia",
    nombre: "Odontología",
    descripcion: "Atención dental integral: limpieza, restauraciones, extracciones y más.",
    descripcionLarga: "El servicio de Odontología del Hospital Santa Fe ofrece atención dental integral para toda la familia. Realizamos limpiezas dentales, restauraciones, extracciones, endodoncias y tratamientos de emergencia dental. Nuestros odontólogos trabajan en un entorno hospitalario que permite atender casos que requieren sedación o manejo especial, brindando seguridad y comodidad al paciente.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    imagen: "https://plus.unsplash.com/premium_photo-1661580067927-db488b9010bf?w=800&q=80",
    servicios: [
      "Limpieza dental",
      "Restauraciones y resinas",
      "Extracciones dentales",
      "Endodoncia (tratamiento de conductos)",
      "Odontología preventiva",
      "Atención de emergencias dentales"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
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

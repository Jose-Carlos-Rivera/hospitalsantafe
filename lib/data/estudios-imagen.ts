export interface EstudioTipo {
  nombre: string;
  descripcion: string;
  destacado?: boolean;
}

export interface EstudioImagen {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  preparacion: string;
  tiempo: string;
  iconPath: string;
  tipos?: EstudioTipo[];
  indicaciones?: string[];
  procedimiento?: string;
}

export interface OtroServicio {
  id: string;
  nombre: string;
  descripcion: string;
  video?: string;
  imagen?: string;
}

export const otrosServicios: OtroServicio[] = [
  {
    id: 'consultas',
    nombre: 'Consultas Generales',
    descripcion: 'Consulta médica general y de especialidad. Atención personalizada con médicos certificados.',
    video: '/videos/consulta.mp4',
  },
  {
    id: 'curaciones',
    nombre: 'Curaciones',
    descripcion: 'Servicio de curaciones y manejo de heridas por personal de enfermería capacitado.',
  },
  {
    id: 'antidoto-alacran',
    nombre: 'Antídoto para Picadura de Alacrán',
    descripcion: 'Atención inmediata con aplicación de antídoto para picadura de alacrán. Disponible las 24 horas.',
    video: '/videos/antidoto-alacran.mp4',
  },
  {
    id: 'verrugas',
    nombre: 'Retiro de Verrugas',
    descripcion: 'Eliminación profesional de verrugas con técnicas seguras y efectivas.',
    imagen: '/images/hospital/servicios/retiro-verrugas.webp',
  },
  {
    id: 'unas-enterradas',
    nombre: 'Uñas Enterradas',
    descripcion: 'Tratamiento profesional para uñas encarnadas con técnicas de mínima invasión.',
    imagen: '/images/hospital/servicios/unas-enterradas.webp',
  },
  {
    id: 'hospitalizacion',
    nombre: 'Hospitalización',
    descripcion: 'Servicio de hospitalización con habitaciones cómodas y atención de enfermería las 24 horas.',
  },
  {
    id: 'fracturas',
    nombre: 'Atención de Fracturas',
    descripcion: 'Diagnóstico y tratamiento de fracturas con rayos X digital y atención ortopédica especializada.',
  },
];

export const estudiosImagen: EstudioImagen[] = [
  {
    id: "radiografias",
    nombre: "Radiografías Digitales",
    descripcion: "Sistema de radiología digital de alta resolución para diagnósticos precisos con menor exposición a radiación.",
    descripcionLarga: "Contamos con un sistema de radiología digital que permite obtener imágenes de alta resolución con resultados inmediatos. Las radiografías digitales son fundamentales para diagnosticar una diversidad de patologías incluyendo fracturas, problemas ortopédicos, problemas pulmonares y cardiológicos. Las imágenes se visualizan con gran detalle en una pantalla a todo color.",
    preparacion: "No requiere preparación especial. Retire objetos metálicos de la zona a estudiar.",
    tiempo: "Resultados inmediatos",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    indicaciones: [
      "Diagnóstico de fracturas y lesiones óseas",
      "Problemas ortopédicos y articulares",
      "Enfermedades pulmonares y torácicas",
      "Patologías cardiológicas",
      "Evaluación abdominal",
      "Control postquirúrgico"
    ]
  },
  {
    id: "ecosonogramas",
    nombre: "Ecosonogramas 2D, 3D, 4D y 5D",
    descripcion: "Estudios de ultrasonido con tecnología avanzada. Incluye ultrasonido obstétrico en tercera y cuarta dimensión.",
    descripcionLarga: "Contamos con equipo de ultrasonido avanzado que permite realizar estudios en 2D, 3D, 4D y 5D Live. Para ecografías obstétricas, la tecnología 3D/4D permite ver al futuro bebé en 3 dimensiones, a tiempo real y en movimiento con total precisión y nitidez. Es el primer contacto tranquilo, seguro y sereno con tu bebé.",
    preparacion: "Abdominal: ayuno de 6-8 horas y vejiga llena. Obstétrico: vejiga llena. Otros: sin preparación especial.",
    tiempo: "Resultados en 24 horas",
    iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    tipos: [
      {
        nombre: "Hígado y vías biliares",
        descripcion: "Detecta problemas hepáticos, colelitiasis (piedras en la vesícula), colecistitis (inflamación de vesícula biliar) y otras patologías."
      },
      {
        nombre: "Obstétrico",
        descripcion: "Seguimiento del embarazo para detectar anomalías fetales y problemas propios del embarazo. Disponible en 2D, 3D y 4D.",
        destacado: true
      },
      {
        nombre: "Pélvico",
        descripcion: "Para detectar patologías ováricas y uterinas (matriz). Evaluación ginecológica completa."
      },
      {
        nombre: "Renal",
        descripcion: "Para revisar los riñones y detectar malformaciones, litiasis (piedras), quistes y otras patologías renales."
      },
      {
        nombre: "Prostático",
        descripcion: "Para medir la próstata y detectar alteraciones, litiasis o tumores prostáticos."
      },
      {
        nombre: "Tiroideo",
        descripcion: "Para detectar problemas en la glándula tiroides: nódulos, bocio y otras alteraciones tiroideas."
      },
      {
        nombre: "Mamario",
        descripcion: "Para diferenciar masas quísticas a sólidas en la glándula mamaria, detectar fibrosis mamaria y otras patologías.",
        destacado: true
      }
    ],
    indicaciones: [
      "Seguimiento de embarazo (2D, 3D, 4D)",
      "Evaluación de órganos abdominales",
      "Diagnóstico de patologías renales y vesiculares",
      "Evaluación ginecológica y prostática",
      "Detección de nódulos tiroideos",
      "Evaluación mamaria complementaria"
    ]
  },
  {
    id: "eco-3d-4d",
    nombre: "Ecosonograma 3D/4D Obstétrico",
    descripcion: "Ecografía avanzada para ver a tu bebé en tercera y cuarta dimensión con imágenes de alta definición.",
    descripcionLarga: "La ecografía 3D/4D permite conocer a tu hijo o hija, verle por primera vez tal como es, cómo se mueve, cómo crece. Aporta imágenes de gran precisión nunca vistas hasta ahora de las distintas partes del cuerpo del feto (cara, brazos, piernas, sexo) y de sus movimientos (sonrisa, respiración, bostezo, succión). El diagnóstico prenatal se realiza básicamente con la ecografía 2D de alta resolución; la 3D/4D complementa y mejora la calidad del diagnóstico, fortaleciendo los lazos afectivos con el futuro hijo o hija.",
    preparacion: "De 3 a 4 días antes NO aplicar crema hidratante en el abdomen. Tomar muchos líquidos 2 días antes del estudio. No requiere ayuno. Vejiga moderadamente llena.",
    tiempo: "Duración: 20-30 minutos. Resultados inmediatos con imágenes impresas.",
    iconPath: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    indicaciones: [
      "Puede realizarse en cualquier momento del embarazo",
      "Mejores imágenes a partir de la semana 15",
      "Imágenes más detalladas de cara y movimientos: semana 24 a 32",
      "Para gemelos: realizar entre semana 22-28"
    ],
    procedimiento: "Al concluir la exploración se entrega: informe con datos de posición, peso, anatomía fetal y función placentaria. Imágenes representativas en papel de cortes anatómicos (2D) y algunas de las imágenes más relevantes en 3D. Las imágenes obtenidas mediante ecografía 3D/4D se graban y entregan en formato DVD."
  },
  {
    id: "doppler",
    nombre: "Ultrasonido Doppler",
    descripcion: "Estudio especializado para evaluar el flujo sanguíneo en arterias y venas con tecnología de color.",
    descripcionLarga: "Se realiza una ecografía-doppler cuando se quiere estudiar el flujo sanguíneo en un lugar determinado, como puede ser directamente los vasos sanguíneos (arterias o venas), pero también la sangre dentro del corazón u otros órganos. La prueba permite detectar diversos problemas vasculares y cardíacos.",
    preparacion: "Ayuno de 6 horas para Doppler abdominal. Sin preparación especial para extremidades.",
    tiempo: "Resultados en 24-48 horas",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    indicaciones: [
      "Obstrucción parcial o completa de vasos sanguíneos (trombosis arterial y venosa)",
      "Enfermedades del corazón: insuficiencias y alteraciones valvulares",
      "Malformación fetal: visualizar malformaciones en fetos en desarrollo",
      "Preeclampsia: adelantar diagnóstico estudiando flujo sanguíneo a través de la placenta",
      "Sufrimiento fetal: detectar cuando la placenta disminuye aporte de oxígeno y nutrientes",
      "Várices venosas: comprobar permeabilidad venosa en todos sus puntos",
      "Planificación de cirugías: estudiar flujo y circulación sanguínea en la zona a operar"
    ]
  },
  {
    id: "electrocardiograma",
    nombre: "Electrocardiograma (ECG)",
    descripcion: "Registro detallado de la actividad eléctrica del corazón. Procedimiento rápido e indoloro.",
    descripcionLarga: "Estudio para examinar la actividad eléctrica del corazón donde se pueden detectar problemas de conducción eléctrica, isquemia, infartos, crecimiento del corazón y otras alteraciones cardíacas. Es un procedimiento no invasivo, rápido y completamente indoloro.",
    preparacion: "No requiere preparación especial. Evite cremas corporales en el área del pecho.",
    tiempo: "Resultados inmediatos",
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    indicaciones: [
      "Problemas de conducción eléctrica cardíaca",
      "Detección de isquemia (falta de riego sanguíneo)",
      "Diagnóstico de infartos previos o en curso",
      "Evaluación de crecimiento del corazón",
      "Control de arritmias",
      "Evaluación preoperatoria"
    ]
  },
  {
    id: "fluoroscopia",
    nombre: "Fluoroscopía",
    descripcion: "Imagen radiográfica continua en tiempo real para procedimientos quirúrgicos y diagnósticos.",
    descripcionLarga: "La fluoroscopía se utiliza durante las cirugías, dando una imagen radiográfica continua siendo útil en cirugías de Traumatología y Cirugía General. Permite visualizar en tiempo real los movimientos internos del cuerpo y guiar procedimientos con precisión.",
    preparacion: "Según indicación médica. Generalmente se realiza durante procedimientos quirúrgicos.",
    tiempo: "Resultados en tiempo real durante el procedimiento",
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    indicaciones: [
      "Cirugías de traumatología y ortopedia",
      "Cirugía general asistida por imagen",
      "Colocación de material de osteosíntesis",
      "Procedimientos intervencionistas",
      "Guía en tiempo real para procedimientos mínimamente invasivos"
    ]
  },
  {
    id: "endoscopia",
    nombre: "Endoscopía",
    descripcion: "Estudio del tubo digestivo alto (esófago, estómago y duodeno) con cámara de alta definición.",
    descripcionLarga: "El tubo digestivo alto comprende al esófago, estómago y primera parte del intestino delgado (duodeno). El estudio se lleva a cabo con un aparato llamado endoscopio que es un tubo delgado y largo con una cámara de video y luz en su extremo. Las imágenes se visualizan con gran detalle en una pantalla. El estudio se realiza generalmente bajo sedación o anestesia superficial, dura pocos minutos y el paciente no recuerda ni tiene ninguna molestia al final.",
    preparacion: "El paciente debe estar en ayuno de 8-12 horas. Se realiza acostado sobre su lado izquierdo. Se coloca una boquilla especial para permitir la entrada del aparato a la boca.",
    tiempo: "Procedimiento: pocos minutos. Resultados: 24-48 horas",
    iconPath: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    indicaciones: [
      "Inflamación de esófago o esofagitis",
      "Agruras y reflujo gastroesofágico",
      "Gastritis y úlceras gástricas",
      "Sospecha de tumores del tubo digestivo",
      "Obstrucciones esofágicas o gástricas",
      "Hemorragia digestiva alta",
      "Extracción de cuerpos extraños tragados",
      "Quemaduras por ingesta de cáusticos"
    ],
    procedimiento: "Durante la endoscopía se pueden realizar: toma de biopsias, cauterización de lesiones, dilatación de obstrucciones, extracción de cuerpos extraños (monedas, huesos, espinas), y un procedimiento llamado mucosectomía para tumores pequeños. Las complicaciones son muy raras e incluyen hemorragia y perforación."
  },
  {
    id: "colonoscopia",
    nombre: "Colonoscopía",
    descripcion: "Estudio del colon y recto para detectar y tratar problemas digestivos del tracto inferior.",
    descripcionLarga: "Procedimiento endoscópico que permite visualizar el interior del colon y recto. Es fundamental para la detección temprana de pólipos, cáncer colorrectal y diversas enfermedades del tracto digestivo inferior. Se realiza bajo sedación para mayor comodidad del paciente.",
    preparacion: "Preparación intestinal especial 24 horas antes del estudio (se proporcionan instrucciones). Dieta líquida el día previo. Ayuno el día del estudio.",
    tiempo: "Procedimiento: 30-60 minutos. Resultados: 24-48 horas",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    indicaciones: [
      "Problemas digestivos crónicos",
      "Úlcera gástrica y duodenal",
      "Esofagitis y reflujo",
      "Hernia hiatal",
      "Gastritis crónica",
      "Colitis ulcerativa",
      "Detección de pólipos",
      "Tamizaje de cáncer colorrectal"
    ]
  }
];

export function getEstudioById(id: string): EstudioImagen | undefined {
  return estudiosImagen.find(e => e.id === id);
}

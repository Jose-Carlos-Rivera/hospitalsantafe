export interface DesgloseItem {
  concepto: string;
  monto: string;
}

export interface Paquete {
  id: string;
  nombre: string;
  precio: string;
  precioDesde?: boolean;
  categoria: string;
  incluye: string[];
  nota?: string;
  destacado?: boolean;
  descripcion?: string;
  indicaciones?: string[];
  desglose?: DesgloseItem[];
}

export interface CategoriaPaquete {
  id: string;
  nombre: string;
  descripcion: string;
  paquetes: Paquete[];
}

export const categoriasPaquetes: CategoriaPaquete[] = [
  {
    id: "maternidad",
    nombre: "Maternidad",
    descripcion: "Paquetes completos para dar la bienvenida a tu bebé con la mejor atención médica. Apartado desde $1,000 pesos con facilidades de pago.",
    paquetes: [
      {
        id: "parto-natural",
        nombre: "Paquete Parto Natural",
        precio: "$28,450.00",
        categoria: "maternidad",
        destacado: false,
        descripcion: "Paquete integral para parto vaginal que incluye atención completa del parto, honorarios médicos, hospitalización y atención del recién nacido.",
        incluye: [
          "Atención del parto por ginecólogo",
          "Honorarios médicos (ginecólogo)",
          "Honorarios de pediatra",
          "Hospitalización por 1 día",
          "Atención del recién nacido en cuneros",
          "Alimentos para mamá y recién nacido",
          "Medicamentos de rutina (analgésicos, antibióticos, etc.)",
          "Incubadora y oxígeno por 3 horas",
          "Anestesia peridural",
          "Pañalera con fórmula láctea y pañales",
          "Descuento en consultas prenatales"
        ],
        nota: "Apartado: $1,000. Abonos mensuales durante control prenatal. Consulta el costo: Tel. 373-734-4205 o WhatsApp 333-119-8625."
      },
      {
        id: "cesarea",
        nombre: "Paquete Cesárea",
        precio: "$33,000.00",
        categoria: "maternidad",
        destacado: true,
        descripcion: "Paquete completo para parto por cesárea programada con hospitalización de 2 días, anestesia y atención integral para mamá y bebé.",
        incluye: [
          "Operación cesárea programada",
          "Anestesia (bloqueo regional)",
          "Honorarios médicos (ginecólogo)",
          "Honorarios de pediatra",
          "Hospitalización por 2 días",
          "Atención del recién nacido en cuneros",
          "Alimentos para mamá y recién nacido",
          "Medicamentos de rutina (analgésicos, antibióticos, etc.)",
          "Material quirúrgico desechable",
          "Incubadora y oxígeno por 3 horas",
          "Descuento en consultas prenatales"
        ],
        nota: "Apartado: $1,000. Abonos mensuales durante control prenatal. Habitación Normal incluida; Suite y Master Suite con costo adicional."
      }
    ]
  }
];

export interface ProcedimientoCategoria {
  nombre: string;
  procedimientos: string[];
}

export const procedimientosQuirurgicos: ProcedimientoCategoria[] = [
  {
    nombre: 'Ginecología y Obstetricia',
    procedimientos: ['Parto', 'Cesárea', 'Cesárea + Salpingoclasia', 'Legrado', 'Histerectomía c/Ligasure', 'Histerectomía Abierta', 'Histerectomía + Ooforectomía', 'Histerectomía + Plastias', 'Histerectomía Laparoscópica', 'Ooforectomía Abierta', 'Ooforectomía Laparoscópica', 'Salpingoclasia Laparoscópica', 'Salpingoclasia', 'Parto + Salpingoclasia', 'Cerclaje Cervical']
  },
  {
    nombre: 'Cirugía General',
    procedimientos: ['Apendicectomía', 'Apendicectomía Laparoscópica', 'Colecistectomía Abierta', 'Colecistectomía Laparoscópica', 'Funduplicatura', 'Hernioplastia Inguinal', 'Hernioplastia Umbilical', 'Hernioplastia Abdominal Grande', 'Extirpación Quiste Pilonidal', 'Hemorroidectomía', 'Fistulectomía', 'Tiroidectomía']
  },
  {
    nombre: 'Urología',
    procedimientos: ['Circuncisión c/Bloqueo', 'Circuncisión c/Anest. Local', 'Vasectomía', 'Varicocelectomía', 'Resección Transuretral Próstata', 'Resección Total Próstata', 'Resección RTU + Orquiectomía', 'RTU Bipolar', 'Cistoscopia']
  },
  {
    nombre: 'Cirugía Plástica',
    procedimientos: ['Mamoplastia de Aumento', 'Mamoplastia de Reducción', 'Abdominoplastia', 'Liposucción', 'Abdominoplastia + Liposucción', 'Blefaroplastia Superior', 'Blefaroplastia Sup e Inferior']
  },
  {
    nombre: 'Otorrinolaringología',
    procedimientos: ['Rinoplastia', 'Rinoseptumplastia', 'Amigdalectomía']
  }
];

export function getPaquetesByCategoria(categoriaId: string): CategoriaPaquete | undefined {
  return categoriasPaquetes.find(c => c.id === categoriaId);
}

export function getAllPaquetes(): Paquete[] {
  return categoriasPaquetes.flatMap(c => c.paquetes);
}

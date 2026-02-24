'use server';

import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';
import { commitFile } from '@/lib/admin/github';

// ─── Auth Actions ─────────────────────────────────────────────────────────────

export async function loginAction(formData: FormData) {
  const password = (formData.get('password') as string ?? '').trim();
  const correct = (process.env.ADMIN_PASSWORD ?? '').trim();

  if (!correct) {
    redirect('/admin?error=config');
  }

  if (password !== correct) {
    redirect('/admin?error=1');
  }

  const session = await getSession();
  session.isLoggedIn = true;
  await session.save();

  redirect('/admin/dashboard');
}

export async function logoutAction() {
  const session = await getSession();
  session.destroy();
  redirect('/admin');
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Testimonio {
  id: string;
  nombre: string;
  texto: string;
  servicio: string;
  estrellas: number;
}

export interface PreciosData {
  parto_natural: string;
  cesarea: string;
  telefono_whatsapp: string;
  telefono_fijo: string;
  telefono_movil: string;
  habitacion_privada: string;
  habitacion_compartida: string;
  desayuno_desde: string;
  menu_dia_desde: string;
}

export interface HorariosData {
  urgencias: { label: string; horario: string };
  consultas: { label: string; horario_semana: string; horario_sabado: string };
  farmacia: { label: string; horario_semana: string; horario_finde: string };
  cafeteria: { label: string; horario_semana: string; horario_finde: string };
  estudios_imagen: { label: string; horario_semana: string; horario_urgencias: string };
  cuneros_visitas: { label: string; horario_padres: string; horario_familiares: string; nota: string };
}

export interface Doctor {
  id: string;
  nombre: string;
  cargo: string;
  foto: string;
}

export interface CafeteriaSeccion {
  id: string;
  titulo: string;
  items: string[];
}

export interface CafeteriaData {
  secciones: CafeteriaSeccion[];
  servicio_habitaciones: string;
  info_cards: { titulo: string; texto: string }[];
}

export interface HabitacionData {
  id: string;
  nombre: string;
  descripcion: string;
  amenidades: string[];
  featured: boolean;
  imagenes: { src: string; alt: string }[];
  video: string;
}

export interface FarmaciaServicio {
  id: string;
  titulo: string;
  descripcion: string;
}

export interface FaqItem {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface EstadisticaItem {
  id: string;
  numero: string;
  label: string;
  icono: string;
}

export interface NosotrosData {
  mision: string;
  vision: string;
  valores: { id: string; nombre: string; descripcion: string }[];
}

type ActionResult = { success?: boolean; error?: string };

// ─── Helper ───────────────────────────────────────────────────────────────────

async function authedCommit(
  filePath: string,
  data: unknown,
  message: string
): Promise<ActionResult> {
  const session = await getSession();
  if (!session.isLoggedIn) return { error: 'No autorizado' };

  try {
    await commitFile(filePath, JSON.stringify(data, null, 2), message);
    return { success: true };
  } catch (err) {
    return { error: String(err) };
  }
}

// ─── Testimonios ──────────────────────────────────────────────────────────────

export async function saveTestimoniosAction(
  testimonios: Testimonio[]
): Promise<ActionResult> {
  return authedCommit('lib/data/testimonios.json', testimonios, 'admin: actualizar testimonios');
}

// ─── Precios & Contacto ──────────────────────────────────────────────────────

export async function savePreciosAction(
  precios: PreciosData
): Promise<ActionResult> {
  return authedCommit('lib/data/precios-editables.json', precios, 'admin: actualizar precios y contacto');
}

// ─── Horarios ─────────────────────────────────────────────────────────────────

export async function saveHorariosAction(
  horarios: HorariosData
): Promise<ActionResult> {
  return authedCommit('lib/data/horarios.json', horarios, 'admin: actualizar horarios');
}

// ─── Doctores ─────────────────────────────────────────────────────────────────

export async function saveDoctoresAction(
  doctores: Doctor[]
): Promise<ActionResult> {
  return authedCommit('lib/data/doctores.json', doctores, 'admin: actualizar doctores');
}

// ─── Cafetería ────────────────────────────────────────────────────────────────

export async function saveCafeteriaAction(
  cafeteria: CafeteriaData
): Promise<ActionResult> {
  return authedCommit('lib/data/cafeteria.json', cafeteria, 'admin: actualizar cafetería');
}

// ─── Habitaciones ─────────────────────────────────────────────────────────────

export async function saveHabitacionesAction(
  habitaciones: HabitacionData[]
): Promise<ActionResult> {
  return authedCommit('lib/data/habitaciones.json', habitaciones, 'admin: actualizar habitaciones');
}

// ─── Farmacia ─────────────────────────────────────────────────────────────────

export async function saveFarmaciaAction(
  farmacia: FarmaciaServicio[]
): Promise<ActionResult> {
  return authedCommit('lib/data/farmacia.json', farmacia, 'admin: actualizar farmacia');
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export async function saveFaqsAction(
  faqs: FaqItem[]
): Promise<ActionResult> {
  return authedCommit('lib/data/faqs.json', faqs, 'admin: actualizar preguntas frecuentes');
}

// ─── Estadísticas ─────────────────────────────────────────────────────────────

export async function saveEstadisticasAction(
  estadisticas: EstadisticaItem[]
): Promise<ActionResult> {
  return authedCommit('lib/data/estadisticas.json', estadisticas, 'admin: actualizar estadísticas');
}

// ─── Nosotros (Misión, Visión, Valores) ───────────────────────────────────────

export async function saveNosotrosAction(
  nosotros: NosotrosData
): Promise<ActionResult> {
  return authedCommit('lib/data/nosotros.json', nosotros, 'admin: actualizar misión, visión y valores');
}

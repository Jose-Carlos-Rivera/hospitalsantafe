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
}

// ─── Testimonios Actions ──────────────────────────────────────────────────────

export async function saveTestimoniosAction(
  testimonios: Testimonio[]
): Promise<{ success?: boolean; error?: string }> {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: 'No autorizado' };
  }

  try {
    await commitFile(
      'lib/data/testimonios.json',
      JSON.stringify(testimonios, null, 2),
      'admin: actualizar testimonios'
    );
    return { success: true };
  } catch (err) {
    return { error: String(err) };
  }
}

// ─── Precios Actions ──────────────────────────────────────────────────────────

export async function savePreciosAction(
  precios: PreciosData
): Promise<{ success?: boolean; error?: string }> {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: 'No autorizado' };
  }

  try {
    await commitFile(
      'lib/data/precios-editables.json',
      JSON.stringify(precios, null, 2),
      'admin: actualizar precios y contacto'
    );
    return { success: true };
  } catch (err) {
    return { error: String(err) };
  }
}

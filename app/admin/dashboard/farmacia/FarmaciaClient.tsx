'use client';

import { useState } from 'react';
import { saveFarmaciaAction, type FarmaciaServicio } from '@/app/admin/actions';

interface Props {
  initialData: FarmaciaServicio[];
}

const EMPTY_FORM = { titulo: '', descripcion: '' };

export default function FarmaciaClient({ initialData }: Props) {
  const [servicios, setServicios] = useState<FarmaciaServicio[]>(initialData);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const startAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowForm(true);
    setStatusMsg(null);
  };

  const startEdit = (s: FarmaciaServicio) => {
    setEditingId(s.id);
    setForm({ titulo: s.titulo, descripcion: s.descripcion });
    setShowForm(true);
    setStatusMsg(null);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Eliminar este servicio?')) return;
    setServicios((prev) => prev.filter((s) => s.id !== id));
    setStatusMsg(null);
  };

  const handleFormSubmit = () => {
    if (!form.titulo.trim() || !form.descripcion.trim()) {
      setStatusMsg({ type: 'error', text: 'Título y descripción son obligatorios.' });
      return;
    }

    if (editingId) {
      setServicios((prev) =>
        prev.map((s) =>
          s.id === editingId
            ? { ...s, titulo: form.titulo, descripcion: form.descripcion }
            : s
        )
      );
    } else {
      const newId = Date.now().toString();
      setServicios((prev) => [
        ...prev,
        { id: newId, titulo: form.titulo, descripcion: form.descripcion },
      ]);
    }

    cancelForm();
    setStatusMsg(null);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveFarmaciaAction(servicios);

    setSaving(false);
    if (result?.error) {
      setStatusMsg({ type: 'error', text: `Error: ${result.error}` });
    } else {
      setStatusMsg({
        type: 'success',
        text: '✓ Guardado correctamente. Los cambios aparecerán en el sitio en ~2 minutos.',
      });
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Lista de servicios actuales */}
      <div className="admin-card">
        <h2>Servicios de farmacia ({servicios.length})</h2>

        {servicios.length === 0 && (
          <p className="admin-empty">No hay servicios. Agrega el primero.</p>
        )}

        {servicios.map((s) => (
          <div key={s.id} className="admin-testimonial-item">
            <div className="admin-testimonial-info">
              <div className="admin-testimonial-name">{s.titulo}</div>
              <div className="admin-testimonial-text">{s.descripcion}</div>
            </div>
            <div className="admin-testimonial-actions">
              <button className="admin-btn-edit" onClick={() => startEdit(s)}>
                Editar
              </button>
              <button className="admin-btn-delete" onClick={() => handleDelete(s.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}

        {/* Add button */}
        {!showForm && (
          <button className="admin-btn-add" style={{ marginTop: '16px' }} onClick={startAdd}>
            + Agregar nuevo servicio
          </button>
        )}
      </div>

      {/* Formulario agregar/editar */}
      {showForm && (
        <div className="admin-card">
          <h2>{editingId ? 'Editar servicio' : 'Nuevo servicio'}</h2>

          <div className="admin-form">
            <div className="admin-form-group">
              <label>Título del servicio *</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Ej: Medicamentos de patente y genéricos"
                value={form.titulo}
                onChange={(e) => setForm((f) => ({ ...f, titulo: e.target.value }))}
              />
            </div>

            <div className="admin-form-group">
              <label>Descripción *</label>
              <textarea
                className="admin-textarea"
                placeholder="Describe el servicio de farmacia..."
                value={form.descripcion}
                onChange={(e) => setForm((f) => ({ ...f, descripcion: e.target.value }))}
                rows={3}
              />
            </div>

            {statusMsg && statusMsg.type === 'error' && (
              <div className={`admin-status admin-status--${statusMsg.type}`}>{statusMsg.text}</div>
            )}

            <div className="admin-form-actions">
              <button className="admin-btn-primary" type="button" onClick={handleFormSubmit}>
                {editingId ? 'Actualizar' : 'Agregar'}
              </button>
              <button className="admin-btn-secondary" type="button" onClick={cancelForm}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save bar */}
      <div className="admin-save-bar">
        <div>
          {statusMsg && statusMsg.type !== 'error' && (
            <div className={`admin-status admin-status--${statusMsg.type}`} style={{ margin: 0 }}>
              {statusMsg.text}
            </div>
          )}
          {!statusMsg && (
            <span className="admin-save-bar__hint">
              Cuando termines de hacer cambios, presiona <strong>Guardar cambios</strong>.
            </span>
          )}
        </div>
        <button
          className="admin-btn-primary"
          onClick={handleSaveAll}
          disabled={saving}
          style={{ flexShrink: 0 }}
        >
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </button>
      </div>
    </>
  );
}

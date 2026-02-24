'use client';

import { useState } from 'react';
import { saveDoctoresAction, type Doctor } from '@/app/admin/actions';

interface Props {
  initialData: Doctor[];
}

const EMPTY_FORM = { nombre: '', cargo: '', foto: '' };

export default function DoctoresClient({ initialData }: Props) {
  const [doctores, setDoctores] = useState<Doctor[]>(initialData);
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

  const startEdit = (d: Doctor) => {
    setEditingId(d.id);
    setForm({ nombre: d.nombre, cargo: d.cargo, foto: d.foto });
    setShowForm(true);
    setStatusMsg(null);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Eliminar este doctor?')) return;
    setDoctores((prev) => prev.filter((d) => d.id !== id));
    setStatusMsg(null);
  };

  const handleFormSubmit = () => {
    if (!form.nombre.trim() || !form.cargo.trim()) {
      setStatusMsg({ type: 'error', text: 'Nombre y cargo son obligatorios.' });
      return;
    }

    if (editingId) {
      setDoctores((prev) =>
        prev.map((d) =>
          d.id === editingId
            ? { ...d, nombre: form.nombre, cargo: form.cargo, foto: form.foto }
            : d
        )
      );
    } else {
      const newId = 'dr-' + Date.now().toString();
      setDoctores((prev) => [
        ...prev,
        { id: newId, nombre: form.nombre, cargo: form.cargo, foto: form.foto },
      ]);
    }

    cancelForm();
    setStatusMsg(null);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveDoctoresAction(doctores);

    setSaving(false);
    if (result?.error) {
      setStatusMsg({ type: 'error', text: `Error: ${result.error}` });
    } else {
      setStatusMsg({
        type: 'success',
        text: 'Guardado correctamente. Los cambios apareceran en el sitio en ~2 minutos.',
      });
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Lista de doctores */}
      <div className="admin-card">
        <h2>Doctores actuales ({doctores.length})</h2>

        {doctores.length === 0 && (
          <p className="admin-empty">No hay doctores. Agrega el primero.</p>
        )}

        {doctores.map((d) => (
          <div key={d.id} className="admin-testimonial-item">
            <div className="admin-testimonial-info">
              <div className="admin-testimonial-name">{d.nombre}</div>
              <div className="admin-testimonial-service">{d.cargo}</div>
              {d.foto && (
                <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                  Foto: {d.foto}
                </div>
              )}
            </div>
            <div className="admin-testimonial-actions">
              <button className="admin-btn-edit" onClick={() => startEdit(d)}>
                Editar
              </button>
              <button className="admin-btn-delete" onClick={() => handleDelete(d.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}

        {!showForm && (
          <button className="admin-btn-add" style={{ marginTop: '16px' }} onClick={startAdd}>
            + Agregar nuevo doctor
          </button>
        )}
      </div>

      {/* Formulario agregar/editar */}
      {showForm && (
        <div className="admin-card">
          <h2>{editingId ? 'Editar doctor' : 'Nuevo doctor'}</h2>

          <div className="admin-form">
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  placeholder="Ej: Dr. Juan Manuel Davalos"
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                />
              </div>
              <div className="admin-form-group">
                <label>Cargo / Especialidad *</label>
                <input
                  type="text"
                  placeholder="Ej: Director del Area Medica"
                  value={form.cargo}
                  onChange={(e) => setForm((f) => ({ ...f, cargo: e.target.value }))}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label>URL de foto</label>
              <input
                type="text"
                placeholder="Ej: /images/hospital/medicos/nombre.webp"
                value={form.foto}
                onChange={(e) => setForm((f) => ({ ...f, foto: e.target.value }))}
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

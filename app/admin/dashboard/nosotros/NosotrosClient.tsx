'use client';

import { useState } from 'react';
import { saveNosotrosAction, type NosotrosData } from '@/app/admin/actions';

interface Props {
  initialData: NosotrosData;
}

const EMPTY_VALOR = { nombre: '', descripcion: '' };

export default function NosotrosClient({ initialData }: Props) {
  const [mision, setMision] = useState(initialData.mision);
  const [vision, setVision] = useState(initialData.vision);
  const [valores, setValores] = useState(initialData.valores);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_VALOR);

  // ── Valor CRUD Helpers ──────────────────────────────────────────────────────

  const startAddValor = () => {
    setEditingId(null);
    setForm(EMPTY_VALOR);
    setShowForm(true);
    setStatusMsg(null);
  };

  const startEditValor = (v: { id: string; nombre: string; descripcion: string }) => {
    setEditingId(v.id);
    setForm({ nombre: v.nombre, descripcion: v.descripcion });
    setShowForm(true);
    setStatusMsg(null);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_VALOR);
  };

  const handleDeleteValor = (id: string) => {
    if (!confirm('¿Eliminar este valor?')) return;
    setValores((prev) => prev.filter((v) => v.id !== id));
    setStatusMsg(null);
  };

  const handleFormSubmit = () => {
    if (!form.nombre.trim() || !form.descripcion.trim()) {
      setStatusMsg({ type: 'error', text: 'Nombre y descripción del valor son obligatorios.' });
      return;
    }

    if (editingId) {
      setValores((prev) =>
        prev.map((v) =>
          v.id === editingId
            ? { ...v, nombre: form.nombre, descripcion: form.descripcion }
            : v
        )
      );
    } else {
      const newId = Date.now().toString();
      setValores((prev) => [
        ...prev,
        { id: newId, nombre: form.nombre, descripcion: form.descripcion },
      ]);
    }

    cancelForm();
    setStatusMsg(null);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const data: NosotrosData = { mision, vision, valores };
    const result = await saveNosotrosAction(data);

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
      {/* Misión */}
      <div className="admin-card">
        <h2>Misión</h2>
        <div className="admin-form">
          <div className="admin-form-group">
            <label>Texto de la misión</label>
            <textarea
              className="admin-textarea"
              placeholder="Escribe la misión del hospital..."
              value={mision}
              onChange={(e) => { setMision(e.target.value); setStatusMsg(null); }}
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Visión */}
      <div className="admin-card">
        <h2>Visión</h2>
        <div className="admin-form">
          <div className="admin-form-group">
            <label>Texto de la visión</label>
            <textarea
              className="admin-textarea"
              placeholder="Escribe la visión del hospital..."
              value={vision}
              onChange={(e) => { setVision(e.target.value); setStatusMsg(null); }}
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="admin-card">
        <h2>Valores ({valores.length})</h2>

        {valores.length === 0 && (
          <p className="admin-empty">No hay valores. Agrega el primero.</p>
        )}

        {valores.map((v) => (
          <div key={v.id} className="admin-testimonial-item">
            <div className="admin-testimonial-info">
              <div className="admin-testimonial-name">{v.nombre}</div>
              <div className="admin-testimonial-text">{v.descripcion}</div>
            </div>
            <div className="admin-testimonial-actions">
              <button className="admin-btn-edit" onClick={() => startEditValor(v)}>
                Editar
              </button>
              <button className="admin-btn-delete" onClick={() => handleDeleteValor(v.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}

        {/* Add button */}
        {!showForm && (
          <button className="admin-btn-add" style={{ marginTop: '16px' }} onClick={startAddValor}>
            + Agregar nuevo valor
          </button>
        )}
      </div>

      {/* Formulario agregar/editar valor */}
      {showForm && (
        <div className="admin-card">
          <h2>{editingId ? 'Editar valor' : 'Nuevo valor'}</h2>

          <div className="admin-form">
            <div className="admin-form-group">
              <label>Nombre del valor *</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Ej: Compromiso, Excelencia..."
                value={form.nombre}
                onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
              />
            </div>

            <div className="admin-form-group">
              <label>Descripción *</label>
              <textarea
                className="admin-textarea"
                placeholder="Describe este valor..."
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

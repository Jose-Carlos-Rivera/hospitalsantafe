'use client';

import { useState } from 'react';
import { saveFaqsAction, type FaqItem } from '@/app/admin/actions';

interface Props {
  initialData: FaqItem[];
}

const EMPTY_FORM = { pregunta: '', respuesta: '' };

export default function FaqsClient({ initialData }: Props) {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialData);
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

  const startEdit = (faq: FaqItem) => {
    setEditingId(faq.id);
    setForm({ pregunta: faq.pregunta, respuesta: faq.respuesta });
    setShowForm(true);
    setStatusMsg(null);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Eliminar esta pregunta frecuente?')) return;
    setFaqs((prev) => prev.filter((f) => f.id !== id));
    setStatusMsg(null);
  };

  const handleFormSubmit = () => {
    if (!form.pregunta.trim() || !form.respuesta.trim()) {
      setStatusMsg({ type: 'error', text: 'Pregunta y respuesta son obligatorias.' });
      return;
    }

    if (editingId) {
      setFaqs((prev) =>
        prev.map((f) =>
          f.id === editingId
            ? { ...f, pregunta: form.pregunta, respuesta: form.respuesta }
            : f
        )
      );
    } else {
      const newId = Date.now().toString();
      setFaqs((prev) => [
        ...prev,
        { id: newId, pregunta: form.pregunta, respuesta: form.respuesta },
      ]);
    }

    cancelForm();
    setStatusMsg(null);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveFaqsAction(faqs);

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
      {/* Lista de FAQs actuales */}
      <div className="admin-card">
        <h2>Preguntas frecuentes ({faqs.length})</h2>

        {faqs.length === 0 && (
          <p className="admin-empty">No hay preguntas frecuentes. Agrega la primera.</p>
        )}

        {faqs.map((faq) => (
          <div key={faq.id} className="admin-testimonial-item">
            <div className="admin-testimonial-info">
              <div className="admin-testimonial-name">{faq.pregunta}</div>
              <div className="admin-testimonial-text">{faq.respuesta}</div>
            </div>
            <div className="admin-testimonial-actions">
              <button className="admin-btn-edit" onClick={() => startEdit(faq)}>
                Editar
              </button>
              <button className="admin-btn-delete" onClick={() => handleDelete(faq.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}

        {/* Add button */}
        {!showForm && (
          <button className="admin-btn-add" style={{ marginTop: '16px' }} onClick={startAdd}>
            + Agregar nueva pregunta
          </button>
        )}
      </div>

      {/* Formulario agregar/editar */}
      {showForm && (
        <div className="admin-card">
          <h2>{editingId ? 'Editar pregunta' : 'Nueva pregunta frecuente'}</h2>

          <div className="admin-form">
            <div className="admin-form-group">
              <label>Pregunta *</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Ej: ¿Tienen servicio de urgencias las 24 horas?"
                value={form.pregunta}
                onChange={(e) => setForm((f) => ({ ...f, pregunta: e.target.value }))}
              />
            </div>

            <div className="admin-form-group">
              <label>Respuesta *</label>
              <textarea
                className="admin-textarea"
                placeholder="Escribe la respuesta a esta pregunta..."
                value={form.respuesta}
                onChange={(e) => setForm((f) => ({ ...f, respuesta: e.target.value }))}
                rows={4}
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

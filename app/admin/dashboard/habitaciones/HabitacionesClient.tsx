'use client';

import { useState } from 'react';
import { saveHabitacionesAction, type HabitacionData } from '@/app/admin/actions';

interface Props {
  initialData: HabitacionData[];
}

export default function HabitacionesClient({ initialData }: Props) {
  const [habitaciones, setHabitaciones] = useState<HabitacionData[]>(initialData);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);

  // ── Field update helpers ────────────────────────────────────────────────────

  const updateField = (idx: number, field: keyof HabitacionData, value: string | boolean) => {
    setHabitaciones((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
    setStatusMsg(null);
  };

  // ── Amenidades helpers ──────────────────────────────────────────────────────

  const updateAmenidad = (habIdx: number, amenIdx: number, value: string) => {
    setHabitaciones((prev) => {
      const updated = [...prev];
      const amenidades = [...updated[habIdx].amenidades];
      amenidades[amenIdx] = value;
      updated[habIdx] = { ...updated[habIdx], amenidades };
      return updated;
    });
    setStatusMsg(null);
  };

  const addAmenidad = (habIdx: number) => {
    setHabitaciones((prev) => {
      const updated = [...prev];
      updated[habIdx] = {
        ...updated[habIdx],
        amenidades: [...updated[habIdx].amenidades, ''],
      };
      return updated;
    });
    setStatusMsg(null);
  };

  const removeAmenidad = (habIdx: number, amenIdx: number) => {
    setHabitaciones((prev) => {
      const updated = [...prev];
      updated[habIdx] = {
        ...updated[habIdx],
        amenidades: updated[habIdx].amenidades.filter((_, i) => i !== amenIdx),
      };
      return updated;
    });
    setStatusMsg(null);
  };

  // ── Save ────────────────────────────────────────────────────────────────────

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveHabitacionesAction(habitaciones);

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
      {habitaciones.map((hab, habIdx) => (
        <div key={hab.id} className="admin-card">
          <h2>
            {hab.nombre}
            {hab.featured && (
              <span
                style={{
                  marginLeft: '10px',
                  fontSize: '11px',
                  background: '#e8f5e9',
                  color: '#2e7d32',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: 600,
                }}
              >
                Destacada
              </span>
            )}
          </h2>

          <div className="admin-form">
            <div className="admin-form-group">
              <label>Nombre</label>
              <input
                type="text"
                value={hab.nombre}
                onChange={(e) => updateField(habIdx, 'nombre', e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label>Descripcion</label>
              <textarea
                rows={3}
                value={hab.descripcion}
                onChange={(e) => updateField(habIdx, 'descripcion', e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={hab.featured}
                  onChange={(e) => updateField(habIdx, 'featured', e.target.checked)}
                  style={{ width: '16px', height: '16px' }}
                />
                Habitacion destacada (featured)
              </label>
            </div>

            <hr className="admin-divider" />

            {/* Amenidades */}
            <div className="admin-form-group">
              <label>Amenidades ({hab.amenidades.length})</label>
              {hab.amenidades.map((amenidad, amenIdx) => (
                <div key={amenIdx} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                  <input
                    type="text"
                    value={amenidad}
                    onChange={(e) => updateAmenidad(habIdx, amenIdx, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button
                    type="button"
                    className="admin-btn-delete"
                    onClick={() => removeAmenidad(habIdx, amenIdx)}
                    style={{ flexShrink: 0 }}
                  >
                    Quitar
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="admin-btn-add"
                onClick={() => addAmenidad(habIdx)}
                style={{ marginTop: '4px' }}
              >
                + Agregar amenidad
              </button>
            </div>

            <hr className="admin-divider" />

            {/* Imagenes (read-only) */}
            <div className="admin-form-group">
              <label>Imagenes (solo lectura)</label>
              {hab.imagenes.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  style={{
                    fontSize: '13px',
                    color: '#666',
                    padding: '6px 10px',
                    background: '#f9f9f9',
                    borderRadius: '6px',
                    marginBottom: '4px',
                  }}
                >
                  {img.src} &mdash; {img.alt}
                </div>
              ))}
            </div>

            {/* Video (read-only) */}
            {hab.video && (
              <div className="admin-form-group">
                <label>Video (solo lectura)</label>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#666',
                    padding: '6px 10px',
                    background: '#f9f9f9',
                    borderRadius: '6px',
                  }}
                >
                  {hab.video}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Save bar */}
      <div className="admin-save-bar">
        <div>
          {statusMsg && (
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

'use client';

import { useState } from 'react';
import { saveEstadisticasAction, type EstadisticaItem } from '@/app/admin/actions';

interface Props {
  initialData: EstadisticaItem[];
}

export default function EstadisticasClient({ initialData }: Props) {
  const [estadisticas, setEstadisticas] = useState<EstadisticaItem[]>(initialData);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const updateField = (id: string, field: 'numero' | 'label', value: string) => {
    setEstadisticas((prev) =>
      prev.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
    setStatusMsg(null);
  };

  const ICON_LABELS: Record<string, string> = {
    shield: 'Escudo',
    users: 'Usuarios',
    clock: 'Reloj',
    calendar: 'Calendario',
  };

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveEstadisticasAction(estadisticas);

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
      {/* Info */}
      <div className="admin-card">
        <h2>Estadísticas de la barra de confianza ({estadisticas.length})</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          Estos valores se muestran en la barra de estadísticas del sitio principal. Edita el número y la etiqueta de cada estadística. El icono es de solo lectura.
        </p>

        {estadisticas.map((stat) => (
          <div key={stat.id} className="admin-testimonial-item" style={{ alignItems: 'flex-start' }}>
            <div className="admin-testimonial-info" style={{ flex: 1 }}>
              <div className="admin-form" style={{ gap: '12px' }}>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label>Número / valor</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="Ej: 20+, 24/7, 2003"
                      value={stat.numero}
                      onChange={(e) => updateField(stat.id, 'numero', e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Etiqueta</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="Ej: Años de experiencia"
                      value={stat.label}
                      onChange={(e) => updateField(stat.id, 'label', e.target.value)}
                    />
                  </div>
                </div>
                <div className="admin-form-group">
                  <label>Icono</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={ICON_LABELS[stat.icono] || stat.icono}
                    disabled
                    style={{ background: '#f5f5f5', color: '#999', cursor: 'not-allowed' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save bar */}
      <div className="admin-save-bar">
        <div>
          {statusMsg && statusMsg.type !== 'error' && (
            <div className={`admin-status admin-status--${statusMsg.type}`} style={{ margin: 0 }}>
              {statusMsg.text}
            </div>
          )}
          {statusMsg && statusMsg.type === 'error' && (
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

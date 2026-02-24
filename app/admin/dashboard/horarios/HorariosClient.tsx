'use client';

import { useState } from 'react';
import { saveHorariosAction, type HorariosData } from '@/app/admin/actions';

/* ── Field labels for display ──────────────────────────────────────────────── */

const FIELD_LABELS: Record<string, string> = {
  horario: 'Horario',
  horario_semana: 'Horario entre semana',
  horario_sabado: 'Horario sabados',
  horario_finde: 'Horario fines de semana',
  horario_urgencias: 'Horario urgencias',
  horario_padres: 'Horario padres',
  horario_familiares: 'Horario familiares',
  nota: 'Nota',
};

/* ── Component ─────────────────────────────────────────────────────────────── */

interface Props {
  initialData: HorariosData;
}

export default function HorariosClient({ initialData }: Props) {
  const [data, setData] = useState<HorariosData>(initialData);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);

  // ── Update a field inside a given area ──────────────────────────────────────

  const updateField = (areaKey: string, fieldKey: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [areaKey]: {
        ...(prev as unknown as Record<string, Record<string, string>>)[areaKey],
        [fieldKey]: value,
      },
    }));
    setStatusMsg(null);
  };

  // ── Save ────────────────────────────────────────────────────────────────────

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveHorariosAction(data);

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

  // ── Render each area as a card ──────────────────────────────────────────────

  const areaKeys = Object.keys(data) as (keyof HorariosData)[];

  return (
    <>
      {areaKeys.map((areaKey) => {
        const area = data[areaKey] as Record<string, string>;
        const editableFields = Object.keys(area).filter((k) => k !== 'label');

        return (
          <div key={areaKey} className="admin-card">
            <h2>{area.label}</h2>

            <div className="admin-form">
              {editableFields.map((fieldKey) => (
                <div key={fieldKey} className="admin-form-group">
                  <label>{FIELD_LABELS[fieldKey] || fieldKey}</label>
                  <input
                    type="text"
                    value={area[fieldKey]}
                    onChange={(e) => updateField(areaKey, fieldKey, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}

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

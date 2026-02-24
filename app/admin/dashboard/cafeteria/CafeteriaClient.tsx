'use client';

import { useState } from 'react';
import { saveCafeteriaAction, type CafeteriaData } from '@/app/admin/actions';

interface Props {
  initialData: CafeteriaData;
}

export default function CafeteriaClient({ initialData }: Props) {
  const [data, setData] = useState<CafeteriaData>(initialData);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);

  // ── Secciones helpers ───────────────────────────────────────────────────────

  const updateSeccionTitulo = (idx: number, value: string) => {
    setData((prev) => {
      const secciones = [...prev.secciones];
      secciones[idx] = { ...secciones[idx], titulo: value };
      return { ...prev, secciones };
    });
    setStatusMsg(null);
  };

  const updateItem = (secIdx: number, itemIdx: number, value: string) => {
    setData((prev) => {
      const secciones = [...prev.secciones];
      const items = [...secciones[secIdx].items];
      items[itemIdx] = value;
      secciones[secIdx] = { ...secciones[secIdx], items };
      return { ...prev, secciones };
    });
    setStatusMsg(null);
  };

  const addItem = (secIdx: number) => {
    setData((prev) => {
      const secciones = [...prev.secciones];
      secciones[secIdx] = {
        ...secciones[secIdx],
        items: [...secciones[secIdx].items, ''],
      };
      return { ...prev, secciones };
    });
    setStatusMsg(null);
  };

  const removeItem = (secIdx: number, itemIdx: number) => {
    setData((prev) => {
      const secciones = [...prev.secciones];
      const items = secciones[secIdx].items.filter((_, i) => i !== itemIdx);
      secciones[secIdx] = { ...secciones[secIdx], items };
      return { ...prev, secciones };
    });
    setStatusMsg(null);
  };

  const addSeccion = () => {
    setData((prev) => ({
      ...prev,
      secciones: [
        ...prev.secciones,
        { id: 'seccion-' + Date.now(), titulo: '', items: [''] },
      ],
    }));
    setStatusMsg(null);
  };

  const removeSeccion = (idx: number) => {
    if (!confirm('Eliminar esta seccion del menu?')) return;
    setData((prev) => ({
      ...prev,
      secciones: prev.secciones.filter((_, i) => i !== idx),
    }));
    setStatusMsg(null);
  };

  // ── Info cards helpers ──────────────────────────────────────────────────────

  const updateInfoCard = (idx: number, field: 'titulo' | 'texto', value: string) => {
    setData((prev) => {
      const info_cards = [...prev.info_cards];
      info_cards[idx] = { ...info_cards[idx], [field]: value };
      return { ...prev, info_cards };
    });
    setStatusMsg(null);
  };

  const addInfoCard = () => {
    setData((prev) => ({
      ...prev,
      info_cards: [...prev.info_cards, { titulo: '', texto: '' }],
    }));
    setStatusMsg(null);
  };

  const removeInfoCard = (idx: number) => {
    if (!confirm('Eliminar esta tarjeta informativa?')) return;
    setData((prev) => ({
      ...prev,
      info_cards: prev.info_cards.filter((_, i) => i !== idx),
    }));
    setStatusMsg(null);
  };

  // ── Save ────────────────────────────────────────────────────────────────────

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveCafeteriaAction(data);

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
      {/* Secciones del menu */}
      {data.secciones.map((seccion, secIdx) => (
        <div key={seccion.id} className="admin-card">
          <h2>
            <span style={{ flex: 1 }}>{seccion.titulo || 'Seccion sin titulo'}</span>
          </h2>

          <div className="admin-form">
            <div className="admin-form-group">
              <label>Titulo de la seccion</label>
              <input
                type="text"
                placeholder="Ej: Desayunos (9:00 AM - 11:00 AM)"
                value={seccion.titulo}
                onChange={(e) => updateSeccionTitulo(secIdx, e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label>Items del menu</label>
              {seccion.items.map((item, itemIdx) => (
                <div key={itemIdx} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                  <input
                    type="text"
                    placeholder="Ej: Desayunos completos desde $60.00"
                    value={item}
                    onChange={(e) => updateItem(secIdx, itemIdx, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button
                    type="button"
                    className="admin-btn-delete"
                    onClick={() => removeItem(secIdx, itemIdx)}
                    style={{ flexShrink: 0 }}
                  >
                    Quitar
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="admin-btn-add"
                onClick={() => addItem(secIdx)}
                style={{ marginTop: '4px' }}
              >
                + Agregar item
              </button>
            </div>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-btn-delete"
                onClick={() => removeSeccion(secIdx)}
              >
                Eliminar seccion
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="admin-btn-add"
        onClick={addSeccion}
        style={{ marginBottom: '20px' }}
      >
        + Agregar seccion de menu
      </button>

      {/* Servicio a habitaciones */}
      <div className="admin-card">
        <h2>Servicio a habitaciones</h2>
        <div className="admin-form">
          <div className="admin-form-group">
            <label>Descripcion del servicio</label>
            <input
              type="text"
              value={data.servicio_habitaciones}
              onChange={(e) => {
                setData((prev) => ({ ...prev, servicio_habitaciones: e.target.value }));
                setStatusMsg(null);
              }}
            />
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="admin-card">
        <h2>Tarjetas informativas ({data.info_cards.length})</h2>

        {data.info_cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              padding: '14px 0',
              borderBottom: idx < data.info_cards.length - 1 ? '1px solid #f0f0f0' : 'none',
            }}
          >
            <div className="admin-form">
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Titulo</label>
                  <input
                    type="text"
                    value={card.titulo}
                    onChange={(e) => updateInfoCard(idx, 'titulo', e.target.value)}
                  />
                </div>
                <div className="admin-form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button
                    type="button"
                    className="admin-btn-delete"
                    onClick={() => removeInfoCard(idx)}
                  >
                    Eliminar tarjeta
                  </button>
                </div>
              </div>
              <div className="admin-form-group">
                <label>Texto</label>
                <textarea
                  rows={2}
                  value={card.texto}
                  onChange={(e) => updateInfoCard(idx, 'texto', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="admin-btn-add"
          onClick={addInfoCard}
          style={{ marginTop: '12px' }}
        >
          + Agregar tarjeta informativa
        </button>
      </div>

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

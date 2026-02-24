'use client';

import { useState } from 'react';
import { savePreciosAction, type PreciosData } from '@/app/admin/actions';

interface Props {
  initialPrecios: PreciosData;
}

export default function PreciosClient({ initialPrecios }: Props) {
  const [precios, setPrecios] = useState<PreciosData>(initialPrecios);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);

  const update = (key: keyof PreciosData, value: string) => {
    setPrecios((p) => ({ ...p, [key]: value }));
    setStatusMsg(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando...' });

    const result = await savePreciosAction(precios);

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

  return (
    <>
      {/* Precios de paquetes */}
      <div className="admin-card">
        <h2>Precios de Paquetes de Maternidad</h2>
        <div className="admin-form">
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Paquete Parto Natural</label>
              <div className="admin-price-input-wrap">
                <span>$</span>
                <input
                  type="text"
                  placeholder="28,450.00"
                  value={precios.parto_natural}
                  onChange={(e) => update('parto_natural', e.target.value)}
                />
              </div>
            </div>
            <div className="admin-form-group">
              <label>Paquete Cesárea</label>
              <div className="admin-price-input-wrap">
                <span>$</span>
                <input
                  type="text"
                  placeholder="33,000.00"
                  value={precios.cesarea}
                  onChange={(e) => update('cesarea', e.target.value)}
                />
              </div>
            </div>
          </div>

          <p style={{ fontSize: '12px', color: '#888', margin: '4px 0 0' }}>
            Escribe el precio en formato: 28,450.00 (sin signo de pesos, sin espacios)
          </p>
        </div>
      </div>

      {/* Precios de Habitaciones y Cafetería */}
      <div className="admin-card">
        <h2>Precios de Habitaciones y Cafetería</h2>
        <div className="admin-form">
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Habitación Privada (por día)</label>
              <div className="admin-price-input-wrap">
                <span>$</span>
                <input
                  type="text"
                  placeholder="1,200"
                  value={precios.habitacion_privada}
                  onChange={(e) => update('habitacion_privada', e.target.value)}
                />
              </div>
            </div>
            <div className="admin-form-group">
              <label>Habitación Compartida (por día)</label>
              <div className="admin-price-input-wrap">
                <span>$</span>
                <input
                  type="text"
                  placeholder="800"
                  value={precios.habitacion_compartida}
                  onChange={(e) => update('habitacion_compartida', e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Desayunos desde</label>
              <div className="admin-price-input-wrap">
                <span>$</span>
                <input
                  type="text"
                  placeholder="50"
                  value={precios.desayuno_desde}
                  onChange={(e) => update('desayuno_desde', e.target.value)}
                />
              </div>
            </div>
            <div className="admin-form-group">
              <label>Menú del día desde</label>
              <div className="admin-price-input-wrap">
                <span>$</span>
                <input
                  type="text"
                  placeholder="80"
                  value={precios.menu_dia_desde}
                  onChange={(e) => update('menu_dia_desde', e.target.value)}
                />
              </div>
            </div>
          </div>
          <p style={{ fontSize: '12px', color: '#888', margin: '4px 0 0' }}>
            Estos precios aparecen en la página de Instalaciones.
          </p>
        </div>
      </div>

      {/* Datos de contacto */}
      <div className="admin-card">
        <h2>Datos de Contacto</h2>
        <div className="admin-form">
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>WhatsApp (solo números)</label>
              <input
                type="text"
                placeholder="3331198625"
                value={precios.telefono_whatsapp}
                onChange={(e) => update('telefono_whatsapp', e.target.value)}
              />
              <small style={{ color: '#888', fontSize: '12px' }}>
                Formato: 10 dígitos sin espacios ni guiones
              </small>
            </div>
            <div className="admin-form-group">
              <label>Teléfono Fijo</label>
              <input
                type="text"
                placeholder="3737344205"
                value={precios.telefono_fijo}
                onChange={(e) => update('telefono_fijo', e.target.value)}
              />
            </div>
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Teléfono Móvil</label>
              <input
                type="text"
                placeholder="3731065183"
                value={precios.telefono_movil}
                onChange={(e) => update('telefono_movil', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save bar */}
      <div className="admin-save-bar">
        <div>
          {statusMsg ? (
            <div className={`admin-status admin-status--${statusMsg.type}`} style={{ margin: 0 }}>
              {statusMsg.text}
            </div>
          ) : (
            <span className="admin-save-bar__hint">
              Modifica los campos y presiona <strong>Guardar cambios</strong>.
            </span>
          )}
        </div>
        <button
          className="admin-btn-primary"
          onClick={handleSave}
          disabled={saving}
          style={{ flexShrink: 0 }}
        >
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </button>
      </div>
    </>
  );
}

import "./Cotizador.css";
import { useMemo, useState } from "react";
import { TIPOS, EXTRAS } from "../../data/data.js";
import { wa, money } from "../../utils/whatsapp.js";

export default function Cotizador() {
  const [tipo, setTipo] = useState(TIPOS[0].id);
  const [prueba, setPrueba] = useState(false);
  const [domicilio, setDomicilio] = useState(false);
  const [extra, setExtra] = useState(0);
  const [fecha, setFecha] = useState("");
  const t = TIPOS.find((x) => x.id === tipo);
  const total = useMemo(
    () => t.precio + (prueba ? EXTRAS.prueba.precio : 0) + (domicilio ? EXTRAS.domicilio.precio : 0) + extra * EXTRAS.persona.precio,
    [t, prueba, domicilio, extra]
  );
  const msg = `Hola! Quiero cotizar: ${t.label}${prueba ? ", con prueba previa" : ""}${domicilio ? ", a domicilio" : ""}${extra ? `, ${extra} persona(s) más` : ""}${fecha ? `. Fecha del evento: ${fecha}` : ""}. Total estimado: ${money(total)}.`;
  return (
    <section id="cotizador">
      <div className="wrap">
        <h2>Cotizá tu peinado</h2>
        <p className="sub">Armá tu presupuesto estimado y enviámelo por WhatsApp para confirmar disponibilidad.</p>
        <div className="cot">
          <label>Tipo de peinado
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              {TIPOS.map((x) => <option key={x.id} value={x.id}>{x.label} ({money(x.precio)})</option>)}
            </select>
          </label>
          <label className="chk"><input type="checkbox" checked={prueba} onChange={(e) => setPrueba(e.target.checked)} /> {EXTRAS.prueba.label} (+{money(EXTRAS.prueba.precio)})</label>
          <label className="chk"><input type="checkbox" checked={domicilio} onChange={(e) => setDomicilio(e.target.checked)} /> {EXTRAS.domicilio.label} (+{money(EXTRAS.domicilio.precio)})</label>
          <label>Personas adicionales
            <input type="number" min="0" max="20" value={extra} onChange={(e) => setExtra(Math.max(0, +e.target.value || 0))} />
          </label>
          <label>Fecha del evento
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </label>
          <div className="total"><span>Total estimado</span><strong>{money(total)}</strong></div>
          <a className="btn wa" href={wa(msg)} target="_blank" rel="noreferrer">Enviar cotización por WhatsApp</a>
          <p className="note">El valor final se confirma según el diseño y la cantidad de cabello.</p>
        </div>
      </div>
    </section>
  );
}
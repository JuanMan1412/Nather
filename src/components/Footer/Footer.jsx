import "./Footer.css";
import { CONFIG } from "../../data/data.js";
import { wa } from "../../utils/whatsapp.js";

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="wrap">
        <div>
          <h2>Reservá tu turno</h2>
          <p className="sub">Escribime con la fecha de tu evento y el estilo que imaginás.</p>
          <a className="btn wa" href={wa("Hola! Quiero reservar un turno.")} target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
        </div>
        <div><strong>{CONFIG.nombre}</strong><br />{CONFIG.ciudad}<br />{CONFIG.horario}<br /><a href={CONFIG.instagram} target="_blank" rel="noreferrer">Instagram</a></div>
      </div>
    </footer>
  );
}
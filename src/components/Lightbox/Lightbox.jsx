import "./Lightbox.css";
import { wa } from "../../utils/whatsapp.js";

export default function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="lb" role="dialog" aria-modal="true" onClick={onClose}>
      <button aria-label="Cerrar">×</button>
      <div onClick={(e) => e.stopPropagation()}>
        {item.type === "video" ? <video src={item.src} controls autoPlay playsInline /> : <img src={item.src} alt={item.title} />}
        <p style={{ textAlign: "center", margin: "10px 0" }}>{item.title}</p>
        <p style={{ textAlign: "center" }}>
          <a className="btn wa" href={wa(`Hola! Quiero consultar por este peinado: ${item.title}`)} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
        </p>
      </div>
    </div>
  );
}
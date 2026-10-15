import "./Header.css";
import { CONFIG } from "../../data/data.js";
import { wa } from "../../utils/whatsapp.js";

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a href="#inicio" className="brand">{CONFIG.logo && <img src={CONFIG.logo} alt="" />}{CONFIG.nombre}</a>
        <nav>
          <a href="#sobre-mi">Sobre mí</a><a href="#galeria">Galería</a><a href="#videos">Videos</a>
          <a href="#packs">Packs</a><a href="#cotizador">Cotizador</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="btn wa" href={wa("Hola! Quiero reservar un turno.")} target="_blank" rel="noreferrer">Reservar</a>
      </div>
    </header>
  );
}
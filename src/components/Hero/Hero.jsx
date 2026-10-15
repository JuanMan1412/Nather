import "./Hero.css";
import { CONFIG } from "../../data/data.js";
import { wa } from "../../utils/whatsapp.js";
import HeroCarousel from "./HeroCarousel.jsx";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          {CONFIG.logo && <img className="hero-logo" src={CONFIG.logo} alt={CONFIG.nombre} />}
          <h1>Peinados para el día que querés recordar</h1>
          <p>Novias, casamientos, galas y eventos sociales en {CONFIG.ciudad}. Reservá tu turno y coordinamos tu prueba.</p>
          <div className="row">
            <a className="btn wa" href={wa("Hola! Quiero reservar un turno.")} target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
            <a className="btn ghost" href="#galeria">Ver trabajos</a>
          </div>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
}
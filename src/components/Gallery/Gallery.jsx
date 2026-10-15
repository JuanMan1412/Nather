import "./Gallery.css";
import { useState } from "react";
import { CATEGORIAS, MEDIA } from "../../data/data.js";
import Thumb from "./Thumb.jsx";
import Lightbox from "../Lightbox/Lightbox.jsx";

export default function Gallery() {
  const [cat, setCat] = useState("todos");
  const [open, setOpen] = useState(null);
  const list = MEDIA.filter((m) => m.type === "foto" && (cat === "todos" || m.cat === cat));
  return (
    <section id="galeria">
      <div className="wrap">
        <h2>Galería</h2>
        <p className="sub">Elegí una categoría y mirá trabajos reales.</p>
        <div className="tabs" role="group" aria-label="Filtrar por categoría">
          {[{ id: "todos", label: "Todos" }, ...CATEGORIAS].map((c) => (
            <button key={c.id} className="tab" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</button>
          ))}
        </div>
        <div className="grid">
          {list.map((m) => (
            <button key={m.id} className="item" onClick={() => setOpen(m)} aria-label={`Ver ${m.title}`}>
              <Thumb m={m} /><span className="cap">{m.title}</span>
            </button>
          ))}
        </div>
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
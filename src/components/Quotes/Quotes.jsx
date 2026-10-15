import "./Quotes.css";
import { QUOTES } from "../../data/data.js";

export default function Quotes() {
  if (!QUOTES.length) return null;
  return (
    <section id="opiniones">
      <div className="wrap">
        <h2>Opiniones</h2>
        <div className="quotes">
          {QUOTES.map((q, i) => (
            <blockquote key={i} className="quote">
              <p>“{q.texto}”</p>
              <span className="note">{q.nombre} · {q.evento}</span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
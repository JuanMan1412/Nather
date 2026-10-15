import { useEffect, useState } from "react";
import "./HeroCarousel.css";
import { MEDIA } from "../../data/data.js";

const PHOTOS = MEDIA.filter((m) => m.type === "foto");
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroCarousel() {
  const [failed, setFailed] = useState([]);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = PHOTOS.filter((p) => !failed.includes(p.id));
  const n = slides.length;
  const cur = n ? i % n : 0;

  useEffect(() => {
    if (n < 2 || paused || reduceMotion()) return;
    const t = setInterval(() => setI((x) => x + 1), 4500);
    return () => clearInterval(t);
  }, [n, paused]);

  const go = (d) => setI(cur + d + n);

  return (
    <div
      className="hc"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos de peinados"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {n === 0 && <div className="hc-empty">Subí fotos en public/media<br />y agregalas en data.js</div>}
      {slides.map((s, k) => (
        <img
          key={s.id}
          className={"hc-slide" + (k === cur ? " on" : "")}
          src={s.src}
          alt={k === cur ? s.title : ""}
          aria-hidden={k !== cur}
          onError={() => setFailed((f) => [...f, s.id])}
        />
      ))}
      {n > 0 && <div className="hc-cap">{slides[cur].title}</div>}
      {n > 1 && (
        <>
          <button className="hc-btn hc-prev" onClick={() => go(-1)} aria-label="Foto anterior">‹</button>
          <button className="hc-btn hc-next" onClick={() => go(1)} aria-label="Foto siguiente">›</button>
          <div className="hc-dots">
            {slides.map((s, k) => (
              <button key={s.id} className="hc-dot" aria-current={k === cur} aria-label={`Ir a la foto ${k + 1}`} onClick={() => setI(k)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
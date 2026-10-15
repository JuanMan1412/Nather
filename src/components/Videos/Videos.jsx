import "../Gallery/Gallery.css";
import "./Videos.css";
import { useState } from "react";
import { MEDIA } from "../../data/data.js";
import Thumb from "../Gallery/Thumb.jsx";
import Lightbox from "../Lightbox/Lightbox.jsx";

export default function Videos() {
  const [open, setOpen] = useState(null);
  const list = MEDIA.filter((m) => m.type === "video");
  if (!list.length) return null;
  return (
    <section id="videos">
      <div className="wrap">
        <h2>Videos</h2>
        <p className="sub">Mirá cómo se hacen los peinados.</p>
        <div className="grid">
          {list.map((m) => (
            <button key={m.id} className="item" onClick={() => setOpen(m)} aria-label={`Ver video ${m.title}`}>
              <Thumb m={m} /><span className="badge">▶ Video</span><span className="cap">{m.title}</span>
            </button>
          ))}
        </div>
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
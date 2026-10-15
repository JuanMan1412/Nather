import "./Gallery.css";
import { useState } from "react";

export default function Thumb({ m }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="empty">Subí tu {m.type} en<br />public{m.src}</div>;
  return m.type === "video"
    ? <video src={m.src} muted preload="metadata" playsInline onError={() => setFailed(true)} />
    : <img src={m.src} alt={m.title} loading="lazy" onError={() => setFailed(true)} />;
}
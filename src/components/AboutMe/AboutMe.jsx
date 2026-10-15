import "./AboutMe.css";
import { useState } from "react";
import { ABOUT } from "../../data/data.js";

export default function AboutMe() {
  const [noFoto, setNoFoto] = useState(false);
  return (
    <section id="sobre-mi">
      <div className="wrap about">
        {!noFoto && <img src={ABOUT.foto} alt="Naty" onError={() => setNoFoto(true)} />}
        <div>
          <h2>{ABOUT.titulo}</h2>
          <p className="sub">{ABOUT.texto}</p>
        </div>
      </div>
    </section>
  );
}
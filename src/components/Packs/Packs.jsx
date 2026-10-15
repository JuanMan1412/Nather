import "./Packs.css";
import { PACKS } from "../../data/data.js";
import { wa, money } from "../../utils/whatsapp.js";

export default function Packs() {
  return (
    <section id="packs">
      <div className="wrap">
        <h2>Packs</h2>
        <p className="sub">Opciones pensadas para novias, madrinas y grupos.</p>
        <div className="packs">
          {PACKS.map((p) => (
            <div key={p.nombre} className={"pack" + (p.destacado ? " top" : "")}>
              <h3>{p.nombre}</h3>
              <ul>{p.incluye.map((i) => <li key={i}>{i}</li>)}</ul>
              <span className="price">{p.precio ? money(p.precio) : "Consultar precio"}</span>
              <a className="btn ghost" href={wa(`Hola! Me interesa el ${p.nombre}.`)} target="_blank" rel="noreferrer">Consultar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
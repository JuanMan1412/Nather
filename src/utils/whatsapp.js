import { CONFIG } from "../data/data.js";
export const wa = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
export const money = (n) => "$" + n.toLocaleString("es-AR");
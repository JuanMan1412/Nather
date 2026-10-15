// ====== TODO LO EDITABLE ESTÁ ACÁ ======
export const CONFIG = {
  nombre: "Naty Peinados",
  whatsapp: "5493815200146", // código país + área + número, sin + ni espacios
  instagram: "https://instagram.com/", // pegá tu link
  ciudad: "San Miguel de Tucumán",
  horario: "Lunes a sábado, con turno previo",
  logo: "/logo-natalia-hernandez.png", // ej: "/logo.png" (guardalo en /public)
};

// Categorías de la galería
export const CATEGORIAS = [
  { id: "novias", label: "Novias" },
  { id: "casamientos", label: "Casamientos" },
  { id: "gala", label: "Gala y social" },
  { id: "quince", label: "15 años" },
];

// Fotos y videos: guardá los archivos en /public/media y agregalos acá.
// type: "foto" | "video"   cat: id de categoría
export const MEDIA = [
  { id: 1, cat: "novias", type: "foto", src: "/media/gala-6.jpeg", title: "Recogido clásico con velo" },
  { id: 2, cat: "novias", type: "foto", src: "/media/gala-8.jpeg", title: "Semirecogido con ondas" },
  { id: 3, cat: "novias", type: "video", src: "/media/novia-video-1.mp4", title: "Paso a paso: peinado de novia" },
  { id: 4, cat: "casamientos", type: "foto", src: "/media/gala-5.jpeg", title: "Peinado para madrina" },
  { id: 5, cat: "casamientos", type: "foto", src: "/media/gala-7.jpeg", title: "Invitada con trenza" },
  { id: 6, cat: "gala", type: "foto", src: "/media/gala-1.jpeg", title: "Moño alto pulido" },
  { id: 7, cat: "gala", type: "foto", src: "/media/gala-2.jpeg", title: "Moño alto pulido" },
  { id: 8, cat: "gala", type: "foto", src: "/media/gala-3.jpeg", title: "Moño alto pulido" },
  { id: 9, cat: "gala", type: "video", src: "/media/gala-video-1.mp4", title: "Ondas glam" },
  { id: 10, cat: "quince", type: "foto", src: "/media/gala-4.jpeg", title: "Peinado de quinceañera" },
];

// Packs
export const PACKS = [
  { nombre: "Pack Novia", precio: 0, incluye: ["Prueba de peinado previa", "Peinado el día del evento", "Retoques durante la ceremonia"], destacado: true },
  { nombre: "Pack Madrina", precio: 0, incluye: ["Peinado de evento", "Asesoramiento según el vestido"] },
  { nombre: "Pack Comitiva", precio: 0, incluye: ["Peinados para grupos desde 4 personas", "Horarios coordinados"] },
];

// Cotizador (precios de ejemplo: cambialos)
export const TIPOS = [
  { id: "novia", label: "Novia", precio: 80000 },
  { id: "casamiento", label: "Madrina o invitada", precio: 40000 },
  { id: "gala", label: "Gala o social", precio: 35000 },
  { id: "quince", label: "15 años", precio: 38000 },
];
export const EXTRAS = {
  prueba: { label: "Prueba previa", precio: 25000 },
  domicilio: { label: "Servicio a domicilio", precio: 20000 },
  persona: { label: "Persona adicional", precio: 35000 },
};

// Sección "Sobre mí"
export const ABOUT = {
  titulo: "Sobre Naty",
  texto: "Escribí acá tu historia: hace cuántos años peinás, qué te apasiona y cómo trabajás con cada clienta.",
  foto: "/media/naty.jpg",
};

// Opiniones: reemplazá por testimonios reales (si la lista queda vacía, la sección se oculta)
export const QUOTES = [
  { nombre: "Nombre de la clienta", texto: "Reemplazá este ejemplo por una opinión real.", evento: "Casamiento" },
];

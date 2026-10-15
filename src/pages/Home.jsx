import Hero from "../components/Hero/Hero.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Videos from "../components/Videos/Videos.jsx";
import Packs from "../components/Packs/Packs.jsx";
import Cotizador from "../components/Cotizador/Cotizador.jsx";
import Quotes from "../components/Quotes/Quotes.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Gallery />
      <Videos />
      <Packs />
      <Cotizador />
      <Quotes />
    </main>
  );
}
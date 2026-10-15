import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
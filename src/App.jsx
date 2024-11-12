import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  return (
    <div
      className="overflow-x-hidden antialiased
     selection:bg-cyan-200 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto">
        <Navbar
          mobileMenu={isMobMenuOpen}
          toggle={toggleMenu}
          setIsMobMenuOpen={setIsMobMenuOpen}
        />
        <Hero mobileMenu={isMobMenuOpen} />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

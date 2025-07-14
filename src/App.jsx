import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/Loadingscreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/Section/Home";
import { About } from "./components/Section/About";
import { Projects } from "./components/Section/Project";
import "./index.css";
import { Contact } from "./components/Section/Contact";
import { ResumeTabs } from "./components/Section/Resumetabs";

import CustomCursor from "./components/CustomCursor";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div 

        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <CustomCursor/>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <ResumeTabs />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
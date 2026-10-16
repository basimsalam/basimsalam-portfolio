import { useState, useEffect } from "react";
import { CategoryPage, ProjectPage } from "./components/ProjectPages";
// import "./App.css";
import { LoadingScreen } from "./components/Loadingscreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/Section/Home";
import { About } from "./components/Section/About";
import { Projects } from "./components/Section/Project";
import Chatbot from "./components/Chatbot";
import Certifications from "./components/Section/Certifications";
// import "./index.css";
import { Contact } from "./components/Section/Contact";
import { ResumeTabs } from "./components/Section/Resumetabs";

import CustomCursor from "./components/CustomCursor";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Hash routes: #/category/<slug> and #/project/<slug>; anything else is the home page.
  const parseRoute = () =>
    window.location.hash.startsWith("#/")
      ? window.location.hash.slice(2).split("/")
      : [];
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Detail pages open at the top; on the home page, scroll to the section named in the hash
  // (the browser can't do this itself when we arrive from a detail page).
  const routeKey = route.join("/");
  useEffect(() => {
    if (routeKey) {
      window.scrollTo(0, 0);
      return;
    }
    const id = window.location.hash.slice(1);
    requestAnimationFrame(() =>
      id ? document.getElementById(id)?.scrollIntoView() : window.scrollTo(0, 0)
    );
  }, [routeKey]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
      
  className={`min-h-screen transition-opacity duration-700 ${
    isLoaded ? "opacity-100" : "opacity-0"
  } bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
>
        <CustomCursor/>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {route[0] === "category" ? (
          <CategoryPage slug={route[1]} />
        ) : route[0] === "project" ? (
          <ProjectPage slug={route[1]} />
        ) : (
          <>
            <Home />
            <About />
            <ResumeTabs />
            <Projects />
            <Certifications />
            <Contact />
          </>
        )}
        <Chatbot />

      </div>
    </>
  );
}

export default App;
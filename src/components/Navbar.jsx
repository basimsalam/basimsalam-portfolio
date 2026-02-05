import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Toggling theme from", theme, "to", newTheme); // Debug
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 
                    bg-white/80 dark:bg-[rgba(10,10,10,0.8)]
                    backdrop-blur-lg border-b 
                    border-black/10 dark:border-white/10 
                    shadow-lg transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-gray-900 dark:text-white"
          >
            Basim Salam's
            <span className="text-blue-500"> Portfolio</span>
          </a>

          {/* Mobile menu */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden 
                       text-gray-900 dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Mobile theme toggle (visible on small screens) */}
          <button
            onClick={handleThemeToggle}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800
                       hover:scale-110 transition md:hidden"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "home",
              "about",
              "experience",
              "projects",
              // "certifications",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-600 dark:text-gray-300 
                           hover:text-black dark:hover:text-white 
                           transition-colors capitalize"
              >
                {item}
              </a>
            ))}

            {/* 🌗 Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="ml-4 p-2 rounded-full 
                         bg-gray-200 dark:bg-gray-800
                         hover:scale-110 transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-900" />
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

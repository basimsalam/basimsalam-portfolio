// import { useEffect } from "react";

// export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 w-full bg-white dark:bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
//                      transition-all duration-300 ease-in-out

//                      ${
//                        menuOpen
//                          ? "h-screen opacity-100 pointer-events-auto"
//                          : "h-0 opacity-0 pointer-events-none"
//                      }
//                    `}
//     >
//       <button
//         onClick={() => setMenuOpen(false)}
//         className="absolute top-6 right-6 text-gray-900 dark:text-white text-3xl focus:outline-none cursor-pointer"
//         aria-label="Close Menu"
//       >
//         &times;
//       </button>

//       <a
//         href="#home"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-gray-900 dark:text-white my-4 transform transition-transform duration-300
//                     ${
//                       menuOpen
//                         ? "opacity-100 translate-y-0"
//                         : "opacity-0 translate-y-5"
//                     }        
//             `}
//       >
//         Home
//       </a>
//       <a
//         href="#about"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//             ${
//               menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }        
//     `}
//       >
//         About
//       </a>
//       <a
//         href="#projects"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//             ${
//               menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }        
//     `}
//       >
//         Projects
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//             ${
//               menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }        
//     `}
//       >
//         Contact
//       </a>
//     </div>
//   );
// };

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40
        flex flex-col items-center justify-center
        bg-white dark:bg-[rgba(10,10,10,0.95)]
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl 
                   text-gray-900 dark:text-white
                   focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu items */}
      <nav className="flex flex-col items-center gap-6">
        {["home", "about", "projects", "contact"].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold
              text-gray-900 dark:text-white
              transition-all duration-300
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};

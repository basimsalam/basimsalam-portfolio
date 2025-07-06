import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", move);
    const links = document.querySelectorAll("a, button, .cursor-pointer");

    links.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: hovered ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className={`w-6 h-6 rounded-full bg-blue-500/70 backdrop-blur-sm ${
          hovered ? "mix-blend-difference" : "mix-blend-normal"
        }`}
      />
    </motion.div>
  );
};

export default CustomCursor;

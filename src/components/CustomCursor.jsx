import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouch);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      mouseX.set(e.clientX - 8); // cursor center
      mouseY.set(e.clientY - 8);
    };

    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button, .cursor-pointer");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ translateX: x, translateY: y }}
    >
      <div
        className={`
          w-4 h-4 rounded-full 
          bg-white 
          transition-all duration-300 
          ease-in-out 
          ${isHovered ? "scale-50 opacity-70" : "scale-100 opacity-100"}
        `}
      />
    </motion.div>
  );
};

export default CustomCursor;




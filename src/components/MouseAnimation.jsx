import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function FollowMouse() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        top: mousePos.y - 25,
        left: mousePos.x - 25,
      }}
      className="absolute w-12 h-12 rounded-full border-2 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg animate-pulse"
    />
  );
}

export default FollowMouse;

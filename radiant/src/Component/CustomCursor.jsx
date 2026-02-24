import { useEffect } from "react";
import "./cursor.css";

export default function CustomCursor() {
  useEffect(() => {
    const ring = document.querySelector(".cursor-ring");
    const dot = document.querySelector(".cursor-dot");

    const moveCursor = (e) => {
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>
    </>
  );
}
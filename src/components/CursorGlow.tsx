import { useEffect, useRef } from "react";

/**
 * A soft colored glow that follows the mouse across the whole page,
 * plus a small ring cursor. Purely decorative & performant (rAF + transform).
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${mx - 300}px, ${my - 300}px)`;
      }
    };

    const onDown = () => ringRef.current?.classList.add("scale-75", "opacity-100");
    const onUp = () => ringRef.current?.classList.remove("scale-75", "opacity-100");

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      {/* Big soft glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-40 blur-[120px] md:block"
        style={{
          background:
            "radial-gradient(circle, var(--c1) 0%, var(--c2) 45%, transparent 70%)",
        }}
      />
      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border-2 border-white/60 opacity-70 transition-transform duration-150 md:block"
      />
    </>
  );
}

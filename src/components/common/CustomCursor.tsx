import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!cursor || !ring || !dot) return;

    // Use GSAP quickSetter for zero-overhead direct GPU translation
    const setCursorX = gsap.quickSetter(cursor, "x", "px");
    const setCursorY = gsap.quickSetter(cursor, "y", "px");

    let isVisible = false;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = "1";
      }

      setCursorX(e.clientX);
      setCursorY(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = !!(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".interactive") ||
        target.hasAttribute("data-cursor")
      );

      if (interactive !== isHovered) {
        isHovered = interactive;
        if (isHovered) {
          ring.style.transform = "scale(1.5)";
          ring.style.backgroundColor = "rgba(236, 72, 153, 0.12)";
          ring.style.borderColor = "rgba(236, 72, 153, 0.7)";
          dot.style.transform = "translate(-50%, -50%) scale(0)";
        } else {
          ring.style.transform = "scale(1)";
          ring.style.backgroundColor = "rgba(168, 85, 247, 0.08)";
          ring.style.borderColor = "rgba(168, 85, 247, 0.5)";
          dot.style.transform = "translate(-50%, -50%) scale(1)";
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 top-0 left-0 opacity-0 will-change-transform"
      style={{
        marginLeft: -12,
        marginTop: -12,
      }}
      aria-hidden="true"
    >
      {/* Outer ambient ring with targeted micro-transitions */}
      <div
        ref={ringRef}
        className="w-6 h-6 rounded-full border border-purple-400/50 bg-purple-500/10 transition-[transform,background-color,border-color] duration-150 ease-out"
      />
      {/* Center pinpoint */}
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-transform duration-100 ease-out"
      />
    </div>
  );
}

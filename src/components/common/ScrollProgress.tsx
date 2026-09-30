import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_3px_rgba(236,72,153,0.2)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

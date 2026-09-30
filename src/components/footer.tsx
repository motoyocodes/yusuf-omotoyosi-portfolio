import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, opts: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-10 w-full py-12 border-t border-white/10 text-white font-family-bellefair overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-family-momo tracking-tight text-white">
            Omotoyosi Yusuf
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-sans">
            Fullstack Developer • Building exciting digital experiences.
          </p>
        </div>

        {/* Center - Socials */}
        <div className="flex items-center gap-4 text-zinc-300">
          <a
            href="https://github.com/motoyocodes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/omotoyosi-yusuf-675455312/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="size-5" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all hover:scale-105 cursor-pointer ml-2"
          >
            <span>Top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>

        {/* Right - Copyright */}
        <div className="text-center md:text-right">
          <p className="text-zinc-400 text-xs font-mono">
            © {new Date().getFullYear()} MotoyoCodes. All rights reserved.
          </p>
          <p className="text-zinc-400 text-[11px] font-sans flex items-center justify-center md:justify-end gap-1 mt-1">
            <span>Designed & Engineered with</span>
            <Heart className="size-3 text-pink-500 fill-pink-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

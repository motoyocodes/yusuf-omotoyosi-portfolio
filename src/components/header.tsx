import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ShimmerText from "./kokonutui/shimmer-text";

export default function NavBar() {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Tech Stack" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] as const;

  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy
      const sections = links.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, distance: 999999 };
        const rect = el.getBoundingClientRect();
        return { id, distance: Math.abs(rect.top - 120) };
      });

      const closest = sections.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      if (closest && closest.distance < window.innerHeight * 0.7) {
        setActive(closest.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string | HTMLElement, opts: object) => void } }).__lenis;
    const targetEl = document.getElementById(id);
    if (!targetEl) return;

    if (lenis) {
      lenis.scrollTo(targetEl, { duration: 1.2, offset: -60 });
    } else {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between pointer-events-auto rounded-full px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "bg-black/75 backdrop-blur-xl border border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.65)]"
            : "bg-black/35 backdrop-blur-md border border-white/8 shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Brand Name */}
        <div
          onClick={() => handleNavClick("home")}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-purple-500 to-pink-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_3px_rgba(236,72,153,0.2)]" />
          <ShimmerText
            className="text-base sm:text-lg font-medium tracking-tight font-family-momo"
            text="Omotoyosi Yusuf"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-linear-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50 rounded-full shadow-[0_0_4px_rgba(168,85,247,0.08)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Status Badge & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Hire</span>
          </div>

          <button
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium rounded-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-[0_0_5px_rgba(236,72,153,0.09)] transition-all hover:scale-105 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="text-white md:hidden p-1.5 rounded-full hover:bg-white/10 transition cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-sm mx-auto pointer-events-auto bg-black/85 backdrop-blur-2xl border border-white/12 p-5 rounded-2xl shadow-2xl flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 py-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-left font-medium text-sm transition-all cursor-pointer ${
                    active === link.id
                      ? "bg-purple-500/20 text-white border border-purple-500/30"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {active === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_2px_rgba(236,72,153,0.25)]" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-2 w-full py-2.5 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold text-center shadow-sm shadow-pink-500/5 cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

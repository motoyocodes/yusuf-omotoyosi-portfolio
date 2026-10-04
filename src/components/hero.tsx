import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import img1 from "../assets/img1.jpg";
import ShimmerText from "./kokonutui/shimmer-text";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDown, Terminal, Layers } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // 3D Card Tilt for Avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToPortfolio = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string | HTMLElement, opts: object) => void } }).__lenis;
    const target = document.getElementById("portfolio");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2, offset: -60 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string | HTMLElement, opts: object) => void } }).__lenis;
    const target = document.getElementById("contact");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2, offset: -60 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // GSAP entrance choreographies
    const ctx = gsap.context(() => {
      gsap.from(".hero-stagger-item", {
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.2,
        clearProps: "all",
      });

      gsap.from(".hero-avatar-wrap", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        clearProps: "all",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative z-10 min-h-[85vh] flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Headline & Story */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Greeting */}
          <h2 className="hero-stagger-item text-zinc-400 font-family-bellefair text-xl sm:text-2xl md:text-3xl tracking-wide mb-2">
            Hi, my name is
          </h2>

          {/* Name Header */}
          <div ref={titleRef} className="hero-stagger-item mb-4">
            <ShimmerText
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-family-momo tracking-tight leading-[1.1]"
              text="Yusuf Omotoyosi."
            />
          </div>

          {/* Role & Passion Statement */}
          <p className="hero-stagger-item text-white font-family-bellefair text-2xl sm:text-3xl lg:text-3xl mb-4 mt-2">
            I'm a Fullstack Developer{" "}

          </p>

          <p className="hero-stagger-item text-zinc-300 font-family-bellefair text-xl sm:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-2xl">
            I create exciting, interactive, and visually engaging stuff on the Internet.
          </p>

          {/* Highlights */}
          <div className="hero-stagger-item grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm mb-6">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                07+
              </span>
              <span className="text-xs text-zinc-400 font-mono">Shipped Works</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400">
                Fluid
              </span>
              <span className="text-xs text-zinc-400 font-mono">User Experience</span>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="hero-stagger-item flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <button
              onClick={scrollToPortfolio}
              className="group relative px-7 py-3.5 rounded-full bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 hover:bg-right transition-[transform,background-position] duration-300 text-white font-medium text-base shadow-[0_0_7px_rgba(236,72,153,0.08)] flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Layers className="size-4" />
              <span>Explore Projects</span>
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-medium text-base transition-[border-color,background-color] duration-200 backdrop-blur-sm flex items-center gap-2 cursor-pointer hover:border-purple-500/50"
            >
              <Terminal className="size-4 text-purple-400" />
              <span>Get in Touch</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/motoyocodes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-[transform,color,background-color] duration-200 hover:scale-110 shadow-sm"
                aria-label="GitHub profile"
              >
                <FaGithub className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/omotoyosi-yusuf-675455312/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-[transform,color,background-color] duration-200 hover:scale-110 shadow-sm"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Avatar Sculpture with 3D Tilt */}
        <div className="hero-avatar-wrap lg:col-span-5 flex justify-center items-center">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer group"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-linear-to-r from-purple-600/30 via-pink-600/20 to-cyan-500/25 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />

            {/* Kinetic Outer Orbital Halo */}
            <div className="absolute -inset-6 rounded-full border border-dashed border-purple-500/30 animate-[spin_25s_linear_infinite]" />
            <div className="absolute -inset-10 rounded-full border border-pink-500/20 animate-[spin_35s_linear_infinite_reverse]" />

            {/* Avatar Frame Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-linear-to-b from-purple-500/40 via-pink-500/20 to-transparent border border-white/20 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/10 relative">
                <img
                  src={img1}
                  alt="Yusuf Omotoyosi"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Chic Badge: Role */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 sm:left-0 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-white shadow-xl flex items-center gap-2.5 pointer-events-none"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_3px_rgba(52,211,153,0.2)]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-zinc-400 font-mono leading-none">STATUS</span>
                <span className="text-xs font-semibold">Available for Work</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

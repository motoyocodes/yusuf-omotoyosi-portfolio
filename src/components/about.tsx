import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, ArrowRight, Code2, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header line expansion on scroll
      gsap.from(".about-header-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.0,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards staggered reveal
      gsap.from(".about-fade-up", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-14 sm:py-16 md:py-20 text-white font-family-bellefair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-pink-500 font-mono text-sm tracking-wider">01.</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-family-momo tracking-tight">
              About Me
            </h2>
          </div>
          <div className="about-header-line flex-1 h-[2px] bg-linear-to-r from-purple-500 via-pink-500 to-transparent rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Developer Dossier (Glass Card) */}
          <div className="about-fade-up lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl bg-zinc-950/70 border border-purple-500/20 backdrop-blur-xl p-6 shadow-[0_10px_35px_rgba(0,0,0,0.7)] group hover:border-purple-500/40 transition-all duration-300">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Terminal className="size-3.5 text-purple-400" />
                  <span>developer.profile.ts</span>
                </div>
              </div>

              {/* Code Snippet Spec */}
              <div className="font-mono text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-pink-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-300">"Omotoyosi Yusuf"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">title:</span>{" "}
                  <span className="text-emerald-300">"Creative Frontend & Fullstack"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">location:</span>{" "}
                  <span className="text-emerald-300">"Lagos, Nigeria"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">coreFocus:</span> [
                  <div className="pl-4 text-cyan-300">
                    "Creative Frontend Engineering",
                    <br />
                    "Immersive Web Experiences",
                    <br />
                    "Scalable Fullstack Architecture",
                    <br />
                    "Intuitive User Interfaces"
                  </div>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">mission:</span>{" "}
                  <span className="text-yellow-300">
                    "Transform ideas into living, tactile digital journeys."
                  </span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Glowing Corner Accent */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-pink-400 mb-1">
                  <Code2 className="size-4" />
                  <span className="text-xs font-mono">CODE QUALITY</span>
                </div>
                <p className="text-lg font-bold font-mono text-white">Clean & Robust</p>
                <p className="text-xs text-zinc-400 mt-1">Reliable, scalable, and modular design.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <Sparkles className="size-4" />
                  <span className="text-xs font-mono">EXPERIENCE</span>
                </div>
                <p className="text-lg font-bold font-mono text-white">Fluid & Tactile</p>
                <p className="text-xs text-zinc-400 mt-1">Delightful motion and responsive transitions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Actions */}
          <div className="about-fade-up lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6 text-lg sm:text-xl text-zinc-300 leading-relaxed font-family-bellefair">
              <p>
                Hey there! I'm <strong className="text-white font-semibold">Omotoyosi</strong>, a passionate full-stack web developer who loves building smooth, interactive, and visually engaging digital experiences.
              </p>

              <p>
                I enjoy creating dynamic UI/UX, exploring new methods, and bringing ideas to life, whether it’s a personal exploration or a large-scale application. Every project I build helps me sharpen my problem-solving skills and push my creativity further.
              </p>

              <p>
                If you're searching for a dedicated, curious, and passionate developer, I’m always excited to collaborate and turn your ideas into reality. Let’s create something amazing together!
              </p>

              {/* Key Principles Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base font-sans">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="size-4 text-pink-400 shrink-0" />
                  <span>Fluid micro-interactions & feedback</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
                  <span>Immersive visual journeys</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                  <span>Scalable fullstack architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Mobile-first & accessible design</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10 pt-4 border-t border-white/10">
              <a
                href="/OMOTOYOSI-YUSUF-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-purple-600 hover:bg-pink-600 active:bg-pink-700 text-white font-medium text-base flex items-center gap-2.5 cursor-pointer"
              >
                <FileText className="size-4" />
                <span>View Full Resume</span>
              </a>

              <button
                onClick={scrollToPortfolio}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/20 hover:border-white/30 text-white font-medium text-base flex items-center gap-2 cursor-pointer"
              >
                <span>Check My Projects</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

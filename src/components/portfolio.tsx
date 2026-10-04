import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  ArrowUpRight,
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiNetlify,
  SiSupabase,
  SiThreedotjs,
  SiGreensock,
  SiFramer,
  SiGraphql,
  SiVercel,
  SiPostgresql,
  SiPrisma,
  SiGooglegemini,
  SiSocketdotio,
} from "react-icons/si";
import {
  omniwell,
  portfolio,
  hayven,
  gitwrap,
  naqssunilag,
  adali,
  boqlens
} from "@/assets";

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  id: string;
  name: string;
  category: "3d" | "fullstack" | "featured";
  badge: string;
  image: string;
  description: string;
  liveDemo: string;
  github: string;
  techStack: {
    name: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; size?: number | string }>;
    color: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Adali",
    category: "3d",
    badge: "Digital Atelier",
    image: adali,
    description:
      "A luxury fashion digital atelier featuring scroll storytelling, interactive 3D hardware close-ups, dynamic color-swapping product views, backed by a real Supabase catalog and Stripe checkout.",
    liveDemo: "https://adali.netlify.app/",
    github: "https://github.com/motoyocodes/Adali.git",
    techStack: [
      { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF", description: "3D Hardware Close-up" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02", description: "Scroll Storytelling" },
      { name: "Next.js 15", icon: SiNextdotjs, color: "#FFFFFF", description: "App Router & SSR" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Type-safe logic" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", description: "Responsive Atelier UI" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", description: "Edge Deployment" },
    ],
  },
  {
    id: "2",
    name: "GitWrap",
    category: "featured",
    badge: "Viral Data Visualization",
    image: gitwrap,
    description:
      "A developer visualization tool transforming GitHub contribution matrices into a 'Spotify Wrapped' year-in-review. Analyzes commit velocities to generate coding personality archetypes, AI-driven roasts, and shareable social receipts.",
    liveDemo: "https://gitwrap-mu.vercel.app/",
    github: "https://github.com/motoyocodes/gitwrap",
    techStack: [
      { name: "Next.js 15", icon: SiNextdotjs, color: "#FFFFFF", description: "App Router" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Type Safety" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098", description: "GitHub API" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF", description: "Smooth Transitions" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", description: "Modern UI" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF", description: "Deployment" },
    ],
  },

  {
    id: "3",
    name: "BOQ Lens",
    category: "featured",
    badge: "AI Document Intelligence & ConTech",
    image: boqlens,
    description:
      "A commercial construction intelligence platform that automates Bill of Quantities (BOQ) arithmetic auditing, multi-bidder tender adjudication, and Pareto 80/20 cost driver analytics. Ingests unstandardized spreadsheets and PDFs with real-time WebSocket parsing and grounded Gemini AI document queries.",
    liveDemo: "https://boqlens.vercel.app",
    github: "https://github.com/motoyocodes/boqlens",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", description: "App Router" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Type Safety" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", description: "Supabase DB" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", description: "ORM & Pooling" },
      { name: "Gemini AI", icon: SiGooglegemini, color: "#8E75B2", description: "Document RAG" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101", description: "Live Pipeline" },
    ],
  },
  {
    id: "4",
    name: "Hayven",
    category: "fullstack",
    badge: "Paediatric Health Tech",
    image: hayven,
    description:
      "A comprehensive paediatric healthcare platform connecting Nigerian families with verified therapists. Features therapist matching algorithms, booking flows, patient management dashboards, and real-time consultation sessions.",
    liveDemo: "https://hayven.com.ng/",
    github: "https://github.com/motoyocodes/naqss-unilag.git",
    techStack: [
      { name: "Next.js 15", icon: SiNextdotjs, color: "#FFFFFF", description: "Fullstack Architecture" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", description: "Database & Auth" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Strict Logic" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", description: "Accessible UI" },
      { name: "Framer Motion", icon: SiFramer, color: "#DD00FF", description: "Fluid Animations" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", description: "Fast Delivery" },
    ],
  },
  {
    id: "5",
    name: "NaqssUnilag",
    category: "fullstack",
    badge: "Academic Portal",
    image: naqssunilag,
    description:
      "Official digital gateway for the Department of Quantity Surveying at the University of Lagos. Provides academic archives, course repositories, departmental notices, and leadership directories with blazing fast load speeds.",
    liveDemo: "https://naqss-unilag.netlify.app",
    github: "https://github.com/motoyocodes/naqss-unilag.git",
    techStack: [
      { name: "React", icon: FaReact, color: "#61DAFB", description: "Dynamic SPA" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Strict Typing" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", description: "Responsive Design" },
      { name: "Vite", icon: SiVite, color: "#646CFF", description: "Lightning HMR" },
      { name: "Framer Motion", icon: SiFramer, color: "#DD00FF", description: "Staggered Reveals" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", description: "Production Host" },
    ],
  },
  {
    id: "6",
    name: "Omniwell",
    category: "featured",
    badge: "Fitness & Wellness",
    image: omniwell,
    description:
      "A modern wellness and fitness brand platform engineered with high visual aesthetic standards, tailored training modules, interactive wellness calculators, and an engaging subscriber acquisition flow.",
    liveDemo: "https://omniwell.netlify.app/",
    github: "https://github.com/motoyocodes/OmniWell.git",
    techStack: [
      { name: "React", icon: FaReact, color: "#61DAFB", description: "Client App" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Clean Architecture" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", description: "Modern Styling" },
      { name: "Vite", icon: SiVite, color: "#646CFF", description: "Build Setup" },
      { name: "Framer Motion", icon: SiFramer, color: "#DD00FF", description: "Micro-interactions" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", description: "Global CDN" },
    ],
  },
  {
    id: "7",
    name: "Developer Portfolio",
    category: "3d",
    badge: "Interactive Showcase",
    image: portfolio,
    description:
      "A sleek and interactive portfolio built to showcase my skills, projects, and professional journey through an engaging layout and smooth navigation.",
    liveDemo: "https://yusuf-omotoyosi-port.netlify.app/",
    github: "https://github.com/motoyocodes/yusuf-omotoyosi-portfolio.git",
    techStack: [
      { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF", description: "3D Hardware Close-up" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02", description: "Scroll Storytelling" },
      { name: "React", icon: FaReact, color: "#61DAFB", description: "Frontend UI" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", description: "Styling & Layout" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Type-safe coding" },
      { name: "Vite", icon: SiVite, color: "#646CFF", description: "Build tool" },
      { name: "Framer Motion", icon: SiFramer, color: "#DD00FF", description: "Animations" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", description: "Deployment" },
    ],
  },
];

// Interactive 3D Tilt Project Card
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 25);
    setRotateY(x / 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
      className="group relative rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
    >
      {/* Top Image Preview with Browser Header Frame */}
      <div className="relative w-full overflow-hidden bg-black/40">
        {/* Browser Top Controls */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/50 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
            {project.badge}
          </span>
          <div className="w-10" />
        </div>

        {/* Thumbnail with Zoom on Hover */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
        <div>
          {/* Title & Badge */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold font-family-momo tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-colors">
              {project.name}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-500/15 border border-purple-500/30 text-purple-300">
              {project.category.toUpperCase()}
            </span>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-family-bellefair">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-zinc-300 text-xs font-mono group/tech hover:border-purple-500/40 hover:bg-white/10 transition-colors"
                title={tech.description}
              >
                <Icon
                  style={{ color: tech.color }}
                  className="size-3.5 group-hover/tech:scale-110 transition-transform"
                />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 hover:bg-right text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_6px_rgba(236,72,153,0.08)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Live Experience</span>
            <ArrowUpRight className="size-4" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/12 text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:border-purple-500/50 hover:scale-[1.02]"
            aria-label="View Source Code on GitHub"
          >
            <Github className="size-4" />
            <span className="hidden sm:inline">Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLElement | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
        (p) => p.category === activeFilter || (activeFilter === "featured" && p.category === "featured")
      );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header line expansion
      gsap.from(".portfolio-header-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-14 sm:py-16 md:py-20 text-white font-family-bellefair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-pink-500 font-mono text-sm tracking-wider">03.</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-family-momo tracking-tight">
              Featured Works
            </h2>
          </div>
          <div className="portfolio-header-line flex-1 h-[2px] bg-linear-to-r from-purple-500 via-pink-500 to-transparent rounded-full" />
        </div>

        <p className="text-zinc-300 text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed">
          Explore my journey through projects. Each represents a milestone in my
          continuous learning path and creative exploration.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {[
            { id: "all", label: "All Works" },
            { id: "3d", label: "3D & Interactive" },
            { id: "fullstack", label: "Fullstack & Cloud" },
            { id: "featured", label: "Featured & Web Apps" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                  ? "text-white shadow-[0_0_5px_rgba(236,72,153,0.08)]"
                  : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-portfolio-filter"
                    className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}

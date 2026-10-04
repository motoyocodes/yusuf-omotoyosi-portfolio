import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiMysql,
  SiAuth0,
  SiNpm,
  SiGit,
  SiGithub,
  SiVite,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiPostman,
  SiThreedotjs,
  SiGreensock,
  SiGraphql,
  SiGooglegemini,
} from "react-icons/si";
import { Code, Cpu, Layers, Wrench, Sparkles } from "lucide-react";
import { BiBarChart } from "react-icons/bi";
import { AiOutlineForm } from "react-icons/ai";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools" | "creative";
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  tag: string;
}

const allSkills: SkillItem[] = [
  // Creative & 3D
  { name: "Three.js", category: "creative", icon: SiThreedotjs, color: "#FFFFFF", tag: "3D & WebGL" },
  { name: "GSAP", category: "creative", icon: SiGreensock, color: "#88CE02", tag: "Scroll & Physics" },
  { name: "Framer Motion", category: "creative", icon: SiFramer, color: "#DD00FF", tag: "Micro-interactions" },

  // Frontend
  { name: "React 19", category: "frontend", icon: SiReact, color: "#61DAFB", tag: "Core UI" },
  { name: "Next.js 15", category: "frontend", icon: SiNextdotjs, color: "#FFFFFF", tag: "SSR & App Router" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178C6", tag: "Type Safety" },
  { name: "TailwindCSS", category: "frontend", icon: SiTailwindcss, color: "#38BDF8", tag: "Design Systems" },
  { name: "JavaScript", category: "frontend", icon: SiJavascript, color: "#F7DF1E", tag: "ESNext" },
  { name: "HTML5", category: "frontend", icon: SiHtml5, color: "#E44D26", tag: "Semantic DOM" },
  { name: "CSS3", category: "frontend", icon: SiCss3, color: "#1572B6", tag: "Modern Layouts" },
  { name: "Redux Toolkit", category: "frontend", icon: SiRedux, color: "#764ABC", tag: "State Management" },
  { name: "ShadCN UI", category: "frontend", icon: TbSquareRoundedChevronRight, color: "#FFFFFF", tag: "Components" },
  { name: "React Hook Form", category: "frontend", icon: AiOutlineForm, color: "#EC5990", tag: "Form Validation" },
  { name: "Recharts", category: "frontend", icon: BiBarChart, color: "#FF7300", tag: "Data Viz" },

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs, color: "#3C873A", tag: "Runtime" },
  { name: "Express", category: "backend", icon: SiExpress, color: "#FFFFFF", tag: "REST APIs" },
  { name: "GraphQL", category: "backend", icon: SiGraphql, color: "#E10098", tag: "API & Schemas" },
  { name: "AI Integration", category: "backend", icon: SiGooglegemini, color: "#8E75B2", tag: "LLMs & RAG" },
  { name: "Supabase", category: "backend", icon: SiSupabase, color: "#3ECF8E", tag: "Postgres & Auth" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, color: "#47A248", tag: "NoSQL DB" },
  { name: "MySQL", category: "backend", icon: SiMysql, color: "#00758F", tag: "Relational DB" },
  { name: "Firebase", category: "backend", icon: SiFirebase, color: "#FFCA28", tag: "BaaS & Storage" },
  { name: "Auth.js", category: "backend", icon: SiAuth0, color: "#EB5424", tag: "Authentication" },

  // Tools & DevOps
  { name: "Git", category: "tools", icon: SiGit, color: "#F05033", tag: "Version Control" },
  { name: "GitHub", category: "tools", icon: SiGithub, color: "#FFFFFF", tag: "Collaboration" },
  { name: "Vite", category: "tools", icon: SiVite, color: "#646CFF", tag: "Build Tool" },
  { name: "Vercel", category: "tools", icon: SiVercel, color: "#FFFFFF", tag: "Edge Deploy" },
  { name: "Netlify", category: "tools", icon: SiNetlify, color: "#00C7B7", tag: "CI/CD Hosting" },
  { name: "Postman", category: "tools", icon: SiPostman, color: "#FF6C37", tag: "API Testing" },
  { name: "VS Code", category: "tools", icon: Code, color: "#3EA6FF", tag: "IDE" },
  { name: "npm", category: "tools", icon: SiNpm, color: "#CB3837", tag: "Package Registry" },
];

const categories = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "creative", label: "3D & Motion", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Cpu },
  { id: "backend", label: "Backend", icon: Code },
  { id: "tools", label: "Tools & DevOps", icon: Wrench },
] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const sectionRef = useRef<HTMLElement | null>(null);

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header line expansion
      gsap.from(".skills-header-line", {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.0,
        ease: "power3.out",
        clearProps: "transform",
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
      id="skills"
      ref={sectionRef}
      className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-14 sm:py-16 md:py-20 text-white font-family-bellefair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="skills-header-line flex-1 h-[2px] bg-linear-to-r from-transparent via-purple-500 to-pink-500 rounded-full" />
          <div className="flex items-center gap-3 text-center">
            <span className="text-pink-500 font-mono text-sm tracking-wider">02.</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-family-momo tracking-tight">
              Tech Stack
            </h2>
          </div>
          <div className="skills-header-line flex-1 h-[2px] bg-linear-to-r from-pink-500 via-purple-500 to-transparent rounded-full" />
        </div>

        <p className="text-center text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          A showcase of the technologies and tools I work with to build responsive,
          engaging, and performant digital experiences.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                    ? "text-white shadow-[0_0_5px_rgba(236,72,153,0.08)]"
                    : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-skill-tab"
                    className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 size-3.5" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -15 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/8 backdrop-blur-md flex flex-col items-center justify-between text-center cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-200 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                >
                  {/* Subtle Glow aura */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-200 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Icon */}
                  <div className="relative my-2">
                    <Icon
                      className="size-9 sm:size-11 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Name */}
                  <div className="mt-2 w-full">
                    <h4 className="text-white text-sm sm:text-base font-medium font-sans truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] sm:text-xs text-zinc-400 font-mono block mt-0.5 truncate">
                      {skill.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

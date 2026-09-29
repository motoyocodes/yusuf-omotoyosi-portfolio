import { motion } from "framer-motion";
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
} from "react-icons/si";
import {
  omniwell,
  portfolio,

  hayven,
  gitwrap,
  naqssunilag,
  adali,
} from "@/assets";

export const projects = [
  {
    id: "1",
    name: "Adali",
    image: adali,
    description: "A premium fashion e-commerce experience built to feel like a digital atelier — GSAP-driven scroll storytelling, a Three.js hardware close-up, and color-swapping product pages, backed by a real Supabase catalog and Stripe checkout across Men's and Women's collections.",
    liveDemo: "https://adali.netlify.app/",
    github: "https://github.com/motoyocodes/Adali.git",

    techStack: [
      {
        name: "Next.js 15",
        icon: SiNextdotjs,
        color: "white",
        description: "App Router & Server Actions",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe logic",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        description: "Styling & Responsive Design",
      },
      {
        name: "Three.js",
        icon: SiThreedotjs,
        color: "white",
        description: "3D Hardware Close-up",
      },
      {
        name: "GSAP",
        icon: SiGreensock,
        color: "#88CE02",
        description: "Scroll Storytelling & Motion",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        description: "Deployment",
      },
    ],
  },
  {
    id: "2",
    name: "GitWrap 2025",
    image: gitwrap,
    description:
      "A developer-focused visualization tool that transforms GitHub contribution data into a 'Spotify Wrapped' style year-in-review. It analyzes coding habits to generate personality archetypes, data-driven roasts, and shareable social receipts.",
    liveDemo: "https://gitwrap-mu.vercel.app/",
    github: "https://github.com/motoyocodes/gitwrap",

    techStack: [
      {
        name: "Next.js 15",
        icon: SiNextdotjs,
        color: "white",
        description: "App Router & Server Actions",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe logic",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        description: "Styling & Responsive Design",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
        description: "Data Fetching",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#0055FF",
        description: "Animations & Transitions",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "white",
        description: "Deployment & CI/CD",
      },
    ],
  },
  {
    id: "3",
    name: "Hayven",
    image: hayven,
    description:
      "A responsive healthcare platform connecting Nigerian families with verified paediatric therapists, featuring therapist discovery, matching, booking, user dashboards, and virtual sessions.",
    liveDemo: "https://hayven.com.ng/",
    github: "https://github.com/motoyocodes/naqss-unilag.git",

    techStack: [
      {
        name: "Next.js 15",
        icon: SiNextdotjs,
        color: "white",
        description: "App Router & Server Actions",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        description: "Styling & Layout",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe coding",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3ECF8E",
        description: "Backend DB & Auth",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        description: "Deployment",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#DD00FF",
        description: "Animations",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3ECF8E",
        description: "Backend DB & Auth",
      },
    ],
  },
  {
    id: "4",
    name: "NaqssUnilag",
    image: naqssunilag,
    description:
      "A  website for the department of quantity surveying, university of lagos, designed to provide students with information and resources.",
    liveDemo: "https://naqss-unilag.netlify.app",
    github: "https://github.com/motoyocodes/naqss-unilag.git",

    techStack: [
      {
        name: "Next.js 15",
        icon: SiNextdotjs,
        color: "white",
        description: "App Router & Server Actions",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        description: "Styling & Layout",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe coding",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
        description: "Development build tool",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#DD00FF",
        description: "Animations",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        description: "Deployment",
      },
    ],
  },

  {
    id: "5",
    name: "Omniwell",
    image: omniwell,
    description:
      "A modern and responsive fitness website designed for a health and wellness brand, featuring structured content, clean UI, and an engaging user experience.",
    liveDemo: "https://omniwell.netlify.app/",
    github: "https://github.com/motoyocodes/OmniWell.git",

    techStack: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        description: "Frontend UI",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        description: "Styling & Layout",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe coding",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
        description: "Development build tool",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#DD00FF",
        description: "Animations",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        description: "Deployment",
      },
    ],
  },
  {
    id: "6",
    name: "Developer Portfolio",
    image: portfolio,
    description:
      "A sleek and interactive portfolio built to showcase a web developer’s skills, projects, and professional journey through a clean layout and smooth navigation.",
    liveDemo: "https://yusuf-omotoyosi-port.netlify.app/",
    github: "https://github.com/motoyocodes/yusuf-omotoyosi-portfolio.git",

    techStack: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        description: "Frontend UI",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        description: "Styling & Layout",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe coding",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
        description: "Development build tool",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#DD00FF",
        description: "Animations",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        description: "Deployment",
      },
    ],
  },

];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="  w-full md:px-20 px-6 md:py-20 py-20 text-white font-family-bellefair"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col   items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          Portfolio Showcase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:text-2xl  text-xl sm:text-3xl max-w-5xl"
        >
          Explore my journey through projects. Each represents a milestone in my
          continuous learning path.
        </motion.p>
      </div>

      {/* PROJECT CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="
        bg-white/5 
        rounded-xl 
        shadow-[0_0_20px_rgba(236,72,153,0.15)] 
        border border-pink-500/20 
        md:px-4 px-4 py-5               
        flex 
        flex-col 
        gap-4 
        backdrop-blur-md cursor-pointer
      "
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Title + Description */}
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="md:text-lg text-md font-medium font-family-momo">
                {project.name}
              </h3>
              <p className="text-white/80 text-md md:text-lg mb-0">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 ">
              {project.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg"
                >
                  <tech.icon
                    style={{ color: tech.color }}
                    className=" text-md md:text-lg"
                  />
                  <span className="text-white/80 text-md md:text-lg">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/*  Live Demo and Github */}
            <div className="flex justify-around pt-2 items-center">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline text-lg md:text-xl font-medium"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="
            px-8 py-1 text-center
            bg-linear-to-r from-purple-500 to-pink-500 
            rounded-lg md:text-lg text-md
            text-white hover:translate-x-1
            font-medium 
            hover:opacity-80 
            transition
          "
              >
                Github
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

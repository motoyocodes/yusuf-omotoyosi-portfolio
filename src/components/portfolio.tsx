import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiNetlify,
  SiSupabase,
  SiRedux,
  SiFramer,
} from "react-icons/si";
import { omniwell, portfolio, urbn99, nextjs, birthday } from "@/assets";

export const projects = [
  {
    id: "1",
    name: "Omniwell",
    image: omniwell,
    description:
      "A modern and responsive fitness website designed for a health and wellness brand, featuring structured content, clean UI, and an engaging user experience.",
    liveDemo: "https://omniwell.netlify.app/",
    github: "https://github.com/motoyocodes/OmniWell.git",
    features: [
      { name: "Responsive Design", description: "Looks great on all devices." },
      {
        name: "Interactive UI",
        description: "Smooth animations and feedback.",
      },
      {
        name: "Fast Performance",
        description: "Optimized for speed and usability.",
      },
    ],
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
    id: "2",
    name: "Developer Portfolio",
    image: portfolio,
    description:
      "A sleek and interactive portfolio built to showcase a web developer’s skills, projects, and professional journey through a clean layout and smooth navigation.",
    liveDemo: "https://yusuf-omotoyosi-port.netlify.app/",
    github: "https://github.com/motoyocodes/yusuf-omotoyosi-portfolio.git",
    features: [
      { name: "Responsive Layout", description: "Looks great on all devices." },
      {
        name: "Interactive Animations",
        description: "Smooth scrolling and hover effects.",
      },
      {
        name: "Easy Navigation",
        description: "Well-structured and intuitive UX.",
      },
    ],
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
    id: "3",
    name: "Urbn99",
    image: urbn99,
    description:
      "A contemporary e-commerce website crafted for a streetwear fashion brand, emphasizing bold visuals, modern aesthetics, and an intuitive shopping experience.",
    liveDemo: "https://urbn99.netlify.app/",
    github: "https://github.com/motoyocodes/urbn99.git",
    features: [
      {
        name: "E-commerce Functionality",
        description: "Browse, add to cart, and checkout seamlessly.",
      },
      {
        name: "Interactive UI",
        description: "Smooth animations and responsive design.",
      },
      {
        name: "Performance Optimized",
        description: "Fast page loads and transitions.",
      },
      {
        name: "Performance Optimized",
        description: "Fast page loads and transitions.",
      },
    ],
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
      {
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
        description: "State Management",
      },
    ],
  },
  {
    id: "4",
    name: "Todo App",
    image: nextjs,
    description:
      "An intelligent task-management application enhanced with AI assistance, offering smart suggestions, streamlined organization, and an engaging UI.",
    liveDemo: "https://nextjs-mytodoapp-yusuf-omotoyosi.netlify.app/",
    github: "https://github.com/motoyocodes/nextjs-todoapp-yusuf-omotoyosi.git",
    features: [
      {
        name: "Task Management",
        description: "Add, edit, delete, and complete tasks easily.",
      },
      { name: "AI Assistance", description: "Smart suggestions for tasks." },
      {
        name: "User-Friendly UI",
        description: "Clean and responsive interface.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "white",
        description: "Frontend & SSR",
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
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
        description: "Deployment",
      },
    ],
  },
  {
    id: "5",
    name: "Birthday Website",
    image: birthday,
    description:
      "A personalized celebratory webpage created for a client, featuring interactive elements, animations, and a warm, memorable user experience.",
    liveDemo: "https://faith-etomi-williams.netlify.app/",
    github: "https://github.com/motoyocodes/faith-etomi-williams.git",
    features: [
      {
        name: "Interactive Animations",
        description: "Fun animations and effects for a memorable experience.",
      },
      {
        name: "Personalization",
        description: "Customized messages and images for the client.",
      },
      { name: "Responsive Design", description: "Works well on all devices." },
    ],
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
      className="min-h-screen w-full md:px-20 px-6 md:py-20 py-8 text-white font-family-bellefair"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center mb-16">
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

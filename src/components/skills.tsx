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
  SiSequelize,
  SiPostman,
} from "react-icons/si";
import { Code } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { BiBarChart } from "react-icons/bi";
import { AiOutlineForm } from "react-icons/ai";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

const frontend = [
  { name: "HTML", icon: SiHtml5, color: "#E44D26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Framer Motion", icon: SiFramer, color: "#DD00FF" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Recharts", icon: BiBarChart, color: "#FF7300" },
  { name: "React Hook Form", icon: AiOutlineForm, color: "#EC5990" },
  { name: "ShadCN UI", icon: TbSquareRoundedChevronRight, color: "white" },
];

const backend = [
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Express", icon: SiExpress, color: "white" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "Auth.js", icon: SiAuth0, color: "#EB5424" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const tools = [
  { name: "npm", icon: SiNpm, color: "#CB3837" },
  { name: "Git", icon: SiGit, color: "#F05033" },
  { name: "GitHub", icon: SiGithub, color: "white" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", icon: SiVercel, color: "white" },
  { name: "VSCode", icon: Code, color: "#3EA6FF" },
];

// Framer Motion variants for staggering & blur-in
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.7 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.01, ease: easeOut },
  },
};

export default function Skills() {
  const renderTech = (techArray: typeof frontend) =>
    techArray.map((tech) => (
      <motion.div
        key={tech.name}
        variants={itemVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="
        flex flex-col items-center gap-2 
        p-3 sm:p-4 md:p-2.5 
        rounded-xl
        bg-white/5 
        border border-pink-500/40 
        shadow-[0_0_15px_rgba(236,72,153,0.15)] 
        cursor-pointer tilt-hover
      "
        whileHover={{ scale: 1.05 }}
      >
        <tech.icon
          className="text-3xl md:text-4xl"
          style={{ color: tech.color }}
        />
        <span className="text-white text-sm sm:text-lg md:text-lg font-family-bellefair">
          {tech.name}
        </span>
      </motion.div>
    ));

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="skills"
      className="  w-full md:px-20 px-8 sm:px-12 xl:px-30 pt-30 pb-15 text-white font-family-bellefair"
    >
      {/* TITLE + LINES */}
      <div className="flex items-center gap-6 mb-16">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 h-[3px] bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-3xl font-bold"
        >
          Tech Stack
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 h-[3px] bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
        />
      </div>

      {/* 3-column grid: Frontend | Backend | Tools */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center"
      >
        {/* Frontend */}
        <div>
          <h3 className="md:text-3xl text-2xl font-bold mb-6">Frontend</h3>
          <motion.div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {renderTech(frontend)}
          </motion.div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="md:text-3xl text-2xl  font-bold mb-6">Backend</h3>
          <motion.div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {renderTech(backend)}
          </motion.div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="md:text-3xl text-2xl  font-bold mb-6">Tech & Tools</h3>
          <motion.div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {renderTech(tools)}
          </motion.div>
        </div>
      </motion.div>

      {/* Tilt Hover CSS */}
      <style>{`
        .tilt-hover {
          transform-style: preserve-3d;
          transition: transform 0.3s;
        }
      `}</style>
    </motion.section>
  );
}

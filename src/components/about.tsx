import { FaFile } from "react-icons/fa";
import { motion, cubicBezier } from "framer-motion";

export default function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
    hover: { scale: 1.05 },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen lg:pb-20 z-10 w-full px-10 pt-20 md:py-12 lg:py-20 pb-10 md:pb-4  text-white font-family-bellefair"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* TITLE + LINE */}
      <div className="flex items-center gap-6 mb-12">
        <motion.h2
          className="lg:text-4xl text-4xl font-family-momo font-medium"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        >
          About Me
        </motion.h2>

        {/* Gradient line */}
        <motion.div
          className="h-[3px] flex-1 bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        />
      </div>

      <div className="flex flex-col items-center">
        {/* PARAGRAPHS */}
        <motion.div
          className="max-w-5xl leading-relaxed text-xl md:text-2xl space-y-6"
          variants={container}
        >
          {[
            "Hey there! I'm Omotoyosi, a passionate full-stack web developer who loves building smooth, interactive, and visually engaging digital experiences.",
            "I enjoy creating dynamic UI/UX, exploring new tools, and bringing ideas to life, whether it’s a personal project or a large-scale application. Every project I build helps me sharpen my problem-solving skills and push my creativity further.",
            "If you're searching for a dedicated, curious, and passionate developer, I’m always excited to collaborate and turn your ideas into reality. Let’s create something amazing together!",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center md:text-left"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div className="flex sm:flex-row gap-4 sm:gap-6 mt-12">
          {/* Download CV */}
          <motion.a
            href="/cv.pdf"
            target="blank"
            className="
      px-4 sm:px-6 py-3 sm:py-1 text-lg  sm:text-xl rounded-xl font-medium
      border-2 bg-transparent
      border-linear-to-r from-purple-500 to-pink-500
      text-white flex gap-2 items-center justify-center hover:gap-3 transition-all ease-in
      whitespace-nowrap
    "
            variants={buttonVariants}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
          >
            <FaFile />
            View CV
          </motion.a>

          {/* View Projects */}
          <motion.a
            href="#portfolio"
            className="
      px-6 sm:px-6 py-3 sm:py-3 text-lg sm:text-xl rounded-xl font-medium
      text-white hover:opacity-80 transition-opacity ease-in-out 
      bg-linear-to-r from-purple-500 to-pink-500
      whitespace-nowrap
      text-center
    "
            variants={buttonVariants}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

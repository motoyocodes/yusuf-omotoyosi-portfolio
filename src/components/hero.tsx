import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import ShimmerText from "./kokonutui/shimmer-text";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative z-10 
        flex flex-col-reverse xl:flex-row 
        justify-between items-center 
        px-6 md:px-20 lg:px-30 
        py-10 md:py-32 lg:py-40
        gap-16 md:gap-10
      "
    >
      {/* Left Side */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start">
        <h1 className="text-white font-family-bellefair text-2xl md:text-4xl mb-6 md:mb-8">
          Hi, my name is
        </h1>

        <ShimmerText
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-family-momo leading-tight"
          text="Yusuf Omotoyosi."
        />

        {/* Animated Developer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white font-family-bellefair 
          text-2xl md:text-3xl lg:text-3xl mb-4 mt-6"
        >
          I'm a Frontend Web Developer{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
            className="text-purple-300"
          >
            (Fullstack in progress)
          </motion.span>
        </motion.p>

        <p className="text-white font-family-bellefair text-2xl md:text-3xl lg:text-3xl mb-8">
          I create exciting stuff on the Internet.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-white justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/omotoyosi-yusuf-675455312/"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin className="size-6 md:size-8" />
          </a>

          <a
            href="https://github.com/motoyocodes"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaGithub className="size-6 md:size-8" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="relative overflow-hidden flex items-center justify-center 
w-[300px] sm:w-[350px] md:w-[350px] lg:w-[450px] xl:w-[700px] aspect-square"
      >
        {/* Image */}
        <div className="flex items-center justify-center w-full aspect-square rounded-full z-10">
          <img
            src={img1}
            alt="Hero Avatar"
            className="w-full mt-20 md:mt-0  h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

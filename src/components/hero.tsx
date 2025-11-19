import { motion } from "framer-motion";
import image from "../assets/image.jpg";
import ShimmerText from "./kokonutui/shimmer-text";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const orbitDots = [
    { rotate: 0 },
    { rotate: 90 },
    { rotate: 180 },
    { rotate: 270 },
  ];

  return (
    <section
      id="home"
      className="
        relative z-10 
        flex flex-col-reverse xl:flex-row 
        justify-between items-center 
        px-6 md:px-20 lg:px-30 
        py-20 md:py-32 lg:py-40
        gap-16 md:gap-10
      "
    >
      {/* Left Side */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start">
        <h1 className="text-white font-family-bellefair text-2xl md:text-4xl mb-6 md:mb-10">
          Hi, my name is
        </h1>

        <ShimmerText
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-family-momo leading-tight"
          text="Yusuf Omotoyosi."
        />

        {/* Animated Developer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white font-family-bellefair 
          text-2xl md:text-3xl lg:text-4xl mb-4 mt-6"
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

        <p className="text-white font-family-bellefair text-2xl md:text-3xl lg:text-4xl mb-8">
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
        className="
        relative flex items-center justify-center 
        w-[300px] sm:w-[350px]
 md:w-[350px] lg:w-[450px] xl:w-[700px] 
        aspect-square
      "
      >
        {/* Image */}
        <div className="flex items-center justify-center w-full aspect-square rounded-full z-10">
          <img
            src={image}
            alt="Hero Avatar"
            className="w-full mt-20 md:mt-0  h-full object-cover rounded-full"
          />
        </div>

        {/* Orbiting Dots */}
        {orbitDots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"
            style={{
              transformOrigin: `
        center 
        -${
          window.innerWidth < 500
            ? 80
            : window.innerWidth < 768
              ? 120
              : window.innerWidth < 1024
                ? 160
                : window.innerWidth < 1440
                  ? 200
                  : 260
        }px
      `,
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 5 + index,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

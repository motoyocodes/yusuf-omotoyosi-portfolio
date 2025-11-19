import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full mt-20 py-10 border-t border-white/10 text-white font-family-bellefair">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Name */}
        <h2 className="md:text-2xl text-xl font-family-momo">
          {" "}
          Omotoyosi Yusuf
        </h2>

        {/* Center - Socials */}
        <div className="flex gap-6 text-white">
          <a
            href="https://www.linkedin.com/in/omotoyosi-yusuf-675455312/"
            target="_blank"
            className="hover:text-purple-300 transition"
          >
            <FaLinkedin className="md:size-7 size-5" />
          </a>
          <a
            href="https://github.com/motoyocodes"
            target="_blank"
            className="hover:text-purple-300 transition"
          >
            <FaGithub className="md:size-7 size-5" />
          </a>
        </div>

        {/* Right - Copyright */}
        <p className="text-white/70 text-xs font-extralight font-family-momo">
          © {new Date().getFullYear()} MotoyoCodes. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

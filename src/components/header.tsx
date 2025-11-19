import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ShimmerText from "./kokonutui/shimmer-text";

export default function NavBar() {
  const links = ["home", "about", "skills", "portfolio", "contact"] as const;

  const [active, setActive] = useState<(typeof links)[number]>("home");
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  // scroll detection
  useMotionValueEvent(scrollY, "change", () => {
    const sections = links.map((id) => {
      const el = document.getElementById(id);
      return { id, top: el?.getBoundingClientRect().top ?? 9999 };
    });

    const nearest = sections.reduce((a, b) =>
      Math.abs(a.top) < Math.abs(b.top) ? a : b
    );

    setActive(nearest.id);
  });

  const handleNavClick = (link: string) => {
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-1000 px-6 py-6
                bg-black/10 backdrop-blur-sm"
    >
      <div className="max-w-[1440px] ">
        <div className="flex justify-between items-center xl:px-10">
          {/* LEFT: Shimmer Text */}
          <div>
            <ShimmerText className="text-2xl" text="Omotoyosi Yusuf" />
          </div>

          {/* HAMBURGER FOR SMALL SCREENS */}
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="cursor-pointer" size={32} />
            ) : (
              <Menu className="cursor-pointer" size={32} />
            )}
          </button>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden md:flex gap-8">
            {links.map((link) => (
              <li
                key={link}
                onClick={() => handleNavClick(link)}
                className={`relative cursor-pointer md:text-xl text-white font-family-bellefair font-medium lg:text-md transition-colors
              ${active === link ? "text-purple-400" : "text-white"}
            `}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}

                {/* Animated underline */}
                {active === link && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px]
                  bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE SLIDE-DOWN MENU */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 flex flex-col gap-6 bg-black/40 backdrop-blur-md p-6 rounded-xl"
          >
            {links.map((link) => (
              <li
                key={link}
                onClick={() => handleNavClick(link)}
                className={`relative cursor-pointer text-white font-family-bellefair text-xl transition-colors
              ${active === link ? "text-purple-400" : "text-white"}
            `}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

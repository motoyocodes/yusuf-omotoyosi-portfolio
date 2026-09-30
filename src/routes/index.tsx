import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import { Footer } from "@/components/footer";
import Contact from "@/components/contact";
import ThreeScene from "@/components/three/ThreeScene";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import ScrollProgress from "@/components/common/ScrollProgress";
import CustomCursor from "@/components/common/CustomCursor";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  return (
    <SmoothScrollProvider>
      <div
        className="relative w-full min-h-screen text-white selection:bg-pink-500 selection:text-white"
        style={{
          backgroundColor: "#050508",
          backgroundImage: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%)
          `,
        }}
      >
        {/* Subtle Neon Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Ambient Subtle Interactive Cursor */}
        <CustomCursor />

        {/* Three.js Interactive 3D Background & Kinetic Sculpture */}
        <ThreeScene />

        {/* Subtle Ambient Mesh Texture Overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-1"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Content Layers */}
        <div className="relative z-10 flex flex-col w-full">
          <Navbar />
          <main className="w-full">
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
}

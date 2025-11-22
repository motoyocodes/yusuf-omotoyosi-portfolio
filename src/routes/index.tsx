import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
          radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
          radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
          radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
          #000000
        `,
      }}
    >
      {/* All page content */}
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

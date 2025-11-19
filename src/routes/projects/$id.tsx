import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link, useParams } from "@tanstack/react-router";
import { projects } from "@/components/portfolio";
import NavBar from "@/components/header";

export const Route = createFileRoute("/projects/$id")({
  component: ProjectDetails,
});

export default function ProjectDetails() {
  const { id } = useParams({ strict: false });
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found.
      </div>
    );
  }

  return (
    <>
      {/* GLOBAL NAV */}
      <NavBar />

      {/* BACKGROUND LAYER */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      {/* PAGE CONTENT */}
      <section className="min-h-screen w-full px-20 py-20 text-white font-family-bellefair">
        {/* BACK + TITLE */}
        <div className="flex items-center mt-10 gap-4 text-xl mb-10">
          <Link to="/" className="hover:underline">
            &larr; Back
          </Link>
          <span>/</span>
          <span className="font-bold">{project.name}</span>
        </div>

        {/* TITLE + DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">{project.name}</h1>
          <p className="text-2xl text-white/80 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* FEATURES SECTION */}
        {project.features && (
          <div className="mb-24">
            {/* Section Header */}
            <div className="flex items-center gap-6 mb-12 w-full">
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
                className="text-5xl font-bold text-center"
              >
                Features
              </motion.h2>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex-1 h-[3px] bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
              />
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-6">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-purple-500/20"
                >
                  <h3 className="text-3xl font-bold">{feature.name}</h3>
                  <p className="text-white/80 text-xl mt-2">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* TECH STACK */}
        {project.techStack.map((tech, i) => {
          const Icon = tech.icon; // Assign the icon component
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 flex flex-col items-start gap-2"
            >
              <div className="flex items-center gap-3">
                <Icon size={28} style={{ color: tech.color }} />{" "}
                {/* Render with actual color */}
                <h3 className="text-2xl font-bold">{tech.name}</h3>
              </div>
              <p className="text-white/80">{tech.description}</p>
            </motion.div>
          );
        })}
      </section>
    </>
  );
}

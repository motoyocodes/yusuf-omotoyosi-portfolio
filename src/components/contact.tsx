import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// VALIDATION SCHEMA
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const emailAddress = "motoyoyusuf@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header line expansion
      gsap.from(".contact-header-line", {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("access_key", "c0db13a6-8748-4adb-abe7-a04ab90891b0");
    formData.append("subject", "New message from portfolio");
    formData.append("from_name", data.name);
    formData.append("reply_to", data.email);
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        reset();
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-14 sm:py-16 md:py-20 text-white font-family-bellefair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="contact-header-line flex-1 h-[2px] bg-linear-to-r from-transparent via-purple-500 to-pink-500 rounded-full" />
          <div className="flex items-center gap-3 text-center">
            <span className="text-pink-500 font-mono text-sm tracking-wider">04.</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-family-momo tracking-tight">
              Get in Touch
            </h2>
          </div>
          <div className="contact-header-line flex-1 h-[2px] bg-linear-to-r from-pink-500 via-purple-500 to-transparent rounded-full" />
        </div>

        <p className="text-center text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Have an ambitious project in mind, an open role, or just want to discuss
          creative technology? My inbox is always open.
        </p>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-3xl bg-zinc-950/70 border border-purple-500/25 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2.5 text-pink-400 text-xs font-mono mb-2">

                <span>DIRECT INBOX</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-family-momo text-white mb-2">
                Let's build something unforgettable.
              </h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Feel free to email me directly or copy my address to your clipboard with one click.
              </p>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/12 text-zinc-200 hover:text-white transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3 truncate">
                  <Mail className="size-4 text-purple-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm truncate">
                    {emailAddress}
                  </span>
                </div>
                <div className="shrink-0 pl-2">
                  {copied ? (
                    <span className="flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                      <Check className="size-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">
                      <Copy className="size-3.5" /> Copy
                    </span>
                  )}
                </div>
              </button>
            </div>



            {/* Social Connects */}
            <div className="p-6 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-zinc-400">CONNECT ELSEWHERE</span>
                <span className="text-base font-bold text-white font-sans">Social Profiles</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/motoyocodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub"
                >
                  <FaGithub className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omotoyosi-yusuf-675455312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Glass Form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-purple-500/25 backdrop-blur-2xl shadow-[0_12px_45px_rgba(0,0,0,0.7)] flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 font-sans mb-1.5">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-zinc-500 font-sans text-sm sm:text-base outline-none transition-all duration-200 ${errors.name
                      ? "border-red-500/70 focus:ring-2 focus:ring-red-500/20"
                      : "border-white/10 focus:border-purple-500 focus:bg-white/8 focus:ring-2 focus:ring-purple-500/20"
                    }`}
                  placeholder="e.g. Jane Doe"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 font-sans mb-1.5">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-zinc-500 font-sans text-sm sm:text-base outline-none transition-all duration-200 ${errors.email
                      ? "border-red-500/70 focus:ring-2 focus:ring-red-500/20"
                      : "border-white/10 focus:border-pink-500 focus:bg-white/8 focus:ring-2 focus:ring-pink-500/20"
                    }`}
                  placeholder="e.g. jane@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 font-sans mb-1.5">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-zinc-500 font-sans text-sm sm:text-base outline-none transition-all duration-200 resize-none ${errors.message
                      ? "border-red-500/70 focus:ring-2 focus:ring-red-500/20"
                      : "border-white/10 focus:border-purple-500 focus:bg-white/8 focus:ring-2 focus:ring-purple-500/20"
                    }`}
                  placeholder="Tell me about your project, idea, or questions..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3.5 px-6 rounded-2xl bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 hover:bg-right text-white font-semibold text-base shadow-[0_0_7px_rgba(236,72,153,0.08)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {success && (
            <motion.div
              className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-zinc-950/90 border border-purple-500/30 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 text-center max-w-md shadow-2xl"
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-[0_0_5px_rgba(52,211,153,0.08)]">
                  <Check className="size-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-family-momo mb-2 text-white">
                  Message Dispatched!
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
                  Thank you for reaching out, Omotoyosi has received your message and will respond promptly.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium text-sm hover:opacity-90 transition cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

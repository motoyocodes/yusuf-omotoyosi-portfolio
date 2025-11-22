import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// VALIDATION SCHEMA
const schema = z.object({
  name: z.string().min(2, "Name is too short."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

// ANIMATIONS
const shake = {
  x: [-8, 8, -8, 8, 0],
  transition: { duration: 0.4 },
};

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // SUBMIT FUNCTION
  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("access_key", "c0db13a6-8748-4adb-abe7-a04ab90891b0");

    formData.append("subject", "New message from portfolio");
    formData.append("from_name", data.name);
    formData.append("reply_to", data.email);
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);
      reset();
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen border border-red-500 md:px-20 px-5 md:py-20 pt-20  text-white font-family-bellefair flex flex-col items-center"
    >
      {/* CONTACT HEADER */}
      <div className="flex items-center gap-3 md:gap-6 md:mb-16 mb-8  w-full">
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
          className="md:text-3xl text-2xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 h-[3px] bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:text-2xl text-xl text-center max-w-2xl mb-12"
      >
        Contact me to discuss your web development needs. Send me a message, and
        I'll respond shortly.
      </motion.p>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full max-w-3xl 
          bg-white/5 
          backdrop-blur-lg 
          rounded-xl 
          md:p-10 py-5 px-2
          border border-purple-500/20
          shadow-[0_0_25px_rgba(236,72,153,0.12)]
          flex flex-col md:gap-6 gap-4
        "
      >
        {/* NAME */}
        <motion.div animate={errors.name ? shake : {}}>
          <label className="md:text-2xl text-xl font-medium">Name</label>
          <input
            {...register("name")}
            className="
              bg-white/5 border border-purple-500/20
              px-4 md:py-3 py-2 rounded-lg outline-none 
              text-white placeholder-white/50 mt-2
              focus:border-pink-200 md:placeholder:text-2xl placeholder:text-xl transition w-full
            "
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </motion.div>

        {/* EMAIL */}
        <motion.div animate={errors.email ? shake : {}}>
          <label className="md:text-2xl text-xl font-medium">Email</label>
          <input
            {...register("email")}
            className="
              bg-white/5 border border-purple-500/20
              px-4 md:py-3 py-2 rounded-lg outline-none 
              text-white placeholder-white/50 mt-2
              focus:border-pink-200 md:placeholder:text-2xl placeholder:text-xl transition w-full
            "
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </motion.div>

        {/* MESSAGE */}
        <motion.div animate={errors.message ? shake : {}}>
          <label className="md:text-2xl text-xl font-medium">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="
              bg-white/5 border border-purple-500/20
              px-4 md:py-3 py-2 rounded-lg outline-none 
              text-white placeholder-white/50 mt-2
              focus:border-pink-200 md:placeholder:text-2xl placeholder:text-xl transition w-full
            "
            placeholder="Write your message..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </motion.div>

        {/* BUTTON */}
        <button
          disabled={isSubmitting}
          className="
            md:mt-4 mt-3 w-full 
            md:py-3 py-2
            bg-linear-to-r from-purple-500 to-pink-500 
            rounded-xl text-xl font-bold 
            hover:opacity-85 transition
            disabled:opacity-50 cursor-pointer
          "
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                bg-white/10 border border-purple-500/20 
                backdrop-blur-xl rounded-2xl 
                p-10 text-center max-w-md shadow-lg
              "
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">Message Sent </h3>
              <p className="text-white/70 mb-6">
                Thanks for reaching out! I’ll get back to you shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="
                  px-6 py-2 
                  bg-linear-to-r from-purple-500 to-pink-500 
                  rounded-lg text-white font-medium hover:opacity-85 cursor-pointer
                "
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

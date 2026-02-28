import React from "react";
import { motion } from "framer-motion";
import {
  FiUpload,
  FiEye,
  FiRefreshCw,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const HowToUse = () => {
  const steps = [
    {
      icon: FiUpload,
      title: "Upload your board",
      body: "Drop in sketches, photos, or PDF exports. Canvas AI auto-detects layers and cleans up your canvas.",
      color: "bg-blue-500",
    },
    {
      icon: FiEye,
      title: "Review with AI",
      body: "Get instant critique on structure, clarity, and accessibility. Surface the strongest ideas without bias.",
      color: "bg-purple-500",
    },
    {
      icon: FiRefreshCw,
      title: "Apply suggestions",
      body: "One-click apply to reorganize frames, balance spacing, and refine typography while keeping your voice.",
      color: "bg-green-500",
    },
  ];

  return (
    <div>
      <section
        id="how-to-use"
        className="border-t border-white/5 bg-neutral-900/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl space-y-3">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                How to use
              </motion.p>
              <motion.h2
                className="text-3xl font-semibold sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                From clutter to clarity in three steps.
              </motion.h2>
              <motion.p
                className="text-white/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Canvas AI keeps the flow simple. Upload anything, review
                collaboratively, and export with confidence.
              </motion.p>
            </div>
            <motion.a
              href="/pricing"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              View pricing
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <motion.article
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {/* Color overlay on hover */}
                <div
                  className={`absolute inset-0 ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className={`p-3 rounded-2xl ${step.color}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="h-6 w-6 text-white" />
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Step
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70 mb-4">
                    {step.body}
                  </p>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="h-1 bg-white/10 rounded-full flex-1 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full ${step.color} rounded-full`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          duration: 1,
                          delay: 1 + idx * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                    <FiCheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToUse;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiUserPlus,
  FiPlus,
  FiEdit3,
  FiZap,
  FiRefreshCw,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

const HowToUse = () => {
  const steps = [
    {
      icon: FiUserPlus,
      title: "Create Your Account",
      description:
        "Sign up with your email or social login to get started with Sketch On.",
      details: [
        "Quick registration process",
        "Secure authentication",
        "Free starter plan included",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiPlus,
      title: "Start a New Project",
      description:
        "Launch your whiteboard workspace and give your project a descriptive name.",
      details: [
        "Unlimited projects",
        "Organized workspace",
        "Easy project management",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiEdit3,
      title: "Start Building",
      description:
        "Drag and drop components to create your diagrams, wireframes, or flowcharts.",
      details: [
        "Intuitive drag & drop",
        "Rich component library",
        "Real-time collaboration",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FiZap,
      title: "Validate with AI",
      description:
        "Let our AI analyze your design for improvements and best practices.",
      details: [
        "Intelligent suggestions",
        "Design pattern recognition",
        "Accessibility checks",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FiRefreshCw,
      title: "Refactor & Perfect",
      description:
        "Apply AI suggestions and refine your design to create professional results.",
      details: [
        "One-click improvements",
        "Maintain your style",
        "Export ready designs",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Header */}
      <header className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sketch On Logo"
              className="h-9 w-9 rounded-lg"
            />
            <div>
              <p className="text-xl font-semibold">Sketch On</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                How to Use
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/60 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FiStar className="h-4 w-4" />
            Step by Step Guide
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
            From Idea to
            <span className="block text-blue-400">Professional Design</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Follow these simple steps to transform your sketches into polished,
            professional diagrams with the power of AI assistance.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-blue-500 p-0.5`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full rounded-2xl bg-neutral-900 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-white/70">{step.description}</p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + detailIndex * 0.1 }}
                      >
                        <FiCheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-white/80">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrow for next step */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <FiArrowRight className="h-4 w-4 text-white/60 lg:rotate-90" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl border border-white/10 bg-blue-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Start Creating?
          </h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their
            ideas into beautiful, professional designs with Sketch On.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <FiPlus className="h-5 w-5" />
                Create Your First Project
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg transition-all duration-300 hover:border-white/40"
              >
                View Pricing Plans
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HowToUse;

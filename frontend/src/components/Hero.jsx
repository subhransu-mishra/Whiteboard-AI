import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import {
  FiPlay,
  FiArrowRight,
  FiGrid,
  FiLayers,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "How to Use", href: "/how-to-use" },
];
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <header className="sticky top-0 z-30 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg" aria-hidden="true" />
            <img
              src="/logo.png"
              alt="Sketch On Logo"
              className="h-9 w-9 rounded-lg"
            />
            <div>
              <p className="text-xl font-semibold">Sketch On</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                by webnexity
              </p>
            </div>
          </div>

          <nav
            className="hidden items-center gap-8 text-sm text-white/80 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-full border cursor-pointer border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition hover:border-blue-500/50 hover:bg-blue-500/20"
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-3">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-9 w-9",
                      },
                    }}
                  />
                  <span className="text-sm font-medium text-white/80">
                    {user?.firstName ?? user?.username ?? ""}
                  </span>
                </div>
              </div>
            </SignedIn>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white/80 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 w-full text-left">
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link
                  to="/dashboard"
                  className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-400 transition hover:border-blue-500/50 hover:bg-blue-500/20 w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-8 w-8",
                      },
                    }}
                  />
                  <span className="text-sm font-medium text-white/80">
                    {user?.firstName ?? user?.username ?? ""}
                  </span>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </header>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-24 lg:pt-20">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI for confident whiteboards
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-white/70">
                Sketch Here and Let AI Refine Your Ideas
              </span>
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your rough sketches into polished, professional diagrams
              with AI-powered suggestions and automated refinements.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                Get Started
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/how-to-use"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 text-white px-8 py-4 text-sm font-semibold transition-all duration-300 hover:border-white/50 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 backdrop-blur-sm"
              >
                <FiPlay className="h-4 w-4" />
                See how it works
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              {
                label: "Boards clarified",
                value: 12,
                suffix: "k+",
                icon: FiGrid,
              },
              {
                label: "Avg. time saved",
                value: 18,
                suffix: "m",
                icon: FiClock,
              },
              {
                label: "Teams onboarded",
                value: 340,
                suffix: "+",
                icon: FiUsers,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between mb-3">
                  <stat.icon className="h-5 w-5 text-blue-400 transition-colors group-hover:text-blue-300" />
                  <motion.div
                    className="h-2 w-12 rounded-full bg-blue-500/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-sm uppercase tracking-wide text-white/60 mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={0.5}
                  />
                  {stat.suffix}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl opacity-70" />
          <div className="relative">
            <motion.div
              className="absolute inset-0 -z-10 rounded-3xl bg-white/5 backdrop-blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <FiLayers className="h-4 w-4" />
                  Canvas preview
                </span>
                <span className="flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  AI analysis
                </span>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-neutral-900/50 p-4">
                {[
                  {
                    name: "User Flow Diagram",
                    type: "Wireframe",
                    status: "Analyzing",
                    progress: 85,
                  },
                  {
                    name: "Component Library",
                    type: "Design System",
                    status: "Optimized",
                    progress: 100,
                  },
                  {
                    name: "Dashboard Layout",
                    type: "Interface",
                    status: "Refining",
                    progress: 65,
                  },
                  {
                    name: "Navigation Tree",
                    type: "Information Arc",
                    status: "Complete",
                    progress: 100,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-blue-500/20 text-sm font-semibold text-white/80"
                        whileHover={{ rotate: 5 }}
                      >
                        {index + 1}
                      </motion.div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-white/60">{item.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{
                            duration: 1.5,
                            delay: 0.3 + 0.1 * index,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-white/70">
                        {item.status === "Complete" && (
                          <FiCheckCircle className="h-3 w-3 text-green-400" />
                        )}
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-4 space-y-2 text-sm text-white/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="flex items-center gap-2">
                  <motion.div
                    className="h-1 w-1 rounded-full bg-blue-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Detects misalignment and inconsistent spacing automatically.
                </p>
                <p className="flex items-center gap-2">
                  <motion.div
                    className="h-1 w-1 rounded-full bg-purple-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  Recommends hierarchy, labels, and smart grouping.
                </p>
                <p className="flex items-center gap-2">
                  <motion.div
                    className="h-1 w-1 rounded-full bg-pink-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  Exports polished narratives without losing your intent.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;

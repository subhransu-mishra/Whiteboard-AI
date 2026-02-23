import React, { useState } from "react";

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "How to Use", href: "#how-to-use" },
];

const steps = [
  {
    title: "Upload your board",
    body: "Drop in sketches, photos, or PDF exports. Canvas AI auto-detects layers and cleans up your canvas.",
  },
  {
    title: "Review with AI",
    body: "Get instant critique on structure, clarity, and accessibility. Surface the strongest ideas without bias.",
  },
  {
    title: "Apply suggestions",
    body: "One-click apply to reorganize frames, balance spacing, and refine typography while keeping your voice.",
  },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Product Design Lead",
    quote:
      "Canvas AI turned messy ideation boards into a crisp narrative in minutes. Feedback feels like a thoughtful peer review.",
    rating: 5,
  },
  {
    name: "Morgan Chen",
    role: "Creative Director",
    quote:
      "A calm, confident experience. Suggestions are focused, actionable, and never get in the way of the flow.",
    rating: 5,
  },
  {
    name: "Taylor Brooks",
    role: "UX Researcher",
    quote:
      "The quality bar jumped overnight. Meetings start with aligned boards and clear next steps.",
    rating: 4,
  },
];

const Star = () => (
  <svg aria-hidden="true" className="h-4 w-4 fill-white/90" viewBox="0 0 24 24">
    <path d="M12 2.5l2.95 6.12 6.75.98-4.88 4.76 1.15 6.71L12 17.96l-6.02 3.11 1.15-6.71L2.25 9.6l6.75-.98z" />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-lg border border-white/10 bg-white/5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Canvas AI
              </p>
              <p className="text-base font-semibold">Whiteboard Intelligence</p>
            </div>
          </div>

          <nav
            className="hidden items-center gap-8 text-sm text-white/80 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
              Login
            </button>
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
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30">
                Login
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-24 lg:pt-20">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              AI for confident whiteboards
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Present a sharper whiteboard.
                <span className="block text-white/70">
                  Canvas AI reviews, refines, and guides every frame.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-white/70">
                Capture messy thinking, then let Canvas AI elevate the story.
                Clean hierarchy, precise spacing, and actionable suggestions in
                seconds.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="rounded-full border border-white/15 bg-white text-neutral-950 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Get Started
              </a>
              <a
                href="#how-to-use"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                See how it works
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Boards clarified", value: "12k+" },
                { label: "Avg. time saved", value: "18m" },
                { label: "Teams onboarded", value: "340" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4"
                >
                  <p className="text-sm uppercase tracking-wide text-white/50">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-3xl"
              aria-hidden="true"
            />
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                <span>Canvas preview</span>
                <span>AI suggestions</span>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-neutral-900 p-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-sm font-semibold text-white/80">
                        {item}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">Frame {item}</p>
                        <p className="text-xs text-white/60">
                          Spacing pass + clarity notes
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-white/70">
                      Ready
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <p>• Detects misalignment and inconsistent spacing.</p>
                <p>• Recommends hierarchy, labels, and grouping.</p>
                <p>• Exports a polished narrative without losing intent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section
          id="how-to-use"
          className="border-t border-white/5 bg-neutral-900/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  How to use
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  From clutter to clarity in three steps.
                </h2>
                <p className="text-white/70">
                  Canvas AI keeps the flow simple. Upload anything, review
                  collaboratively, and export with confidence.
                </p>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
              >
                View pricing →
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, idx) => (
                <article
                  key={step.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Step
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Pricing
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Transparent, usage-based pricing.
                </h2>
                <p className="text-white/70">
                  Start free with unlimited viewers. Upgrade when you need AI
                  refinement, version history, and export automations.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Unlimited boards and collaborators</li>
                  <li>• AI critique and auto-layout suggestions</li>
                  <li>• Secure sharing with watermark controls</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-semibold">$24</p>
                  <p className="text-sm text-white/60">per editor / month</p>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Viewers and guests are always free.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Live AI critique",
                    "Auto-layout for whiteboards",
                    "Exports to PDF & Figma",
                    "Priority support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <span
                        className="h-2 w-2 rounded-full bg-white/80"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-full border border-white/15 bg-white text-neutral-950 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90">
                  Start free trial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section
          id="reviews"
          className="border-t border-white/5 bg-neutral-900/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Reviews
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Teams trust Canvas AI.
                </h2>
                <p className="text-white/70">
                  Consistent, candid feedback that keeps projects moving.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                4.8 average rating · Real users
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full border border-white/15 bg-white/10"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-white/60">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    “{item.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} />
                    ))}
                    {Array.from({ length: 5 - item.rating }).map((_, idx) => (
                      <span key={idx} className="h-4 w-4" />
                    ))}
                    <span className="ml-2 text-xs text-white/60">
                      {item.rating}.0
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-semibold">Canvas AI</p>
            <p className="text-sm text-white/60">
              A thoughtful whiteboard canvas with AI review and guidance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a
              href="mailto:hello@canvas.ai"
              className="transition hover:text-white"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://www.twitter.com"
              className="transition hover:text-white"
            >
              Twitter
            </a>
            <span className="text-white/50">
              © {new Date().getFullYear()} Canvas AI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from "react";

const HowToUse = () => {
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

  return (
    <div>
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
    </div>
  );
};

export default HowToUse;

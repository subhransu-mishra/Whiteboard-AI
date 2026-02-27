import React from "react";

const Star = () => (
  <svg aria-hidden="true" className="h-4 w-4 fill-white/90" viewBox="0 0 24 24">
    <path d="M12 2.5l2.95 6.12 6.75.98-4.88 4.76 1.15 6.71L12 17.96l-6.02 3.11 1.15-6.71L2.25 9.6l6.75-.98z" />
  </svg>
);
const Reviews = () => {
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

  return (
    <div>
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
    </div>
  );
};

export default Reviews;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

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
            <div
              className="h-9 w-9 rounded-lg border border-white/10 bg-white/5"
              aria-hidden="true"
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
        <div className="space-y-8">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            AI for confident whiteboards
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white/70">
                Sketch Here and Let AI Refine Your Ideas
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-white/70"></p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/canvas"
              className="rounded-full border border-white/15 bg-white text-neutral-950 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Get Started
            </Link>
            <Link
              to="/how-to-use"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              See how it works
            </Link>
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
    </div>
  );
};

export default Hero;

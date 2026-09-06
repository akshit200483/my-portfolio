import { useState, useEffect } from "react";
import { site, heroButtons } from "../data";
import RippleButton from "./RippleButton";

export default function Hero() {
  const words = site.rotatingWords;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Animated tech grid */}
      <div className="tech-grid absolute inset-0 -z-10" />
      {/* Color blobs */}
      <div
        className="float absolute -left-20 top-32 -z-10 h-72 w-72 rounded-full opacity-30 blur-[100px]"
        style={{ background: "var(--c1)" }}
      />
      <div
        className="float absolute -right-10 bottom-24 -z-10 h-80 w-80 rounded-full opacity-25 blur-[110px]"
        style={{ background: "var(--c3)", animationDelay: "2s" }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <span
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gray-200"
          style={{ animation: "fadeUp .6s ease both" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </span>

        <h1
          className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl"
          style={{ animation: "fadeUp .7s ease both", animationDelay: ".1s" }}
        >
          I craft digital
          <br />
          <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
            {words.map((w, idx) => (
              <span
                key={w}
                className="grad-text absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                style={{
                  animation: idx === i ? "wordIn 2.6s ease both" : "none",
                  opacity: idx === i ? 1 : 0,
                }}
              >
                {w}
              </span>
            ))}
            {/* invisible sizer keeps the line height */}
            <span className="invisible whitespace-nowrap">{words[i]}</span>
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          style={{ animation: "fadeUp .8s ease both", animationDelay: ".2s" }}
        >
          {site.tagline}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fadeUp .9s ease both", animationDelay: ".3s" }}
        >
          <RippleButton from="--c1" to="--c3" href={heroButtons.primary.href}>
            {heroButtons.primary.label}
          </RippleButton>
          <RippleButton from="--c2" to="--c5" href={heroButtons.secondary.href}>
            {heroButtons.secondary.label}
          </RippleButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-6 justify-center rounded-full border-2 border-white/20 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}

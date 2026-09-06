import { useState, useEffect } from "react";
import { site } from "../data";
import RippleButton from "./RippleButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 font-bold">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white"
            style={{ backgroundImage: "linear-gradient(135deg,var(--c1),var(--c3))" }}
          >
            {site.logo}
          </span>
          <span className="text-white">{site.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundImage: "linear-gradient(90deg,var(--c2),var(--c3))" }}
              />
            </a>
          ))}
          <RippleButton from="--c1" to="--c2" href="#contact" className="!px-6 !py-2 text-sm">
            Hire Me
          </RippleButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l14 14M20 6L6 20" strokeLinecap="round" />
            ) : (
              <path d="M4 8h18M4 14h18M4 20h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-medium text-gray-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full py-2.5 text-center text-sm font-semibold text-white"
              style={{ backgroundImage: "linear-gradient(120deg,var(--c1),var(--c2))" }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

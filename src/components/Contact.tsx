import { contact, socials } from "../data";
import RippleButton from "./RippleButton";

const linkColors = ["--c1", "--c2", "--c3", "--c5", "--c6"];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16">
          <div
            className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-30 blur-[90px]"
            style={{ background: "var(--c2)" }}
          />
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            {contact.heading.split(" ").map((w, i) =>
              i === contact.heading.split(" ").length - 1 ? (
                <span key={i} className="grad-text"> {w}</span>
              ) : (
                <span key={i}>{i === 0 ? "" : " "}{w}</span>
              )
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">{contact.text}</p>

          <div className="mt-8 flex justify-center">
            <RippleButton from="--c1" to="--c2" href={`mailto:${contact.email}`}>
              {contact.email}
            </RippleButton>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {socials.map((s, idx) => {
              const c = linkColors[idx % linkColors.length];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-full px-5 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `var(${c})`;
                    e.currentTarget.style.boxShadow = `0 8px 24px -8px var(${c})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

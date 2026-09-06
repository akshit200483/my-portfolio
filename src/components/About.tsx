import { about } from "../data";

const statColors = ["--c1", "--c2", "--c3", "--c5"];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-black text-white">
              About <span className="grad-text">Me</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-400">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s, idx) => (
              <div
                key={s.label}
                className="glass group rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div
                  className="text-4xl font-black"
                  style={{
                    backgroundImage: `linear-gradient(120deg, var(${
                      statColors[idx % statColors.length]
                    }), var(--c4))`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-medium tracking-wide text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

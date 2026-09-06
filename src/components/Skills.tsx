import { skills } from "../data";

const palette = ["--c1", "--c2", "--c3", "--c4", "--c5", "--c6"];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-black text-white">
          Skills & <span className="grad-text">Stack</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          The tools I reach for to bring ideas to life.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => {
            const c = palette[idx % palette.length];
            return (
              <span
                key={skill}
                className="glass group relative cursor-default rounded-full px-5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                style={{ ["--hue" as string]: `var(${c})` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `var(${c})`;
                  e.currentTarget.style.boxShadow = `0 8px 24px -8px var(${c})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

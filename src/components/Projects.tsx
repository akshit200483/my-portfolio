import { useRef } from "react";
import { projects } from "../data";

const gradients = [
  ["--c1", "--c2"],
  ["--c3", "--c4"],
  ["--c2", "--c5"],
  ["--c6", "--c3"],
];

function Card({
  p,
  colors,
}: {
  p: (typeof projects)[number];
  colors: string[];
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isImage = p.image.startsWith("http");

  // 3D tilt following the mouse
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-6px)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={p.link}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="glass group relative overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-200 will-change-transform hover:shadow-2xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), var(${colors[0]}), transparent 45%)`,
          opacity: 0.14,
        }}
      />
      <div
        className="flex h-44 items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(135deg, var(${colors[0]}), var(${colors[1]}))` }}
      >
        {isImage ? (
          <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-125">
            {p.image}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-black text-white">
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            A selection of things I've built recently.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <Card key={p.title} p={p} colors={gradients[idx % gradients.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

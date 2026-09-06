/* =========================================================================
   ⚡ EDIT EVERYTHING HERE ⚡
   -------------------------------------------------------------------------
   This is the ONLY file you need to touch to update your portfolio.
   Change text, links, projects — save — done. No code editing needed.
   ========================================================================= */

export const site = {
  name: "Alex Carter",
  role: "Creative Developer",
  // Words that rotate/animate in the hero (add or remove freely)
  rotatingWords: ["Web Apps", "Interfaces", "Experiences", "Products"],
  tagline:
    "I build fast, futuristic digital products where clean engineering meets bold design.",
  logo: "AC",
};

export const heroButtons = {
  primary: { label: "Explore Work", href: "#projects" },
  secondary: { label: "Contact Me", href: "#contact" },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a developer obsessed with the details — from buttery-smooth animations to millisecond load times. I turn ambitious ideas into products people love to use.",
    "6+ years shipping across the full stack, with a soft spot for beautiful front-end engineering.",
  ],
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "50+", label: "Projects Shipped" },
    { value: "30+", label: "Happy Clients" },
    { value: "12", label: "Awards Won" },
  ],
};

export const skills: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Three.js",
  "GraphQL",
  "Framer Motion",
  "PostgreSQL",
  "Docker",
  "Figma",
  "WebGL",
];

/* For `image`: use an emoji OR an image URL that starts with http */
export const projects = [
  {
    title: "Nova Dashboard",
    description: "Real-time analytics with customizable widgets and live charts.",
    image: "📊",
    tags: ["React", "TypeScript", "D3"],
    link: "#",
  },
  {
    title: "Bloom Store",
    description: "A modern headless e-commerce experience with instant checkout.",
    image: "🛍️",
    tags: ["Next.js", "Stripe", "CMS"],
    link: "#",
  },
  {
    title: "Pulse Chat",
    description: "Real-time messaging with threads, reactions, and presence.",
    image: "💬",
    tags: ["Node.js", "WebSocket", "React"],
    link: "#",
  },
  {
    title: "Orbit 3D",
    description: "An interactive WebGL landing page with particle physics.",
    image: "🪐",
    tags: ["Three.js", "WebGL", "GSAP"],
    link: "#",
  },
];

export const contact = {
  heading: "Let's Build Something",
  text: "Got a project or just want to chat? My inbox is always open.",
  email: "hello@alexcarter.dev",
};

export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

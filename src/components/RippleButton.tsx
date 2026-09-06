import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  /** gradient uses two CSS vars, e.g. ["--c1","--c2"] */
  from: string;
  to: string;
  className?: string;
};

/**
 * A button/link with a click "ripple" effect and a colored gradient.
 * Each place we use it, we pass a DIFFERENT color pair so every button
 * has its own beautiful color.
 */
export default function RippleButton({
  children,
  href,
  onClick,
  from,
  to,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const makeRipple = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(span);
    setTimeout(() => span.remove(), 700);
  };

  const style = {
    backgroundImage: `linear-gradient(120deg, var(${from}), var(${to}))`,
    boxShadow: `0 8px 30px -8px var(${from})`,
  } as React.CSSProperties;

  const classes = `relative overflow-hidden rounded-full px-8 py-3.5 font-semibold text-white transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    makeRipple(e);
    onClick?.();
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={handleClick}
        className={classes}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={handleClick}
      className={classes}
      style={style}
    >
      {children}
    </button>
  );
}

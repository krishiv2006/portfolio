import { motion } from "framer-motion";

export default function EditorWindow({
  filename,
  statusLabel,
  statusDot,
  children,
  className = "",
  animate = true,
}) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`rounded-lg border border-line bg-panel overflow-hidden shadow-xl shadow-black/20 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-bg-soft select-none">
        <span className="w-2.5 h-2.5 rounded-full bg-rose/70 transition-colors hover:bg-rose" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber/70 transition-colors hover:bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal/70 transition-colors hover:bg-teal" />
        <span className="ml-3 font-mono text-xs text-ink-dim">{filename}</span>
        {statusLabel && (
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-ink-dim">
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot || "bg-teal"}`} />
            {statusLabel}
          </span>
        )}
      </div>
      {/* Content */}
      {children}
    </Wrapper>
  );
}

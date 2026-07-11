import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";

const LINES = [
  { cmd: "whoami", out: profile.name },
  { cmd: "cat role.txt", out: profile.role + " · B.Tech IT, Charusat University" },
  { cmd: "cat mission.txt", out: profile.tagline },
];

const TYPE_SPEED = 32;
const PAUSE_AFTER = 350;

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [outputVisible, setOutputVisible] = useState([]);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex].cmd;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setOutputVisible((prev) => [...prev, lineIndex]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  /* Auto-scroll terminal */
  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lineIndex, charIndex]);

  const done = lineIndex >= LINES.length;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-14 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--color-amber) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left — Text & Terminal */}
        <div className="flex flex-col gap-10">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="font-mono text-xs text-amber tracking-wide">
              ~/portfolio $ status: open to opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-ink"
          >
            {profile.name.split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-amber via-amber to-teal bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
                {i === 0 && <>&nbsp;</>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg text-ink-dim max-w-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group bg-amber text-bg font-mono text-sm px-6 py-3 rounded-md font-medium hover:brightness-110 transition flex items-center gap-2"
            >
              <Sparkles
                size={14}
                className="group-hover:rotate-12 transition-transform"
              />
              view projects
            </a>
            <a
              href="#contact"
              className="border border-line text-ink font-mono text-sm px-6 py-3 rounded-md hover:border-amber/50 hover:text-amber transition flex items-center gap-2"
            >
              get in touch
              <ArrowDown size={14} />
            </a>
            </motion.div>
          </div>

          {/* Terminal moved below text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="rounded-lg border border-line bg-panel overflow-hidden shadow-2xl shadow-black/40 glow-amber mt-2 lg:max-w-[480px]"
          >
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-bg-soft select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-rose/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
            <span className="ml-3 font-mono text-xs text-ink-dim">
              intro.sh
            </span>
            <span className="ml-auto font-mono text-[10px] text-ink-dim/50">
              bash
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="p-5 font-mono text-sm space-y-4 min-h-[240px] max-h-[320px] overflow-y-auto"
          >
            {LINES.map((line, i) => {
              if (i > lineIndex) return null;
              const isCurrent = i === lineIndex;
              const typed = isCurrent ? line.cmd.slice(0, charIndex) : line.cmd;

              return (
                <div key={i}>
                  <div className="flex items-center gap-0 text-ink-dim">
                    <span className="text-teal">➜</span>
                    <span className="text-amber ml-1">~</span>
                    <span className="ml-2">{typed}</span>
                    {isCurrent && !done && (
                      <span className="animate-cursor text-amber ml-0.5 font-bold">
                        ▌
                      </span>
                    )}
                  </div>
                  {outputVisible.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-ink pl-5 mt-1.5 leading-relaxed"
                    >
                      {line.out}
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Final cursor after all lines done */}
            {done && (
              <div className="flex items-center gap-0 text-ink-dim">
                <span className="text-teal">➜</span>
                <span className="text-amber ml-1">~</span>
                <span className="animate-cursor text-amber ml-2 font-bold">
                  ▌
                </span>
              </div>
            )}
          </div>
        </motion.div>
        </div>

        {/* Right — Big Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-lg border border-line bg-panel overflow-hidden shadow-2xl shadow-amber/5 aspect-[3/4] sm:aspect-square lg:aspect-[4/5] object-cover"
        >
          {/* Mac-style Window Chrome */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-black/30 backdrop-blur-md select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-rose/90 shadow-[0_0_8px_var(--color-rose)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber/90 shadow-[0_0_8px_var(--color-amber)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal/90 shadow-[0_0_8px_var(--color-teal)]" />
          </div>

          <img
            src="/KrishivModiHERO.jpeg"
            alt="Krishiv Modi"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-lg mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-ink-dim/50 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-ink-dim/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

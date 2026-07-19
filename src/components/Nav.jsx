import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "about.md" },
  { to: "/projects", label: "projects/" },
  { to: "/skills", label: "skills.json" },
  { to: "/education", label: "education.md" },
  { to: "/contact", label: "contact.sh" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* close mobile menu on resize */
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-bg/90 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center h-14 px-4 gap-1">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-mono text-sm text-amber mr-6 shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-teal group-hover:scale-125 transition-transform" />
          <span className="group-hover:text-ink transition-colors">km.dev</span>
        </NavLink>

        {/* Desktop tabs */}
        <div className="hidden md:flex items-stretch h-full">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-mono text-xs px-4 h-full flex items-center transition-colors ${
                  isActive
                    ? "text-ink bg-panel"
                    : "text-ink-dim hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* left / right tab borders */}
                  <span
                    className={`absolute inset-y-0 left-0 w-px transition-colors ${
                      isActive ? "bg-line" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`absolute inset-y-0 right-0 w-px transition-colors ${
                      isActive ? "bg-line" : "bg-transparent"
                    }`}
                  />
                  {/* active underline accent */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  {l.label}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Resume download */}
        <a
          href="/Krishiv_Modi_Resume.pdf"
          download
          className="hidden md:flex items-center gap-2 font-mono text-xs border border-line rounded-md px-3.5 py-1.5 text-ink-dim hover:text-amber hover:border-amber/50 transition-colors"
        >
          <Download size={13} />
          resume.pdf
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink-dim hover:text-ink transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-line bg-bg-soft"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-mono text-sm py-2.5 px-3 rounded-md transition-colors ${
                      isActive
                        ? "text-amber bg-amber-soft"
                        : "text-ink-dim hover:text-ink hover:bg-panel"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="/Krishiv_Modi_Resume.pdf"
                download
                className="font-mono text-sm py-2.5 px-3 rounded-md text-ink-dim hover:text-amber flex items-center gap-2 mt-1 border-t border-line pt-4"
              >
                <Download size={13} />
                resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

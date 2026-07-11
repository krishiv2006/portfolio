import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-28 scroll-mt-14">
      <SectionLabel file="skills.json" title="Toolbox" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {entries.map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="border border-line rounded-lg bg-panel p-6 hover:border-line/80 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <p className="font-mono text-xs text-teal">{category}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-ink-dim border border-line rounded-md px-2.5 py-1.5 hover:text-amber hover:border-amber/40 hover:bg-amber-soft transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { education, certifications } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-4 py-28 scroll-mt-14"
    >
      <SectionLabel file="education.md" title="Education & Certifications" />

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-line space-y-10">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Dot */}
              <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-amber ring-4 ring-bg border-2 border-amber group-hover:scale-125 transition-transform" />

              <p className="font-mono text-xs text-ink-dim mb-1.5 tracking-wide">
                {e.year}
              </p>
              <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                {e.degree}
              </h3>
              <p className="text-ink-dim text-sm mt-0.5 flex items-center gap-1.5">
                <GraduationCap size={13} className="text-ink-dim/60 shrink-0" />
                {e.institute}
              </p>
              <p className="text-teal text-sm font-mono mt-2">{e.meta}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="border border-line rounded-lg bg-panel p-6 h-fit self-start"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <p className="font-mono text-xs text-ink-dim">certifications</p>
          </div>

          <div className="space-y-4">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-3 group cursor-default"
              >
                <div className="mt-0.5 shrink-0 w-9 h-9 rounded-lg bg-amber-soft border border-amber/30 flex items-center justify-center group-hover:border-amber/60 transition-colors">
                  <Award size={16} className="text-amber" />
                </div>
                <div>
                  <p className="text-ink text-sm font-medium leading-snug group-hover:text-amber transition-colors">
                    {c.name}
                  </p>
                  <p className="text-ink-dim text-xs font-mono mt-1">
                    {c.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

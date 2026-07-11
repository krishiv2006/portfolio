import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

const facts = [
  { key: "degree", value: "B.Tech, IT" },
  { key: "university", value: "Charusat" },
  { key: "grad_year", value: "2028" },
  { key: "location", value: profile.location },
  { key: "focus", value: "Full-Stack Dev" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-28 scroll-mt-14">
      <SectionLabel file="about.md" title="About" />

      <div className="grid md:grid-cols-3 gap-10">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-5 text-ink-dim leading-relaxed"
        >
          <p>
            I'm an Information Technology undergraduate at Charusat University who
            likes taking a product from an{" "}
            <span className="text-ink font-medium">empty repo to a deployed URL</span>.
            Most of my recent work has centered on decoupled full-stack
            architecture — React front ends talking to lean Node/Express or PHP
            APIs, deployed across Vercel and Render.
          </p>
          <p>
            I gravitate toward projects with a real interaction problem to solve:
            streaming audio without lag, parsing a resume for skill gaps, or
            classifying a location as a heritage site. I care about the UI being{" "}
            <span className="text-ink font-medium">fast and honest about its state</span>{" "}
            — loading, empty, and error included.
          </p>
          <p>
            Outside of coursework, I'm{" "}
            <span className="text-amber font-medium">
              Microsoft Certified in Azure AI Fundamentals (AI-900)
            </span>{" "}
            and spend most of my free time shipping side projects on GitHub.
          </p>
        </motion.div>

        {/* Quick facts card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-line rounded-lg bg-panel p-5 font-mono text-sm self-start glow-teal"
        >
          <p className="text-ink-dim mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            quick_facts.json
          </p>
          <dl className="space-y-3">
            {facts.map((f, i) => (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                className="flex justify-between gap-3 border-b border-line/50 pb-2 last:border-0 last:pb-0"
              >
                <dt className="text-ink-dim">{f.key}</dt>
                <dd className="text-ink text-right">{f.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

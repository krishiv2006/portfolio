import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { GithubIcon } from "./BrandIcons";
import EditorWindow from "./EditorWindow";
import SectionLabel from "./SectionLabel";

const colorMap = {
  amber: {
    tag: "text-amber border-amber/40 bg-amber-soft",
  },
  teal: {
    tag: "text-teal border-teal/40 bg-teal-soft",
  },
  rose: {
    tag: "text-rose border-rose/40 bg-rose-soft",
  },
};

const statusMap = {
  live: { label: "live", dot: "bg-teal" },
  shipped: { label: "shipped", dot: "bg-amber" },
  "in-progress": { label: "in progress", dot: "bg-rose" },
};

export default function Projects() {
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/krishiv2006/repos?sort=updated&per_page=10")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out main projects by matching some known names
          const mainRepoNames = ["music_player2", "resume-analyzer", "stonestories", "supply-chain-demand-forecasting", "music_player"];
          const recent = data.filter(r => !r.fork && !mainRepoNames.includes(r.name.toLowerCase()));
          setGithubRepos(recent.slice(0, 4));
        }
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err));
  }, []);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-28 scroll-mt-14"
    >
      <SectionLabel
        file="projects/"
        title="Selected Work"
        subtitle="Three builds, three different problems — a streaming media player, a skills-gap analyzer, and a GenAI classifier for heritage sites."
      />

      <div className="space-y-8">
        {projects.map((p, i) => {
          const status = statusMap[p.status];
          const color = colorMap[p.color];

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <EditorWindow
                filename={p.file}
                statusLabel={status.label}
                statusDot={status.dot}
                animate={false}
                className="gradient-border hover:border-line/80 transition-colors"
              >
                <div className="p-6 sm:p-8 grid md:grid-cols-[1fr_auto] gap-8">
                  <div>
                    {/* Name + tag */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                        {p.name}
                      </h3>
                      <span
                        className={`font-mono text-[11px] px-2.5 py-0.5 rounded border ${color.tag}`}
                      >
                        {p.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-ink-dim leading-relaxed mb-5 max-w-2xl">
                      {p.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-6">
                      {p.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm text-ink-dim flex gap-2.5 leading-relaxed"
                        >
                          <span className="text-amber font-mono shrink-0 mt-0.5">
                            ›
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] text-ink-dim border border-line rounded-md px-2.5 py-1 hover:text-amber hover:border-amber/40 transition-colors cursor-default"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex md:flex-col gap-3 md:w-36 shrink-0 self-start">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-line rounded-md px-4 py-2.5 font-mono text-xs text-ink-dim hover:text-amber hover:border-amber/50 transition-colors"
                    >
                      <GithubIcon size={14} />
                      source
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-amber text-bg rounded-md px-4 py-2.5 font-mono text-xs font-medium hover:brightness-110 transition"
                      >
                        live demo
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </EditorWindow>
            </motion.div>
          );
        })}
      </div>

      {githubRepos.length > 0 && (
        <div className="mt-28">
          <SectionLabel
            file="github_live.sh"
            title="Latest Open Source"
            subtitle="Automatically synced from my GitHub profile when I push new code."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {githubRepos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="block border border-line rounded-lg bg-panel p-6 hover:border-amber/50 transition-colors group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <GithubIcon size={20} className="text-ink-dim shrink-0 mt-0.5 group-hover:text-amber transition-colors" />
                  <h4 className="font-display text-lg font-medium text-ink group-hover:text-amber transition-colors flex-1">
                    {repo.name}
                  </h4>
                </div>
                <p className="text-sm text-ink-dim line-clamp-2 mb-4 h-10">
                  {repo.description || "Experimental lab or codebase with no description provided yet."}
                </p>
                <div className="flex items-center gap-4 font-mono text-xs text-ink-dim">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal group-hover:scale-125 transition-transform" />
                      {repo.language}
                    </span>
                  )}
                  <span>★ {repo.stargazers_count}</span>
                  <span className="ml-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-amber">
                    explore <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

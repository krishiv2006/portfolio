import { motion } from "framer-motion";
import { Mail, Phone, Heart } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import EditorWindow from "./EditorWindow";
import SectionLabel from "./SectionLabel";

const contactLinks = [
  {
    icon: Mail,
    label: profile.email,
    href: `mailto:${profile.email}`,
    color: "hover:text-amber hover:border-amber/40",
  },
  {
    icon: Phone,
    label: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    color: "hover:text-teal hover:border-teal/40",
  },
  {
    icon: GithubIcon,
    label: "krishiv2006",
    href: profile.github,
    color: "hover:text-ink hover:border-ink/30",
  },
  {
    icon: LinkedinIcon,
    label: "krishiv-modi",
    href: profile.linkedin,
    color: "hover:text-[#0a66c2] hover:border-[#0a66c2]/30",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-28 scroll-mt-14"
    >
      <SectionLabel
        file="contact.sh"
        title="Let's build something"
        subtitle="Open to internships, freelance builds, and collaborations. The fastest way to reach me is email."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <EditorWindow filename="contact.sh" animate={false}>
          <div className="p-6 sm:p-8">
            {/* Terminal prompt style */}
            <div className="font-mono text-xs text-ink-dim mb-6 flex items-center gap-2">
              <span className="text-teal">➜</span>
              <span className="text-amber">~</span>
              <span>./reach-out.sh</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {contactLinks.map(({ icon: Icon, label, href, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                  className={`flex items-center gap-3 border border-line rounded-lg px-5 py-4 font-mono text-sm text-ink-dim transition-all duration-200 ${color} group`}
                >
                  <span className="w-8 h-8 rounded-md bg-bg-soft border border-line flex items-center justify-center group-hover:border-current/30 transition-colors shrink-0">
                    <Icon size={15} />
                  </span>
                  <span className="truncate">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </EditorWindow>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-ink-dim text-xs font-mono mt-20 pb-6 flex items-center justify-center gap-1.5"
      >
        built with{" "}
        <Heart size={11} className="text-rose fill-rose inline" /> by{" "}
        {profile.name} · © {new Date().getFullYear()}
      </motion.p>
    </section>
  );
}

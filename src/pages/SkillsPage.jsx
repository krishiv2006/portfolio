import { motion } from "framer-motion";
import Skills from "../components/Skills";

export default function SkillsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="pt-14"
    >
      <Skills />
    </motion.main>
  );
}

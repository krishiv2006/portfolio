import { motion } from "framer-motion";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="pt-14"
    >
      <Projects />
    </motion.main>
  );
}

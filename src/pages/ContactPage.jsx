import { motion } from "framer-motion";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="pt-14"
    >
      <Contact />
    </motion.main>
  );
}

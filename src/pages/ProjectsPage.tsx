import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-charcoal min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Selected Works</h1>
        <p className="text-xl text-warm-grey max-w-3xl">
          A showcase of our most ambitious and successful projects across the globe.
        </p>
      </div>
      <Projects />
      <Footer />
    </motion.div>
  );
}

import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Team from "../components/Team";
import Stats from "../components/Stats";
import Clients from "../components/Clients";

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-charcoal min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Our Legacy</h1>
        <p className="text-xl text-warm-grey max-w-3xl">
          Founded on the principles of integrity, innovation, and excellence, Apex has grown from a boutique consultancy to a global leader in construction management.
        </p>
      </div>
      <About />
      <Stats />
      <Team />
      <Clients />
      <Footer />
    </motion.div>
  );
}

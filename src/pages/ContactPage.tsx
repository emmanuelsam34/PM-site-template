import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-charcoal min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Get in Touch</h1>
        <p className="text-xl text-warm-grey max-w-3xl">
          Ready to start your next project? We're here to help you build your vision.
        </p>
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
}

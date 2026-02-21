import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 bg-gold text-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to build the future of Nigeria together?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium opacity-80">
            Partner with Apex for world-class project management and construction excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

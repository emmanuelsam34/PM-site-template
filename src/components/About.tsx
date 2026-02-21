import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/assets/who-we-are.jpg"
                alt="Executive Project Manager"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-charcoal-light p-8 rounded-xl border border-white/10 shadow-2xl max-w-xs hidden md:block"
            >
              <p className="font-display text-4xl font-bold text-gold mb-2">25+</p>
              <p className="text-sm text-warm-grey uppercase tracking-wider">Years of Excellence in Construction</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Building Nigeria's future with <span className="text-white/40">precision & integrity.</span>
              </h3>
              <p className="text-warm-grey text-lg leading-relaxed">
                Apex is a premier indigenous Project Management, Construction, and Consultancy firm. We bridge the gap between international standards and local expertise, delivering world-class projects across Lagos, Abuja, and beyond. Whether it's a high-rise in Eko Atlantic or infrastructure in the Niger Delta, we manage the risk so you can realize the vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                "Sustainable Innovation",
                "Global Standards",
                "Precision Engineering",
                "Transparent Processes"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  <span className="text-off-white font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="#services" className="text-white border-b border-gold pb-1 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                Discover Our Philosophy
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

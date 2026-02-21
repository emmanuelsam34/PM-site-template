import { motion } from "motion/react";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "150+", label: "Projects Completed" },
  { value: "6", label: "Offices Across Africa" },
  { value: "₦500B+", label: "Project Value Delivered" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-warm-grey uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

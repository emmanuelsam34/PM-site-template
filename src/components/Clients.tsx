import { motion } from "motion/react";

const clients = [
  "Global Structures", "Nexus Corp", "Vertex Holdings", "EcoSystems", "Urban Flow", "Horizon Group", "Pinnacle"
];

export default function Clients() {
  return (
    <section className="py-12 bg-charcoal border-y border-white/5 overflow-hidden relative z-10">
      <div className="flex items-center">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-16 pr-16"
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-display font-bold text-white/20 uppercase tracking-tighter hover:text-gold transition-colors duration-300 cursor-default"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

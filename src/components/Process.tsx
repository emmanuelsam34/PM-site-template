import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin by understanding your vision, requirements, and constraints through deep-dive sessions.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Our architects and engineers draft comprehensive blueprints, ensuring feasibility and compliance.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Deployment of skilled teams and machinery. We manage the build with rigorous quality control.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Final inspections, handover, and post-project support to ensure operational excellence.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} id="process" className="py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold uppercase tracking-widest text-sm mb-4">How We Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">The Apex Methodology</h3>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
          
          {/* Animated Vertical Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gold hidden md:block origin-top"
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 md:px-12">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start text-left" : "md:items-end md:text-right"}`}>
                    <span className="text-6xl font-display font-bold text-white/5 mb-4 block">
                      {step.number}
                    </span>
                    <h4 className="text-2xl font-bold mb-4 text-white">{step.title}</h4>
                    <p className="text-warm-grey leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-8">
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: "#1a1a1a" }}
                    whileInView={{ scale: 1, backgroundColor: "#D4AF37" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-3 h-3 rounded-full ring-4 ring-charcoal" 
                  />
                </div>

                {/* Empty Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

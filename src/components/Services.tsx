import { motion } from "motion/react";
import { Ruler, HardHat, Building2, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Project Management",
    description: "From inception to handover, we ensure your project is delivered on time, within budget, and to the highest quality standards, navigating the complexities of the Nigerian construction landscape.",
    icon: Briefcase,
    colSpan: "md:col-span-2",
  },
  {
    title: "Construction",
    description: "We deliver high-quality residential, commercial, and industrial builds using modern methodologies and skilled local workforce.",
    icon: HardHat,
    colSpan: "md:col-span-1",
  },
  {
    title: "Consultancy & Advisory",
    description: "Expert feasibility studies, cost management, and regulatory compliance advice for investors and developers in Nigeria.",
    icon: Ruler,
    colSpan: "md:col-span-1",
  },
  {
    title: "Infrastructure Development",
    description: "Partnering with government and private sectors to build roads, bridges, and public utilities that drive economic growth.",
    icon: Building2,
    colSpan: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">
              Comprehensive solutions for <br />
              <span className="text-white/40">complex environments.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <a href="#contact" className="px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-charcoal transition-all duration-300">
              Get a Quote
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-charcoal border border-white/5 hover:border-gold/30 transition-colors duration-500 overflow-hidden ${service.colSpan}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="text-gold w-6 h-6" />
              </div>
              
              <div className="mb-8 p-4 bg-white/5 rounded-full w-fit group-hover:bg-gold/10 transition-colors duration-500">
                <service.icon className="w-8 h-8 text-white group-hover:text-gold transition-colors duration-500" />
              </div>
              
              <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
              <p className="text-warm-grey group-hover:text-off-white transition-colors duration-300">
                {service.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

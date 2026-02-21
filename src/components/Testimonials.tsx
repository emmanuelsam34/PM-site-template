import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Apex transformed our vision into a landmark that defines the city skyline. Their precision is unmatched.",
    author: "Elena Vance",
    role: "CEO, Vance Properties",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2815d22?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "A masterclass in project management. They delivered a complex infrastructure project 3 months ahead of schedule.",
    author: "Marcus Thorne",
    role: "Director of Urban Planning",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop"
  },
  {
    quote: "The level of detail and engineering excellence Apex brings to the table is simply world-class.",
    author: "Sarah Jenkins",
    role: "Lead Architect, Horizon Group",
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Trusted by Visionaries</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal p-8 rounded-2xl border border-white/5 relative group hover:border-gold/30 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" />
              <p className="text-warm-grey text-lg mb-8 leading-relaxed">"{item.quote}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold font-display">{item.author}</h4>
                  <p className="text-sm text-gold/80">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

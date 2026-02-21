import { motion } from "motion/react";

const team = [
  {
    name: "Marcus Sterling",
    role: "Founder & Principal Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Victoria Banks",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    name: "James Okon",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Sofia Diallo",
    role: "Lead Sustainability Consultant",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1886&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Meet the Architects of <br/> the Future</h3>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="text-white border-b border-gold pb-1 hover:text-gold transition-colors">
              Join Our Team →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-charcoal-light">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-1">{member.name}</h4>
              <p className="text-sm text-gold uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

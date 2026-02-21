import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Let's build something <br />
              <span className="text-white/40">extraordinary.</span>
            </h3>
            <p className="text-warm-grey text-lg mb-12 max-w-md">
              Ready to start your next project? Contact us for a consultation or to learn more about our services.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-white/40 uppercase tracking-widest mb-1">Headquarters</p>
                <p className="text-xl">15 Adeola Odeku Street, Victoria Island, Lagos</p>
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase tracking-widest mb-1">Contact</p>
                <p className="text-xl">hello@apexconstruct.ng</p>
                <p className="text-xl">+234 800 123 4567</p>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/5 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-warm-grey uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-warm-grey uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-warm-grey uppercase tracking-wider">Project Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors">
                <option>Commercial Construction</option>
                <option>Residential Development</option>
                <option>Project Management</option>
                <option>Consultancy</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-warm-grey uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-charcoal font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

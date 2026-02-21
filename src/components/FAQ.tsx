import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is your project management methodology?",
    answer: "We employ a hybrid approach combining Agile and Waterfall methodologies, tailored to the specific needs of the Nigerian construction environment. This ensures flexibility while maintaining strict adherence to timelines and budgets."
  },
  {
    question: "Do you handle regulatory approvals in Nigeria?",
    answer: "Yes, we have an in-house team dedicated to navigating the regulatory landscape. We handle all permits, environmental impact assessments, and government approvals required for your project."
  },
  {
    question: "How do you ensure quality control with local materials?",
    answer: "We have a rigorous material testing protocol. Our procurement team sources from verified local suppliers and we conduct independent lab tests to ensure all materials meet international ASTM and BS standards."
  },
  {
    question: "Can you manage projects outside of Lagos and Abuja?",
    answer: "Absolutely. We have a nationwide presence with active projects in Port Harcourt, Kano, Enugu, and other major cities. Our logistics network ensures seamless project delivery across Nigeria."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-charcoal relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Expertise You Can Trust</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gold" />
                ) : (
                  <Plus className="w-5 h-5 text-white/50" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-warm-grey leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

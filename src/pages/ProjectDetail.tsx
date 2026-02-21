import { motion } from "motion/react";
import { ArrowRight, Calendar, MapPin, Ruler } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = {
  "eko-atlantic-tower": {
    title: "Eko Atlantic Tower",
    location: "Lagos, Nigeria",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "A landmark 35-story mixed-use skyscraper in the heart of Eko Atlantic City. This project represents the pinnacle of modern engineering in West Africa, featuring Grade A office spaces, luxury apartments, and a retail podium.",
    stats: [
      { label: "Height", value: "145m" },
      { label: "Floors", value: "35" },
      { label: "Completion", value: "2025" },
      { label: "Value", value: "₦45B" }
    ],
    challenge: "Constructing a high-rise on reclaimed land required innovative foundation engineering techniques to ensure stability and longevity against coastal elements.",
    solution: "We utilized deep pile foundations extending 60 meters into the bedrock, combined with a high-performance concrete mix designed to resist saline corrosion."
  },
  "maitama-heights": {
    title: "Maitama Heights",
    location: "Abuja, Nigeria",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury residential complex redefining urban living in Abuja's most exclusive district. Maitama Heights offers smart-home integrated apartments with panoramic views of the capital.",
    stats: [
      { label: "Units", value: "120" },
      { label: "Area", value: "15,000 sqm" },
      { label: "Completion", value: "2024" },
      { label: "Value", value: "₦12B" }
    ],
    challenge: "Integrating modern smart home technology into the structural design without compromising the aesthetic appeal or structural integrity.",
    solution: "A modular design approach allowed for seamless integration of IoT infrastructure, while a central management system ensures energy efficiency."
  },
  "lekki-innovation-hub": {
    title: "Lekki Innovation Hub",
    location: "Lagos, Nigeria",
    category: "Sustainable",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "A sustainable tech campus designed to foster collaboration and innovation. The hub features open-plan workspaces, green roofs, and solar power integration.",
    stats: [
      { label: "Capacity", value: "5,000" },
      { label: "Green Rating", value: "LEED Gold" },
      { label: "Completion", value: "2023" },
      { label: "Value", value: "₦8.5B" }
    ],
    challenge: "Achieving LEED Gold certification in a tropical climate while maintaining thermal comfort without excessive energy consumption.",
    solution: "Passive cooling techniques, including orientation optimization and shading devices, reduced cooling loads by 40%."
  },
  "port-harcourt-refinery": {
    title: "Port Harcourt Refinery",
    location: "Rivers, Nigeria",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop",
    description: "Expansion and modernization of critical energy infrastructure. This project enhances refining capacity and implements state-of-the-art safety and environmental controls.",
    stats: [
      { label: "Capacity", value: "60k bpd" },
      { label: "Area", value: "50 Hectares" },
      { label: "Completion", value: "2026" },
      { label: "Value", value: "₦150B" }
    ],
    challenge: "Executing complex brownfield expansion works within an operational facility without disrupting ongoing production.",
    solution: "Detailed 4D BIM planning allowed for precise scheduling of works during scheduled maintenance windows, ensuring zero downtime."
  },
  "dangote-refinery-zone-b": {
    title: "Dangote Refinery Zone B",
    location: "Lagos, Nigeria",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
    description: "Strategic expansion of the petrochemical processing units. This phase increases the output capacity of refined petroleum products for the West African market.",
    stats: [
      { label: "Capacity", value: "100k bpd" },
      { label: "Area", value: "120 Hectares" },
      { label: "Completion", value: "2025" },
      { label: "Value", value: "₦300B" }
    ],
    challenge: "Managing logistics for heavy machinery transport through swampy terrain during the rainy season.",
    solution: "Constructed temporary reinforced access roads and utilized barge transport for over-dimensional cargo."
  },
  "banana-island-villa": {
    title: "Banana Island Villa",
    location: "Lagos, Nigeria",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    description: "An ultra-luxury private residence on Nigeria's most exclusive island. Features include a private jetty, cinema, and fully automated smart systems.",
    stats: [
      { label: "Area", value: "2,500 sqm" },
      { label: "Floors", value: "3 + Rooftop" },
      { label: "Completion", value: "2024" },
      { label: "Value", value: "₦3.5B" }
    ],
    challenge: "Ensuring absolute privacy and security while maximizing waterfront views.",
    solution: "Implemented a cantilevered design with strategic screening and a multi-layered security perimeter integrated into the landscape."
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-gold hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-charcoal min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold uppercase tracking-widest text-sm font-medium mb-2 block">{project.category}</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">{project.title}</h1>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-lg">{project.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Overview</h3>
              <p className="text-warm-grey text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-light p-8 rounded-2xl border border-white/5">
                <h4 className="text-gold font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" /> Challenge
                </h4>
                <p className="text-warm-grey">{project.challenge}</p>
              </div>
              <div className="bg-charcoal-light p-8 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" /> Solution
                </h4>
                <p className="text-warm-grey">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-charcoal-light p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-display font-bold text-white mb-6">Project Details</h3>
              <div className="space-y-6">
                {project.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-warm-grey">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold p-8 rounded-2xl text-charcoal">
              <h3 className="text-xl font-display font-bold mb-4">Interested in a similar project?</h3>
              <p className="mb-6 opacity-80">Let's discuss how we can bring your vision to life.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}

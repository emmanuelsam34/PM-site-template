import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "eko-atlantic-tower",
    title: "Eko Atlantic Tower",
    location: "Lagos, Nigeria",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "maitama-heights",
    title: "Maitama Heights",
    location: "Abuja, Nigeria",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "lekki-innovation-hub",
    title: "Lekki Innovation Hub",
    location: "Lagos, Nigeria",
    category: "Sustainable",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "port-harcourt-refinery",
    title: "Port Harcourt Refinery",
    location: "Rivers, Nigeria",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dangote-refinery-zone-b",
    title: "Dangote Refinery Zone B",
    location: "Lagos, Nigeria",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "banana-island-villa",
    title: "Banana Island Villa",
    location: "Lagos, Nigeria",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Projects() {
  const targetRef = useRef(null);
  const [transformEnd, setTransformEnd] = useState("-60%");
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleResize = () => {
      // Calculate appropriate scroll distance based on screen width
      // Mobile needs more percentage scroll because items are wider relative to viewport
      if (window.innerWidth < 768) {
        setTransformEnd("-87%");
      } else {
        setTransformEnd("-72%");
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", transformEnd]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-charcoal">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-6 md:left-12 z-10">
          <h2 className="text-gold uppercase tracking-widest text-sm mb-2">Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Selected Projects</h3>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 pt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[60vh] w-[85vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl bg-charcoal-light border border-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="text-gold text-sm uppercase tracking-wider mb-2"
                    >
                      {project.category}
                    </motion.p>
                    <motion.h4 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="text-3xl font-display font-bold mb-1"
                    >
                      {project.title}
                    </motion.h4>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="text-white/60"
                    >
                      {project.location}
                    </motion.p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Link to={`/projects/${project.id}`} className="px-6 py-2 bg-white text-charcoal rounded-full text-sm font-bold uppercase tracking-wide inline-block">
                      View Case
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* End Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: projects.length * 0.1 }}
            className="h-[60vh] w-[85vw] md:w-[40vw] flex-shrink-0 flex items-center justify-center"
          >
             <Link to="/projects" className="text-3xl md:text-4xl font-display font-bold text-white/20 hover:text-gold transition-colors duration-300 text-center">
                View All Projects →
             </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

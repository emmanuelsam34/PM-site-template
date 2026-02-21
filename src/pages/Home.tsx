import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </motion.div>
  );
}

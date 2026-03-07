import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { HowItWorks } from '../components/HowItWorks';

export function PrototypesPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-extrabold text-xl text-orange tracking-tight hover:scale-105 transition-transform duration-300"
          >
            S1Pher //
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-orange transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-orange/10 to-transparent animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 py-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-orange text-sm md:text-base font-mono uppercase tracking-[0.18em] mb-6"
          >
            S1Pher · Research Prototypes
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Passion Projects &<br />
            <span className="text-orange">Early Explorations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
          >
            The teaching calculator was the spark that ignited this journey — a proof of concept that offline AI could democratize access to education. While our focus has evolved to advanced communication networks, this project remains a testament to where it all began.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main>
        <ProjectShowcase />
        <HowItWorks />

        {/* Journey Note */}
        <section className="relative py-20 bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-orange/20 rounded-2xl p-10 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                From EdTech to Infrastructure
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Building the Teaching Calculator revealed fundamental limitations in current computing architectures. The need for low-latency, high-bandwidth communication at the edge led us to explore photonic interconnects and mesh computing — technologies that could reshape not just education, but the entire landscape of distributed computing.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-orange font-mono text-sm hover:underline underline-offset-4 transition-all duration-300 group"
              >
                Explore our current mission
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-12 text-center">
          <div className="text-xs font-mono text-white/40">
            S1Pher · Advanced Communication Networks · 2024-2026
          </div>
        </div>
      </footer>
    </div>
  );
}

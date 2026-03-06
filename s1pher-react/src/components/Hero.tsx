import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-[-300px] right-[-300px] w-[800px] h-[800px] rounded-full bg-gradient-radial from-teal/10 to-transparent animate-float" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-500/8 to-transparent animate-float" style={{ animationDelay: '1s', animationDuration: '10s' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,200,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,200,0.025)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-grid-pulse" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-teal text-sm md:text-base font-mono uppercase tracking-[0.18em] mb-6 animate-slide-in-left"
        >
          Founded 2024 · Seattle, WA
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-white leading-[0.95] tracking-tight mb-4"
        >
          <span className="text-teal animate-glow-pulse">S1Pher</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed mb-6"
        >
          Building technology that democratizes access to information — starting with the students who need it most.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mb-10"
        >
          {['EdTech', 'Offline-First AI', 'Embedded Systems', 'Photonic Computing'].map((badge) => (
            <span
              key={badge}
              className="inline-block border border-teal/20 rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider text-teal bg-teal/5 hover:bg-teal/15 hover:border-teal/35 hover:scale-105 transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(0,229,200,0.2)]"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#prototype"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-teal rounded-md text-teal font-mono text-sm tracking-wide bg-teal/5 hover:bg-teal/15 hover:shadow-[0_8px_32px_rgba(0,229,200,0.25)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <ArrowRight className="w-4 h-4" />
            View Research
          </a>

          <a
            href="https://github.com/Trammell-Whitfield/The_Teaching_Calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/15 rounded-md text-gray-400 font-mono text-sm tracking-wide bg-white/5 hover:bg-white/10 hover:text-teal hover:border-teal/30 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShaderLines } from './ui/shader-lines';

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
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Shader animation background */}
      <div className="absolute inset-0 opacity-50">
        <ShaderLines />
      </div>

      {/* Animated accent orbs - VERY BRIGHT */}
      <div className="absolute top-[-100px] right-[-100px] w-[900px] h-[900px] rounded-full bg-gradient-radial from-orange/40 via-orange/20 to-transparent animate-float" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange/35 via-orange/15 to-transparent animate-float" style={{ animationDelay: '1s', animationDuration: '10s' }} />

      {/* Center orange glow */}
      <div className="absolute inset-0 bg-gradient-radial from-orange/10 via-transparent to-transparent" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-white leading-[0.95] tracking-tight mb-4"
        >
          <span className="text-orange animate-glow-pulse">S1Pher</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-2xl leading-relaxed mb-6"
        >
          Building the next generation of communication infrastructure through <span className="text-orange font-bold">photonics</span> and <span className="text-orange font-bold">mesh computing</span>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mb-10"
        >
          {['Photonic Interconnects', 'Mesh Computing', 'Edge AI', 'Advanced Networks'].map((badge) => (
            <span
              key={badge}
              className="inline-block border-2 border-orange/50 text-orange bg-orange/10 hover:bg-orange/20 hover:border-orange hover:shadow-[0_0_30px_rgba(255,140,66,0.6)] rounded-full px-5 py-2.5 text-sm font-mono uppercase tracking-wider hover:scale-110 transition-all duration-300 cursor-default font-semibold"
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
            href="#vision"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-orange rounded-lg text-orange font-mono text-base tracking-wide bg-orange/15 hover:bg-orange hover:text-black hover:shadow-[0_8px_40px_rgba(255,140,66,0.6)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden font-bold"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Lightbulb className="w-5 h-5" />
            Our Vision
          </a>

          <Link
            to="/prototypes"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 rounded-lg text-white font-mono text-base tracking-wide bg-white/5 hover:bg-white/15 hover:text-orange hover:border-orange transition-all duration-300 font-bold"
          >
            <ArrowRight className="w-5 h-5" />
            View Prototypes
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

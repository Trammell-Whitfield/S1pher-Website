import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Cpu, Lightbulb, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const journey = [
  {
    icon: TrendingUp,
    title: 'Finance & Quant Trading',
    description: 'Got interested in quantitative analysis and data-driven systems. Learned to think about complex problems mathematically.',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    icon: Cpu,
    title: 'Hardware & Embedded Systems',
    description: 'Shifted focus to electrical engineering. Started working with research teams on edge AI hardware and embedded systems.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Photonics & Communication',
    description: 'Now exploring photonics and mesh networks — trying to understand if light-based communication could change distributed computing.',
    color: 'from-pink-500/20 to-orange/20',
  },
];

const interests = [
  'Low-power communication systems',
  'Photonic interconnects',
  'Edge AI hardware acceleration',
  'Embedded intelligence',
  'Custom silicon design',
  'Mesh computing networks',
];

export function FounderPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-extrabold text-xl text-white tracking-tight hover:text-orange transition-colors duration-300"
          >
            S1Pher //
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-white/5 to-transparent animate-float" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-radial from-orange/5 to-transparent animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

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
            className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-[0.18em] mb-6"
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Trammell<br />
            Whitfield
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-300 font-mono text-sm mb-8"
          >
            <MapPin className="w-4 h-4 text-white" />
            Seattle, Washington
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
          >
            17-year-old high school student exploring photonics, mesh networks, and edge computing — trying to figure out how light could replace copper in computing systems
          </motion.p>
        </motion.div>
      </section>

      {/* Main Bio Section */}
      <section className="relative py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-white/20 rounded-2xl p-10 md:p-14 mb-12"
          >
            <div className="text-lg md:text-xl text-white/90 leading-relaxed space-y-6">
              <p>
                I started in finance — spent some time learning <span className="text-white font-semibold">quantitative trading and analysis</span>. But I kept getting pulled toward hardware. So I shifted to electrical engineering and started working with research teams on <span className="text-white font-semibold">embedded systems and edge AI hardware</span>.
              </p>
              <p>
                I'm a senior in high school right now, heading to college next year to study <span className="text-white font-semibold">electrical and computer engineering</span> with a focus on <span className="text-white font-semibold">photonics</span>. The goal is a Master's in photonics research, then hopefully into R&D.
              </p>
              <p className="text-white/80">
                What I'm trying to figure out: how do we make low-power communication systems that bring real intelligence to small devices? Can photonics get us there faster than traditional electronics?
              </p>
              <p className="text-white/70 text-base">
                Outside of this: Eagle Scout, jazz piano, and way too much time thinking about distributed systems.
              </p>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-8 text-center">
              The Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {journey.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-card border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)] transition-all duration-500 cursor-default overflow-hidden"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-orange group-hover:bg-orange/5 transition-all duration-500">
                          <Icon className="w-7 h-7 text-white group-hover:text-orange" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-display font-bold text-white mb-3 transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Step number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-orange/10 group-hover:border-orange transition-colors duration-300">
                      <span className="text-white group-hover:text-orange font-display font-bold text-sm transition-colors duration-300">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-card to-bg-3 border border-white/10 rounded-2xl p-10 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-white" />
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                Research Interests
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, x: 4 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 hover:border-orange transition-all duration-300 cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-orange transition-colors duration-300" />
                  <span className="text-gray-300 text-sm font-mono">
                    {interest}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-white/20 rounded-2xl p-10 md:p-12"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              What I Believe
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              The most powerful technologies are the ones that fade into the background. Intelligence shouldn't require cloud connectivity or massive power budgets — it should be embedded, efficient, and accessible everywhere. That's the world I'm trying to build toward.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white hover:text-orange font-mono text-sm hover:underline underline-offset-4 transition-all duration-300 group"
            >
              See what I'm working on
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

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

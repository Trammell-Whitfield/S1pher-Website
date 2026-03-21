import { motion } from 'framer-motion';
import { Lightbulb, Activity, Network, Zap } from 'lucide-react';

const phases = [
  { name: 'Phase 1: LDV Sensing', icon: Activity },
  { name: 'Phase 2: Mesh Integration', icon: Network },
  { name: 'Phase 3: AI Coordination', icon: Zap },
  { name: 'Phase 4: Optical Encoding', icon: Lightbulb },
];

const keyMetrics = [
  { value: '4.25%', label: 'Fresnel Reflection' },
  { value: '632 nm', label: 'HeNe Wavelength' },
  { value: '4 Phases', label: 'Research Arc' },
];

export function PhotonicCommunication() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-bg-2 to-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card border border-orange/30 rounded-2xl p-10 md:p-14 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange/60 via-orange/30 to-transparent" />

          {/* Background glow */}
          <div className="absolute top-[-140px] right-[-140px] w-[400px] h-[400px] rounded-full bg-gradient-radial from-orange/10 to-transparent pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                  Prototype 02 · In Progress · March 2026
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-4">
                The Communication<br />Protocol
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                What if the same physics that lets us measure vibrations with a laser could also enable chip-to-chip communication at the speed of light?
              </p>

              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                Starting with a Laser Doppler Vibrometer that reflects coherent light off glass, this experiment follows a four-phase arc: sensing acoustic vibrations, digitizing with ESP32 mesh nodes, coordinating with an AI hat running a quantized LLM, and finally encoding deliberate data onto the optical carrier. The thesis: the Fresnel equations governing reflection at the air-glass interface are the same equations that govern loss at every photonic interconnect in silicon chips.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {keyMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-orange/20 rounded-lg p-4 text-center group cursor-default hover:bg-orange/10 hover:border-orange transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-orange mb-1 group-hover:scale-110 transition-all duration-300">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-wide">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-orange/80 font-mono text-sm">
                <Lightbulb className="w-4 h-4" />
                Full documentation coming soon
              </div>
            </div>

            {/* Research Phases */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Research Arc
              </div>
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={phase.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group border border-orange/20 rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-orange/5 hover:bg-orange/10 hover:border-orange hover:text-orange transition-all duration-300 cursor-default flex items-center gap-3"
                  >
                    <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    {phase.name}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Core Thesis Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-10 bg-black/40 border border-orange/20 rounded-xl p-6"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-orange/80 mb-3">
              Core Thesis
            </div>
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-mono">
              The Fresnel amplitude reflection coefficient <span className="text-orange font-semibold">r = (n₁−n₂)/(n₁+n₂)</span> that governs laser reflection off glass is the same impedance-matching equation that governs coupling loss at every photonic interconnect interface. Mastering it at the LDV scale is mastering it at the silicon photonics scale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

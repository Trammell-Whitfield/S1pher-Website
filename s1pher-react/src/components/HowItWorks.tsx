import { motion } from 'framer-motion';
import { Calculator, Radio, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Calculator,
    title: 'Student Types Problem',
    description: 'On their TI-84 calculator during class or homework',
    color: 'from-orange/20 to-blue-500/20',
  },
  {
    icon: Radio,
    title: 'ESP32 Relays Signal',
    description: 'Low-power bridge transmits to Raspberry Pi via WiFi',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    icon: Cpu,
    title: 'AI Processes Locally',
    description: 'Qwen2.5-Math LLM analyzes and generates step-by-step solution',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Sparkles,
    title: 'Guided Learning',
    description: 'Solution appears on calculator screen — no internet required',
    color: 'from-pink-500/20 to-orange/20',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From problem to solution in seconds — completely offline
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-white/20 via-white/10 to-white/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Step number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white border-4 border-bg-2 flex items-center justify-center z-10 group-hover:scale-125 group-hover:bg-orange transition-all duration-300"
                  >
                    <span className="text-bg font-display font-bold text-sm">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Card */}
                  <div className="relative h-full bg-card border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)] transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-orange group-hover:bg-orange/5 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white group-hover:text-orange" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-display font-bold text-white mb-3 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow connector (desktop only) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 z-20">
                        <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Trammell-Whitfield/The_Teaching_Calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 rounded-lg text-white font-mono text-sm tracking-wide bg-white/5 hover:bg-white/10 hover:border-orange hover:text-orange hover:shadow-[0_8px_32px_rgba(255,140,66,0.2)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="text-base">View Technical Documentation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

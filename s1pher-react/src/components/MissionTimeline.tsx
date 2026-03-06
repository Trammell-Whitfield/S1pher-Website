import { motion } from 'framer-motion';
import { Cpu, Zap, Lightbulb } from 'lucide-react';

const phases = [
  {
    status: 'Now',
    title: 'Offline-First AI Tutoring',
    description: 'Making intelligent education accessible without internet dependency',
    icon: Zap,
    opacity: 1,
    borderColor: 'border-teal',
    iconColor: 'text-teal',
  },
  {
    status: 'Next',
    title: 'Custom NPU & Edge Hardware',
    description: 'Specialized silicon for on-device AI inference',
    icon: Cpu,
    opacity: 0.7,
    borderColor: 'border-white/10',
    iconColor: 'text-gray-400',
  },
  {
    status: 'Vision',
    title: 'Photonic Communication Systems',
    description: 'Next-generation data transmission at the hardware level',
    icon: Lightbulb,
    opacity: 0.45,
    borderColor: 'border-white/5',
    iconColor: 'text-gray-500',
  },
];

export function MissionTimeline() {
  return (
    <section className="relative py-32 bg-bg-2">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-teal text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4">
            The Company
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-8">
            What S1Pher is<br />building toward.
          </h2>
        </motion.div>

        <div className="h-0.5 bg-gradient-to-r from-teal to-transparent opacity-25 mb-20" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-5">
              S1Pher is a hardware-software company focused on making intelligent, accessible tools for people who've been left out of the technology revolution.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Long-term, S1Pher is building toward next-generation computing hardware — photonic communication systems and custom chip design that will power the next wave of edge AI. But the mission starts where the need is most immediate.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.status}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: phase.opacity, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  className={`group bg-card border ${phase.borderColor} rounded-xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,229,200,0.1)] cursor-default`}
                  style={{ opacity: phase.opacity }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-teal/5 border border-teal/20 ${phase.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-mono uppercase tracking-wider mb-2 ${phase.status === 'Now' ? 'text-teal' : 'text-gray-500'}`}>
                        {phase.status}
                      </div>
                      <div className="text-white font-semibold text-base md:text-lg mb-1.5 group-hover:text-teal transition-colors duration-300">
                        {phase.title}
                      </div>
                      <div className="text-sm text-gray-400 leading-relaxed">
                        {phase.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

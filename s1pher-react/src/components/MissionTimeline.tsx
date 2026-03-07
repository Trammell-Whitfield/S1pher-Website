import { motion } from 'framer-motion';
import { Network, Cpu, Lightbulb } from 'lucide-react';

const phases = [
  {
    status: 'Now',
    title: 'Mesh Computing Research',
    description: 'Distributed networks for resilient edge computing',
    icon: Network,
    opacity: 1,
    borderColor: 'border-orange',
    iconColor: 'text-orange',
  },
  {
    status: 'Next',
    title: 'Photonic Interconnects',
    description: 'Chip-to-chip optical communication for ultra-low latency',
    icon: Lightbulb,
    opacity: 0.7,
    borderColor: 'border-white/10',
    iconColor: 'text-white/60',
  },
  {
    status: 'Vision',
    title: 'Custom Silicon & NPUs',
    description: 'Integrated photonic-electronic systems for next-gen computing',
    icon: Cpu,
    opacity: 0.45,
    borderColor: 'border-white/5',
    iconColor: 'text-white/40',
  },
];

export function MissionTimeline() {
  return (
    <section className="relative py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4">
            The Mission
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-8">
            Redefining how<br />data moves.
          </h2>
        </motion.div>

        <div className="h-0.5 bg-gradient-to-r from-orange to-transparent opacity-25 mb-20" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white text-lg md:text-xl leading-relaxed mb-5">
              S1Pher is pioneering advanced communication networks that will power the next generation of distributed computing.
            </p>
            <p className="text-white/60 leading-relaxed">
              From mesh computing architectures that enable resilient edge networks to photonic interconnects that transmit data at the speed of light — we're building the infrastructure layer for tomorrow's intelligent systems.
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
                  className={`group bg-card border ${phase.borderColor} rounded-xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,53,0.15)] cursor-default`}
                  style={{ opacity: phase.opacity }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-orange/5 border border-orange/20 ${phase.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-mono uppercase tracking-wider mb-2 ${phase.status === 'Now' ? 'text-orange' : 'text-white/40'}`}>
                        {phase.status}
                      </div>
                      <div className="text-white font-semibold text-base md:text-lg mb-1.5 group-hover:text-orange transition-colors duration-300">
                        {phase.title}
                      </div>
                      <div className="text-sm text-white/50 leading-relaxed">
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

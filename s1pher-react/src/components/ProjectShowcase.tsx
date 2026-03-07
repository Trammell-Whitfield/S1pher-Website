import { motion } from 'framer-motion';
import { Cpu, Zap, Radio, Calculator } from 'lucide-react';

const techStack = [
  { name: 'Raspberry Pi 5', icon: Cpu },
  { name: 'Qwen2.5-Math LLM', icon: Zap },
  { name: 'ESP32 Bridge', icon: Radio },
  { name: 'TI-84 Plus', icon: Calculator },
];

const metrics = [
  { value: '90%+', label: 'Routing Accuracy' },
  { value: '6×', label: 'Battery Efficiency' },
  { value: '2-5', label: 'tok/s' },
];

export function ProjectShowcase() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card border border-orange/25 rounded-2xl p-10 md:p-14 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-blue-500 to-transparent" />

          {/* Background glow */}
          <div className="absolute top-[-140px] right-[-140px] w-[400px] h-[400px] rounded-full bg-gradient-radial from-orange/10 to-transparent pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-orange mb-3">
                S1Pher · Prototype 01
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-4">
                The Teaching<br />Calculator
              </h2>

              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                An offline AI math tutor built into the calculator students already own — the first physical instantiation of S1Pher's mission.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {metrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ scale: 1.05 }}
                    className="bg-orange/5 border border-orange/20 rounded-lg p-4 text-center group cursor-default hover:bg-orange/10 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold text-orange mb-1 group-hover:scale-110 transition-transform duration-300">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono text-white/60 uppercase tracking-wide">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#problem"
                className="inline-flex items-center gap-2 text-orange font-mono text-sm hover:underline underline-offset-4 transition-all duration-300 group"
              >
                Read Full Case Study
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Stack
              </div>
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group border border-orange/20 rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-orange bg-orange/5 hover:bg-orange/15 hover:border-orange/35 transition-all duration-300 cursor-default flex items-center gap-3"
                  >
                    <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    {tech.name}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

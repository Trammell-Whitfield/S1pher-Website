import { motion } from 'framer-motion';
import { Network, Zap, Radio, Layers } from 'lucide-react';

const technologies = [
  {
    icon: Network,
    title: 'Mesh Computing',
    description: 'Decentralized networks that adapt and self-heal',
    features: ['Fault-tolerant architecture', 'Dynamic routing', 'Edge-first design'],
    color: 'from-orange/20 to-blue-500/20',
  },
  {
    icon: Zap,
    title: 'Photonic Interconnects',
    description: 'Light-speed data transmission between chips',
    features: ['Ultra-low latency', 'High bandwidth', 'Energy efficient'],
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    icon: Radio,
    title: 'Wireless Mesh Protocols',
    description: 'Next-gen communication layers for distributed systems',
    features: ['Multi-hop routing', 'Self-organizing', 'Low power'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Layers,
    title: 'Integrated Systems',
    description: 'Seamless hardware-software co-design',
    features: ['Custom silicon', 'Embedded AI', 'Real-time processing'],
    color: 'from-pink-500/20 to-orange/20',
  },
];

export function TechnologiesShowcase() {
  return (
    <section className="relative py-24 overflow-hidden bg-bg-2">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-bg-2 to-black opacity-50" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-orange text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Core Technologies
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-6">
            Building the<br />Infrastructure Layer
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Researching and developing the foundational technologies for next-generation distributed computing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card border border-white/10 rounded-2xl p-8 md:p-10 hover:border-orange/30 hover:shadow-[0_20px_60px_rgba(255,107,53,0.15)] transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-orange" />
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-orange transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-white/80 text-base mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {tech.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/60 font-mono"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

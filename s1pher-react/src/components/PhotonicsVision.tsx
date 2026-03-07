import { motion } from 'framer-motion';
import { ShaderAnimation } from './ui/shader-animation';

export function PhotonicsVision() {
  return (
    <section className="relative py-32 overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4">
            The Vision
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight mb-6">
            Photonic<br />Communication
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Next-generation computing at the speed of light. Building toward chip-to-chip photonic interconnects that will redefine the boundaries of edge AI.
          </p>
        </motion.div>

        {/* Shader Animation Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[500px] md:h-[650px] w-full rounded-2xl border border-white/20 overflow-hidden bg-bg-2"
        >
          {/* Shader background */}
          <ShaderAnimation />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white text-center leading-none tracking-tighter z-10 px-4"
              style={{
                textShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.6)',
              }}
            >
              Light-Speed<br />Computing
            </motion.span>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg via-bg/50 to-transparent pointer-events-none" />
        </motion.div>

        {/* Research Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Photonic Interconnects',
              description: 'Chip-to-chip optical communication for ultra-low latency data transfer',
            },
            {
              title: 'Edge AI Acceleration',
              description: 'Custom NPU architectures optimized for on-device inference',
            },
            {
              title: 'Optical Computing',
              description: 'Exploring light-based computation for next-gen processing',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bg-card border border-white/10 rounded-xl p-6 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-default"
            >
              <h3 className="text-white font-display font-bold text-lg md:text-xl mb-3 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/80 font-mono text-sm">
            Currently pursuing undergraduate studies in Computer & Electrical Engineering
          </p>
          <p className="text-gray-400 font-mono text-sm mt-2">
            Target: Master's in Photonics → Research & Development
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Calendar, Zap, AlertCircle } from 'lucide-react';

export function CurrentWork() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-bg-2 to-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <p className="text-gray-400 text-xs md:text-sm font-mono uppercase tracking-[0.2em]">
              Live Work Log
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight tracking-tight mb-8">
            What I'm working on<br />right now
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-white/20 rounded-xl p-6 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange/10 border border-orange/30">
                  <Zap className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-lg">
                      Mesh Network Protocols
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-3">
                    <Calendar className="w-3 h-3" />
                    Started Feb 2026
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Trying to build a self-organizing mesh network that can route data without a central coordinator. Testing ESP32 nodes with custom firmware to see if multi-hop routing can stay reliable under packet loss.
              </p>

              <div className="text-xs font-mono text-white/60">
                Status: Testing routing algorithms on 5-node prototype
              </div>
            </motion.div>

            {/* Challenge / What's Not Working */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-orange/30 rounded-xl p-6 hover:border-orange/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange/10 border border-orange/30">
                  <AlertCircle className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Current Challenge
                  </h3>
                  <div className="text-xs font-mono text-gray-500 mt-1">
                    Partially solved
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The Pi 5's thermal throttling keeps killing performance when running inference. I've tried better heatsinks and underclocking, which helps but doesn't fully solve it. Might need to rethink the hardware or optimize the model more aggressively.
              </p>

              <div className="text-xs font-mono text-orange/80">
                This is the messy part. Still figuring it out.
              </div>
            </motion.div>
          </div>

          {/* Reading / Thinking About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-white font-semibold text-base mb-4">
              Currently reading & thinking about
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Silicon photonics integration with CMOS',
                'Energy-efficient on-device inference',
                'Self-healing network topologies',
                'Optical interconnect latency vs. PCIe'
              ].map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-2 text-sm text-gray-400 font-mono"
                >
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  {topic}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-500 text-xs font-mono">
              Last updated: March 17, 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

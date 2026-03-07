import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Users, Globe, BookOpen, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 50000000,
    suffix: '+',
    label: 'Students Without Internet',
    description: 'In the US alone',
  },
  {
    icon: Globe,
    value: 100,
    suffix: '%',
    label: 'Offline Capable',
    description: 'No connectivity required',
  },
  {
    icon: BookOpen,
    value: 2,
    suffix: ' tok/s',
    label: 'Response Speed',
    description: 'Real-time AI tutoring',
  },
  {
    icon: Zap,
    value: 90,
    suffix: '%',
    label: 'Routing Accuracy',
    description: 'Intelligent problem solving',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat('en-US').format(latest.toFixed(0));
        ref.current.textContent = formatted + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

export function ImpactStats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-bg-2 to-black opacity-50" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-orange text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Impact & Performance
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
            Building for Those<br />Left Behind
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card border border-white/10 rounded-2xl p-8 hover:border-orange/30 hover:shadow-[0_20px_60px_rgba(255,107,53,0.15)] transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-7 h-7 text-orange" />
                  </div>
                </div>

                {/* Counter */}
                <div className="relative text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-orange transition-colors duration-500">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="relative text-base font-semibold text-white mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="relative text-sm text-gray-500 font-mono">
                  {stat.description}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

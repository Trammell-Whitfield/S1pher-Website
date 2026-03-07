import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Trammell-Whitfield/The_Teaching_Calculator',
    description: 'View the source code',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:contact@s1pher.com',
    description: 'Get in touch',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
    description: 'Connect professionally',
  },
];

export function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-bg-2 to-black" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange/8 to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-radial from-orange/5 to-transparent animate-float" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-card to-bg-3 border border-orange/20 rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal to-transparent" />

          {/* Decorative orbs */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-orange text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-6"
            >
              Let's Connect
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-6"
            >
              Interested in collaborating?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              Whether you're an educator, researcher, or developer — if you share the vision of democratizing access to intelligent tools, let's talk.
            </motion.p>

            {/* Contact links grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-4 mb-12"
            >
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative bg-card border border-white/10 rounded-xl p-6 hover:border-orange/30 hover:shadow-[0_12px_40px_rgba(255,107,53,0.2)] transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-orange" />
                      </div>
                      <div className="text-white font-semibold mb-1 group-hover:text-orange transition-colors duration-300 flex items-center gap-2">
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="text-xs text-gray-500 font-mono">
                        {link.description}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Main CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="mailto:contact@s1pher.com"
                className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-orange rounded-xl text-orange font-mono text-base tracking-wide bg-orange/5 hover:bg-orange hover:text-bg transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Mail className="w-5 h-5" />
                <span className="relative">Send a Message</span>
              </a>
            </motion.div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 text-sm text-gray-500 font-mono"
            >
              Currently seeking partnerships in education technology & hardware research
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

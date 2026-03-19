import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { MissionTimeline } from '../components/MissionTimeline';
import { CurrentWork } from '../components/CurrentWork';
import { TechnologiesShowcase } from '../components/TechnologiesShowcase';
import { PhotonicsVision } from '../components/PhotonicsVision';
import { ContactCTA } from '../components/ContactCTA';

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-white tracking-tight hover:text-orange transition-colors duration-300">
            S1Pher //
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300">
              Research
            </a>
            <a href="#vision" className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300">
              Vision
            </a>
            <Link to="/prototypes" className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300">
              Experiments
            </Link>
            <Link to="/founder" className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300">
              About
            </Link>
            <a href="#contact" className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />

        <div id="mission">
          <MissionTimeline />
        </div>

        <CurrentWork />

        <TechnologiesShowcase />

        <div id="vision">
          <PhotonicsVision />
        </div>

        <div id="contact">
          <ContactCTA />
        </div>

        {/* Footer */}
        <footer className="relative border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 text-center">
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white max-w-3xl mx-auto mb-10 leading-tight">
              "What if the future of computing isn't just faster chips — but fundamentally rethinking how information moves between them?"
            </h3>

            <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
              <Link
                to="/prototypes"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
              >
                Experiments
              </Link>
              <span className="text-white/40">|</span>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                Back to top ↑
              </a>
            </div>

            <div className="text-xs font-mono text-white/40">
              S1Pher · Advanced Communication Networks · 2024-2026
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

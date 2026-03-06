import { Hero } from './components/Hero';
import { MissionTimeline } from './components/MissionTimeline';
import { ProjectShowcase } from './components/ProjectShowcase';
import { PhotonicsVision } from './components/PhotonicsVision';

function App() {
  return (
    <div className="relative min-h-screen bg-bg overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/85 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-teal tracking-tight">
            S1Pher //
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-gray-400 text-sm font-medium hover:text-teal transition-colors duration-300">
              Mission
            </a>
            <a href="#prototype" className="text-gray-400 text-sm font-medium hover:text-teal transition-colors duration-300">
              Prototype
            </a>
            <a href="#vision" className="text-gray-400 text-sm font-medium hover:text-teal transition-colors duration-300">
              Vision
            </a>
            <a
              href="https://github.com/Trammell-Whitfield/The_Teaching_Calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-teal/30 px-4 py-2 rounded text-teal text-sm font-medium hover:bg-teal/10 transition-all duration-300"
            >
              GitHub ↗
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

        <div id="prototype">
          <ProjectShowcase />
        </div>

        <div id="vision">
          <PhotonicsVision />
        </div>

        {/* Footer */}
        <footer className="relative border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 text-center">
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white max-w-3xl mx-auto mb-10 leading-tight">
              "The moment when a student's eyes light up because they figured it out themselves shouldn't be a luxury. With the right engineering, it doesn't have to be."
            </h3>

            <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
              <a
                href="https://github.com/Trammell-Whitfield/The_Teaching_Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-teal transition-colors duration-300"
              >
                GitHub Repository
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 text-sm hover:text-teal transition-colors duration-300">
                Back to top ↑
              </a>
            </div>

            <div className="text-xs font-mono text-gray-600">
              Built by Trammell Whitfield · The Teaching Calculator · 2024
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

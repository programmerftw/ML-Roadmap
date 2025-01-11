
import { Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-white text-xl font-bold">ML Roadmap Guide</h1>
          </div>
          <div>
            <a
              href="https://github.com/programmerftw/ML-Roadmap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
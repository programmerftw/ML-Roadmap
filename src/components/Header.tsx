import  { useState } from 'react';
import { Github, FileText, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handlePdfPreview = () => {
    window.open('/ML ROADMAPS.pdf', '_blank');
  };

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              ML Roadmap
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/journey"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/journey'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Roadmap
            </Link>
            <Link
              to="/resources"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/resources'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Resources
            </Link>
            <button
              onClick={handlePdfPreview}
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors hover:bg-gray-800"
            >
              <FileText className="w-5 h-5" />
              <span>PDF Guide</span>
            </button>
            <a
              href="https://github.com/programmerftw/ML-Roadmap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors hover:bg-gray-800"
            >
              <Github className="w-5 h-5" />
              <span>Open Source</span>
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/journey"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/journey'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              to="/resources"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/resources'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <button
              onClick={() => {
                handlePdfPreview();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors hover:bg-gray-800"
            >
              <FileText className="w-5 h-5" />
              <span>PDF Guide</span>
            </button>
            <a
              href="https://github.com/programmerftw/ML-Roadmap"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="w-5 h-5" />
              <span>Open Source</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
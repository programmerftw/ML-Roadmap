
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span className="text-gray-300">6-Month Learning Path • Free Resources</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
          Zero to ML Engineer:<br />
          Your Complete Roadmap
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Transform your career with our comprehensive machine learning roadmap. 
          From mathematics fundamentals to advanced ML concepts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/journey')}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/resources')}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            View Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
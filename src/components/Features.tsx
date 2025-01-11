
import { BookOpen, Code, Brain, Rocket } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Path",
    description: "Month-by-month curriculum designed for optimal progression"
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Real-world projects to build your portfolio and experience"
  },
  {
    icon: Brain,
    title: "Theory & Practice",
    description: "Balance between mathematical foundations and practical implementation"
  },
  {
    icon: Rocket,
    title: "Industry Ready",
    description: "Learn the tools and technologies used in real ML projects"
  }
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why This Roadmap?</h2>
          <p className="text-gray-400">Everything you need to become an ML engineer, carefully curated and organized</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
              <feature.icon className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
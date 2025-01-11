
import RoadmapCard from './RoadmapCard';
import { roadmapData } from '../data/roadmapData';

const RoadmapGrid = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Your Learning Journey</h2>
          <p className="text-gray-400">A comprehensive, step-by-step guide to mastering machine learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapData.map((item, index) => (
            <RoadmapCard
              key={index}
              month={item.month}
              description={item.description}
              topics={item.topics}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapGrid;
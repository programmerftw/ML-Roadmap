import React from 'react';

interface RoadmapCardProps {
  month: string;
  topics: string[];
  description: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ month, topics, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-purple-400 mb-3">{month}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-gray-400">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
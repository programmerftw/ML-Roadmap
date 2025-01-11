
import { Book, Video, Code, Globe, Rocket, Newspaper } from 'lucide-react';

const resources = [
  {
    category: "Books & Papers",
    icon: Book,
    items: [
      { title: "Research Papers with Code", link: "https://paperswithcode.com/" },
      { title: "Pattern Recognition and Machine Learning", link: "https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf" },
      { title: "Hands-On Machine Learning with Scikit-Learn", link: "https://github.com/yanshengjia/ml-road/blob/master/resources/Hands%20On%20Machine%20Learning%20with%20Scikit%20Learn%20and%20TensorFlow.pdf" },
      { title: "Data Mining - Practical Machine Learning Tools and Techniques", link: "https://github.com/yanshengjia/ml-road/blob/master/resources/Data%20Mining%20-%20Practical%20Machine%20Learning%20Tools%20and%20Techniques%20(2nd%20Edition).pdf" },

    ]
  },
  {
    category: "YouTube Channels & Resources",
    icon: Video,
    items: [
      { title: "Machine Learning by Andrew Ng", link: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" },
      { title: "100 Days of ML CampusX", link: "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH" },
      { title: "Deep Learning by Krish Naik", link: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU70ZGsckrMdr0FteeRUi" },
      { title: "Neural Networks by Andrej Karpathy", link: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" },
      { title: "Codebasics", link: "https://www.youtube.com/@codebasics" } 
    ]
  },
  {
    category: "Practice Platforms",
    icon: Code,
    items: [
      { title: "Kaggle Competitions", link: "https://www.kaggle.com/" },
      { title: "StrataScratch-Code for Data Science", link: "https://www.stratascratch.com/" },
      { title: "Deep-ML", link: "https://www.deep-ml.com/" },
      { title: "bnomial", link: "https://today.bnomial.com/" },
    ]
  },
  {
    category: "Communities",
    icon: Globe,
    items: [
      { title: "Reddit r/MachineLearning", link: "https://www.reddit.com/r/MachineLearning/" },
      { title: "Stack Overflow", link: "https://stackoverflow.blog/ai/" },
      { title: "Twitter Communities ", link: "https://x.com/i/communities/suggested?q=machine%20l" }
    ]
  },
  {
    category: "Useful Github Repos",
    icon: Rocket,
    items: [
      { title: "Microsoft Generative AI", link: "https://github.com/microsoft/generative-ai-for-beginners" },
      { title: "List of All AI repos", link: "https://github.com/MamczurMiroslaw/best_ai_knowledge_repos" },
      
    ]
  },

  {
    category: "Newsletters",
    icon: Newspaper,
    items: [
      { title: "DataTalks.Club: weekly newsletter for data related things", link: "https://datatalks.club/" },
      { title: "TheBatch: Andrew Ng's newsletter", link: "https://www.deeplearning.ai/the-batch/" },
      { title: "BuzzRobotAI: The AI newsletter", link: "https://buzzrobot.substack.com/" },
    ]  
  }
  
];

const Resources = () => {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-400">Curated collection of the best machine learning resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((section, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-6 h-6 text-purple-500" />
                <h2 className="text-2xl font-semibold text-white">{section.category}</h2>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
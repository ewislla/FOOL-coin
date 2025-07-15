import React from 'react';
import { Users, Target, Shield, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "For the Underdogs",
      description: "Built by broke creatives, for broke creatives who never got invited to the party"
    },
    {
      icon: <Target size={32} />,
      title: "No Fake Promises",
      description: "No fake roadmaps or empty promises. Just raw, authentic rebellion"
    },
    {
      icon: <Shield size={32} />,
      title: "Emotional Rebellion",
      description: "Turn your pain into profit. Built on memes, powered by emotion"
    },
    {
      icon: <Zap size={32} />,
      title: "Community First",
      description: "50% airdrop to community. This is our token, our movement"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider glitch-text">
            NO PROMISES. NO LIES. 
            <span className="block text-red-600">JUST TRUTH.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This isn't just another token. It's a symbol of rebellion. For everyone who's been called a fool for chasing dreams. 
            Emotional rebellion turned into code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 transition-all hover:transform hover:scale-105">
              <div className="text-red-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-4">WHY BE A FOOL?</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start text-gray-300">
                <span className="text-red-600 mr-3">•</span>
                No fake roadmaps or empty promises
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-red-600 mr-3">•</span>
                Built on memes, powered by emotion
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-red-600 mr-3">•</span>
                For those who never got invited to the party
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-red-600 mr-3">•</span>
                Turn your pain into profit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
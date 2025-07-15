import React from 'react';
import { PieChart, Users, Lock, Zap, Shield } from 'lucide-react';

const Tokenomics = () => {
  const tokenInfo = [
    {
      icon: <Shield size={24} />,
      label: "Chain",
      value: "Polygon",
      description: "Fast, low-cost transactions"
    },
    {
      icon: <PieChart size={24} />,
      label: "Total Supply",
      value: "100M $FOOL",
      description: "Fixed supply, no inflation"
    },
    {
      icon: <Users size={24} />,
      label: "Community Airdrop",
      value: "50%",
      description: "50M tokens to community"
    },
    {
      icon: <Zap size={24} />,
      label: "Token Standard",
      value: "ERC-20",
      description: "Secure and compatible"
    }
  ];

  const distribution = [
    { category: "Community Airdrop", percentage: 50, color: "bg-red-600" },
    { category: "Liquidity Pool", percentage: 30, color: "bg-red-500" },
    { category: "Development", percentage: 10, color: "bg-red-400" },
    { category: "Marketing", percentage: 10, color: "bg-red-300" }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider glitch-text">
            FOOL
            <span className="text-red-600">NOMICS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple. Transparent. No complex mechanisms or hidden fees. Just pure rebellion economics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenInfo.map((info, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 transition-all hover:transform hover:scale-105">
              <div className="text-red-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">{info.label}</h3>
              <div className="text-2xl font-bold text-white mb-2">{info.value}</div>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-red-600 mb-8 text-center">Token Distribution</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Distribution Chart */}
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded ${item.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{item.category}</span>
                      <span className="text-red-400 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="bg-gray-800/50 border border-red-600/20 rounded-lg p-4">
                <h4 className="text-red-400 font-bold mb-2">No Tax</h4>
                <p className="text-gray-400 text-sm">0% buy/sell tax. What you see is what you get.</p>
              </div>
              <div className="bg-gray-800/50 border border-red-600/20 rounded-lg p-4">
                <h4 className="text-red-400 font-bold mb-2">Community Owned</h4>
                <p className="text-gray-400 text-sm">50% of tokens distributed to the community for free.</p>
              </div>
              <div className="bg-gray-800/50 border border-red-600/20 rounded-lg p-4">
                <h4 className="text-red-400 font-bold mb-2">Burned Liquidity</h4>
                <p className="text-gray-400 text-sm">Liquidity tokens burned. No rug pulls possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
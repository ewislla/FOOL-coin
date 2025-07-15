import React from 'react';
import { Wallet, ArrowRight, Bot, Shield, Zap } from 'lucide-react';

const HowToBuy = () => {
  const steps = [
    {
      number: "01",
      title: "Get a Wallet",
      description: "Download MetaMask or use any Polygon-compatible wallet",
      icon: <Wallet size={24} />
    },
    {
      number: "02",
      title: "Add Polygon Network",
      description: "Connect your wallet to Polygon network",
      icon: <Shield size={24} />
    },
    {
      number: "03",
      title: "Get MATIC",
      description: "Purchase MATIC tokens for gas fees",
      icon: <Zap size={24} />
    },
    {
      number: "04",
      title: "Use Trading Bots",
      description: "Use supported bots: Dexbot, Maestro, or Unibot",
      icon: <Bot size={24} />
    },
    {
      number: "05",
      title: "Buy $FOOL",
      description: "Enter contract address and swap for $FOOL",
      icon: <ArrowRight size={24} />
    }
  ];

  const bots = [
    { name: "Dexbot", description: "Fast and reliable trading" },
    { name: "Maestro", description: "Advanced trading features" },
    { name: "Unibot", description: "User-friendly interface" }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-l from-red-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider glitch-text">
            HOW TO 
            <span className="text-red-600"> BUY $FOOL</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the rebellion in 5 simple steps. No bullshit, just action.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 transition-all hover:transform hover:scale-105">
                <div className="text-red-600 text-2xl font-bold mb-3">{step.number}</div>
                <div className="text-red-400 mb-3">{step.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-red-600" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Supported Trading Bots</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bots.map((bot, index) => (
              <div key={index} className="bg-black/50 border border-red-600/20 rounded-lg p-6 text-center hover:border-red-600/50 transition-all">
                <h4 className="text-lg font-bold text-white mb-2">{bot.name}</h4>
                <p className="text-gray-400 text-sm">{bot.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-red-600/30">
            START BUYING NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
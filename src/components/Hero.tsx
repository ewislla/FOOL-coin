import React from 'react';
import { ArrowRight, Copy } from 'lucide-react';

const Hero = () => {
  const copyContract = () => {
    navigator.clipboard.writeText('0x1234567890abcdef1234567890abcdef12345678');
    // Add toast notification here
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-4 shadow-2xl shadow-red-600/50 rounded-full overflow-hidden">
              <img src="assets/logo.jpg" alt="$FOOL Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-wider leading-tight">
            <span className="glitch-text">STAY FOOLISH.</span>
            <br />
            <span className="text-red-600 glitch-text">STAY FREE.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A meme token for the broken, the bold, the laughed-at.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We didn't come to ask for permission. We came to scream we f*cking made it. 
            Emotional. Rebellious. No apologies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-red-600/30 flex items-center justify-center">
              BUY $FOOL
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center">
              READ WHITEPAPER
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          {/* Contract Address */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-400 mb-2">Contract Address:</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-white font-mono text-sm md:text-base">0x1234567890abcdef1234567890abcdef12345678</span>
              <button onClick={copyContract} className="text-red-400 hover:text-red-300 transition-colors">
                <Copy size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
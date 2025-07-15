import React from 'react';
import { MessageCircle, Users, Twitter, ExternalLink } from 'lucide-react';

const Community = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <MessageCircle size={24} />,
      url: "#",
      description: "Join the rebellion chat",
      members: "5.2K"
    },
    {
      name: "Discord",
      icon: <Users size={24} />,
      url: "#",
      description: "Community discussions",
      members: "3.8K"
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "#",
      description: "Latest updates & memes",
      members: "12.1K"
    }
  ];

  const updates = [
    {
      time: "2h ago",
      content: "New partnership announced with major DeFi protocol 🔥",
      author: "@fooldev"
    },
    {
      time: "4h ago",
      content: "Community airdrop round 2 is live! Check your wallets 💀",
      author: "@fooladmin"
    },
    {
      time: "6h ago",
      content: "We're trending on CoinGecko! The fools are making noise 📈",
      author: "@foolmarketing"
    }
  ];

  return (
    <section id="community" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider glitch-text">
            JOIN THE 
            <span className="text-red-600">REBELLION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with fellow fools. Share your story. Build something beautiful from the chaos.
          </p>
          <div className="text-2xl font-bold text-red-600 mb-8">
            BE A FOOL. BE FREE.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 transition-all hover:transform hover:scale-105 group">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
              <p className="text-gray-400 mb-4">{link.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-red-400 font-semibold">{link.members} members</span>
                <ExternalLink size={18} className="text-red-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Live Updates */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Live Updates</h3>
            <div className="space-y-4">
              {updates.map((update, index) => (
                <div key={index} className="bg-black/50 border border-red-600/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-400 font-semibold">{update.author}</span>
                    <span className="text-gray-500 text-sm">{update.time}</span>
                  </div>
                  <p className="text-gray-300">{update.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-red-600/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Community Power</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-white">Total Holders</span>
                <span className="text-red-400 font-bold text-xl">8,472</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">24h Volume</span>
                <span className="text-red-400 font-bold text-xl">$142K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Market Cap</span>
                <span className="text-red-400 font-bold text-xl">$2.8M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Fools Online</span>
                <span className="text-red-400 font-bold text-xl">1,234</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Ready to Join?</h3>
            <p className="text-gray-300 mb-6">
              Don't watch from the sidelines. Join the movement that's redefining what it means to be a fool.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-red-600/30">
              JOIN THE REBELLION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
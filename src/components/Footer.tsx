import React from 'react';
import { Twitter, MessageCircle, Users, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-red-600/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="assets/logo.jpg" alt="$FOOL Logo" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-white font-bold text-xl tracking-wider">$FOOL</span>
            </div>
            <p className="text-gray-400 max-w-md">
              A rebellion turned into code. For the broken, the bold, and the laughed-at. 
              Stay foolish, stay free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#how-to-buy" className="text-gray-400 hover:text-red-400 transition-colors">How to Buy</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-red-400 transition-colors">Tokenomics</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-red-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Users size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-600/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 $FOOL Token. Built by fools, for fools. 
            <span className="text-red-400 ml-2">Stay rebellious.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
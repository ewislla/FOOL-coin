import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
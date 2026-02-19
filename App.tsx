import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-furnora-orange selection:text-white pb-10">
      <Navbar />
      <main className="container mx-auto px-4 pt-4 md:pt-8">
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
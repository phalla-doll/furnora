import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-furnora-orange selection:text-white pb-0">
      <Navbar />
      <main className="container mx-auto px-4 pt-4 md:pt-8 flex flex-col gap-10 mb-20">
        <HeroSection />
        <Features />
        <NewArrivals />
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
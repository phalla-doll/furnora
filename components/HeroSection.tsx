import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-10 pb-10">
      
      {/* Huge Title Section */}
      <div className="relative w-full pt-10 pb-2 md:pb-10 min-h-[auto] md:min-h-[250px] flex flex-col md:block items-center">
        <h1 className="text-[18vw] md:text-[14rem] leading-[0.8] font-bold font-cabinet text-furnora-dark tracking-tighter text-center select-none pointer-events-none w-full">
          Furnora
        </h1>
      </div>

      {/* Main Image Area - Full Width */}
      <div className="w-full h-[400px] lg:h-[600px] relative">
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
           <img 
             src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
             alt="Modern Living Room" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           
           {/* Gradient Overlay for subtle depth */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

           {/* Reviews Badge Floating */}
           <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-2 pr-5 rounded-full flex items-center gap-3 shadow-lg transition-transform hover:scale-105 cursor-pointer z-10">
             <div className="flex -space-x-3">
               <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
               <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
               <img src="https://i.pravatar.cc/100?img=8" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
             </div>
             <div className="flex flex-col">
               <span className="text-sm font-bold text-furnora-dark">Check</span>
               <span className="text-xs text-gray-500 font-medium">Reviews</span>
             </div>
           </div>

           {/* Floating Glass Card - Moved to overlay image */}
           <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 glass-panel p-6 md:p-8 rounded-3xl max-w-[280px] md:max-w-sm shadow-sm backdrop-blur-xl z-20 bg-white/60">
             <p className="text-furnora-dark text-lg md:text-xl font-medium leading-relaxed">
               Modern homes deserve furniture that speaks the language of simplicity.
             </p>
           </div>
        </div>
      </div>

      {/* Bottom CTA Button Area */}
      <div className="w-full flex justify-end mt-4 lg:mt-[-100px] lg:relative lg:z-10 lg:pr-12 pointer-events-none">
        <button className="pointer-events-auto bg-furnora-orange text-white text-lg font-semibold py-4 px-5 pr-3 rounded-full flex items-center gap-4 shadow-xl hover:shadow-2xl hover:bg-orange-600 transition-all transform hover:-translate-y-1">
          <span className="pl-4">Shop Now</span>
          <div className="bg-white text-furnora-orange w-10 h-10 rounded-full flex items-center justify-center">
            <ArrowUpRight size={24} />
          </div>
        </button>
      </div>

    </div>
  );
};

export default HeroSection;
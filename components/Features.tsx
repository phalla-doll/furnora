import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Award, ArrowUpRight } from 'lucide-react';

const features = [
  { 
    icon: Truck, 
    title: "Free Shipping", 
    desc: "Complementary delivery on all orders over $200 throughout the country." 
  },
  { 
    icon: ShieldCheck, 
    title: "Secure Payment", 
    desc: "Transactions protected with 256-bit encryption for your safety." 
  },
  { 
    icon: Award, 
    title: "Premium Quality", 
    desc: "Expertly crafted from sustainable materials with attention to every detail." 
  },
  { 
    icon: RefreshCw, 
    title: "Easy Returns", 
    desc: "Simple 30-day return policy to ensure you love your new space." 
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 w-full relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
        <div>
           <span className="text-furnora-orange font-bold uppercase tracking-widest text-xs mb-2 block">Why Furnora</span>
           <h2 className="text-4xl md:text-5xl font-bold font-cabinet text-furnora-dark leading-tight">
             Experience the <br /> 
             <span className="text-gray-400">Difference.</span>
           </h2>
        </div>
        <p className="max-w-md text-gray-500 text-lg leading-relaxed mt-6 md:mt-0">
          We don't just sell furniture; we curate experiences for modern living spaces designed to inspire.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {features.map((feature, idx) => (
          <div key={idx} className="group flex flex-col items-start relative pt-8 border-t border-gray-200 transition-colors duration-500 hover:border-furnora-orange">
            {/* Numbering - Background matches body color to create a 'cut' effect on the border */}
            <span className="absolute top-[-16px] right-0 bg-[#F8F9FA] pl-4 text-gray-300 font-cabinet font-bold text-xl group-hover:text-furnora-orange transition-colors">
              0{idx + 1}
            </span>

            {/* Icon & Interaction */}
            <div className="mb-6 flex justify-between w-full items-center">
              <div className="p-3 bg-gray-50 rounded-full text-furnora-dark group-hover:bg-furnora-dark group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <ArrowUpRight className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={20} />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-furnora-dark mb-3 font-cabinet group-hover:translate-x-1 transition-transform duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base pr-4 group-hover:text-gray-600 transition-colors">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
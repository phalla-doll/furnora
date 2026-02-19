import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Award } from 'lucide-react';

const features = [
  { 
    icon: Truck, 
    title: "Free Shipping", 
    desc: "On all orders over $200 throughout the country." 
  },
  { 
    icon: ShieldCheck, 
    title: "Secure Payment", 
    desc: "100% secure payment with 256-bit encryption." 
  },
  { 
    icon: Award, 
    title: "Premium Quality", 
    desc: "Crafted from the finest materials with attention to detail." 
  },
  { 
    icon: RefreshCw, 
    title: "Easy Returns", 
    desc: "30-day return policy for your peace of mind." 
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 text-furnora-orange group-hover:scale-110 transition-transform duration-300 border border-gray-100">
              <feature.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-furnora-dark mb-3 font-cabinet">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
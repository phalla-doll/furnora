import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    content: "The quality of the velvet chair is unmatched. It completely transformed my living room with its elegance. Truly a masterpiece.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: "I appreciate the attention to detail in every piece. The joinery is perfect, and materials are clearly sourced with sustainability in mind.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    role: "Home Owner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: "Fast delivery and the packaging was eco-friendly. Furnora has set a new standard for online furniture shopping. Highly recommend!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-furnora-dark relative overflow-hidden w-full">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-furnora-orange opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-furnora-orange font-bold uppercase tracking-widest text-xs mb-2 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold font-cabinet text-white leading-tight">
              What our <span className="text-white/50 italic font-serif">clients</span> <br /> are saying.
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
            Read genuine feedback from our community of design enthusiasts and homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FF7A00" className="text-furnora-orange" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-lg text-gray-200 leading-relaxed font-light mb-8 opacity-90">
                  "{item.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" />
                <div>
                  <h4 className="text-white font-bold font-cabinet text-lg">{item.name}</h4>
                  <p className="text-gray-500 text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
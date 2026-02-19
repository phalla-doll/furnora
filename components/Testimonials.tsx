import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    content: "The quality of the velvet chair is unmatched. It completely transformed my living room with its elegance. Truly a masterpiece.",
    rating: 5,
    date: "2 days ago"
  },
  {
    name: "Michael Chen",
    role: "Architect",
    content: "I appreciate the attention to detail in every piece. The joinery is perfect, and materials are clearly sourced with sustainability in mind.",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Emma Wilson",
    role: "Home Owner",
    content: "Fast delivery and the packaging was eco-friendly. Furnora has set a new standard for online furniture shopping.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "David Ross",
    role: "Art Director",
    content: "Minimalist perfection. The lighting fixtures added just the right amount of warmth to my studio without being obtrusive.",
    rating: 4,
    date: "1 month ago"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 w-full relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side - Sticky Header & Summary */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <span className="text-furnora-orange font-bold uppercase tracking-widest text-xs mb-3 block">
              Community Love
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-cabinet text-furnora-dark leading-[1.1] mb-6">
              Loved by <br />
              <span className="text-gray-400">Designers</span> & <br />
              <span className="text-gray-400">Creators.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Join thousands of satisfied customers who have transformed their spaces with Furnora.
            </p>

            {/* Rating Summary Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 inline-flex flex-col gap-2">
               <div className="flex items-center gap-3">
                 <span className="text-5xl font-bold font-cabinet text-furnora-dark">4.9</span>
                 <div className="flex flex-col">
                   <div className="flex gap-1 text-furnora-orange mb-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                     ))}
                   </div>
                   <span className="text-sm text-gray-400 font-medium">from 2,000+ reviews</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Side - Staggered Grid of Reviews */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group flex flex-col gap-6 ${idx % 2 !== 0 ? 'md:translate-y-12' : ''}`}
                >
                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-furnora-orange opacity-50 group-hover:opacity-100 group-hover:bg-furnora-orange group-hover:text-white transition-all">
                    <Quote size={18} fill="currentColor" />
                  </div>

                  <p className="text-furnora-dark text-lg leading-relaxed font-medium">
                    "{item.content}"
                  </p>
                  
                  <div className="mt-auto flex justify-between items-end border-t border-gray-50 pt-6">
                    <div>
                      <h4 className="font-bold font-cabinet text-lg text-furnora-dark">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < item.rating ? "text-furnora-orange" : "text-gray-200"} 
                          fill={i < item.rating ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Visual spacer for the staggered effect on desktop */}
            <div className="hidden md:block h-12"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
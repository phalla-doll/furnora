import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface ListingCardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  isNew?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({ image, title, category, price, rating, isNew }) => {
  return (
    <div className="group flex flex-col gap-5 relative cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] bg-[#F4F5F7] rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
        
        {/* Badges */}
        {isNew && (
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-furnora-dark text-xs font-bold px-4 py-2 rounded-full z-10 shadow-sm border border-white/50">
            NEW ARRIVAL
          </div>
        )}

        {/* Wishlist Button (Top Right) */}
        <button className="absolute top-5 right-5 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all duration-300 z-10 shadow-sm opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0">
          <Heart size={18} />
        </button>

        {/* Add to Cart Action (Bottom) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 w-[calc(100%-2.5rem)]">
          <button className="w-full bg-white/95 backdrop-blur-md text-furnora-dark py-3.5 rounded-full shadow-lg hover:bg-furnora-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-bold font-cabinet tracking-wide">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>

        {/* Image */}
        <img 
           src={image} 
           alt={title} 
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on hover for better text contrast/focus effect */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Details */}
      <div className="flex flex-col px-1">
        <div className="flex justify-between items-start mb-1">
           <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{category}</span>
           <div className="flex gap-1 items-center bg-white px-2 py-0.5 rounded-full border border-gray-100 shadow-sm">
              <Star size={12} fill="#FACC15" className="text-yellow-400" />
              <span className="text-xs font-bold text-furnora-dark">{rating}.0</span>
           </div>
        </div>

        <div className="flex justify-between items-end gap-4">
          <h3 className="text-furnora-dark text-xl font-bold font-cabinet leading-tight group-hover:text-furnora-orange transition-colors duration-300">
            {title}
          </h3>
          <span className="text-furnora-dark font-bold text-xl font-cabinet">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
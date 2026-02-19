import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

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
    <div className="group flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
        
        {/* Badges */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-furnora-dark text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
            NEW
          </div>
        )}

        {/* Hover Action */}
        <button className="absolute bottom-4 right-4 bg-white text-furnora-dark p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-furnora-orange hover:text-white">
          <ShoppingCart size={20} />
        </button>

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center p-8 bg-gray-50">
           <img 
             src={image} 
             alt={title} 
             className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
           />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 px-2">
        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">{category}</span>
        <div className="flex justify-between items-start">
          <h3 className="text-furnora-dark text-xl font-bold font-cabinet leading-tight group-hover:text-furnora-orange transition-colors">
            {title}
          </h3>
          <span className="text-furnora-dark font-bold text-lg">${price}</span>
        </div>
        
        {/* Rating */}
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < rating ? "#FACC15" : "none"} 
              className={i < rating ? "text-yellow-400" : "text-gray-300"} 
            />
          ))}
          <span className="text-xs text-gray-400 ml-1 font-medium">({rating}.0)</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
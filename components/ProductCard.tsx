import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  colors: string[];
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, colors, rating }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Layout: Image on Right, Controls on Left or Stacked? 
          Image shows Image taking up most space, text below.
          Wait, looking at the reference, the controls (colors) are on the left vertical axis, image is central/right.
      */}
      
      <div className="flex-1 flex relative">
         {/* Color Palette - Vertical on the left */}
         <div className="flex flex-col gap-2 pt-4">
            {colors.map((color, idx) => (
              <div 
                key={idx} 
                className={`w-4 h-4 rounded-full cursor-pointer ring-1 ring-offset-2 ring-transparent hover:ring-gray-300 transition-all ${idx === 1 ? 'ring-gray-300' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
         </div>

         {/* Product Image */}
         <div className="flex-1 flex items-center justify-center relative">
            <img 
              src={image} 
              alt={title} 
              className="max-h-[140px] lg:max-h-[160px] object-contain drop-shadow-xl transition-transform hover:scale-110 duration-500"
            />
         </div>
      </div>

      {/* Info Section */}
      <div className="mt-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-furnora-dark font-semibold text-lg">{title}</h3>
            <div className="flex gap-0.5 mt-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill={i < rating ? "currentColor" : "none"} strokeWidth={i < rating ? 0 : 2} className={i >= rating ? "text-gray-300" : ""} />
              ))}
            </div>
          </div>
          <span className="text-furnora-dark font-bold text-lg">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
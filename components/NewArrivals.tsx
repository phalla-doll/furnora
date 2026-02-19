import React from 'react';
import ListingCard from './ListingCard';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: "Velvet Accent Chair",
    category: "Chair",
    price: 189,
    rating: 5,
    isNew: true,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Minimalist Lamp",
    category: "Lighting",
    price: 89,
    rating: 4,
    isNew: true,
    image: "https://images.unsplash.com/photo-1513506003013-1b6a4286193d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Oak Side Table",
    category: "Table",
    price: 145,
    rating: 5,
    isNew: false,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Ceramic Vase Set",
    category: "Decoration",
    price: 65,
    rating: 4,
    isNew: false,
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800&auto=format&fit=crop"
  }
];

const NewArrivals: React.FC = () => {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <span className="text-furnora-orange font-bold uppercase tracking-wider text-sm">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold font-cabinet text-furnora-dark mt-3 leading-tight">
            Crafted for <span className="text-gray-400">Comfort</span>, <br /> Designed for <span className="text-gray-400">Style</span>.
          </h2>
        </div>
        <button className="flex items-center gap-2 text-furnora-dark font-semibold border-b-2 border-furnora-dark pb-1 hover:text-furnora-orange hover:border-furnora-orange transition-all">
          View All Collection <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ListingCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
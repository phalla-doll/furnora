import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-transparent relative z-50">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-tight text-furnora-dark">
        Furnora
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2">
        <a href="#" className="bg-furnora-orange text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-orange-200 transition-transform hover:scale-105">
          Home
        </a>
        <a href="#" className="text-gray-500 hover:text-furnora-dark font-medium transition-colors">About Us</a>
        <a href="#" className="text-gray-500 hover:text-furnora-dark font-medium transition-colors">Products</a>
        <a href="#" className="text-gray-500 hover:text-furnora-dark font-medium transition-colors">Gallery</a>
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="p-2.5 rounded-full bg-white hover:bg-gray-100 transition-colors text-gray-600">
          <Search size={20} />
        </button>
        <button className="p-2.5 rounded-full bg-white hover:bg-gray-100 transition-colors text-gray-600 relative">
          <ShoppingBag size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="p-2.5 rounded-full bg-furnora-orange text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-100">
          <User size={20} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-furnora-dark"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 z-50 md:hidden rounded-b-3xl">
           <a href="#" className="text-furnora-orange font-bold">Home</a>
           <a href="#" className="text-gray-600">About Us</a>
           <a href="#" className="text-gray-600">Products</a>
           <a href="#" className="text-gray-600">Gallery</a>
           <div className="flex gap-4 mt-4 border-t pt-4">
             <button className="p-2 bg-gray-100 rounded-full"><Search size={20}/></button>
             <button className="p-2 bg-gray-100 rounded-full"><ShoppingBag size={20}/></button>
             <button className="p-2 bg-furnora-orange text-white rounded-full"><User size={20}/></button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
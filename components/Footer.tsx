import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 rounded-t-[3rem] mt-24 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="text-4xl font-bold tracking-tight text-furnora-dark font-cabinet">
              Furnora.
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm text-lg">
              We craft furniture that blends functionality with timeless aesthetics, creating spaces that feel truly yours.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-furnora-orange hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-furnora-orange hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-furnora-orange hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-furnora-orange hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns - Wrapped in a sub-grid for better spacing control on lg */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-furnora-dark mb-8 text-xl font-cabinet">Company</h4>
              <ul className="flex flex-col gap-5 text-gray-500">
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-furnora-dark mb-8 text-xl font-cabinet">Shop</h4>
              <ul className="flex flex-col gap-5 text-gray-500">
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Living Room</a></li>
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Bedroom</a></li>
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Kitchen</a></li>
                <li><a href="#" className="hover:text-furnora-orange transition-colors hover:translate-x-1 inline-block duration-200">Office</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="font-bold text-furnora-dark mb-2 text-xl font-cabinet">Stay Updated</h4>
            <p className="text-gray-500 mb-2 leading-relaxed">Subscribe to our newsletter to get the latest updates and exclusive offers.</p>
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-furnora-orange/20 focus:border-furnora-orange transition-all placeholder:text-gray-400"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-furnora-orange text-white rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 flex items-center justify-center hover:scale-105">
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 Furnora Inc. All rights reserved.</p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-furnora-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-furnora-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-furnora-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
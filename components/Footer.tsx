import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-3xl font-bold tracking-tight text-furnora-dark font-cabinet">
              Furnora
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              We craft furniture that blends functionality with timeless aesthetics, creating spaces that feel truly yours.
            </p>
            <div className="flex gap-4 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-furnora-orange hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-furnora-dark mb-6 text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-500">
              <li><a href="#" className="hover:text-furnora-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-furnora-dark mb-6 text-lg">Shop</h4>
            <ul className="flex flex-col gap-4 text-gray-500">
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Living Room</a></li>
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Bedroom</a></li>
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Kitchen</a></li>
              <li><a href="#" className="hover:text-furnora-orange transition-colors">Office</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-furnora-dark mb-6 text-lg">Stay Updated</h4>
            <p className="text-gray-500 mb-6">Subscribe to our newsletter to get the latest updates and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-furnora-orange/20 focus:border-furnora-orange transition-all"
              />
              <button className="absolute right-2 top-2 p-2 bg-furnora-orange text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100">
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Furnora Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-furnora-dark">Privacy Policy</a>
            <a href="#" className="hover:text-furnora-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
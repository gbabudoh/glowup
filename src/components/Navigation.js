'use client';

import { useState } from 'react';
import { ShoppingBag, Heart, Search, User, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-semibold text-pink-600">GlowUp</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart className="h-6 w-6 text-gray-600" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex space-x-4 justify-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart className="h-6 w-6 text-gray-600" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
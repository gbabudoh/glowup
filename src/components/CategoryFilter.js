// components/CategoryFilter.js
'use client';

import { useState, useEffect } from 'react';
import { categories } from '../data/products';
import { getLastViewedCategory, saveLastViewedCategory } from '../lib/userPreferences';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const lastCategory = getLastViewedCategory();
    if (lastCategory && categories.some(cat => cat.name === lastCategory)) {
      setSelectedCategory(lastCategory);
    } else {
      setSelectedCategory("");
    }
  }, []);

  const dispatchCategoryChangeEvent = (category) => {
    const event = new CustomEvent('categoryChange', {
      detail: { category }
    });
    window.dispatchEvent(event);
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    saveLastViewedCategory(category);
    dispatchCategoryChangeEvent(category);
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="w-full mb-8">
      {/* Mobile view: Grid with 3 per row */}
      <div className="grid grid-cols-3 gap-2 mb-4 md:hidden">
        {/* All Products Button in mobile grid */}
        <button
          onClick={() => handleCategorySelect("")}
          className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex flex-col items-center justify-center ${
            selectedCategory === ""
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          aria-pressed={selectedCategory === ""}
        >
          <span className="text-xl mb-1">🛍️</span>
          <span className="whitespace-nowrap">All</span>
        </button>

        {/* Category Buttons in mobile grid */}
        {categories.map((category) => (
          <button
            key={`mobile-${category.name}`}
            onClick={() => handleCategorySelect(category.name)}
            className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex flex-col items-center justify-center ${
              selectedCategory === category.name
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
            aria-pressed={selectedCategory === category.name}
          >
            <span className="text-xl mb-1 cursor-pointer">{category.icon}</span>
            <span className="capitalize whitespace-nowrap truncate w-full text-center">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Desktop view: Horizontal scroll */}
      <div className="hidden md:flex overflow-x-auto scrollbar-hide pb-4 gap-2">
        {/* All Products Button */}
        <button
          onClick={() => handleCategorySelect("")}
          className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            selectedCategory === ""
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          aria-pressed={selectedCategory === ""}
        >
          All Products
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={`desktop-${category.name}`}
            onClick={() => handleCategorySelect(category.name)}
            className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
              selectedCategory === category.name
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
            aria-pressed={selectedCategory === category.name}
          >
            <span className="text-lg flex-shrink-0 cursor-pointer">{category.icon}</span>
            <span className="capitalize whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
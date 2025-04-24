// components/ProductGrid.js
'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { getLastViewedCategory, saveLastViewedCategory } from '../lib/userPreferences';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // Listen for category changes from CategoryFilter component
  useEffect(() => {
    const handleCategoryChange = (e) => {
      if (e.detail && typeof e.detail.category === 'string') {
        setSelectedCategory(e.detail.category);
        saveLastViewedCategory(e.detail.category);
      }
    };
    
    // Check for last viewed category in localStorage
    const lastCategory = getLastViewedCategory();
    if (lastCategory) {
      setSelectedCategory(lastCategory);
    }
    
    window.addEventListener('categoryChange', handleCategoryChange);
    setIsLoading(false);
    
    return () => window.removeEventListener('categoryChange', handleCategoryChange);
  }, []);
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      
      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try selecting a different category or clearing your filters.</p>
        </div>
      )}
    </div>
  );
}
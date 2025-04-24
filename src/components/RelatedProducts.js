// components/RelatedProducts.js
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function RelatedProducts({ currentProductId, category }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    // Get products from the same category, excluding the current product
    const related = products
      .filter(p => p.category === category && p.id !== currentProductId)
      .slice(0, 4); // Limit to 4 related products
    
    setRelatedProducts(related);
  }, [currentProductId, category]);
  
  if (relatedProducts.length === 0) return null;
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={`related-${product.id}`} product={product} />
        ))}
      </div>
    </div>
  );
}
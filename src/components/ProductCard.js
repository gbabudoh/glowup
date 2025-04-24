// components/ProductCard.js
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative h-64 bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Positioned in top right corner with proper spacing */}
          <button 
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white shadow-sm text-gray-600 hover:text-pink-500 cursor-pointer z-10"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation to product detail
              // Add wishlist functionality here
              console.log('Added to wishlist:', product.name);
            }}
          >
            <Heart className="h-5 w-5" />
          </button>
          
          {/* Positioned in top left with proper spacing and z-index */}
          {product.discount && (
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <div>
              {product.originalPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
              ) : (
                <span className="text-lg font-semibold text-gray-900">{product.price}</span>
              )}
            </div>
            <button 
              className="px-3 py-1.5 bg-pink-600 text-white text-sm rounded-md hover:bg-pink-700 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation to product detail
                // Open affiliate link in new tab
                window.open(product.affLink, '_blank', 'noopener,noreferrer');
                
                // Track the click (optional)
                console.log('Affiliate link clicked:', product.name);
              }}
            >
              View Deal
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
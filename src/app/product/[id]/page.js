// app/product/[id]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Heart, Share2, ArrowLeft, Star, StarHalf, ShoppingBag, Check } from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { products } from '../../../data/products';
import { saveRecentlyViewedProducts } from '../../../lib/userPreferences';
import RelatedProducts from '../../../components/RelatedProducts';

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const productId = parseInt(params.id);
      const foundProduct = products.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        // Save to recently viewed products
        saveRecentlyViewedProducts(productId);
      }
      
      setLoading(false);
    }
  }, [params.id]);

  const handleGoBack = () => {
    router.back();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Redirect to affiliate link
  const handleViewDeal = () => {
    if (product?.affLink) {
      // Track the click
      console.log(`Affiliate link clicked: ${product.name}`);
      
      // You could send this to your analytics platform
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'affiliate_click', {
          product_id: product.id,
          product_name: product.name,
          product_category: product.category,
          product_price: product.price,
          affiliate_link: product.affLink
        });
      }
      
      // Open in new tab
      window.open(product.affLink, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn&#39;t find the product you&#39;re looking for.</p>
        <button 
          onClick={handleGoBack}
          className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </button>
      </div>
    );
  }

  // Generate stars for rating
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={handleGoBack}
          className="mb-6 flex items-center text-gray-600 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to products
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image Section - Simplified to single image */}
            <div>
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-pink-600 text-white text-sm font-bold px-3 py-1 rounded shadow-sm">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
            </div>

            {/* Product Details Section */}
            <div>
              {product.brand && (
                <div className="text-gray-500 text-sm mb-1">{product.brand}</div>
              )}
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {/* Ratings */}
              {product.rating && (
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderRatingStars(product.rating)}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviewCount || 0} reviews)
                  </span>
                </div>
              )}
              
              {/* Price */}
              <div className="mb-6">
                {product.originalPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    {product.discount && (
                      <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                        Save {product.discount}%
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              

              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleViewDeal}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  View Deal
                </button>
                
                <button className="p-3 rounded-md border border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                  <Heart className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={handleShare}
                  className="p-3 rounded-md border border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
              
              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.isBestSeller && (
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm">
                    <Star className="h-4 w-4 mr-1 fill-yellow-500 text-yellow-500" />
                    Bestseller
                  </div>
                )}
                
                {product.isNew && (
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm">
                    New Arrival
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </main>
      
      <Footer />
    </div>
  );
}
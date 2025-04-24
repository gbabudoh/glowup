// lib/userPreferences.js

export const saveLastViewedCategory = (category) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('last_viewed_category', category);
      }
    } catch (error) {
      console.error('Error saving category preference', error);
    }
  };
  
  export const getLastViewedCategory = () => {
    try {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('last_viewed_category') || '';
      }
      return '';
    } catch (error) {
      console.error('Error getting category preference', error);
      return '';
    }
  };
  
  export const saveRecentlyViewedProducts = (productId) => {
    try {
      if (typeof window !== 'undefined') {
        const recentProducts = JSON.parse(localStorage.getItem('recently_viewed') || '[]');
        
        // Add product to the beginning if not already there
        if (!recentProducts.includes(productId)) {
          recentProducts.unshift(productId);
        } else {
          // Move to first position if already in list
          const index = recentProducts.indexOf(productId);
          recentProducts.splice(index, 1);
          recentProducts.unshift(productId);
        }
        
        // Keep only the 10 most recent products
        const trimmedList = recentProducts.slice(0, 10);
        
        localStorage.setItem('recently_viewed', JSON.stringify(trimmedList));
      }
    } catch (error) {
      console.error('Error saving recently viewed products', error);
    }
  };
  
  export const getRecentlyViewedProducts = () => {
    try {
      if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('recently_viewed') || '[]');
      }
      return [];
    } catch (error) {
      console.error('Error getting recently viewed products', error);
      return [];
    }
  };
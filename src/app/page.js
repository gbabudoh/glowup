// app/page.js
import AdBanner from '../components/AdBanner';
import Navigation from '../components/Navigation';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <AdBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Premium Beauty Products</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover the best beauty products at amazing prices. We have curated the highest quality makeup, 
          lipstick, nail polish, and face creams to help you look and feel your best.
        </p>
        <CategoryFilter />
        <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}
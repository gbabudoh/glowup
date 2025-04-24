export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">GlowUp</h3>
              <p className="text-gray-400">Your destination for premium beauty products at amazing prices.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to receive updates on new products and special promotions.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-black"
                />
                <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GlowUp Beauty. All rights reserved. Affiliate disclosure: We earn from qualifying purchases.</p>
          </div>
        </div>
      </footer>
    );
  }
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      
      {/* Shopping Cart Icon */}
      <div className="mb-6">
        <svg 
          className="w-24 h-24 text-green-600 mx-auto opacity-50" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
      </div>

      <h1 className="text-7xl font-bold text-green-600">404</h1>

      <h2 className="text-3xl mt-4 font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 max-w-md text-lg">
        Looks like this page went out of stock! The link you followed may be broken or the page has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
        >
          Back to Home
        </Link>

        <Link
          href="/cities"
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-medium"
        >
          Explore Cities
        </Link>
      </div>

      {/* Additional Help Text */}
      <p className="mt-12 text-sm text-gray-500">
        Need help? <Link href="/contact" className="text-green-600 hover:underline font-medium">Contact us</Link>
      </p>

    </div>
  );
}
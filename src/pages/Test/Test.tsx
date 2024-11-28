import React from "react";

function Test() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo-placeholder.png"
              alt="QuickAd Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-gray-700">QuickAd</span>
          </div>

          {/* Menu */}
          <nav className="flex items-center space-x-4">
            <button className="text-gray-700">Find Ads</button>
            <button className="text-gray-700">Login</button>
            <button className="text-gray-700">Register</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Post Free Ad
            </button>
            <select
              className="bg-gray-100 border border-gray-300 rounded-lg px-2 py-1 text-sm"
              defaultValue="EN"
            >
              <option value="EN">EN</option>
              <option value="HI">HI</option>
            </select>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/background-placeholder.jpg")' }}></div>
        <div className="relative container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold">Buy And Sell</h1>
          <p className="mt-4 text-lg">
            Search thousands of classifieds all in one place
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Gharaunda, City"
              className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Test;

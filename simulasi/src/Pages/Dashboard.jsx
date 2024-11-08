import React from 'react';

function Dashboard() {
  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Inventory Management</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome, Admin! Here you can access and control all product data.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Total Products</h2>
            <p className="text-3xl font-bold text-gray-800">2,854</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">In Stock</h2>
            <p className="text-3xl font-bold text-gray-800">1,989</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Out of Stock</h2>
            <p className="text-3xl font-bold text-gray-800">865</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Low Inventory</h2>
            <p className="text-3xl font-bold text-gray-800">142</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Product Breakdown</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">By Category</h3>
              <div className="bg-white rounded-lg shadow-md p-4">
                <img src="/api/placeholder/400/320" alt="placeholder" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">By Supplier</h3>
              <div className="bg-white rounded-lg shadow-md p-4">
                <img src="/api/placeholder/400/320" alt="placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
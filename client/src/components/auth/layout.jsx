import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col p-4">
        <div className="text-3xl font-bold text-center mb-8">
          <span className="text-orange-500">Transport</span> Navigator
        </div>
        <nav>
          <ul>
            <li className="mb-6">
              <Link to="/" className="text-lg hover:text-orange-500">
                Dashboard
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/routes" className="text-lg hover:text-orange-500">
                Routes
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/map" className="text-lg hover:text-orange-500">
                Map
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/login" className="text-lg hover:text-orange-500">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">
          Welcome to the Transport Navigator
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Use this platform to track transport routes, view the map, and more.
        </p>

        {/* Transport Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Route Overview
            </h3>
            <p className="text-gray-600">
              Get detailed information about available transport routes in your
              area.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Live Map
            </h3>
            <p className="text-gray-600">
              View real-time updates on the map and track your transport
              options.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Settings
            </h3>
            <p className="text-gray-600">
              Adjust your personal preferences and settings for a tailored
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout; // Updated name

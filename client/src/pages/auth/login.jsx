import React from "react";

function login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Transport Navigator Login
        </h1>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-between">
          <span className="border-t border-gray-300 w-1/5"></span>
          <span className="text-sm text-gray-500">or continue with</span>
          <span className="border-t border-gray-300 w-1/5"></span>
        </div>

        {/* Social Buttons */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="flex items-center justify-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span className="ml-2 text-sm text-gray-700">Facebook</span>
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_G_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="ml-2 text-sm text-gray-700">Google</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default login;

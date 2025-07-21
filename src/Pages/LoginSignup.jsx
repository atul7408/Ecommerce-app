import React from 'react';

const LoginSignup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200">
            Continue
          </button>
        </div>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <span className="text-blue-600 hover:underline cursor-pointer">Login here</span>
        </p>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
          <input type="checkbox" className="mt-1" />
          <p>By continuing, I agree to the <span className="underline cursor-pointer">terms of use</span> & <span className="underline cursor-pointer">privacy policy</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

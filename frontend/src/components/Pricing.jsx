import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  return (
    <div className="mt-14 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* BASIC PLAN */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg text-white">
          <img
            src="pricing.jpg"
            alt="Pricing"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">BASIC PLAN</h3>
            <p className="text-lg mb-4">1000RS/1month</p>

            <ul className="mb-4 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Equipment</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Cardio Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Locker Room</span>
              </li>
            </ul>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>
        </div>

        {/* STANDARD PLAN */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg text-white">
          <img
            src="pricing.jpg"
            alt="Pricing"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Standard PlAN</h3>
            <p className="text-lg mb-4">5500RS/Heal_Yearly</p>

            <ul className="mb-4 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Equipment</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Cardio Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Locker Room</span>
              </li>
            </ul>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>
        </div>

        {/* PREMIUM PLAN */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg text-white">
          <img
            src="pricing.jpg"
            alt="Pricing"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Premium PLAN</h3>
            <p className="text-lg mb-4">10000/Yearly</p>

            <ul className="mb-4 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Equipment</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Cardio Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Locker Room</span>
              </li>
            </ul>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

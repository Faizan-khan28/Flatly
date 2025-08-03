import React from 'react';
import { useNavigate } from 'react-router-dom';

const OptionsScreen = () => {
  const navigate = useNavigate();

  const handleFlatsClick = () => {
    navigate('/Flats');
  };

  const handlePGsClick = () => {
    navigate('/Pgs');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 font-serif tracking-wide text-center animate-fade-in">
        Choose Your Perfect Stay
      </h1>

      {/* Flats and PGs Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-5xl mt-8 animate-slide-up">
        {/* Flats Option */}
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform duration-500 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col group"
          onClick={handleFlatsClick}
        >
          {/* Image on top half */}
          <div className="w-full h-48 sm:h-64">
            <img
              src="https://cdn.leonardo.ai/users/0298cbdc-98dc-4afd-8540-13bd3e13871d/generations/56763b39-48d6-4050-8ff0-50fd77dccf1b/Leonardo_Phoenix_An_elegant_and_modern_apartment_complex_with_1.jpg"
              alt="Flats Option"
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
            />
          </div>
          {/* Text on bottom half */}
          <div className="p-6 text-center bg-white">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Flats</h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base text-center group-hover:text-blue-500 transition-colors duration-300">
              Discover beautiful flats for rent
            </p>
          </div>
        </div>

        {/* PGs Option */}
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform duration-500 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col group"
          onClick={handlePGsClick}
        >
          {/* Image on top half */}
          <div className="w-full h-48 sm:h-64">
            <img
              src="https://cdn.leonardo.ai/users/0298cbdc-98dc-4afd-8540-13bd3e13871d/generations/b0c4b244-2439-45c8-9410-35ed048900ba/Leonardo_Phoenix_A_cozy_minimalist_room_with_a_single_bed_feat_1.jpg"
              alt="PGs Option"
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
            />
          </div>
          {/* Text on bottom half */}
          <div className="p-6 text-center bg-white">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">PGs</h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base text-center group-hover:text-purple-500 transition-colors duration-300">
              Find comfortable PG accommodations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsScreen;

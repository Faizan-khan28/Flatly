import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyOptions = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white-100 flex flex-col items-center justify-center py-8 px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif tracking-wide text-center">
        Choose Your Property Type For Purchase
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
        {/* Card 1: Buy Flats */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://cdn.leonardo.ai/users/0298cbdc-98dc-4afd-8540-13bd3e13871d/generations/bd47f333-aae6-4dbc-ae82-20374e8fb586/Leonardo_Phoenix_A_panoramic_view_of_a_modern_apartment_compl_1.jpg"
            alt="Buy Flats"
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Buy Flats</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Discover modern flats for sale in premium locations.
            </p>
          </div>
        </div>

        {/* Card 2: Buy Villas and Kothis */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Buy Villas and Kothis"
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Buy Villas & Kothis</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Find spacious and luxurious villas and kothis for your family.
            </p>
          </div>
        </div>

        {/* Card 3: Buy Land */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://www.ashoknandavanam.com/images/project/ecr/plot.jpg"
            alt="Buy Land"
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Buy Land</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Explore open plots and land for your dream project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOptions;

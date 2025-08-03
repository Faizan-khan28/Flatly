import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For arrows

// Importing images from the local assets folder
import flat1 from '/assets/2bhk/room.jpeg'; 
import flat2 from '/assets/2bhk/room2.jpeg'; 
import flat3 from '/assets/2bhk/room3.jpeg'; 
import flat4 from '/assets/2bhk/galery.jpeg'; 
import flat5 from '/assets/2bhk/gallery2.jpeg'; 
import flat6 from '/assets/2bhk/kichen.jpeg'; 
import flat7 from '/assets/2bhk/outsideview.jpeg'; 
import flat8 from '/assets/2bhk/toilet.jpeg'; 
import flat9 from '/assets/2bhk/Wodrob.jpeg'; 

import studio1 from '/assets/2bhk/room2.jpeg'; 
import studio2 from '/assets/2bhk/room3.jpeg'; 
import studio3 from '/assets/2bhk/room.jpeg'; 

import penthouse1 from '/assets/2bhk/room3.jpeg'; 
import penthouse2 from '/assets/2bhk/room2.jpeg'; 
import penthouse3 from '/assets/2bhk/room.jpeg'; 

// FlatsScreen Component
const FlatsScreen = () => {

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white-100 py-10 mt-28">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Flats for Rent 🏘️</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {flats.map((flat) => (
          <FlatCard key={flat.id} flat={flat} />
        ))}
      </div>
    </div>
  );
};

// FlatCard Component
const FlatCard = ({ flat }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % flat.images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [flat.images.length]);

  // Navigate through images
  const handleNextImage = (e) => {
    e.stopPropagation(); // Prevent card click
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % flat.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation(); // Prevent card click
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + flat.images.length) % flat.images.length);
  };

  // Navigate to /contact when the card (except the arrows) is clicked
  const handleCardClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <div 
      onClick={handleCardClick} // Card click handler
      className="bg-white-500 shadow-lg rounded-lg overflow-hidden cursor-pointer block"
    >
      <div className="relative">
        <img
          src={flat.images[currentImageIndex]}
          alt={flat.type}
          className="w-full h-48 object-cover"
        />
        {/* Left Arrow */}
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
        {/* Right Arrow */}
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{flat.type}</h2>
        <p className="text-xl text-blue-500 font-semibold mt-2">{flat.price}</p>
        <p className="text-gray-600 mt-4">{flat.description}</p>
      </div>
    </div>
  );
};

// Custom JSON data with flat images and info
const flats = [
  {
    id: 1,
    type: "2BHK Flat",
    price: "₹25,000/month",
    description: "Spacious 2-bedroom flat with modern amenities and a great view.",
    images: [flat1, flat2, flat3, flat4, flat5, flat6, flat7, flat8, flat9],
  },
  {
    id: 2,
    type: "Studio Apartment",
    price: "₹15,000/month",
    description: "Cozy studio in the heart of the city, perfect for singles or couples.",
    images: [studio1, studio2, studio3],
  },
  {
    id: 3,
    type: "Penthouse",
    price: "₹50,000/month",
    description: "Luxurious penthouse with panoramic city views and a private terrace.",
    images: [penthouse1, penthouse2, penthouse3],
  },
];

export default FlatsScreen;

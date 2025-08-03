import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Import images at the top
import doubleSharing1 from '/assets/pg/singlesharing.jpg';
import tripleSharing1 from '/assets/pg/triplesharing.jpg';
import fourSharing1 from   '/assets/pg/foursharing.jpg';
import doubleSharing2 from '/assets/pg/Doublesharing2.jpg';

// PGScreen Component
const PGScreen = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-20">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">PGs for Rent</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pgs.map((pg) => (
          <Link
            key={pg.id}
            to="/contact" // Navigate to contact page on click
            className="block bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={pg.image}
              alt={pg.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{pg.type}</h2>
              <p className="text-xl text-blue-500 font-semibold mt-2">{pg.price}</p>
              <p className="text-gray-600 mt-4">{pg.description}</p>
              <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Contact for Rent
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Custom JSON data for PGs with imported image paths
const pgs = [
  {
    id: 1,
    type: "Single Sharing",
    price: "₹14,000/month",
    description: "Comfortable single sharing PG with modern amenities and ample space.",
    image: doubleSharing1,
  },
  {
    id: 2,
    type: "Triple Sharing",
    price: "₹7,500/month",
    description: "Affordable triple sharing PG perfect for students and working professionals.",
    image: tripleSharing1,
  },
  {
    id: 3,
    type: "4 Sharing",
    price: "₹6,500/month",
    description: "Spacious 4 sharing PG with great facilities and large common areas.",
    image: fourSharing1,
  },
  {
    id: 4,
    type: "Double Sharing",
    price: "₹8,500/month",
    description: "Cozy double sharing PG in a prime location, with AC and Wi-Fi.",
    image: doubleSharing2,
  },
];

export default PGScreen;

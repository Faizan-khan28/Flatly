import React from 'react';
import ownerImage from     '/assets/images/parking.png'; // Example image path for owner
import managerImage from   '/assets/images/prakash.jpg'; // Example image path for manager
import developerImage from '/assets/images/harsh.jpg'; // Example image path for developer

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-hero-pattern">
        <div className="text-center text-white space-y-4 animate-fade-in-up">
          <h1 className="text-6xl font-bold">Welcome to HariomPG</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Your home away from home, where comfort meets affordability.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-semibold mb-10 text-indigo-700 animate-fade-in-up">About Us</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 animate-fade-in-up delay-150">
          At HariomPG, we strive to create a comfortable and welcoming environment for students and professionals alike.
          Located in the heart of the city, we offer easy access to essential services and public transportation.
          Our goal is to make your stay as pleasant and worry-free as possible, with high-quality facilities and excellent customer service.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up delay-300">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="text-indigo-600 text-5xl mb-4 animate-pulse">🏠</div>
            <h3 className="text-2xl font-semibold mb-4">Comfortable Rooms</h3>
            <p className="text-gray-600">
              Spacious, well-furnished rooms with modern amenities to make your stay as comfortable as possible.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="text-indigo-600 text-5xl mb-4 animate-pulse">🍽️</div>
            <h3 className="text-2xl font-semibold mb-4">Delicious Meals</h3>
            <p className="text-gray-600">
              Nutritious, home-cooked meals prepared daily, keeping your health and taste buds satisfied.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="text-indigo-600 text-5xl mb-4 animate-pulse">📶</div>
            <h3 className="text-2xl font-semibold mb-4">High-Speed Wi-Fi</h3>
            <p className="text-gray-600">
              Stay connected with our high-speed internet, available 24/7 for all our residents.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-indigo-700 mb-10 animate-fade-in-up">What Our Residents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              <p className="text-gray-600 mb-4">
                “HariomPG is the best place I've stayed! The staff are friendly, the rooms are clean, and the food is amazing.”
              </p>
              <h3 className="text-xl font-semibold">— Aakash Verma</h3>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              <p className="text-gray-600 mb-4">
                “Great facilities, and I love the central location. It’s perfect for students like me who want easy access to the city.”
              </p>
              <h3 className="text-xl font-semibold">— Priya Singh</h3>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              <p className="text-gray-600 mb-4">
                “Fast Wi-Fi, comfy rooms, and the best part is the amazing meals. It really feels like home!”
              </p>
              <h3 className="text-xl font-semibold">— Rajesh Patel</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-5xl font-semibold text-center mb-12 text-indigo-700 animate-fade-in-up">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-32 h-32 rounded-full mb-4 shadow-lg transform hover:scale-105 transition duration-300"
              src={ownerImage}
              alt="Hari Singh"
            />
            <h3 className="text-xl font-medium">Hari Singh</h3>
            <p className="text-gray-600">Owner</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-32 h-32 rounded-full mb-4 shadow-lg transform hover:scale-105 transition duration-300"
              src={managerImage}
              alt="Prakash"
            />
            <h3 className="text-xl font-medium">Prakash</h3>
            <p className="text-gray-600">Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-32 h-32 rounded-full mb-4 shadow-lg transform hover:scale-105 transition duration-300"
              src={developerImage}
              alt="Harsh Agnihotri"
            />
            <h3 className="text-xl font-medium">Harsh Agnihotri</h3>
            <p className="text-gray-600">Developer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-indigo-600 text-white py-6 text-center">
        <p>&copy; 2024 HariomPG. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default AboutPage;

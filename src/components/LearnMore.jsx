import React from 'react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white-100 py-12 px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Learn More About Hariom PG
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
          Hariom PG offers a safe, comfortable, and homely environment for students and working professionals. We provide high-quality accommodations with various facilities to make your stay as convenient as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1 - Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 mb-4">
              We provide a wide range of services such as housekeeping, laundry, high-speed internet, and more. Our goal is to make sure your stay is stress-free.
            </p>
            <a href="/services" className="text-blue-600 hover:underline">
              Explore Services &rarr;
            </a>
          </div>

          {/* Section 2 - Facilities */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facilities</h2>
            <p className="text-gray-600 mb-4">
              Hariom PG offers clean rooms, a common dining area, study rooms, gym facilities, and a friendly community of residents.
            </p>
            <a href="/facilities" className="text-blue-600 hover:underline">
              Learn About Our Facilities &rarr;
            </a>
          </div>

          {/* Section 3 - Location */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prime Location</h2>
            <p className="text-gray-600 mb-4">
              Located near major educational institutions and business hubs, Hariom PG offers easy access to all necessities like shopping, dining, and commuting.
            </p>
            <a href="/contact" className="text-blue-600 hover:underline">
              Find Us on the Map &rarr;
            </a>
          </div>
        </div>

        {/* Section 4 - Testimonials */}
        <div className="bg-white p-6 mt-12 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Testimonials</h2>
          <p className="text-gray-600 text-center">
            "Living at Hariom PG was a fantastic experience. The rooms are clean, and the staff is friendly. I never felt away from home!"
          </p>
          <p className="text-gray-600 text-center mt-2">- A Happy Resident</p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

import React, { useEffect } from 'react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col ">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-cover bg-center flex items-center justify-center bg-services-hero">
        <div className="text-center text-white space-y-4 animate-fade-in-up">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Discover the range of services we offer to ensure a comfortable and convenient stay at HariomPG.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-700 animate-fade-in-up">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-indigo-600 text-4xl mb-4">🛏️</div>
            <h3 className="text-2xl font-semibold mb-4">Comfortable Accommodation</h3>
            <p className="text-gray-600">
              Enjoy spacious and well-furnished rooms designed for your comfort. Each room includes modern amenities to make your stay enjoyable.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-indigo-600 text-4xl mb-4">🍲</div>
            <h3 className="text-2xl font-semibold mb-4">Home-Cooked Meals</h3>
            <p className="text-gray-600">
              Our in-house kitchen provides delicious and nutritious meals daily. From breakfast to dinner, enjoy fresh and healthy food.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-indigo-600 text-4xl mb-4">📶</div>
            <h3 className="text-2xl font-semibold mb-4">High-Speed Internet</h3>
            <p className="text-gray-600">
              Stay connected with our high-speed Wi-Fi available throughout the property. Perfect for work, study, and leisure.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-indigo-600 text-4xl mb-4">🧹</div>
            <h3 className="text-2xl font-semibold mb-4">Regular Cleaning</h3>
            <p className="text-gray-600">
              Our housekeeping team ensures that your room and common areas are cleaned regularly, maintaining a high standard of hygiene.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-indigo-600 text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-semibold mb-4">Maintenance Support</h3>
            <p className="text-gray-600">
              Our dedicated maintenance team is available to address any issues promptly, ensuring your stay is comfortable and hassle-free.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-indigo-600 text-4xl mb-4">🚲</div>
            <h3 className="text-2xl font-semibold mb-4">Local Transportation</h3>
            <p className="text-gray-600">
              We offer convenient transportation options to nearby locations and public transport, making your daily commute easier.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-700 animate-fade-in-up">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">What is included in the room rent?</h3>
              <p className="text-gray-600">
                The room rent includes accommodation, high-speed internet, and access to all common areas. Meals and other amenities are available at an additional cost.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Is there a security deposit required?</h3>
              <p className="text-gray-600">
                Yes, a security deposit is required to cover any potential damages. This deposit is refundable at the end of your stay, subject to conditions.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Can I have guests over?</h3>
              <p className="text-gray-600">
                Yes, you can have guests over. Please inform the management in advance and adhere to our guest policy to ensure everyone’s comfort and safety.
              </p>
            </div>
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

export default ServicesPage;

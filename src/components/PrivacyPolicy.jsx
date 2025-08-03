function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-10 shadow-xl rounded-xl">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">Privacy Policy</h1>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            At Hariom PG, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We may collect personal data such as your name, contact details, and preferences when you register or use our services. We may also collect information automatically such as your IP address.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The information collected is used to provide and improve our services, respond to inquiries, and communicate with you about updates or offers.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We do not share your personal information with third parties, except when required by law or when necessary to provide services to you.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We implement industry-standard security measures to protect your data from unauthorized access and breaches.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Changes to Our Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We may update this policy periodically. We encourage you to review this policy regularly to stay informed about how we protect your information.
              </p>
            </section>
          </div>
          <p className="mt-10 text-gray-700 leading-relaxed text-lg">
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:info@hariompg.com"
              className="text-blue-600 font-medium underline hover:text-blue-800"
            >
              hariompgandguesthouse@gmail.com
            </a>.
          </p>
        </div>
      </div>
    );
  }
  
  export default PrivacyPolicy;
  
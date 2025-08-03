function TermsAndConditions() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-10 shadow-2xl rounded-xl">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">Terms & Conditions</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to Hariom PG. By accessing or using our services, you agree to be bound by these terms and conditions.
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                By using Hariom PG's website or services, you agree to comply with and be bound by these terms. If you disagree with any part, please do not use our services.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. User Responsibilities</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                You are responsible for the accuracy of the information you provide. Misuse of our services, including illegal activities, is strictly prohibited.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Limitation of Liability</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Hariom PG is not liable for any damages or losses resulting from your use of our services. We make no guarantees regarding the availability or performance of our services.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Termination</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We reserve the right to terminate or suspend access to our services at any time, without prior notice, for violating these terms.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Governing Law</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                These terms are governed by the laws of India. Any disputes will be resolved in the courts of Noida.
              </p>
            </section>
          </div>
          <p className="mt-10 text-gray-700 text-lg leading-relaxed">
            For more details or if you have any questions, contact us at{" "}
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
  
  export default TermsAndConditions;
  
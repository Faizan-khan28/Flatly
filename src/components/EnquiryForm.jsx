import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+91 ',
    propertyType: '',
    roomOrBhkType: '',
    message: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [requestId, setRequestId] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // If user tries to change the phone input, reset it to '+91 ' if it is not valid
      if (value.length < 4 || !value.startsWith('+91 ')) {
        setFormData({ ...formData, phone: '+91 ' });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch('https://backend-qlic.onrender.com/api/user/SubmitEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      const data = await response.json();

      if (data.requestId) {
        setRequestId(data.requestId);
        setIsOtpSent(true);
        alert('OTP sent successfully! Please enter the OTP.');
      }
    } catch (error) {
      setError('There was an error sending your enquiry.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-qlic.onrender.com/api/user/SaveEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestId, otp, ...formData }),
      });

      if (!response.ok) {
        throw new Error('OTP verification failed');
      }

      setSuccessMessage('Enquiry saved successfully after OTP verification!');
      alert('Thank you for your message. Your enquiry has been saved successfully.');

      // Reset form and state
      setFormData({
        fullName: '',
        phone: '+91 ',
        propertyType: '',
        roomOrBhkType: '',
        message: '',
      });
      setOtp('');
      setRequestId('');
      setIsOtpSent(false);
    } catch (error) {
      setError('There was an error verifying the OTP.');
    }
  };

  const renderRoomOrBhkOptions = () => {
    switch (formData.propertyType) {
      case 'flats':
        return (
          <div>
            <label className="block text-lg font-medium mb-2">BHK Type</label>
            <select
              name="roomOrBhkType"
              value={formData.roomOrBhkType}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select BHK type</option>
              <option value="1BHK">1 BHK</option>
              <option value="2BHK">2 BHK</option>
              <option value="3BHK">3 BHK</option>
              <option value="4BHK">4 BHK</option>
            </select>
          </div>
        );
      case 'pgs':
        return (
          <div>
            <label className="block text-lg font-medium mb-2">Sharing Type</label>
            <select
              name="roomOrBhkType"
              value={formData.roomOrBhkType}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select sharing type</option>
              <option value="single">Single Room</option>
              <option value="double">Double Sharing</option>
              <option value="triple">Triple Sharing</option>
              <option value="four">Four Sharing</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-12">
      <header className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Enquire Now at FlatlySpaces</h1>
          <p className="text-lg mt-2">Fill out the form below to get started!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Enquiry Form</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {!isOtpSent ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="fullName">Full Name</label>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="propertyType">Property Type</label>
                <select
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="flats">Flats</option>
                  <option value="pgs">PGs</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {renderRoomOrBhkOptions()}

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition duration-200"
              >
                Send Enquiry
              </button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleOtpSubmit}>
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="otp">Enter OTP</label>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="OTP"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition duration-200"
              >
                Submit OTP & Save Enquiry
              </button>
            </form>
          )}
          {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
        </div>
      </main>
    </div>
  );
};

export default EnquiryForm;

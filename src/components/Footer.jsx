import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social icons
import logo from '/assets/images/logo.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 relative">
      {/* Decorative Background Image */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Logo & Tagline Section */}
        <div className="space-y-4">
          <img src={logo} alt="Hariom PG Logo" className="h-20 w-auto" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Experience premium living with Hariom PG. We provide comfortable accommodations with modern facilities in the best locations.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-300 text-base">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-green-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/Services" className="hover:text-green-400 transition-colors">Facilities</Link>
            </li>
            <li>
              <Link to="/Pgs" className="hover:text-green-400 transition-colors">Rooms</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 text-base">
            <strong>Phone:</strong> +91 93108 21158
          </p>
          <p className="text-gray-300 text-base">
            <strong>Email:</strong>
            <span className="block truncate text-ellipsis max-w-xs sm:max-w-full break-words">
              hariompganddguesthouse@gmail.com
            </span>
          </p>
          <p className="text-gray-300 text-base">
            <strong>Address:</strong> Hariom PG, Sector 141, Shahdara, Gali Number 35
          </p>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaFacebookF />
            </Link>
            <Link to="https://www.instagram.com/hariompgandflats/" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative z-10 border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; 2024 Hariom PG. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/Privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/Terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

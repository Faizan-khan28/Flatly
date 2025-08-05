import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiInfo, FiPhone, FiBriefcase, FiUser } from 'react-icons/fi';
import logo from '/assets/images/resident.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleLinkClick = () => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-20 top-0 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold text-white font-playfair tracking-wide">Flatly</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-blue-400 font-medium flex items-center gap-2" onClick={handleLinkClick}>
            <FiHome /> Home
          </Link>
          <Link to="/About" className="text-white hover:text-blue-400 font-medium flex items-center gap-2" onClick={handleLinkClick}>
            <FiInfo /> About
          </Link>
          <Link to="/Services" className="text-white hover:text-blue-400 font-medium flex items-center gap-2" onClick={handleLinkClick}>
            <FiBriefcase /> Services
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-400 font-medium flex items-center gap-2" onClick={handleLinkClick}>
            <FiPhone /> Contact
          </Link>
          {/* Login Button */}
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">
            Login
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-30 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}></div>

      <div className={`fixed right-0 top-0 h-full w-3/4 bg-black text-white z-40 flex flex-col p-6 space-y-6 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <FiX className="w-8 h-8" />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-start space-y-6">
          <Link to="/" onClick={handleLinkClick} className="text-xl flex items-center gap-3 hover:text-blue-400 transition">
            <FiHome /> Home
          </Link>
          <Link to="/About" onClick={handleLinkClick} className="text-xl flex items-center gap-3 hover:text-blue-400 transition">
            <FiInfo /> About
          </Link>
          <Link to="/Services" onClick={handleLinkClick} className="text-xl flex items-center gap-3 hover:text-blue-400 transition">
            <FiBriefcase /> Services
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="text-xl flex items-center gap-3 hover:text-blue-400 transition">
            <FiPhone /> Contact
          </Link>
          {/* Login Button */}
          <Link to="/login" className="w-full text-center bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

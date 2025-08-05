import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/Services';
import LearnMore from './components/LearnMore';
import PGScreen from './components/Pg/PgScreen';
import DevicesScreen from './components/Flats/FlatsScreen';
import ScrollToTop from './components/scrooltoTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsandCondition';
import AccountDeletionForm from './components/AccountDeletion';
import FloatingChatbot from './components/FloatingChatBot';
import AboutFlatly from './components/About';

function App() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#a7c9ff", "#9fbfff", "#96b5ff", "#8dacff", "#85a2ff", "#7c98ff",
      "#738eff", "#6b85ff", "#627bff", "#5972ff", "#5069ff", "#475fff",
      "#3e56ff", "#364dff", "#2d43ff", "#243aff", "#1b30ff", "#1227ff",
      "#091dff", "#0013ff", "#0011e6", "#0010cc"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <FloatingChatbot />
      <Routes>
        <Route path="/" element={<AboutFlatly />} />
        {/* <Route path="/" element={<OptionsScreen />} /> */}
        {/* <Route path="/" element={<PGList />} /> */}
        {/* <Route path="/" element={<Facilities />} /> */}
        {/* <Route path="/" element={<EnquiryForm />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/LearnMore" element={<LearnMore />} />
        <Route path="/Flats" element={<DevicesScreen />} />
        <Route path="/Pgs" element={<PGScreen />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<TermsAndConditions />} />
        <Route path="/AccountDelete" element={<AccountDeletionForm />} />




      </Routes>
      <Footer />
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </Router>
  );
}

export default App;

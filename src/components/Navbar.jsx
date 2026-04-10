import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo-box">LOGO</div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          <a href="/" className="active">Home</a>
          <a href="/about">About Us</a>
          <a href="/courses">Courses</a>
          <a href="/funding">Funding</a>
          <a href="/schedule">Schedule</a>
          <a href="/faqs">FAQ's</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Phone & Enroll (Desktop) */}
        <div className="nav-right desktop-only">
          <a href="tel:+6562728811" className="phone-link">
            <Phone size={17} color="#615C5C" />
            <span>+65 6272 8811</span>
          </a>
          <button className="btn-enroll">Enroll Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="/" className="active" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="/courses" onClick={() => setIsMenuOpen(false)}>Courses</a>
          <a href="/funding" onClick={() => setIsMenuOpen(false)}>Funding</a>
          <a href="/schedule" onClick={() => setIsMenuOpen(false)}>Schedule</a>
          <a href="/faqs" onClick={() => setIsMenuOpen(false)}>FAQ's</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <hr />
          <a href="tel:+6562728811" className="mobile-phone-link">
            <Phone size={17} />
            <span>+65 6272 8811</span>
          </a>
          <button className="btn-enroll mobile-enroll">Enroll Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

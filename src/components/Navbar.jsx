import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const IconPhone = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Funding', path: '/funding' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'FAQ\'s', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo-box" style={{ textDecoration: 'none' }}>LOGO</Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Phone & Enroll (Desktop) */}
        <div className="nav-right desktop-only">
          <a href="tel:+6512345678" className="phone-link">
            <IconPhone />
            <span style={{ marginLeft: '8px' }}>+65 1234 5678</span>
          </a>
          <button className="btn-enroll">Enroll Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <hr />
          <a href="tel:+6512345678" className="mobile-phone-link">
            <IconPhone />
            <span style={{ marginLeft: '8px' }}>+65 1234 5678</span>
          </a>
          <button className="btn-enroll mobile-enroll">Enroll Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

// Simple SVG Icons to replace Lucide
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconChat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Left Column: Company & Newsletter */}
        <div className="footer-col-main">
          <h2 className="footer-brand">ETANN Consultants</h2>
          <p className="footer-brand-desc">
            Singapore's premier provider of WSQ-certified security training courses. 
            Empowering security professionals with the skills and knowledge to excel in their careers.
          </p>
          
          <div className="newsletter-section">
            <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
            <p className="newsletter-subtitle">Get updates on new courses, special offers, and industry insights.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn-subscribe-new">
                <IconSend />
                <span>Subscribe</span>
              </button>
            </div>
          </div>

          <div className="social-box-row">
            <div className="social-box">
              <IconChat />
            </div>
            <div className="social-box">
              <IconFacebook />
            </div>
            <div className="social-box">
              <IconLinkedin />
            </div>
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="footer-col-links">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-link-list">
            <li><Link to="/courses">Browse Courses</Link></li>
            <li><Link to="/schedule">Course Schedule</Link></li>
            <li><Link to="/funding">Funding Options</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Right Column: Contact Info */}
        <div className="footer-col-contact">
          <h3 className="footer-col-title">Contact Us</h3>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <IconMail />
              <span>info@etannedusg.com</span>
            </div>
            <div className="contact-info-item">
              <IconPhone />
              <span>+65 1234 5678</span>
            </div>
            <div className="contact-info-item">
              <IconMapPin />
              <span>
                12 Arumugam Road, LTC Building B,<br />
                #02-02G, Singapore 409958
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright-text">
            © 2026 ETANN Consultants Pte Ltd. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

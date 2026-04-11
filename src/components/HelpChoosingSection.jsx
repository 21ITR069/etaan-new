import React from 'react';
import { Link } from 'react-router-dom';
import './HelpChoosingSection.css';

const HelpChoosingSection = () => {
  return (
    <section className="help-choosing-section">
      <div className="help-container">
        <div className="help-badge">WE'RE HERE TO HELP</div>
        <h2 className="help-title">Need Help Choosing?</h2>
        <p className="help-subtitle">
          Our team is here to help you select the right course for your career goals
        </p>
        <Link to="/contact" className="btn-contact-blue">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default HelpChoosingSection;

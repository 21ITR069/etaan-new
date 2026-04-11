import React from 'react';
import CourseCatalogSection from '../components/CourseCatalogSection';
import './CoursesPage_Isolated.css';
import HelpChoosingSection from '../components/HelpChoosingSection';

const CoursesPage = () => {
  return (
    <div className="courses-page-root">
      {/* Header Hero Section */}
      <section className="courses-hero-section">
        <span className="courses-badge">PROFESSIONAL TRAINING</span>
        <h1 className="courses-title">Course Catalog</h1>
        <p className="courses-subtitle">
          Browse our comprehensive range of WSQ-certified security training programs
        </p>
      </section>
      
      {/* Main Catalog Section */}
      <div className="courses-catalog-container">
        <CourseCatalogSection />
      </div>

      {/* Help Choosing Section */}
      <HelpChoosingSection />
    </div>
  );
};

export default CoursesPage;

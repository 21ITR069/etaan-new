import React from 'react';
import CourseCatalogSection from '../components/CourseCatalogSection';
import './CoursesPage.css';
import HelpChoosingSection from '../components/HelpChoosingSection';

const CoursesPage = () => {
  return (
    <div className="courses-page-container">
      {/* Header Section */}
      <div className="catalog-header-area">
        <div className="catalog-badge">PROFESSIONAL TRAINING</div>
        <h1 className="section-title">Course Catalog</h1>
        <p className="section-subtitle">
          Browse our comprehensive range of WSQ-certified security training programs
        </p>
      </div>
      
      {/* Main Catalog Section */}
      <CourseCatalogSection />

      {/* Help Section */}
      <HelpChoosingSection />
    </div>
  );
};

export default CoursesPage;

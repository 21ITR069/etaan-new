import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/coursesData';
import './CoursesSection.css';

const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const CourseCard = ({ course }) => (
  <Link to={`/course/${course.id}`} className="explore-card-item">
    <div className="explore-card-badge">new</div>
    <div className="explore-card-main">
      <h2 className="explore-card-title">{course.code}</h2>
    </div>
    <div className="explore-card-footer">
      <div className="explore-card-info">
        <h3 className="explore-card-category">Security</h3>
        <p className="explore-card-desc">{course.title}</p>
      </div>
      <div className="explore-card-arrow">
        <IconArrowRight />
      </div>
    </div>
  </Link>
);

const CoursesSection = ({ searchTerm = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  // Filter courses based on search term
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayCourses = filteredCourses.slice(0, 4);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      if (window.innerWidth > 640) {
        setCurrentIndex(0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index when search changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [searchTerm]);

  // Automatic sliding for mobile
  useEffect(() => {
    if (!isMobile || displayCourses.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayCourses.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile, displayCourses.length]);

  return (
    <section className="explore-courses-section">
      <div className="explore-header">
        <h2 className="explore-title">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Explore Our Courses'}
        </h2>
        <p className="explore-subtitle">
          {searchTerm 
            ? `Found ${filteredCourses.length} courses matching your search.`
            : 'Discover our most popular security training programs designed for your success.'
          }
        </p>
      </div>
      
      {displayCourses.length > 0 ? (
        <div className="explore-slider-wrapper">
          <div 
            className="explore-cards-container"
            style={{ 
              transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none',
              transition: 'transform 0.5s ease'
            }}
          >
            {displayCourses.map((course) => (
              <div className="explore-slide-item" key={course.id}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          
          {isMobile && displayCourses.length > 1 && (
            <div className="explore-pagination">
              {displayCourses.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`explore-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="no-results" style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
          <p>No courses found matching "{searchTerm}". Please try a different search.</p>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;

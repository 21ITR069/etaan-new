import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../data/coursesData';
import './CourseCatalogSection.css';

// Custom SVG Icons
const IconFilter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const IconAlert = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
);
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconDollar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const CourseCatalogSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [location.search]);

  const filters = [
    'All Courses',
    'Basic Security Officer',
    'Senior Security Officer',
    'Security Supervisor',
    'Elective Courses'
  ];


  const filteredCourses = courses.filter(course => {
    const matchesFilter = activeFilter === 'All Courses' || 
                         course.level.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const CourseCard = ({ course }) => (
    <div className="course-card">
      <div className="course-card-top">
        <span className="level-badge">{course.level}</span>
        <span className="code-badge">{course.code}</span>
      </div>
      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-desc">{course.description}</p>
      <div className="course-info-row">
        <div className="info-item duration">
          <IconClock />
          <span>{course.duration}</span>
        </div>
        <div className="info-item price">
          <IconDollar />
          <span>{course.price}</span>
        </div>
      </div>
      <Link to={`/course/${course.id}`} className="view-details-btn" style={{ textDecoration: 'none' }}>
        View Details <IconArrowRight />
      </Link>
    </div>
  );

  return (
    <div className="catalog-container">
      <div className="catalog-layout">
        <aside className="catalog-sidebar">
          <div className="filter-card">
            <div className="filter-header">
              <IconFilter />
              <h3>Filters</h3>
            </div>
            <div className="filter-list">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="catalog-content">
          <div className="search-box-card">
            <div className="search-input-wrapper">
              <IconSearch />
              <input 
                type="text" 
                placeholder="Search courses by name or code..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="alert-card">
            <div className="alert-icon-wrapper">
              <div className="alert-circle-bg">
                <IconAlert />
              </div>
            </div>
            <div className="alert-details">
              <h3>Registration Deadline Alert</h3>
              <div className="deadline-item">
                <span className="deadline-code">OBSE Modules:</span>
                <span className="deadline-text">Registration closes on <strong>31st May 2026</strong></span>
              </div>
              <div className="deadline-item">
                <span className="deadline-code">PRSF Modules:</span>
                <span className="deadline-text">Registration closes on <strong>31st May 2026</strong></span>
              </div>
              <p className="alert-footer-text">
                Don't miss out! Secure your spot now to advance your security career.
              </p>
            </div>
          </div>

          <div className="results-header">
            <div className="showing-results">
              Showing <strong>{filteredCourses.length}</strong> courses
            </div>
          </div>

          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="no-results">
                No courses found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalogSection;

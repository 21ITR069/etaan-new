import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/coursesData';
import HelpChoosingSection from '../components/HelpChoosingSection';
import './CourseDetailPage.css';

// Custom SVG Icons
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconBook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const IconInfo = ({ color = "currentColor" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
);
const IconUser = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const IconCheck = ({ color = "currentColor" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const IconChevronRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const IconWhatsapp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 10.1 10.1 0 0 1 4.5 1.2L22 3l-1.5 5.5Z"/></svg>
);
const IconMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const CourseDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // Find the course based on the ID from URL
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="course-detail-container" style={{ textAlign: 'center', padding: '100px' }}>
        <h2>Course not found</h2>
        <Link to="/courses" style={{ color: '#2563EB', marginTop: '20px', display: 'inline-block' }}>Back to Catalog</Link>
      </div>
    );
  }

  const tabs = ['Overview', 'Schedule', 'Fees & Funding', 'Requirements'];

  const schedules = [
    { id: 1, date: '16 Apr 2026', time: '09:00 - 17:00', location: 'Kallang, SG', seats: '13 seats left' },
    { id: 2, date: '23 Apr 2026', time: '09:00 - 17:00', location: 'Arumugam Rd, SG', seats: '15 seats left' },
    { id: 3, date: '30 Apr 2026', time: '09:00 - 17:00', location: 'Tai Seng, SG', seats: '17 seats left' }
  ];

  const feeOptions = [
    { category: 'Singapore Citizen', price: course.price },
    { category: 'Permanent Resident', price: '$200' },
    { category: 'Malaysian', price: '$400' }
  ];

  return (
    <div className="course-detail-container">
      <nav className="breadcrumbs">
        <Link to="/">Homepage</Link>
        <IconChevronRight />
        <Link to="/courses">Course Catalog</Link>
        <IconChevronRight />
        <span className="current-page">{course.code}</span>
      </nav>

      <div className="course-detail-layout">
        <div className="course-main-content">
          <div className="course-header-badge">{course.level}</div>
          <h1 className="course-detail-title">{course.title} ({course.code})</h1>
          
          <div className="course-meta-info">
            <div className="meta-item">
              <IconClock />
              <span>Duration: {course.duration}</span>
            </div>
            <div className="meta-item">
              <IconBook />
              <span>Mode: In-person</span>
            </div>
            <div className="meta-item">
              <IconGlobe />
              <span>Language: English</span>
            </div>
          </div>

          <div className="course-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content-area">
            {activeTab === 'Overview' && (
              <div className="tab-pane">
                <section className="detail-section">
                  <h3 className="section-title-sm">
                    What you will learn <IconInfo color="#2563EB" />
                  </h3>
                  <ul className="learning-list">
                    {course.learningPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </section>

                <section className="detail-section">
                  <h3 className="section-title-sm">Course modules</h3>
                  <div className="module-list">
                    {course.modules.map((mod, i) => (
                      <div className="module-item" key={i}>
                        <span className="module-name">{mod.name}</span>
                        <span className="module-tag">{mod.tag}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="detail-section">
                  <h3 className="section-title-sm">
                    Your trainer <IconInfo color="#2563EB" />
                  </h3>
                  <div className="trainer-card">
                    <div className="trainer-avatar">
                      <IconUser />
                    </div>
                    <div className="trainer-info">
                      <h4>Senior Trainer</h4>
                      <p className="trainer-meta">15+ yrs exp • PLRD Certified</p>
                      <p className="trainer-bio">
                        Experienced security professional with extensive background in security systems and training.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'Schedule' && (
              <div className="tab-pane">
                <h3 className="section-title-sm">Upcoming Classes</h3>
                <div className="schedule-grid">
                  {schedules.map((s) => (
                    <div 
                      key={s.id} 
                      className={`schedule-card ${selectedSchedule === s.id ? 'selected' : ''}`}
                    >
                      <div className="schedule-card-left">
                        <h4 className="schedule-date">{s.date}</h4>
                        <p className="schedule-time">{s.time}</p>
                        <div className="schedule-meta-small">
                          <span className="meta-small-item">
                            <IconMapPin /> {s.location}
                          </span>
                          <span className="meta-small-item">
                            <IconUsers /> {s.seats}
                          </span>
                        </div>
                      </div>
                      <button 
                        className={`btn-select ${selectedSchedule === s.id ? 'active' : ''}`}
                        onClick={() => setSelectedSchedule(s.id)}
                      >
                        {selectedSchedule === s.id ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Fees & Funding' && (
              <div className="tab-pane">
                <h3 className="section-title-sm">Course Fees</h3>
                <div className="fees-list">
                  {feeOptions.map((fee, idx) => (
                    <div key={idx} className="fee-item-row">
                      <span className="fee-category">{fee.category}</span>
                      <span className="fee-amount">{fee.price}</span>
                    </div>
                  ))}
                </div>
                <p className="fees-notice">Prices shown are after government subsidies where applicable</p>
                
                <div className="skillsfuture-box">
                  <h4 className="sf-title">SkillsFuture Credit Eligible</h4>
                  <p className="sf-desc">
                    This course is eligible for SkillsFuture Credit. Singapore Citizens can use their credits to offset course fees.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Requirements' && (
              <div className="tab-pane">
                <h3 className="section-title-sm">Prerequisites</h3>
                <p className="prereq-text">
                  Must be at least 18 years old. No prior security experience required.
                </p>

                <div className="bring-box">
                  <h4 className="bring-title">What to bring</h4>
                  <ul className="bring-list">
                    <li>NRIC or valid identification</li>
                    <li>Writing materials</li>
                    <li>Comfortable clothing for practical sessions</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="course-sidebar-sticky">
          <div className="sticky-card">
            <div className="sidebar-price">
              <span className="currency">S$</span>
              <span className="amount">{course.price.replace('$', '')}</span>
            </div>
            <p className="subsidy-text">{course.subsidyText}</p>
            
            <div className="sidebar-info-group">
              <div className="sidebar-info-item">
                <IconInfo color="#2563EB" />
                <div className="info-text">
                  <strong>Next intake: {course.nextIntake}</strong>
                  <span>{course.intakeDetails}</span>
                </div>
              </div>
              <div className="sidebar-info-item">
                <IconGlobe />
                <div className="info-text">
                  <strong>{course.location}</strong>
                  <span className="seats-tag">Seats left: {course.seatsLeft}</span>
                </div>
              </div>
            </div>

            <button className="btn-enrol-orange">Enrol Now</button>
            <button className="btn-whatsapp-white">
              <IconWhatsapp />
              <span>Whatsapp to Register</span>
            </button>

            <div className="sidebar-credential-box">
              <h4 className="credential-title">WSQ Credential Code</h4>
              <p className="credential-code">{course.code}</p>
            </div>

            <div className="sidebar-hris-box">
              <h4 className="hris-title">HRIS/NTUC</h4>
              <p className="hris-status">Pending accepted</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="mobile-cta-wrapper">
        <div className="mobile-cta-price">
          <span className="m-currency">S$</span>
          <span className="m-amount">{course.price.replace('$', '')}</span>
        </div>
        <div className="mobile-cta-btns">
          <button className="btn-enrol-orange m-btn">Enrol</button>
          <button className="btn-whatsapp-white m-btn-icon">
             <IconWhatsapp />
          </button>
        </div>
      </div>
      
      {/* Help Choosing Section */}
      <HelpChoosingSection />
    </div>
  );
};

export default CourseDetailPage;

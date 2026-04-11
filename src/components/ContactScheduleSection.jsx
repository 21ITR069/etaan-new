import React from 'react';

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const ContactScheduleSection = () => {
  return (
    <section className="contact-schedule-section">
      <div className="unified-card">
        {/* Left Side - Contact Info */}
        <div className="card-left">
          <span className="get-started-label">GET STARTED</span>
          <h2 className="card-headline">Ready to Begin Your Security Career?</h2>
          <p className="card-text">
            Join Singapore's leading security training provider. We offer WSQ-certified courses 
            designed to help you achieve your career goals with professional guidance.
          </p>
          
          <div className="contact-info-list-horizontal">
            <div className="contact-item">
              <IconPhone />
              <span>+65 1234 5678</span>
            </div>
            <div className="contact-item">
              <IconMail />
              <span>info@etannedusg.com</span>
            </div>
            <div className="contact-item">
              <IconClock />
              <span>Mon - Fri: 9am - 6pm</span>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn-enroll-now">
              Enroll Now <IconArrowRight />
            </button>
            <button className="btn-download-schedule">
              Download Schedule
            </button>
          </div>
        </div>

        {/* Right Side - Upcoming Schedules */}
        <div className="card-right">
          <h3 className="schedules-title">Upcoming Schedules</h3>
          <div className="schedules-list">
            {['April 2026', 'May 2026', 'June 2026'].map((month) => (
              <div key={month} className="schedule-row">
                <span>{month} Schedule</span>
                <IconArrowRight />
              </div>
            ))}
          </div>
          <p className="schedules-footer">New Batches Starting every month. Limited seats available</p>
        </div>
      </div>
    </section>
  );
};

export default ContactScheduleSection;

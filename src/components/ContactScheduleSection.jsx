import React from 'react';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const ContactScheduleSection = () => {
  return (
    <section className="contact-schedule-section">
      <div className="unified-card">
        {/* Left Side - Contact Info */}
        <div className="card-left">
          <span className="get-started-label">GET STARTED</span>
          <h2 className="card-headline">Ready to Begin Your Security Career?</h2>
          <p className="card-text">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. sit nunc in scelerisque sed.
            Rhoncus morbi et augue nec, in id ullamcorper at sit.
          </p>
          
          <div className="contact-info-list">
            <div className="contact-item">
              <Phone size={18} />
              <span>+9988776655</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>Lorem ipsum dolar mr um in</span>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>Mon - Fri: 9am - 6pm</span>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn-enroll-now">
              Enroll Now <ArrowRight size={20} />
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
            {[1, 2, 3].map((item) => (
              <div key={item} className="schedule-row">
                <span>April 2026 Schedule</span>
                <ArrowRight size={20} />
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

import React from 'react';
import { ChevronRight } from 'lucide-react';

const Card = ({ title, mainTitle, description, isNew }) => (
  <div className="card-item">
    {isNew && <div className="card-badge">new</div>}
    <div className="card-content">
      <h2 className="card-main-title">{mainTitle}</h2>
      <div className="card-footer">
        <div>
          <h3 className="card-sub-title">{title}</h3>
          <p className="card-desc">{description}</p>
        </div>
        <div className="card-arrow">
          <ChevronRight size={18} color="#000" />
        </div>
      </div>
    </div>
  </div>
);

const CoursesSection = () => {
  const cards = [
    {
      title: "Security",
      mainTitle: "The Main Title",
      description: "Model Self-Improvement: Powering Productivity Through Tech",
      isNew: true
    },
    {
      title: "Security",
      mainTitle: "The Main Title",
      description: "Model Self-Improvement: Powering Productivity Through Tech",
      isNew: true
    },
    {
      title: "Security",
      mainTitle: "The Main Title",
      description: "Model Self-Improvement: Powering Productivity Through Tech",
      isNew: true
    },
    {
      title: "Security",
      mainTitle: "The Main Title",
      description: "Model Self-Improvement: Powering Productivity Through Tech",
      isNew: true
    }
  ];

  return (
    <section className="courses-section">
      <div className="section-header">
        <h2 className="section-title">Your title goes here</h2>
        <p className="section-subtitle">Paragraph explaining what these courses or items are about.</p>
      </div>
      
      <div className="cards-wrapper">
        <div className="cards-scroll">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

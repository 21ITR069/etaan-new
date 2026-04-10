import React from 'react';
import { MousePointer2, ClipboardEdit, Presentation, FileCheck } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon }) => (
  <div className="step-item">
    <div className="step-icon-box">
      <Icon size={36} color="#FFF" strokeWidth={1.5} />
    </div>
    <div className="step-content">
      <span className="step-number">Step {number}</span>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>
    </div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Course",
      description: "Browse and select the right WSQ security training course based on your career level (Basic SO, Senior SO, Supervisor, Elective)",
      icon: MousePointer2
    },
    {
      number: 2,
      title: "Register for Training",
      description: "Pick a suitable schedule and register online through their course calendar or registration link.",
      icon: ClipboardEdit
    },
    {
      number: 3,
      title: "Attend Training",
      description: "Join the instructor-led sessions, complete the required attendance, and pass the course assessment to qualify.",
      icon: Presentation
    },
    {
      number: 4,
      title: "Get Certified",
      description: "Receive your WSQ certification, apply for licensing if needed, and begin or advance your security career in Singapore.",
      icon: FileCheck
    }
  ];

  return (
    <section className="process-section">
      <div className="process-header">
        <span className="process-caption">SIMPLE PROCESS</span>
        <h2 className="process-headline">How to Get Started</h2>
        <p className="process-subhead">
          Your journey from registration to a licensed security career in four simple steps.
        </p>
      </div>

      <div className="process-steps-wrap">
        <div className="steps-line"></div>
        <div className="steps-container">
          {steps.map((step, idx) => (
            <Step key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

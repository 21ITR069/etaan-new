import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, position, text }) => (
  <div className="testimonial-card">
    <span className="quote-mark">“</span>
    <div className="stars-row">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={21} fill="#FFF" color="#FFF" />
      ))}
    </div>
    <p className="testimonial-text">{text}</p>
    <div className="testimonial-footer">
      <h4 className="student-name">{name}</h4>
      <p className="student-position">{position}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Security at xyz",
      text: '"Training was very smooth. Trainers are very experienced and knowledgeable. I was worried at first, but felt comfortable and confident. Managed to pass my test. Highly recommended!"'
    },
    {
      name: "John Doe",
      position: "Security at xyz",
      text: '"Training was very smooth. Trainers are very experienced and knowledgeable. I was worried at first, but felt comfortable and confident. Managed to pass my test. Highly recommended!"'
    },
    {
      name: "John Doe",
      position: "Security at xyz",
      text: '"Training was very smooth. Trainers are very experienced and knowledgeable. I was worried at first, but felt comfortable and confident. Managed to pass my test. Highly recommended!"'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-caption">TESTIMONIALS</span>
        <h2 className="testimonials-headline">What Our Students Say</h2>
        <p className="testimonials-subhead">
          Join thousands of satisfied graduates who launched their security careers with us.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, idx) => (
          <TestimonialCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

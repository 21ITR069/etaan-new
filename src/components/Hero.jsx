import React from 'react';
import { motion } from 'framer-motion';
import { Award, MessageSquare, GraduationCap, ShieldCheck } from 'lucide-react';
import bannerImg from '../assets/banner img.png';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Text Content Container */}
      <div className="hero-text-content">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Award size={17} color="#112C3F" />
          <span>Singapore's AI-powered security career consultancy</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your trusted partner for a licensed security career
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Starting a career in security can feel overwhelming — multiple courses,
          government requirements, and unclear career paths. Etaan simplifies
          everything. We combine expert human guidance with AI-powered tools so
          you take the right steps, the first time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-start">Start my security career</button>
          <button className="btn-talk">Talk to Etaan AI</button>
        </motion.div>
      </div>

      {/* Banner Image — Figma: left:910 top:147 w:1010 h:577 */}
      <motion.img
        src={bannerImg}
        alt="Security Professional with VR headset"
        className="hero-banner-img"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Floating Card — AI Advisor: left:1630 top:252 */}
      <motion.div
        className="floating-card card-ai"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="floating-card-icon" style={{ background: 'rgba(154, 14, 219, 0.1)' }}>
          <MessageSquare size={20} color="#9A0EDB" />
        </div>
        <div className="floating-card-text">
          AI advisor<br />available 24/7
        </div>
      </motion.div>

      {/* Floating Card — WSQ: left:997 top:595 */}
      <motion.div
        className="floating-card card-wsq"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="floating-card-icon" style={{ background: 'rgba(0, 150, 255, 0.1)' }}>
          <GraduationCap size={20} color="#0096FF" />
        </div>
        <div className="floating-card-text">
          WSQ & PLRD<br />accredited courses
        </div>
      </motion.div>

      {/* Floating Card — Guided: left:1592 top:563 */}
      <motion.div
        className="floating-card card-guided"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="floating-card-icon" style={{ background: 'rgba(0, 181, 0, 0.1)' }}>
          <ShieldCheck size={20} color="#00B500" />
        </div>
        <div className="floating-card-text">
          Guided from<br />enrolment to licence
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

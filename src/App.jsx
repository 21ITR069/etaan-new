import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import CoursesSection from './components/CoursesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactScheduleSection from './components/ContactScheduleSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <CoursesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactScheduleSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;

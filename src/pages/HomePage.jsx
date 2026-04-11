import React from 'react';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import CoursesSection from '../components/CoursesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactScheduleSection from '../components/ContactScheduleSection';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <>
      <Hero />
      <SearchSection onSearch={setSearchTerm} initialValue={searchTerm} />
      <CoursesSection searchTerm={searchTerm} />
      <ProcessSection />
      <TestimonialsSection />
      <ContactScheduleSection />
    </>
  );
};

export default HomePage;

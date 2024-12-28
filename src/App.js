import React from 'react';
import CoverSection from './sections/CoverSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="app">
      <CoverSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default App;
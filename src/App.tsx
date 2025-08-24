import React from 'react';
import CoverSection from './sections/CoverSection';
import AboutSection from './sections/AboutSection';
import EducationsSection from './sections/EducationsSection';
import ExperiencesSection from './sections/ExperiencesSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CoverSection />
      <AboutSection />
      <EducationsSection />
      <ExperiencesSection />
      <Footer />
    </div>
  );
}

export default App;

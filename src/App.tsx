import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GreetingOverlay from './components/GreetingOverlay';

function App() {
  const [showContent, setShowContent] = useState(false);

  // Update the document title
  useEffect(() => {
    document.title = "Portfolio | Software Developer & Cloud Architect";
  }, []);

  return (
    <>
      <GreetingOverlay onComplete={() => setShowContent(true)} />
      <div 
        className={`min-h-screen bg-white dark:bg-gray-900 transition-all duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
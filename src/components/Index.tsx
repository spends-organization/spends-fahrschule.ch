import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Advantages from './Advantages';
import Packages from './Packages';
import Contact from './Contact';
import Footer from './Footer';

const Index: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section in sessionStorage
    const sectionId = sessionStorage.getItem('scrollToSection');
    
    if (sectionId) {
      // Clear the section from sessionStorage
      sessionStorage.removeItem('scrollToSection');
      
      // Wait for the page to fully load
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <Advantages />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index; 
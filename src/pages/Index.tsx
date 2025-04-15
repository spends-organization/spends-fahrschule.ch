import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Index component mounted');
    // Update page title
    document.title = "Spend's Fahrschule - Dein Weg zum Führerschein";

    // Check if we have a section to scroll to in the location state
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          const offset = 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        // Clear the state after scrolling
        history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Advantages />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

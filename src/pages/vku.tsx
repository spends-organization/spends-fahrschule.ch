import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Calendar } from 'lucide-react';

const VKUPage: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const height = window.innerHeight - 300; // Subtract some space for header and padding
        iframeRef.current.style.height = `${height}px`;
      }
    };

    // Initial resize
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Verkehrskundeunterricht (VKU)
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Buchen Sie jetzt Ihren Verkehrskundeunterricht in Winterthur. 
                  Professionelle Ausbildung für Ihre Fahrprüfung.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Booking Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  VKU Termin buchen
                </h2>
                <p className="text-gray-600">
                  Wählen Sie einen passenden Termin für Ihren Verkehrskundeunterricht
                </p>
              </div>

              <iframe 
                ref={iframeRef}
                src="https://www.vku-pgs.asa.ch/de/public/coursegroup/VktVXzYzNzI=/1/VKU"
                className="w-full border-0 transition-all duration-300"
                title="VKU Booking"
                style={{ minHeight: '90vh', maxHeight: '100vh', overflow: 'auto' }}
                scrolling="yes"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default VKUPage; 
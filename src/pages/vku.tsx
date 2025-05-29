import React from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Calendar } from 'lucide-react';

const INFO_SECTION_HEIGHT = 200; // px, adjust as needed

const VKUPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50" style={{ margin: 0, padding: 0 }}>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                VKU Termin buchen
              </h2>
              <p className="text-gray-600">
                Wählen Sie einen passenden Termin für Ihren Verkehrskundeunterricht
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Responsive Full-Viewport Iframe */}
        <div style={{ width: '100vw', height: `calc(100vh - ${INFO_SECTION_HEIGHT}px)`, margin: 0, padding: 0, overflow: 'hidden' }}>
          <iframe
            src="https://www.vku-pgs.asa.ch/de/public/coursegroup/VktVXzYzNzI=/1/VKU"
            title="VKU Booking"
            style={{ width: '100vw', height: '100%', border: 'none', overflow: 'auto', display: 'block' }}
            scrolling="yes"
          />
        </div>
      </div>
    </Layout>
  );
};

export default VKUPage; 
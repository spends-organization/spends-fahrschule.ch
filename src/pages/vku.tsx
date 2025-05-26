import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Calendar } from 'lucide-react';

const VKUPage: React.FC = () => {
  useEffect(() => {
    // Load TidyCal script
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
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
              
              <div className="tidycal-embed" data-path="lazarpet/vku"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default VKUPage; 
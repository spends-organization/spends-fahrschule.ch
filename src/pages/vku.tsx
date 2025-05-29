import React from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Calendar, Clock, GraduationCap, Users, CheckCircle, Star } from 'lucide-react';

const INFO_SECTION_HEIGHT = 200; // px, adjust as needed

const facts = [
  {
    icon: <Clock className="h-8 w-8 text-blue-700" />, // premium blue
    title: '8 Lektionen',
    description: 'Intensiver Unterricht für nachhaltigen Lernerfolg',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-blue-700" />,
    title: '4 Lektionen à 2 Tage',
    description: 'Effizient verteilt für optimale Aufnahme',
  },
  {
    icon: <Users className="h-8 w-8 text-blue-700" />,
    title: 'max. 12 Plätze',
    description: 'Exklusive Kleingruppe für persönliche Betreuung',
    badge: 'Exklusiv',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-700" />,
    title: 'Direkte Anmeldung',
    description: 'Kursteilnahme wird direkt beim Strassenverkehrsamt angemeldet',
  },
];

const VKUPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100" style={{ margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <div className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
            <AnimatedSection className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Verkehrskunde&shy;unterricht (VKU)
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Buchen Sie jetzt Ihren Verkehrskundeunterricht in Winterthur. Professionelle Ausbildung für Ihre Fahrprüfung – exklusiv, persönlich, hochwertig.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {facts.map((fact, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="relative bg-white/90 border border-blue-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
                    {fact.badge && (
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{fact.badge}</span>
                    )}
                    <div className="mb-4">{fact.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{fact.title}</h3>
                    <p className="text-gray-600 text-base">{fact.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-center shadow-2xl mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white drop-shadow">Jetzt VKU-Termin sichern</h2>
              <p className="text-blue-100 mb-4">Sichere dir deinen Platz in unserem VKU-Kurs über das untenstehende Formular.</p>
            </AnimatedSection>
          </div>
        </div>

        {/* Booking Section */}
        <div id="vku-booking" style={{ width: '100vw', height: `calc(100vh - ${INFO_SECTION_HEIGHT}px)`, margin: 0, padding: 0, overflow: 'hidden' }}>
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
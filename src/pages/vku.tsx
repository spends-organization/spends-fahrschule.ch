import React from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Calendar, Clock, GraduationCap, Users, CheckCircle, ChevronDown } from 'lucide-react';

const INFO_SECTION_HEIGHT = 200;

const facts = [
  {
    icon: <Clock className="h-8 w-8 text-blue-700" />,
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
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('vku-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100" style={{ margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-white pt-24">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-white/80 to-white z-10" />
            <img 
              src="/vku2.JPG" 
              alt="VKU Unterricht bei Spend's Fahrschule" 
              className="object-cover w-full h-full"
              loading="eager"
              width={1920}
              height={1080}
            />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Verkehrskunde&shy;unterricht (VKU)
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Buchen Sie jetzt Ihren Verkehrskundeunterricht in Winterthur. Professionelle Ausbildung für Ihre Fahrprüfung – exklusiv, persönlich, hochwertig.
              </p>
              <div className="flex flex-col items-center">
                <AnimatedSection delay={200}>
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold text-lg md:text-xl px-6 py-2 rounded-full shadow-md border border-yellow-200 mb-6">
                    Preis: CHF 149
                  </span>
                </AnimatedSection>
                <AnimatedSection delay={300} className="flex flex-col items-center text-gray-600">
                  <button 
                    onClick={handleScrollToBooking}
                    className="group flex flex-col items-center hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <p className="text-sm mb-2">Buchen Sie Ihre Lektionen unten</p>
                    <ChevronDown className="h-5 w-5 animate-bounce group-hover:text-blue-600 transition-colors" />
                  </button>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {facts.map((fact, idx) => (
                <AnimatedSection key={idx} delay={idx * 100 + 400}>
                  <div className="relative bg-white/90 border border-blue-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 h-full min-h-[160px] md:min-h-[220px]">
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

            <AnimatedSection className="mb-8 text-center">
              <p className="text-base md:text-lg text-gray-700">
                Sie können Ihren VKU-Termin direkt über das untenstehende Formular buchen.
              </p>
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
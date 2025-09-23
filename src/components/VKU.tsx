import React from 'react';
import { GraduationCap, Clock, Users, CheckCircle, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ResponsiveImage from './ResponsiveImage';
import { Link } from 'react-router-dom';

const VKU: React.FC = () => {
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
      description: 'Kleingruppe für persönliche Betreuung',
      badge: 'Exklusiv',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-700" />,
      title: 'Direkte Anmeldung',
      description: 'Kursteilnahme wird direkt beim Strassenverkehrsamt angemeldet',
    },
  ];

  return (
    <section id="vku" className="section-padding relative overflow-x-hidden">
      <div className="absolute inset-0 w-screen h-full left-1/2 -translate-x-1/2 bg-gradient-to-br from-white via-blue-50 to-blue-100 pointer-events-none z-0" aria-hidden="true"></div>
      <div className="relative w-full px-2 md:px-0 md:container md:mx-auto max-w-none z-10">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">Verkehrskunde&shy;unterricht (VKU)</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Der VKU bei Spend's Fahrschule: Exklusiv, professionell und persönlich. Erleben Sie den Unterschied.
          </p>
          <AnimatedSection delay={200} className="flex justify-center">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold text-lg md:text-xl px-6 py-2 rounded-full shadow-md border border-yellow-200">
              Preis: CHF 149
            </span>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection delay={300} className="mb-16">
          <div className="max-w-3xl mx-auto">
            <ResponsiveImage
              src="/vku1.JPG"
              alt="VKU Unterricht bei Spend's Fahrschule"
              className="aspect-video rounded-2xl shadow-lg"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16 w-full max-w-none items-stretch">
          {facts.map((fact, idx) => (
            <AnimatedSection key={idx} delay={idx * 100 + 400}>
              <div
                className="relative bg-white/90 border border-blue-100 rounded-xl md:rounded-2xl shadow-md md:shadow-xl p-4 md:p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 w-full h-full min-h-[160px] md:min-h-[220px]"
              >
                {fact.badge && (
                  <span className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md">{fact.badge}</span>
                )}
                <div className="mb-2 md:mb-4">{React.cloneElement(fact.icon, { className: 'h-6 w-6 md:h-8 md:w-8 text-blue-700' })}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{fact.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-10 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white drop-shadow">Bereit für den VKU?</h3>
            <p className="text-lg text-blue-100 mb-8">
              Buche jetzt deinen VKU-Termin und starte deine Fahrausbildung mit dem nötigen theoretischen Wissen – bei Ihrer Fahrschule des Vertrauens.
            </p>
            <Link
              to="/vku"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-700 font-bold rounded-full text-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200 border-2 border-blue-200"
            >
              <Star className="h-6 w-6 mr-2 text-yellow-400" /> VKU Termin buchen
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VKU;
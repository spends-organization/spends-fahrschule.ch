import React from 'react';
import { GraduationCap, Clock, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';

const VKU: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "8 Lektionen",
      description: "Umfassender Unterricht in 8 Lektionen à 45 Minuten"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Kleine Gruppen",
      description: "Persönliche Betreuung in überschaubaren Gruppen"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Zertifiziert",
      description: "Offiziell anerkannter Verkehrskundeunterricht"
    }
  ];

  return (
    <section id="vku" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Verkehrskundeunterricht (VKU)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Der Verkehrskundeunterricht ist ein wichtiger Bestandteil deiner Fahrausbildung. 
            Bei uns erhältst du eine professionelle und umfassende Ausbildung in Winterthur.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="bg-blue-50 rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bereit für den VKU?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Buche jetzt deinen VKU-Termin und starte deine Fahrausbildung mit dem nötigen theoretischen Wissen.
            </p>
            <Link
              to="/vku"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full transition-all hover:bg-blue-700 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20"
            >
              VKU Termin buchen
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VKU; 
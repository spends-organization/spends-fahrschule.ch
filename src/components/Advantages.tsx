import React from 'react';
import { Car, Calendar, CheckCircle, Users, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedSection 
      className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200"
      delay={delay}
    >
      <div className="bg-blue-500/10 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </AnimatedSection>
  );
};

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: <Car className="h-6 w-6 text-blue-500" />,
      title: "Moderne, sichere Fahrzeuge",
      description: "Lerne das Fahren in komfortablen und sicheren Fahrzeugen mit neuester Technologie."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Geduldige und sympathische Fahrlehrer",
      description: "Unsere Fahrlehrer sind nicht nur qualifiziert, sondern auch geduldig und unterstützend."
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      title: "Flexible Terminbuchung",
      description: "Buche deine Fahrstunden einfach und flexibel über WhatsApp, wann es dir am besten passt."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Faire Preise und attraktive Pakete",
      description: "Wir bieten faire Preise und massgeschneiderte Pakete für jeden Bedarf und jedes Budget."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Mehrsprachiger Unterricht",
      description: "Wir unterrichten in mehreren Sprachen: Deutsch, Englisch, Albanisch, Serbo-Kroatisch und Mazedonisch."
    }
  ];

  return (
    <section id="vorteile" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Warum Spend's Fahrschule wählen?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten dir eine erstklassige Fahrausbildung mit einer persönlichen Note und dem Ziel, dich zu einem sicheren und selbstbewussten Fahrer zu machen.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

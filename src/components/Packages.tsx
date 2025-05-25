import React, { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { packages, singleLessons } from '@/config/packages';
import { Modal } from './Modal';
import type { Package as PackageType } from '@/types';

interface PackageProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const Package: React.FC<PackageProps> = ({ title, price, originalPrice, description, features, popular = false, delay }) => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePackageSelect = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <AnimatedSection 
      delay={delay}
      className={cn(
        "flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200",
        popular ? "border-2 border-blue-500 shadow-lg shadow-blue-500/20" : "shadow"
      )}
    >
      {popular && (
        <div className="bg-blue-500 text-white py-2 px-4 flex items-center justify-center gap-2">
          <Star className="h-4 w-4 fill-white" />
          <span className="text-sm font-medium">Bestseller</span>
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <div className="mb-4 flex flex-col xl:flex-row xl:items-baseline">
          <span className="text-3xl font-bold text-gray-900 whitespace-nowrap">{price}</span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through whitespace-nowrap xl:ml-2">{originalPrice}</span>
          )}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handlePackageSelect({
            title,
            price,
            originalPrice,
            description,
            features,
            popular
          })}
          className={cn(
            "mt-auto py-3 px-6 rounded-lg text-center font-medium transition-all hover:translate-y-[-2px]",
            popular
              ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          )}
        >
          Jetzt Kontaktieren
        </button>
      </div>

      {selectedPackage && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPackage={selectedPackage}
        />
      )}
    </AnimatedSection>
  );
};

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePackageSelect = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <section id="pakete" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Unsere Pakete und Preise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten verschiedene Pakete an, die auf deine Bedürfnisse zugeschnitten sind. 
            Wähle das passende Paket für deine Fahrausbildung.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Package
              key={index}
              title={pkg.title}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
              description={pkg.description}
              features={pkg.features}
              popular={pkg.popular}
              delay={index * 100}
            />
          ))}
        </div>

        <AnimatedSection className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Einzellektionen</h3>
              <p className="text-gray-600 mb-4">
                Flexibel auch einzelne Fahrstunden buchen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 whitespace-nowrap">{singleLessons.regular.title} - {singleLessons.regular.price}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 whitespace-nowrap">
                    {singleLessons.trial.title} - {singleLessons.trial.price}
                    {singleLessons.trial.originalPrice && (
                      <span className="text-gray-500 line-through ml-2">{singleLessons.trial.originalPrice}</span>
                    )}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handlePackageSelect({
                  title: singleLessons.regular.title,
                  price: singleLessons.regular.price,
                  description: "Einzelne Fahrstunde",
                  features: ["45 Minuten Fahrstunde", "Flexible Terminvereinbarung", "Moderne Fahrzeuge"]
                })}
                className="w-full sm:w-auto py-3 px-6 bg-blue-500 text-white rounded-lg font-medium transition-all hover:bg-blue-600 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20 text-center"
              >
                Einzellektion anfragen
              </button>
              <button
                onClick={() => handlePackageSelect({
                  title: singleLessons.trial.title,
                  price: singleLessons.trial.price,
                  description: "Probelektion",
                  features: ["45 Minuten Fahrstunde", "Kennenlernen des Fahrlehrers", "Einschätzung des Fahrkönnens"]
                })}
                className="w-full sm:w-auto py-3 px-6 bg-gray-100 text-gray-900 rounded-lg font-medium transition-all hover:bg-gray-200 hover:translate-y-[-2px] hover:shadow-lg text-center"
              >
                Probelektion anfragen
              </button>
            </div>
          </div>
        </AnimatedSection>

        {selectedPackage && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedPackage={selectedPackage}
          />
        )}
      </div>
    </section>
  );
};

export default Packages;

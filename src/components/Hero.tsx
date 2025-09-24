import React from 'react';
import { ArrowRight, Car, GraduationCap, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-white/80 to-white z-10" />
        <img 
          src="/auto1.jpg" 
          alt="Spend's Fahrschule Auto" 
          className="object-cover w-full h-full"
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <div className="flex flex-col">
            <div className="mb-8">
              <img 
                src="/official-logo.png" 
                alt="Spend's Fahrschule Logo" 
                className="brightness-100 w-[400px] md:w-[800px] h-[200px] md:h-[400px] object-contain"
                loading="eager"
                width={800}
                height={400}
              />
            </div>
            <div>
              <h1 className="sr-only">
                Fahrschule Winterthur & Region
              </h1>
              <p className="text-lg md:text-xl text-gray-800 font-semibold mb-4 max-w-2xl">
                Professionelle Fahrausbildung in Winterthur, Effretikon, Bassersdorf und Frauenfeld - bei uns wird der Führerschein zum Erfolg!
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-800">
                  <Car className="h-5 w-5 text-blue-600" />
                  <span>Moderne Fahrzeuge</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Flexible Termine</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Kostenlose Probelektion</span>
                </div>
              </div>

              {/* VKU Section */}
              <div className="bg-blue-50/90 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Verkehrskundeunterricht (VKU)</h3>
                      <p className="text-sm text-gray-600">Ausbildung in Winterthur</p>
                    </div>
                  </div>
                  <Link
                    to="/vku"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    VKU Termin buchen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pakete"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-medium rounded-full transition-all hover:bg-blue-600 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Jetzt Pakete ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { contact } from '@/config/contact';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Spend's Fahrschule</h3>
            <p className="text-gray-600 mb-4">
              Dein zuverlässiger Partner auf dem Weg zum Führerschein.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Öffnungszeiten</h3>
            <ul className="space-y-2 text-gray-600">
              {contact.openingHours.list.map((hours, index) => (
                <li key={index}>{hours}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Kontakt</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-blue-600 transition-colors group"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{contact.address.full}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                >
                  <Phone className="h-5 w-5" />
                  <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gray-400 group-hover:after:bg-blue-600">
                    {contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                >
                  <Mail className="h-5 w-5" />
                  <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gray-400 group-hover:after:bg-blue-600">
                    {contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Rechtliches</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link 
                  to="/datenschutz" 
                  className="hover:text-blue-600 transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link 
                  to="/impressum" 
                  className="hover:text-blue-600 transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Spend's Fahrschule. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

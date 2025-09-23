import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, use scroll behavior
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to home page with the section ID
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If we're on another page, navigate to home page
      navigate('/');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} py-6`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center z-50">
            <img 
              src="/official-logo.png" 
              alt="Spend Fahrschule Logo" 
              className="h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('vorteile')}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Vorteile
            </button>
            <button
              onClick={() => handleNavigation('pakete')}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Pakete
            </button>
            <button
              onClick={() => handleNavigation('vku')}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              VKU
            </button>
            <button
              onClick={() => handleNavigation('faq')}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavigation('kontakt')}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Kontakt
            </button>
            <button
              onClick={() => handleNavigation('pakete')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Jetzt Pakete ansehen
            </button>
            <Link
              to="/vku"
              className="bg-gray-100 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors border border-gray-200"
            >
              VKU Termin buchen
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menü schliessen' : 'Menü öffnen'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '96px' }}
      >
        <nav className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => handleNavigation('vorteile')}
              className="text-gray-800 hover:text-blue-600 transition-colors text-lg w-full text-center"
            >
              Vorteile
            </button>
            <button
              onClick={() => handleNavigation('pakete')}
              className="text-gray-800 hover:text-blue-600 transition-colors text-lg w-full text-center"
            >
              Pakete
            </button>
            <button
              onClick={() => handleNavigation('vku')}
              className="text-gray-800 hover:text-blue-600 transition-colors text-lg w-full text-center"
            >
              VKU
            </button>
            <button
              onClick={() => handleNavigation('faq')}
              className="text-gray-800 hover:text-blue-600 transition-colors text-lg w-full text-center"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavigation('kontakt')}
              className="text-gray-800 hover:text-blue-600 transition-colors text-lg w-full text-center"
            >
              Kontakt
            </button>
            <button
              onClick={() => handleNavigation('pakete')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-lg flex-1 text-center"
            >
              Jetzt Pakete ansehen
            </button>
            <Link
              to="/vku"
              className="bg-gray-100 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-lg flex-1 text-center border border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              VKU Termin buchen
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

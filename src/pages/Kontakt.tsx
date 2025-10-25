import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Kontakt: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to homepage and scroll to contact section
    navigate('/', { 
      state: { scrollTo: 'kontakt' },
      replace: true 
    });
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default Kontakt;

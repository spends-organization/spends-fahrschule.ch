import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pakete: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to homepage and scroll to packages section
    navigate('/', { 
      state: { scrollTo: 'pakete' },
      replace: true 
    });
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default Pakete;

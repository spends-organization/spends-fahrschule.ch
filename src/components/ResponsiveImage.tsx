import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className }) => {
  return (
    <div className={cn("overflow-hidden rounded-2xl", className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
};

export default ResponsiveImage;

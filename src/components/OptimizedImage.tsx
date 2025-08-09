import React from 'react';
import LazyImage from './LazyImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  priority = false,
  sizes = '100vw',
  onLoad,
  onError,
}) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default OptimizedImage;

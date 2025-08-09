import React, { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  images,
  priority = false,
}) => {
  useEffect(() => {
    if (!priority || images.length === 0) return;

    // Preload critical images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images, priority]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;

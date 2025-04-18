import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const Avatar = ({ src, alt, className }: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={('w-auto rounded-full object-cover', className)}
    />
  );
};

export default Avatar;

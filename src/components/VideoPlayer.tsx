import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  alt = 'Video',
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      // Reset video when src changes
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, [autoPlay, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      preload="metadata"
      key={src} // Force re-render when src changes
    >
      <source src={src} type="video/mp4" />
      {alt}
    </video>
  );
};

export default VideoPlayer;

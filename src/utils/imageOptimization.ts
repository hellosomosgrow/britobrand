// Utilidades para optimización de imágenes

export const imageOptimizationConfig = {
  // Configuración para lazy loading
  lazyLoading: {
    rootMargin: '50px 0px',
    threshold: 0.1,
  },

  // Configuración para pre-carga
  preload: {
    criticalImages: [
      // Imágenes críticas que se deben cargar inmediatamente
    ],
  },

  // Configuración para diferentes tamaños de pantalla
  sizes: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1920px',
  },
} as const;

// Función para generar diferentes tamaños de imagen
export const generateImageSizes = (baseUrl: string, extension: string) => {
  const sizes = [640, 1280, 1920];
  const srcSet = sizes
    .map((size) => `${baseUrl}-${size}.${extension} ${size}w`)
    .join(', ');

  return srcSet;
};

// Función para verificar si el navegador soporta WebP
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Función para obtener la extensión optimizada
export const getOptimizedExtension = async (): Promise<
  'webp' | 'jpg' | 'png'
> => {
  const webPSupported = await supportsWebP();
  return webPSupported ? 'webp' : 'jpg';
};

// Función para generar URL optimizada
export const getOptimizedImageUrl = (
  originalUrl: string,
  extension?: string
) => {
  if (!extension) return originalUrl;

  const urlParts = originalUrl.split('.');
  const baseUrl = urlParts.slice(0, -1).join('.');
  const originalExtension = urlParts[urlParts.length - 1];

  // Si ya es WebP, no necesitamos cambiar
  if (originalExtension === 'webp') return originalUrl;

  return `${baseUrl}.${extension}`;
};

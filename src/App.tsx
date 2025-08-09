import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Header from './components/Header';
import ProjectDetail from './views/ProjectDetail';
import Contact from './views/Contact';
import useIsMobile from './hooks/useIsMobile';

// Hook personalizado para detectar gestos de swipe
const useSwipeNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(
    null
  );
  const [showIndicator, setShowIndicator] = useState(false);

  // Configuración mínima de swipe
  const minSwipeDistance = 100;
  const maxSwipeTime = 300; // ms
  const maxVerticalDistance = 150; // Para evitar conflictos con scroll vertical

  const onTouchStart = (e: TouchEvent) => {
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
      time: Date.now(),
    };
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (!touchStart.current) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now(),
    };

    const deltaX = touchStart.current.x - touchEnd.x;
    const deltaY = Math.abs(touchStart.current.y - touchEnd.y);
    const deltaTime = touchEnd.time - touchStart.current.time;

    // Solo procesar si:
    // 1. El movimiento horizontal es mayor que el vertical
    // 2. La distancia horizontal es suficiente
    // 3. El tiempo del gesto es razonable
    if (
      Math.abs(deltaX) > deltaY &&
      Math.abs(deltaX) > minSwipeDistance &&
      deltaTime < maxSwipeTime &&
      deltaY < maxVerticalDistance
    ) {
      // Mapeo de rutas para navegación
      const routes = ['/', '/proyectos', '/contacto'];
      const currentIndex = routes.findIndex((route) => {
        if (route === '/proyectos') {
          return (
            location.pathname === route ||
            location.pathname.startsWith('/proyectos/')
          );
        }
        return location.pathname === route;
      });

      if (deltaX > 0 && currentIndex < routes.length - 1) {
        // Swipe izquierda - ir a la siguiente página
        const nextRoute = routes[currentIndex + 1];
        navigate(nextRoute);
      } else if (deltaX < 0 && currentIndex > 0) {
        // Swipe derecha - ir a la página anterior
        const prevRoute = routes[currentIndex - 1];
        navigate(prevRoute);
      }
    }

    // Reset
    touchStart.current = null;
  };

  useEffect(() => {
    if (!isMobile) return;

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [location.pathname, navigate, isMobile]);

  // Mostrar indicador temporalmente cuando cambia de página
  useEffect(() => {
    if (isMobile) {
      setShowIndicator(true);
      const timer = setTimeout(() => setShowIndicator(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isMobile]);

  return showIndicator;
};

// Componente indicador de swipe
const SwipeIndicator = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full text-xs z-50 animate-pulse">
      ← Swipe para navegar →
    </div>
  );
};

// Componente wrapper para la navegación con swipe
const SwipeNavigationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const showIndicator = useSwipeNavigation();
  return (
    <>
      {children}
      <SwipeIndicator show={showIndicator} />
    </>
  );
};

function App() {
  return (
    <Router>
      <SwipeNavigationWrapper>
        <div className="my-4 space-y-3 flex flex-col flex-grow px-3">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/proyectos/:projectId" element={<ProjectDetail />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
      </SwipeNavigationWrapper>
    </Router>
  );
}

export default App;

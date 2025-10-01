import React, { useEffect, useRef, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Header from './components/Header';
import ProjectDetail from './views/ProjectDetail';
import Contact from './views/Contact';
import useIsMobile from './hooks/useIsMobile';
import { projectsLarge } from './data/projectsData';

// Hook personalizado para detectar gestos de swipe
const useSwipeNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(
    null
  );

  // Configuración mínima de swipe
  const minSwipeDistance = 100;
  const maxSwipeTime = 300; // ms
  const maxVerticalDistance = 150; // Para evitar conflictos con scroll vertical

  const onTouchStart = useCallback((e: TouchEvent) => {
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
      time: Date.now(),
    };
  }, []);

  const onTouchEnd = useCallback(
    (e: TouchEvent) => {
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
        // Verificar si estamos en ProjectDetail
        if (
          location.pathname.startsWith('/proyectos/') &&
          location.pathname !== '/proyectos'
        ) {
          // Navegación entre proyectos
          const projectId = location.pathname.split('/').pop();
          const currentIndex = projectsLarge.findIndex(
            (p) => p.title === projectId
          );

          if (currentIndex !== -1) {
            if (deltaX > 0) {
              // Swipe izquierda - ir al siguiente proyecto
              let nextIndex = (currentIndex + 1) % projectsLarge.length;
              let count = 0;
              // Saltar proyectos "coming soon"
              while (
                projectsLarge[nextIndex].type === 'Se viene algo nuevo' &&
                count < projectsLarge.length
              ) {
                nextIndex = (nextIndex + 1) % projectsLarge.length;
                count++;
              }
              navigate(`/proyectos/${projectsLarge[nextIndex].title}`);
            } else if (deltaX < 0) {
              // Swipe derecha - ir al proyecto anterior
              let prevIndex =
                (currentIndex - 1 + projectsLarge.length) %
                projectsLarge.length;
              let count = 0;
              // Saltar proyectos "coming soon"
              while (
                projectsLarge[prevIndex].type === 'Se viene algo nuevo' &&
                count < projectsLarge.length
              ) {
                prevIndex =
                  (prevIndex - 1 + projectsLarge.length) % projectsLarge.length;
                count++;
              }
              navigate(`/proyectos/${projectsLarge[prevIndex].title}`);
            }
          }
        } else {
          // Navegación normal entre páginas
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
      }

      // Reset
      touchStart.current = null;
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    if (!isMobile) return;

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [isMobile, onTouchStart, onTouchEnd]);

  return false; // No mostrar indicador
};

// Componente wrapper para la navegación con swipe
const SwipeNavigationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useSwipeNavigation(); // Solo usar el hook, no mostrar indicador
  return <>{children}</>;
};

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;

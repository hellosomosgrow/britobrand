import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectsPreview from '../components/ProjectsPreview';

const Projects = () => {
  useEffect(() => {
    // Desplaza la página al inicio al cargar la vista
    // Usamos múltiples métodos para asegurar que funcione en todos los casos
    const scrollToTop = () => {
      // Método 1: window.scrollTo
      window.scrollTo(0, 0);

      // Método 2: scrollTop en body y documentElement
      if (document.body) {
        document.body.scrollTop = 0;
      }
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }

      // Método 3: scrollTop en html
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
    };

    // Ejecutar inmediatamente y también después de un pequeño delay
    scrollToTop();
    const timer = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Portafolio de Branding e Identidad Visual</title>
        <meta
          name="description"
          content="Proyectos de diseño gráfico, branding e identidad visual desarrollados para marcas en distintos sectores y mercados."
        />
        <meta
          name="keywords"
          content="portafolio, proyectos, branding, identidad visual, diseño gráfico, marcas, Félix Brito"
        />
      </Helmet>

      {/* H1 oculto para SEO */}
      <h1 className="sr-only">Proyectos de Branding y Dirección de Arte</h1>

      <ProjectsPreview columnsDesktop={4} />
    </div>
  );
};

export default Projects;

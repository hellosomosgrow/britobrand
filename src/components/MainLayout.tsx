import React from 'react';
import InfoSection from './InfoSection';
import ProjectsPreview from './ProjectsPreview';
import InfoCard from './InfoCard';
import InfoSocials from './InfoSocials';
import { adobefonts } from '@/assets/images';
import { projectsPreview } from '@/data/projectsData';
import ProjectPreviewCard from './ProjectPreviewCard';

const MainLayout = () => {
  return (
    <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4">
      {/* Columna de la izquierda: Para escritorio */}
      <div className="flex flex-col space-y-4 md:w-1/3 md:sticky md:top-0 md:h-screen md:overflow-y-auto no-scrollbar">
        {/* InfoSection: Visible tanto en mobile como en desktop */}
        <InfoSection />

        {/* InfoCards en desktop */}
        <div className="md:block hidden space-y-4">
          <InfoCard
            title="Experiencia"
            subtitle="Resume"
            content="Lorem ipsum dolor sit amet..."
          />
          <InfoCard
            title="Contacto"
            subtitle="¿Tienes un proyecto en mente?"
            content="britobrand@gmail.com"
          />
        </div>

        {/* InfoSocials en desktop */}
        <div className="md:block hidden">
          <InfoSocials />
        </div>

        <div className="md:block hidden">
          <InfoCard
            title="Instagram"
            subtitle="Adobe fonts"
            content="Lorem ipsum dolor sit amet..."
            image={adobefonts}
          />
        </div>

        {/* Render ProjectPreviewCard solo en desktop */}
        <div className="md:block hidden space-y-2">
          {projectsPreview.map((project, index) => (
            <ProjectPreviewCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Columna de la derecha: Para escritorio */}
      <div className="md:w-2/3 md:h-screen md:overflow-y-auto no-scrollbar">
        {/* ProjectsPreview: Visible tanto en mobile como en desktop */}
        <ProjectsPreview />
      </div>

      {/* InfoCards y InfoSocials para móvil */}
      <div className="md:hidden space-y-4">
        <InfoCard
          title="Experiencia"
          subtitle="Resume"
          content="Lorem ipsum dolor sit amet..."
        />
        <InfoCard
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente?"
          content="britobrand@gmail.com"
        />
        <InfoSocials />
        <InfoCard
          title="Instagram"
          subtitle="Adobe fonts"
          content="Lorem ipsum dolor sit amet..."
          image={adobefonts}
        />
      </div>
    </div>
  );
};

export default MainLayout;

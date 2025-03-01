import React from "react";
import InfoSection from "./InfoSection";
import ProjectsPreview from "./ProjectsPreview";
import InfoCard from "./InfoCard";
import InfoSocials from "./InfoSocials";
import adobefonts from "@/assets/images";


const MainLayout = () => {
  return (
    <div className="flex flex-col w-full space-y-4 over-flow-y-auto">
    {/* Sección Izquierda - No sticky en móviles */}
        <InfoSection />
    {/* Sección Derecha - Masonry Grid */}
        <ProjectsPreview />
        <InfoCard title="Experiencia" subtitle="Resume" content="Lorem ipsum dolor sit amet..." />
        <InfoCard title="Contacto" subtitle="¿Tienes un proyecto en mente?" content="britobrand@gmail.com" />
        <InfoSocials />
        <InfoCard title="Contacto" subtitle="¿Tienes un proyecto en mente?" content="britobrand@gmail.com" />
        <InfoCard title="Instagram" subtitle="Adobe fonts" content="Lorem ipsum dolor sit amet..." image={adobefonts} />

    </div>
  );
};

export default MainLayout;
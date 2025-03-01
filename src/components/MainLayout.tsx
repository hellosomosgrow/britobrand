import React from "react";
import InfoSection from "./InfoSection";
import ProjectsPreview from "./ProjectsPreview";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full space-y-4">
      {/* Sección Izquierda - No sticky en móviles */}
      <div className="w-full md:w-1/3">
        <InfoSection />
      </div>

      {/* Sección Derecha - Masonry Grid */}
      <div className="w-full md:w-2/3">
        <ProjectsPreview />
      </div>
    </div>
  );
};

export default MainLayout;
import React from 'react';
import ProjectsPreview from '../components/ProjectsPreview';

const Projects = () => {
  return (
    <div className="w-full mx-auto">
      <ProjectsPreview columnsDesktop={4} />
    </div>
  );
};

export default Projects;

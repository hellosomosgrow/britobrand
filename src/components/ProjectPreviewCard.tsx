import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectPreviewCard = ({
  project,
}: {
  project: { title: string; image?: string; type?: string };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewMore = () => {
    navigate(`/proyectos/${project.title}`);
  };

  const isComingSoon =
    project?.type === 'Se viene algo nuevo' || project?.title === 'GROW';

  return (
    <div
      className={`bg-[#E9E9E9] text-[#1E1E1E] rounded-lg p-3 py-5 md:row-span-2 ${
        isComingSoon ? '' : 'cursor-pointer'
      }`}
      onClick={isComingSoon ? undefined : handleViewMore}
    >
      <div className="flex justify-between space-y-5 items-start">
        <h2 className="text-[14px]">Proyectos</h2>
        {!isComingSoon && (
          <button
            onClick={isExpanded ? toggleExpand : handleViewMore}
            className="text-sm font-light cursor-pointer"
          >
            {isExpanded ? 'Ver Menos' : 'Ver Más'}
          </button>
        )}
      </div>
      <div className="flex space-x-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-16 h-16 object-cover rounded-[10px]"
        />
        <div className="mb-2">
          <h3 className="text-[15px] font-semibold">{project.title}</h3>
          <p>{project?.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewCard;

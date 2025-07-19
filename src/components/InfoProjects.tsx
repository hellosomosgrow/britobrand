const InfoProjects = ({
  projectDescription,
  projectLocationDescription,
  projectColaborators,
  projectTools,
  project,
}: {
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  projectLocationDescription: string;
  projectColaborators: string[];
  projectTools: string[];
  project: {
    image?: string;
    title?: string;
    type?: string;
  };
}) => {
  return (
    <div className="bg-[#E9E9E9] text-gray-800 rounded-lg pt-4">
      {/* Sección Card Principal */}
      <div className="border-b border-[#767575]  pb-4 px-4 mb-4 last:border-b-0 h-32">
        <h2 className="text-[14px] mb-5">Proyectos</h2>
        <div className="flex space-x-4">
          <img
            src={project?.image}
            alt={project?.title}
            className="w-16 h-auto object-cover rounded-[10px] text-[15px]"
          />
          <div className="mb-2">
            <h3 className="text-[15px] font-semibold">{project.title}</h3>
            <p>{project?.type}</p>
          </div>
        </div>
      </div>

      {/* Sección Info */}
      <div className="border-b border-[#767575] pb-4 px-4 mb-4 last:border-b-0">
        <p className="py-3 text-sm text-[#4A4949] font-light whitespace-pre-line h-[24rem]">
          {projectDescription}
        </p>
      </div>

      {/* Sección Ubicación */}
      <div className="h-32 border-b border-[#767575]  pb-4 px-4 mb-4 last:border-b-0">
        <span className="text-sm">Ubicación</span>

        <p className="mt-2 text-sm text-black font-semibold">
          {projectLocationDescription}
        </p>
      </div>

      {/* Sección Work Featured In */}
      {projectColaborators.length > 0 && (
        <div className="h-32 border-b border-[#767575] pb-4 px-4 mb-4 last:border-b-0">
          <span className="text-sm">Work Featured In</span>
          <ul className="list-none text-sm">
            {projectColaborators.map((colab, index) => {
              const [name, role] = colab.split(' - ');
              return (
                <li key={index}>
                  <span className="font-semibold">{name}</span>
                  {''}
                  <br></br>
                  <span className="font-normal">{role}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Sección Herramientas */}
      <div className="h-32 border-b border-gray-300 pb-4 px-4 last:border-b-0">
        <span className="text-sm font-semibold">Herramientas</span>

        <div className="flex gap-[6px] mt-2">
          {projectTools.map((tool, index) => (
            <img
              key={index}
              src={tool}
              alt={`Tool ${index}`}
              className="rounded-md h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoProjects;

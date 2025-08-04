export const InfoProjects = ({
  project,
}: {
  project: {
    image?: string;
    title?: string;
    type?: string;
  };
}) => {
  return (
    <div className="bg-[#E9E9E9] text-black rounded-[10px]">
      {/* Sección Card Principal */}
      <div className="md:border-b md:border-[#767575] last:border-b-0 p-3">
        <h2 className="text-[14px] mb-5 font-light">Proyectos</h2>
        <div className="flex space-x-4">
          <img
            src={project?.image}
            alt={project?.title}
            className="w-16 h-auto object-cover rounded-[10px] text-[15px]"
          />
          <div className="mb-2">
            <h3 className="text-[15px] font-semibold">{project.title}</h3>
            <p className="text-[14px] font-light">{project?.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfoProjectDetails = ({
  projectDescription,
  projectLocationDescription,
  projectColaborators,
  projectTools,
  project,
}: {
  projectDescription: string;
  projectLocationDescription: string;
  projectColaborators: string[];
  projectTools: string[];
  project: {
    title?: string;
    type?: string;
  };
}) => {
  return (
    <div className="bg-[#E9E9E9] rounded-[10px]">
      <InfoProjects project={project} />
      {/* Sección Info */}
      <div className="border-y text-black border-[#767575] pb-4 px-4 mb-4 last:border-b-0">
        {project && (
          <>
            <p className="md:hidden">Info.</p>
            <h3 className="md:hidden text-[15px] font-semibold">
              {project.title}
            </h3>
            <p className="md:hidden">{project?.type}</p>
          </>
        )}
        <p className="py-3 mt-3 pb-10 text-sm text-[#4A4949] font-light whitespace-pre-line">
          {projectDescription}
        </p>
      </div>

      {/* Sección Ubicación */}
      <div className="border-b border-[#767575]  pb-5 px-4 mb-4 last:border-b-0">
        <span className="text-sm font-light">Ubicación</span>

        <p className="mt-2 text-sm text-black font-medium">
          {projectLocationDescription}
        </p>
      </div>

      {/* Sección Work Featured In */}
      {projectColaborators.length > 0 && (
        <div className="border-b border-[#767575] pb-5 px-4 mb-4 last:border-b-0">
          <span className="text-sm font-light">Work Featured In</span>
          <ul className="list-none text-sm mt-2">
            {projectColaborators.map((colab, index) => {
              const [name, role] = colab.split(' - ');
              return (
                <li key={index}>
                  <span className="font-semibold">{name}</span>
                  {''}
                  <br></br>
                  <span className="font-light">{role}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Sección Herramientas */}
      <div className="h-32 border-b border-gray-300 pb-4 px-4 last:border-b-0">
        <span className="text-sm font-semibold">Herramientas</span>

        <div className="flex gap-[6px] mt-3">
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

import React from 'react';
import InfoSection from './InfoSection';
import ProjectsPreview from './ProjectsPreview';
import InfoCard from './InfoCard';
import InfoSocials from './InfoSocials';
import { igimage, felixbrito } from '@/assets/images';
import { projectsPreview, projectsLarge } from '@/data/projectsData';
import ProjectPreviewCard from './ProjectPreviewCard';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col md:flex-row md:gap-4">
      {/* Columna de la izquierda: Para escritorio */}
      <div className="flex flex-col gap-4 md:w-1/3 md:sticky md:h-screen md:overflow-y-auto no-scrollbar">
        {/* InfoSection: Solo visible en desktop */}
        <div className="hidden md:block">
          <InfoSection />
        </div>

        {/* InfoCards en desktop */}
        <div className="md:block hidden space-y-4">
          <InfoCard
            title="Experiencia"
            subtitle="Resume"
            content="Acá podés ver un poco de mi recorrido: estudios, experiencia y con qué tipo de proyectos he trabajado."
          />
          <InfoCard
            title="Contacto"
            subtitle="¿Tienes un proyecto en mente?"
            content={`britobrand@gmail.com\n+54 9113907-0821`}
          />
        </div>

        {/* InfoSocials en desktop */}
        <div className="md:block hidden">
          <InfoSocials />
        </div>

        <div className="md:block hidden">
          <InfoCard
            title="Instagram"
            subtitle="Free Wallpapers"
            content="Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna.."
            image={igimage}
          />
        </div>

        {/* Render ProjectPreviewCard solo en desktop */}
        <div className="md:block hidden space-y-4">
          {projectsPreview.map((project, index) => (
            <ProjectPreviewCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Columna de la derecha: Para escritorio */}
      <div className="md:w-2/3 md:h-screen md:overflow-y-auto no-scrollbar">
        {/* ProjectsPreview: Solo visible en desktop */}
        <div className="hidden md:block">
          <ProjectsPreview columnsDesktop={3} />
        </div>
      </div>

      {/* Reorganización para móvil */}
      <div className="md:hidden space-y-4">
        {/* About solo en mobile */}
        <div className="flex flex-col gap-4">
          <InfoCard
            title="About"
            subtitle="Acerca de mí"
            content="¡Hola! Soy diseñador gráfico y director creativo, especializado en identidad visual. Creo marcas que se ven bien, funcionan mejor y, sobre todo, resisten el paso del tiempo. Me enfoco en los detalles, la coherencia visual y ese 'algo' que hace que una marca se sienta auténtica.

He trabajado con estudios, emprendedores y empresas de distintos rubros: gastronomía, arquitectura, moda, salud, tecnología y más. No sigo fórmulas ni tendencias vacías—cada proyecto tiene su propia historia y merece una solución visual pensada a medida.

Diseño logos, sistemas de marca, empaques, piezas para redes, merch y todo lo que ayude a construir una identidad visual sólida y bien cuidada. Si eso te suena bien, escribime."
            image={felixbrito}
          />
        </div>

        {/* Primeros 9 proyectos en mobile */}
        <div className="grid grid-cols-1 gap-4">
          {projectsLarge.slice(0, 9).map((project, index) => (
            <ProjectPreviewLargeCard key={index} project={project} />
          ))}
        </div>

        {/* Botón "Ver todos los proyectos" */}
        <button
          onClick={() => navigate('/proyectos')}
          className="w-full bg-black text-white text-[15px] font-light py-3 rounded-[6px] transition-transform hover:scale-[1.03] cursor-pointer"
        >
          Ver Todos los Proyectos
        </button>

        {/* Servicios */}
        <InfoCard
          title="Servicios"
          subtitle="Lo que hago"
          content={`Trabajo en diseño gráfico enfocado en identidad visual. Creo marcas desde cero o ayudo a mejorar las que ya existen, cuidando cada detalle visual para que todo funcione con coherencia y claridad.

– Diseño de logos.
– Branding e identidad visual.
– Desarrollo de sistemas gráficos.
– Aplicaciones impresas y digitales.
– UI para sitios web.
– Diseño de empaques.
– Merchandising y piezas promocionales.`}
        />

        {/* Experiencia */}
        <InfoCard
          title="Experiencia"
          subtitle="Resume"
          content="Acá podés ver un poco de mi recorrido: estudios, experiencia y con qué tipo de proyectos he trabajado."
        />

        {/* Contacto */}
        <InfoCard
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente?"
          content="britobrand@gmail.com\n+54 9113907-0821"
        />

        {/* Social */}
        <InfoSocials />

        {/* Instagram */}
        <InfoCard
          title="Instagram"
          subtitle="Free Wallpapers"
          content="Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna.."
          image={igimage}
        />
      </div>
    </div>
  );
};

const ProjectPreviewLargeCard = ({
  project,
}: {
  project: { title: string; image: string; type: string };
}) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/proyectos/${project.title}`);
  };

  return (
    <div
      className="text-[#1E1E1E] rounded-lg cursor-pointer"
      onClick={handleViewMore}
    >
      <LazyImage
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover rounded-[10px]"
      />
      <div className="flex justify-between p-1 items-center">
        <h3 className="text-sm font-semibold">{project.title}</h3>
        <p className="font-light text-sm">{project.type}</p>
      </div>
    </div>
  );
};

export default MainLayout;

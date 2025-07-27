import React from 'react';
import { felixbrito } from '@/assets/images';
import InfoCard from './InfoCard';

const InfoSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <InfoCard
        title="About"
        subtitle="Acerca de mí"
        content="¡Hola! Soy diseñador gráfico y director creativo, especializado en identidad visual. Creo marcas que se ven bien, funcionan mejor y, sobre todo, resisten el paso del tiempo. Me enfoco en los detalles, la coherencia visual y ese “algo” que hace que una marca se sienta auténtica.

He trabajado con estudios, emprendedores y empresas de distintos rubros: gastronomía, arquitectura, moda, salud, tecnología y más. No sigo fórmulas ni tendencias vacías—cada proyecto tiene su propia historia y merece una solución visual pensada a medida.

Diseño logos, sistemas de marca, empaques, piezas para redes, merch y todo lo que ayude a construir una identidad visual sólida y bien cuidada. Si eso te suena bien, escribime."
        image={felixbrito}
      />
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
      {/* <InfoCard title="Social" content="Enlaces a redes sociales" />
      <InfoCard title="Experiencia" content="Resumen de experiencia" /> */}
    </div>
  );
};

export default InfoSection;

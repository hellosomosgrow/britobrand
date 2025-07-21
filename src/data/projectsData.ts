import {
  sedel,
  casanuna,
  factor,
  pintalopro,
  botanico,
  labsantaelena,
  emamodels,
  sierraatlantica,
  mss,
  lachacra,
} from '@/assets/images';
import {
  coverbotanico,
  covercasanuna,
  covercota,
  covercycling,
  coverdudu,
  coverideamania,
  //coverinvolvere,
  coveremamodels,
  //coverespacio2040,
  coverfactor,
  //coverlachacra,
  coverminingSuppliesSolutions,
  coverpintaloPro,
  //coversantaElena,
  covernuevoproyecto,
  coversedel,
  coversierraAtlantica,
  coverlointerior,
  coverplatz,
  psLogo,
  aiLogo,
  figmaLogo,
  dudulogo,
  dudu1,
  dudu2,
  dudu3,
  dudu4,
  dudu5,
  dudu6,
  dudu7,
  dudu8,
  dudu9,
  dudu10,
  duduprincipal,
  cotaprincipal,
  cotalogo,
  cota1,
  cota2,
  cota3,
  cota4,
  cota5,
  cota6,
  cota7,
  cota8,
  cota9,
  cota10,
  cota11,
  cota12,
  cota13,
  cota14,
  cota15,
  cycling1,
  cycling2,
  cycling3,
  cycling4,
  cycling5,
  cycling6,
  cycling7,
  cycling8,
  cycling9,
  cycling10,
  cycling11,
  cycling12,
  cycling13,
  cycling14,
  cycling15,
  cyclinglogo,
  emamodels1,
  emamodels2,
  emamodels3,
  emamodels4,
  emamodels5,
  emamodels6,
  emamodels7,
  emamodels8,
  emamodels9,
  emamodels10,
  emamodels11,
  emamodels12,
  emamodels13,
  emamodels14,
  platzlogo,
  platz1,
  platz2,
  platz3,
  platz4,
  platz5,
  platz6,
  platz7,
  platz8,
  platz9,
  platz10,
  platz11,
  platz12,
  platz13,
  platz14,
  platz15,
  platz16,
  platz17,
  //imgrecthorizontal,
  //imgrectvertical,
  //imgrectvertical2,
} from '@/assets/images';

export type Project = {
  title: string;
  image: string;
  type: string;
  description?: string;
  location?: string;
  colaborators?: string[];
  tools?: string[];
  previewImage?: string;
  images?: { url: string; layout: string }[];
};

export const projectsPreview: Project[] = [
  {
    title: 'DUDÚ',
    type: 'Identidad visual',
    description: `Creamos una identidad visual clara, delicada y memorable para una marca de accesorios infantiles. La propuesta combina tipografías con personalidad, una paleta vibrante pero suave, e ilustraciones de trazo simple con personajes pensados para conectar con niñas y madres.

El violeta principal retoma el logo físico del consultorio, reforzando la coherencia entre lo digital y lo presencial. Las fotos, con luz natural y niñas reales, suman cercanía y autenticidad.

El sistema fue diseñado para ser versátil y escalable: desde etiquetas y packaging hasta templates para redes.

El concepto #DuduForKids sintetiza una marca pensada con atención al detalle, emoción y proyección.`,

    location: 'Montevideo - Uruguay',
    colaborators: [
      'Shalma Suarez Yazigi. - Estratega de Marketing y Comunicación.',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
    image: dudulogo,
    images: [
      { url: duduprincipal, layout: 'full' },
      { url: dudu1, layout: 'vertical' },
      { url: dudu2, layout: 'vertical' },
      { url: dudu3, layout: 'full' },
      { url: dudu4, layout: 'vertical' },
      { url: dudu5, layout: 'vertical' },
      { url: dudu6, layout: 'full' },
      { url: dudu7, layout: 'vertical' },
      { url: dudu8, layout: 'vertical' },
      { url: dudu9, layout: 'vertical' },
      { url: dudu10, layout: 'vertical' },
    ],
  },
  {
    title: 'COTA',
    type: 'Identidad visual',
    description: `Lo Interior es un estudio de arquitectura y diseño que entiende los espacios desde lo esencial. La identidad debía transmitir calma, detalle y contención. El punto de partida fue una paleta sobria liderada por un verde sage que articula el tono visual de toda la marca.

El logotipo principal convive con su versión comprimida: LOI, un acrónimo que nace de forma natural como respuesta a la dinámica de los soportes y la manera en que las personas nombran lo que ya sienten cercano. 

Este recurso permitió desarrollar un sistema más flexible, sin perder elegancia ni reconocimiento.
Cada pieza —desde las tarjetas hasta el feed— busca replicar esa misma sensación que deja un buen espacio: equilibrio, intención y una belleza silenciosa.
`,
    location: 'Miami - Estados Unidos',

    tools: [psLogo, aiLogo, figmaLogo],
    image: cotalogo,
    images: [
      { url: cotaprincipal, layout: 'full' },
      { url: cota1, layout: 'full' },
      { url: cota2, layout: 'vertical' },
      { url: cota3, layout: 'vertical' },
      { url: cota4, layout: 'full' },
      { url: cota5, layout: 'vertical' },
      { url: cota6, layout: 'vertical' },
      { url: cota7, layout: 'full' },
      { url: cota8, layout: 'full' },
      { url: cota9, layout: 'vertical' },
      { url: cota10, layout: 'vertical' },
      { url: cota11, layout: 'full' },
      { url: cota12, layout: 'full' },
      { url: cota13, layout: 'vertical' },
      { url: cota14, layout: 'vertical' },
      { url: cota15, layout: 'full' },
    ],
  },
  {
    title: 'CYCLING',
    image: cyclinglogo,
    type: 'Identidad Visual',
    description: `Cycling necesitaba una identidad tan ágil como su propuesta: una tienda que combina venta, reparación y comunidad en torno a la bicicleta. El diseño parte de un concepto claro: velocidad, precisión y ritmo constante. Todo tenía que sentirse en movimiento.

Desde el logo hasta el empaque, trabajé en un sistema visual que no se detiene. Tipografías técnicas, un verde neón que no pasa desapercibido y layouts que siguen una línea modular marcada, como una ruta bien trazada. También diseñé contenido para redes, gráfica para productos, sitio web y elementos físicos.

El resultado es una identidad de alto rendimiento. Clara en su lenguaje, compacta en su estructura y con una estética que pisa fuerte en cada soporte, sin perder funcionalidad ni estilo.

`,
    location: 'Santiago de Chile - Chile',
    colaborators: [],
    tools: [psLogo, aiLogo, figmaLogo],
    images: [
      { url: cycling1, layout: 'full' },
      { url: cycling2, layout: 'full' },
      { url: cycling3, layout: 'vertical' },
      { url: cycling4, layout: 'vertical' },
      { url: cycling5, layout: 'full' },
      { url: cycling6, layout: 'full' },
      { url: cycling7, layout: 'vertical' },
      { url: cycling8, layout: 'vertical' },
      { url: cycling9, layout: 'full' },
      { url: cycling10, layout: 'vertical' },
      { url: cycling11, layout: 'vertical' },
      { url: cycling12, layout: 'full' },
      { url: cycling13, layout: 'vertical' },
      { url: cycling14, layout: 'vertical' },
      { url: cycling15, layout: 'full' },
    ],
  },
  {
    title: 'EMA MODELS',
    image: emamodels,
    type: 'Identidad Visual',
    description: `EMA Models es una escuela de modelaje que forma nuevos talentos con un enfoque profesional, inclusivo y contemporáneo. La marca necesitaba transmitir 
estructura, estilo y confianza sin caer en estereotipos.
Rediseñé todo el sistema visual: logo, paleta, papelería, sitio web, redes y piezas impresas. 

El lenguaje visual se basa en líneas claras, tipografía con presencia y una composición ordenada que refleja el compromiso formativo de la escuela. El logotipo, construido sobre un juego de proporciones simples, funciona tanto como firma como sello institucional.

EMA comunica con claridad, elegancia y dirección. Una identidad pensada para inspirar, formar y proyectar.
`,
    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo, figmaLogo],
    images: [
      { url: emamodels1, layout: 'full' },
      { url: emamodels2, layout: 'full' },
      { url: emamodels3, layout: 'vertical' },
      { url: emamodels4, layout: 'vertical' },
      { url: emamodels5, layout: 'full' },
      { url: emamodels6, layout: 'vertical' },
      { url: emamodels7, layout: 'vertical' },
      { url: emamodels8, layout: 'full' },
      { url: emamodels9, layout: 'vertical' },
      { url: emamodels10, layout: 'vertical' },
      { url: emamodels11, layout: 'full' },
      { url: emamodels12, layout: 'vertical' },
      { url: emamodels13, layout: 'vertical' },
      { url: emamodels14, layout: 'full' },
    ],
  },
  {
    title: 'PLATZ',
    image: platzlogo,
    type: 'Identidad Visual',
    description: `PLATZ es un café que apuesta por la sencillez bien pensada. Desde la creación del logo hasta el diseño completo del sistema visual, desarrollé una identidad clara, funcional y estética, que acompaña la arquitectura del espacio y la experiencia de marca.
El proyecto incluyó branding, redes, menú, packaging, etiquetas, propuesta web y una serie de ilustraciones pensadas especialmente para el merchandising. Todo parte de un mismo lenguaje visual: limpio, moderno y coherente.
Una identidad sin exceso, pero con presencia. Precisa, directa y diseñada para durar.
`,
    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo, figmaLogo],
    images: [
      { url: platz1, layout: 'full' },
      { url: platz2, layout: 'full' },
      { url: platz3, layout: 'vertical' },
      { url: platz4, layout: 'vertical' },
      { url: platz5, layout: 'full' },
      { url: platz6, layout: 'vertical' },
      { url: platz7, layout: 'vertical' },
      { url: platz8, layout: 'full' },
      { url: platz9, layout: 'vertical' },
      { url: platz10, layout: 'vertical' },
      { url: platz11, layout: 'full' },
      { url: platz12, layout: 'vertical' },
      { url: platz13, layout: 'vertical' },
      { url: platz14, layout: 'full' },
      { url: platz15, layout: 'vertical' },
      { url: platz16, layout: 'vertical' },
      { url: platz17, layout: 'full' },
    ],
  },
  {
    title: 'BOTÁNICO',
    image: botanico,
    type: 'Identidad Visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'CASA NUNA',
    image: casanuna,
    type: 'Identidad Visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'PINTALO PRO',
    image: pintalopro,
    type: 'Identidad Visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'SIERRA ATLÁNTICA',
    image: sierraatlantica,
    type: 'Identidad Visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'SEDEL',
    image: sedel,
    type: 'Identidad Visual + Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'FACTOR',
    image: factor,
    type: 'Identidad Visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'LA CHACRA',
    image: lachacra,
    type: 'Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'LABORATORIO SANTA ELENA',
    image: labsantaelena,
    type: 'Identidad Visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
  {
    title: 'MINING SUPPLIES SOLUTIONS',
    image: mss,
    type: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget.',
    location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colaborators: [
      'Shalma Suarez - Consultora de marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
  },
];

export const projectsLarge = [
  { title: 'DUDÚ', image: coverdudu, type: 'Identidad Visual' },
  { title: 'COTA', image: covercota, type: 'Identidad Visual' },
  { title: 'CYCLING', image: covercycling, type: 'Identidad Visual' },
  { title: 'EMA MODELS', image: coveremamodels, type: 'Identidad Visual' },
  { title: 'PINTALO PRO', image: coverpintaloPro, type: 'Identidad Visual' },
  { title: 'LO INTERIOR', image: coverlointerior, type: 'Identidad Visual' },
  { title: 'BOTÁNICO', image: coverbotanico, type: 'Identidad Visual' },
  { title: 'FACTOR', image: coverfactor, type: 'Identidad Visual' },
  { title: 'PLATZ', image: coverplatz, type: 'Identidad Visual' },
  { title: 'IDEAMANIA', image: coverideamania, type: 'Identidad Visual' },
  { title: 'CASA NUNA', image: covercasanuna, type: 'Identidad Visual' },
  { title: 'SEDEL', image: coversedel, type: 'Identidad Visual' },
  //{ title: 'INVOLVERE', image: coverinvolvere, type: 'Identidad Visual' },
  {
    title: 'SIERRA ATLÁNTICA',
    image: coversierraAtlantica,
    type: 'Identidad Visual',
  },
  //{ title: 'ESPACIO 2024', image: coverespacio2040, type: 'Identidad Visual' },
  //{ title: 'LA CHACRA', image: coverlachacra, type: 'Identidad Visual' },
  //{ title: 'SANTA ELENA', image: coversantaElena, type: 'Identidad Visual' },
  {
    title: 'MINING SUPPLIES SOLUTIONS',
    image: coverminingSuppliesSolutions,
    type: 'Identidad Visual',
  },
  {
    title: 'GROW',
    image: covernuevoproyecto,
    type: 'Identidad Visual',
  },
];

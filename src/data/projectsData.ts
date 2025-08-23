import {
  sedel,
  casanuna,
  factor,
  pintalopro,
  botanico,
  emamodels,
  sierraatlantica,
  mss,
  coverbotanico,
  covercasanuna,
  covercota,
  covercycling,
  coverdudu,
  coverideamania,
  coveremamodels,
  coverfactor,
  coverminingSuppliesSolutions,
  coverpintaloPro,
  covernuevoproyecto,
  coversedel,
  coversierraAtlantica,
  coverlointerior,
  coverplatz,
  covergrow,
  psLogo,
  aiLogo,
  figmaLogo,
  duduprincipal,
  cotaprincipal,
  cotalogo,
  cyclinglogo,
  dudulogo,
  //dudu1,
  dudu2,
  dudu3,
  dudu4,
  dudu6,
  dudu8,
  dudu9,
  //dudu10,
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
  platz16,
  platz17,
  botanico1,
  botanico2,
  //botanico3,
  botanico5,
  botanico7,
  botanico8,
  botanico9,
  botanico10,
  botanico11,
  botanico14,
  lointerior,
  lointerior1,
  lointerior2,
  lointerior3,
  lointerior4,
  lointerior5,
  lointerior6,
  lointerior7,
  lointerior8,
  lointerior9,
  lointerior10,
  lointerior11,
  lointerior12,
  lointerior13,
  factor1,
  factor2,
  factor3,
  factor4,
  factor5,
  factor6,
  factor7,
  factor8,
  factor9,
  factor10,
  factor11,
  factor12,
  factor13,
  factor14,
  ideamania,
  ideamania1,
  ideamania2,
  ideamania3,
  ideamania4,
  ideamania6,
  ideamania8,
  ideamania9,
  ideamania10,
  ideamania11,
  ideamania12,
  ideamania13,
  ideamania14,
  ideamania15,
  casanuna1,
  casanuna2,
  casanuna3,
  casanuna4,
  casanuna5,
  casanuna6,
  casanuna7,
  casanuna8,
  casanuna9,
  casanuna10,
  casanuna11,
  sedel1,
  sedel2,
  sedel3,
  sedel4,
  sedel5,
  sedel6,
  sedel7,
  sedel8,
  sedel9,
  sedel10,
  sedel11,
  sedel12,
  sedel13,
  sedel14,
  sedel15,
  sedel16,
  sedel17,
  sedel18,
  sierraatlantica1,
  sierraatlantica2,
  sierraatlantica3,
  sierraatlantica4,
  sierraatlantica5,
  sierraatlantica6,
  sierraatlantica7,
  sierraatlantica8,
  sierraatlantica9,
  sierraatlantica10,
  sierraatlantica11,
  mss1,
  mss2,
  mss3,
  mss4,
  mss5,
  mss6,
  mss7,
  mss8,
  pintalopro1,
  pintalopro2,
  pintalopro3,
  pintalopro4,
  pintalopro6,
  pintalopro7,
  pintalopro8,
  pintalopro9,
  pintalopro11,
  pintalopro13,
  pintalopro14,
  pintalopro15,
} from '@/assets/optimized-images';

import {
  botanico4Video,
  botanico6Video,
  botanico12Video,
  botanico13Video,
  dudu2Video,
  dudu6Video,
  dudu8Video,
  dudu11Video,
  ideamania7Video,
  ideamania5Video,
  lointerior14Video,
  pintalopro5Video,
  pintalopro10Video,
  pintalopro12Video,
  platz15Video,
  botanico3Video,
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
  images?: { url: string; layout: string; isVideo?: boolean }[];
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
    tools: [psLogo, aiLogo],
    image: dudulogo,
    images: [
      { url: duduprincipal, layout: 'full' },
      { url: dudu2, layout: 'vertical' },
      { url: dudu2Video, layout: 'vertical', isVideo: true },
      { url: dudu3, layout: 'full' },
      { url: dudu4, layout: 'vertical' },
      { url: dudu6Video, layout: 'vertical', isVideo: true },
      { url: dudu6, layout: 'full' },

      { url: dudu8Video, layout: 'vertical', isVideo: true },
      { url: dudu8, layout: 'vertical' },
      { url: dudu9, layout: 'vertical' },
      { url: dudu11Video, layout: 'vertical', isVideo: true },
    ],
  },
  {
    title: 'COTA',
    type: 'Identidad visual',
    description: `COTA es una marca que ayuda a reformar espacios pensando en quienes los habitan. Remodelaciones, permisos y trámites técnicos, pero con una estética cercana, joven y resolutiva. Desde el naming, buscamos una palabra que hablara el lenguaje de la arquitectura sin perder claridad: COTA, una línea que marca el antes y el después.
    
    Diseñé toda la identidad visual: logotipo, paleta, tipografías, papelería, merch, ploteo de vehículos, redes y diseño web. El sistema parte de formas geométricas simples que reflejan orden y precisión, contrastadas con una comunicación accesible, visual y directa.
    
    Una marca que se ve profesional pero no fría, técnica pero no lejana. COTA transforma espacios y acompaña el proceso con diseño claro y propósito.


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
      { url: platz15Video, layout: 'vertical', isVideo: true },
      { url: platz16, layout: 'vertical' },
      { url: platz17, layout: 'full' },
    ],
  },
  {
    title: 'PINTALO PRO',
    image: pintalopro,
    type: 'Identidad Visual',
    description: `Trabajé en el rediseño completo de la imagen de PíntaloPro, una marca de servicios de pintura y renovación con foco en calidad, tecnología y experiencia. El objetivo fue construir una identidad más sólida, moderna y coherente con su propuesta actual.

Desarrollé un logo tipográfico que transmite precisión y profesionalismo, junto a una marca secundaria versátil pensada para aplicaciones en señalética, redes y uniformes. La estética general apuesta por el minimalismo, con una paleta en blanco, negro y grises que refuerza el carácter técnico y limpio del rubro.

La elección de la tipografía Inter y la construcción de un sistema visual claro permiten jerarquías bien definidas y una comunicación directa. Además, diseñé piezas clave como tarjetas, señalética, web y línea gráfica digital para redes, asegurando consistencia en todos los puntos de contacto de la marca.
`,
    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo, figmaLogo],
    images: [
      { url: pintalopro1, layout: 'full' },
      { url: pintalopro2, layout: 'full' },

      { url: pintalopro4, layout: 'vertical' },
      { url: pintalopro5Video, layout: 'vertical', isVideo: true },
      { url: pintalopro3, layout: 'full' },
      { url: pintalopro6, layout: 'full' },
      { url: pintalopro7, layout: 'vertical' },
      { url: pintalopro8, layout: 'vertical' },
      { url: pintalopro9, layout: 'full' },
      { url: pintalopro10Video, layout: 'vertical', isVideo: true },
      { url: pintalopro11, layout: 'vertical' },
      { url: pintalopro12Video, layout: 'full', isVideo: true },
      { url: pintalopro13, layout: 'vertical' },
      { url: pintalopro14, layout: 'vertical' },
      { url: pintalopro15, layout: 'full' },
    ],
  },
  {
    title: 'BOTÁNICO',
    image: botanico,
    type: 'Identidad Visual',
    description: `Botánico es un café que ya tenía raíces firmes y una comunidad fiel, pero buscaba renovar su identidad visual para acompañar su crecimiento. El encargo fue claro: sin tocar el logo, potenciar todo lo demás para reflejar mejor su energía actual.

El trabajo se centró en un refresh visual que incluyó paleta de color, ilustraciones, diseño del menú, piezas impresas y contenido para redes. Cada decisión buscó mantener la calidez del lugar, con una estética más orgánica, cuidada y coherente con la experiencia real del espacio.

El resultado es una identidad que respira verde, sabor y cercanía. Una marca que sigue creciendo con intención, sin perder lo que la hace especial.
`,
    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo],
    images: [
      { url: botanico1, layout: 'full' },
      { url: botanico2, layout: 'full' },
      { url: botanico3Video, layout: 'vertical' },
      { url: botanico4Video, layout: 'vertical', isVideo: true },
      { url: botanico5, layout: 'full' },
      { url: botanico6Video, layout: 'vertical', isVideo: true },
      { url: botanico7, layout: 'vertical' },
      { url: botanico8, layout: 'full' },
      { url: botanico9, layout: 'vertical' },
      { url: botanico10, layout: 'vertical' },
      { url: botanico11, layout: 'full' },
      { url: botanico12Video, layout: 'vertical', isVideo: true },
      { url: botanico13Video, layout: 'vertical', isVideo: true },
      { url: botanico14, layout: 'full' },
    ],
  },
  {
    title: 'LO INTERIOR',
    image: lointerior,
    type: 'Identidad Visual',
    description: `Lo Interior es un estudio de arquitectura y diseño que entiende los espacios desde lo esencial. La identidad debía transmitir calma, detalle y contención. El punto de partida fue una paleta sobria liderada por un verde sage que articula el tono visual de toda la marca.

El logotipo principal convive con su versión comprimida: LOI, un acrónimo que nace de forma natural como respuesta a la dinámica de los soportes y la manera en que las personas nombran lo que ya sienten cercano. 

Este recurso permitió desarrollar un sistema más flexible, sin perder elegancia ni reconocimiento.
Cada pieza —desde las tarjetas hasta el feed— busca replicar esa misma sensación que deja un buen espacio: equilibrio, intención y una belleza silenciosa.
`,
    location: 'Texas - Estados Unidos',
    colaborators: ['Eleazar Briceño y Manuel G. Ordóñez - Agencia de Diseño.'],
    tools: [psLogo, aiLogo],
    images: [
      { url: lointerior1, layout: 'full' },
      { url: lointerior2, layout: 'vertical' },
      { url: lointerior3, layout: 'vertical' },
      { url: lointerior4, layout: 'full' },
      { url: lointerior5, layout: 'full' },
      { url: lointerior6, layout: 'vertical' },
      { url: lointerior7, layout: 'vertical' },
      { url: lointerior8, layout: 'full' },
      { url: lointerior9, layout: 'full' },
      { url: lointerior10, layout: 'full' },
      { url: lointerior11, layout: 'vertical' },
      { url: lointerior12, layout: 'vertical' },
      { url: lointerior13, layout: 'full' },
      { url: lointerior14Video, layout: 'full', isVideo: true },
    ],
  },
  {
    title: 'FACTOR',
    image: factor,
    type: 'Identidad Visual',
    description: `Es una agencia de marketing digital enfocada en performance. Su promesa es clara: multiplicar resultados. El objetivo del proyecto fue crear una identidad visual que tuviera el mismo impacto que sus campañas: directa, enérgica y memorable.

Diseñé el logo, una tipografía custom basada en trazos modulares y una paleta cromática audaz que permite adaptarse a múltiples formatos. El sistema se complementa con layouts dinámicos, piezas para redes, presentaciones y elementos gráficos que refuerzan movimiento y expansión.

Una marca que se construye con ritmo, habla con datos y deja claro cuál es su factor diferencial: resultados que se notan.
`,
    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo],
    images: [
      { url: factor1, layout: 'full' },
      { url: factor2, layout: 'full' },
      { url: factor3, layout: 'vertical' },
      { url: factor4, layout: 'vertical' },
      { url: factor5, layout: 'full' },
      { url: factor6, layout: 'vertical' },
      { url: factor7, layout: 'vertical' },
      { url: factor8, layout: 'full' },
      { url: factor9, layout: 'vertical' },
      { url: factor10, layout: 'vertical' },
      { url: factor11, layout: 'full' },
      { url: factor12, layout: 'vertical' },
      { url: factor13, layout: 'vertical' },
      { url: factor14, layout: 'full' },
    ],
  },
  {
    title: 'IDEAMANIA',
    image: ideamania,
    type: 'Identidad Visual',
    description: `Ideamania llegó con una idea clara: necesitaban renovar su imagen para verse más actuales, sin perder cercanía ni funcionalidad. Lo primero que trabajamos fue el logo. Querían que se leyera de una, sin esfuerzo. Algo simple, directo y eficaz. A partir de ahí, desarrollé toda la identidad visual: paleta de color, universo gráfico, propuesta web y un sistema adaptable a todo tipo de soporte.

Busqué que la nueva imagen tuviera personalidad, pero sin complicaciones. Que pudiera funcionar igual de bien en redes, etiquetas, gorras, totebags, packaging y hasta en el ploteo de vehículos. Todo con un lenguaje visual fresco, reconocible y coherente.

Fue una renovación total que dejó atrás lo genérico para mostrar una marca mucho más segura de lo que ofrece: diseño, productos y servicios con propósito.
  `,
    location: 'Santiago de Chile - Chile',
    colaborators: [],
    tools: [psLogo, aiLogo, figmaLogo],
    images: [
      { url: ideamania5Video, layout: 'full', isVideo: true },
      { url: ideamania3, layout: 'vertical' },
      { url: ideamania4, layout: 'vertical' },

      { url: ideamania2, layout: 'full' },
      { url: ideamania1, layout: 'full' },

      { url: ideamania6, layout: 'vertical' },
      { url: ideamania7Video, layout: 'vertical', isVideo: true },
      { url: ideamania8, layout: 'full' },
      { url: ideamania9, layout: 'vertical' },
      { url: ideamania10, layout: 'vertical' },
      { url: ideamania11, layout: 'full' },
      { url: ideamania12, layout: 'vertical' },
      { url: ideamania13, layout: 'vertical' },
      { url: ideamania14, layout: 'full' },
      { url: ideamania15, layout: 'full' },
    ],
  },
  {
    title: 'CASA NUNA',
    image: casanuna,
    type: 'Identidad Visual',
    description: `Casa Nuna es una marca de café en grano enfocada en ofrecer producto de calidad, cuidadosamente empacado y con una estética que respira calidez y detalle. El objetivo fue crear una identidad visual que hiciera del empaque una experiencia tan cuidada como el café que contiene.

Diseñé un sistema gráfico adaptable a distintos productos, con especial atención al color, las tipografías y los materiales. La identidad transmite cercanía, origen y equilibrio: desde los packs hasta las aplicaciones digitales.

Una marca pensada para verse bien en anaquel, en redes y en la rutina diaria de quien elige un buen café.
`,
    location: 'Santiago de Chile - Chile',
    colaborators: [],
    tools: [psLogo, aiLogo],
    images: [
      { url: casanuna1, layout: 'full' },
      { url: casanuna2, layout: 'full' },
      { url: casanuna3, layout: 'vertical' },
      { url: casanuna4, layout: 'vertical' },
      { url: casanuna5, layout: 'full' },
      { url: casanuna6, layout: 'vertical' },
      { url: casanuna7, layout: 'vertical' },
      { url: casanuna8, layout: 'full' },
      { url: casanuna9, layout: 'full' },
      { url: casanuna10, layout: 'vertical' },
      { url: casanuna11, layout: 'vertical' },
    ],
  },
  {
    title: 'SEDEL',
    image: sedel,
    type: 'Identidad Visual + Website',
    description: `SEDEL es una de las empresas de control de plagas más reconocidas en Uruguay. Con años de trayectoria, necesitaba actualizar su identidad visual sin perder solidez ni confianza. El reto fue rediseñar su imagen para que hablara el mismo idioma que sus servicios: técnico, preciso y eficiente.

El trabajo incluyó el rediseño del logo, un símbolo geométrico basado en la letra “S”, que transmite movimiento y estructura. También desarrollé un nuevo sistema gráfico aplicado a web, uniformes, vehículos y materiales corporativos, reforzando profesionalismo y visibilidad de marca.

Una identidad renovada que se ve más actual, más clara y lista para seguir creciendo en un rubro que exige confianza y respuesta inmediata.
`,

    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo, figmaLogo],
    images: [
      { url: sedel1, layout: 'full' },
      { url: sedel2, layout: 'vertical' },
      { url: sedel3, layout: 'vertical' },
      { url: sedel4, layout: 'full' },
      { url: sedel5, layout: 'vertical' },
      { url: sedel6, layout: 'vertical' },
      { url: sedel7, layout: 'full' },
      { url: sedel8, layout: 'vertical' },
      { url: sedel9, layout: 'vertical' },
      { url: sedel10, layout: 'full' },
      { url: sedel11, layout: 'full' },
      { url: sedel12, layout: 'vertical' },
      { url: sedel13, layout: 'vertical' },
      { url: sedel14, layout: 'full' },
      { url: sedel15, layout: 'full' },
      { url: sedel16, layout: 'vertical' },
      { url: sedel17, layout: 'vertical' },
      { url: sedel18, layout: 'full' },
    ],
  },
  {
    title: 'SIERRA ATLÁNTICA',
    image: sierraatlantica,
    type: 'Identidad Visual',
    description: `Sierra Atlántica fue un proyecto de identidad visual que desarrollé desde cero, buscando representar una marca honesta, natural y cercana. El objetivo era construir una identidad sencilla pero con personalidad, que pudiera vivir bien tanto en lo digital como en sus aplicaciones físicas.

Diseñé el logo, el sistema gráfico, algunas ilustraciones aplicadas al merchandising y piezas como totebags. Cada elemento fue pensado para transmitir una estética limpia, con tonos neutros y gestos visuales que conectaran con la esencia de la marca.

Quise que todo se sintiera coherente, sin exceso, con una estética tranquila pero firme. Una identidad visual que acompaña sin imponerse, y que funciona con claridad en distintos soportes.
`,
    location: 'Montevideo - Uruguay',
    colaborators: [],
    tools: [psLogo, aiLogo],
    images: [
      { url: sierraatlantica1, layout: 'full' },
      { url: sierraatlantica2, layout: 'vertical' },
      { url: sierraatlantica3, layout: 'vertical' },
      { url: sierraatlantica4, layout: 'full' },
      { url: sierraatlantica5, layout: 'vertical' },
      { url: sierraatlantica6, layout: 'vertical' },
      { url: sierraatlantica7, layout: 'full' },
      { url: sierraatlantica8, layout: 'vertical' },
      { url: sierraatlantica9, layout: 'vertical' },
      { url: sierraatlantica10, layout: 'vertical' },
      { url: sierraatlantica11, layout: 'vertical' },
    ],
  },
  {
    title: 'MSS',
    image: mss,
    type: 'Branding',
    description: `MSS – Mining Supplies Solutions es una empresa especializada en insumos para minería. Ya contaban con un logotipo base, y el desafío fue vectorizarlo y construir a partir de él un sistema visual sólido, técnico y profesional.

Diseñé toda la identidad visual: papelería, presentaciones, assets para dispositivos y piezas corporativas. Trabajé una paleta de azules profundos con acentos eléctricos, tipografía de buen rendimiento técnico y una grilla visual basada en bloques, inspirada en estructuras modulares.

El resultado es una marca que transmite orden, precisión y escala. Visualmente clara, lista para operar en entornos exigentes y altamente funcionales.

`,
    location: 'Orlando - Estados Unidos',
    colaborators: [],
    tools: [psLogo, aiLogo],
    images: [
      { url: mss1, layout: 'full' },
      { url: mss2, layout: 'full' },
      { url: mss5, layout: 'vertical' },
      { url: mss4, layout: 'vertical' },
      { url: mss3, layout: 'full' },
      { url: mss7, layout: 'vertical' },
      { url: mss8, layout: 'vertical' },
      { url: mss6, layout: 'full' },
    ],
  },
];

export const projectsLarge = [
  { title: 'DUDÚ', image: coverdudu, type: 'Identidad Visual' },
  { title: 'COTA', image: covercota, type: 'Identidad Visual' },
  { title: 'CYCLING', image: covercycling, type: 'Identidad Visual' },
  { title: 'EMA MODELS', image: coveremamodels, type: 'Identidad Visual' },
  { title: 'PLATZ', image: coverplatz, type: 'Identidad Visual' },
  { title: 'PINTALO PRO', image: coverpintaloPro, type: 'Identidad Visual' },
  { title: 'BOTÁNICO', image: coverbotanico, type: 'Identidad Visual' },
  { title: 'LO INTERIOR', image: coverlointerior, type: 'Identidad Visual' },

  { title: 'FACTOR', image: coverfactor, type: 'Identidad Visual' },

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
    title: 'MSS',
    image: coverminingSuppliesSolutions,
    type: 'Identidad Visual',
  },
  {
    title: 'GROW',
    image: covergrow,
    type: 'Identidad Visual',
  },
  {
    title: 'PUMPA',
    image: covernuevoproyecto,
    type: 'Se viene algo nuevo',
  },
];

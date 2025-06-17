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
  coverinvolvere,
  coveremamodels,
  coverespacio2040,
  coverfactor,
  coverlachacra,
  coverminingSuppliesSolutions,
  coverpintaloPro,
  coversantaElena,
  coversedel,
  coversierraAtlantica,
  psLogo,
  aiLogo,
  figmaLogo,
  dudulogo,
  dudu1,
  dudu2,
  duduprincipal,
  imgrecthorizontal,
  imgrectvertical,
  imgrectvertical2,
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
  images?: string[];
};

export const projectsPreview: Project[] = [
  {
    title: 'DUDÚ',
    type: 'Identidad visual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    location:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
    colaborators: [
      'Shalma Suarez - Consultora de Marcas (UY)',
      'Arquetipo - Estudio de Diseño (USA)',
    ],
    tools: [psLogo, aiLogo, figmaLogo],
    image: dudulogo,
    images: [
      duduprincipal,
      dudu1,
      dudu2,
      imgrecthorizontal,
      imgrectvertical,
      imgrectvertical2,
    ],
  },
  {
    title: 'EMA MODELS',
    image: emamodels,
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
  { title: 'IDEAMANIA', image: coverideamania, type: 'Identidad Visual' },
  { title: 'BOTÁNICO', image: coverbotanico, type: 'Identidad Visual' },
  { title: 'CASA NUNA', image: covercasanuna, type: 'Identidad Visual' },
  { title: 'SEDEL', image: coversedel, type: 'Identidad Visual' },
  { title: 'FACTOR', image: coverfactor, type: 'Identidad Visual' },
  { title: 'INVOLVERE', image: coverinvolvere, type: 'Identidad Visual' },
  {
    title: 'SIERRA ATLÁNTICA',
    image: coversierraAtlantica,
    type: 'Identidad Visual',
  },
  { title: 'PINTALO PRO', image: coverpintaloPro, type: 'Identidad Visual' },
  { title: 'ESPACIO 2024', image: coverespacio2040, type: 'Identidad Visual' },
  { title: 'LA CHACRA', image: coverlachacra, type: 'Identidad Visual' },
  { title: 'SANTA ELENA', image: coversantaElena, type: 'Identidad Visual' },
  {
    title: 'MINING SUPPLIES SOLUTIONS',
    image: coverminingSuppliesSolutions,
    type: 'Identidad Visual',
  },
];

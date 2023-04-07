import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PostAdd,
} from '@material-ui/icons';

export const mainNavigation = [
  {
    name: 'Principal',
    icon: Dashboard,
    url: `/major`,
  },
  {
    name: 'Productor',
    icon: ImportContacts,
    url: `/producers`,
    navigationData: [
      {
        name: 'Semillerista',
        icon: MenuBook,
        url: `/producers/seedling`,
      },
      {
        name: 'Externo',
        icon: PostAdd,
        url: `/producers/extern`,
      },
    ],
  },
  {
    name: 'Nuestras Semillas',
    icon: PeopleAlt,
    url: `/seeds_varieties`,
  },
  {
    name: 'Tarifas',
    icon: PeopleAlt,
    url: `/rates_seeds`,
  },
  {
    name: 'Programaciones',
    icon: PeopleAlt,
    url: `/programing_conditioning`,
  },
  {
    name: 'Muestreo',
    icon: PeopleAlt,
    url: `/sampling_seeds`,
  },
];

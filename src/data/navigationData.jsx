import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PostAdd,
} from '@material-ui/icons';

export const mainNavigation = [
  {
    name: 'Pesentation',
    icon: Dashboard,
    url: `/presentation`,
  },
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
    name: 'Nuestas Semillas',
    icon: PeopleAlt,
    url: `/seeds_ours`,
  },
];

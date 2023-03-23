import { lazy } from 'react';
///////hooks/////////
function importPage(...args) {
  const path = args
    .map((arg) => {
      if (Array.isArray(arg)) {
        const nestPath = new Array(arg[1])
          .fill(0)
          .map(() => arg[0])
          .join('/');
        arg = nestPath;
      }
      return arg;
    })
    .join('/');
  return import(`../../../../pages/Dashboard/${path}`);
}
/////hook///
export const mainRoutes = [

  {
    path: `/major`,
    component: lazy(() => importPage(['Main'])),
  },
  {
    path: `/producers`,
    component: lazy(() => importPage('Producers', 'routes')),
    routes: [
      {
        path: `/producers/seedling`,
        component: lazy(() => importPage('Producers', 'Seedling')),
      },
      {
        path: `/producers/extern`,
        component: lazy(() => importPage('Producers', 'Extern')),
      },
    ],
  },
  {
    path: `/seeds_ours`,
    component: lazy(() => importPage(['SeedsOurs'])),
  },
];

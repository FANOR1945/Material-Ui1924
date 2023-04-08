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
        path: `/producers/seeders`,
        component: lazy(() => importPage('Producers', 'AddSeeders')),
      },

      {
        path: `/producers/extern`,
        component: lazy(() => importPage('Producers', 'Extern')),
      },

      {
        path: `/producers/addgrowers`,
        component: lazy(() => importPage('Producers', 'AddGrowers')),
      },
    ],
  },

  {
    path: `/seeds_varieties`,
    component: lazy(() => importPage(['SeedsVarieties'])),
  },
  {
    path: `/seed_reception`,
    component: lazy(() => importPage('SeedReception', 'routes')),
    routes: [
      {
        path: `/seed_reception/income`,
        component: lazy(() => importPage('SeedReception', 'Income')),
      },
      {
        path: `/seed_reception/discharge`,
        component: lazy(() => importPage('SeedReception', 'Discharge')),
      },
    ],
  },
  {
    path: `/rates_seeds`,
    component: lazy(() => importPage(['RatesSeeds'])),
  },
  {
    path: `/programing_conditioning`,
    component: lazy(() => importPage(['ProgramingConditioning'])),
  },
  {
    path: `/sampling_seeds`,
    component: lazy(() => importPage(['SamplingSeeds'])),
  },
];

// Currrent combination
let cc = 1;

const combinations = [
  ['#7e837c', '#474946', '#ccd1cb', '#252625'],
  ['#21A3A3', '#135757', '#00D3BA', '#207373'],
  ['#8aba75', '#c8ecb8', '#90c17a', '#43e50a'],
];

export const themeL = {
  palette: {
    type: 'light',
    primary: {
      main: combinations[cc][0],
    },
    secondary: {
      main: combinations[cc][1],
    },
  },
  typography: {
    fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
  },
};

export const themeD = {
  palette: {
    type: 'dark',
    primary: {
      main: combinations[cc][2],
    },
    secondary: {
      main: combinations[cc][3],
    },
  },
  typography: {
    fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
  },
};

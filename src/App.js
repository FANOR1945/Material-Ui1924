import React from 'react';

import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';

function App() {
  return (
    <>
      {' '}
      <PrivateRoutes />
      <PublicRoutes />
    </>
  );
}

export default App;

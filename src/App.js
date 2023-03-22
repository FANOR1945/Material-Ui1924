import React from 'react';

import PrivateRoutes from './pages/Dashboard/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';

function App() {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
}

export default App;

import React from 'react';
import Spinner from '../../Global/Spinner';
import Routes from './Routes/Routes';
const RoutesWithLayout = ({ layout: Layout, routes, LayoutProps }) => {
  return (
    <Layout {...LayoutProps}>
      <React.Suspense fallback={<Spinner />}>
        <Routes routes={routes} />
      </React.Suspense>
    </Layout>
  );
};

export default RoutesWithLayout;

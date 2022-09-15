import React, { lazy, Suspense } from 'react';
import { OrderProps } from './Order';

const LazyOrder = lazy(() => import('./Order'));

const Order = (props: OrderProps & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyOrder {...props} />
  </Suspense>
);

export default Order;

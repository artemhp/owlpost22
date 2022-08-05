import React, { lazy, Suspense } from 'react';

const LazyCategory = lazy(() => import('./Category'));

const Category = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCategory {...props} />
  </Suspense>
);

export default Category;

import React, { lazy, Suspense } from 'react';
import { CategoryProps } from './Category';

const LazyCategory = lazy(() => import('./Category'));

const Category = (props: CategoryProps) => (
  <Suspense fallback={null}>
    <LazyCategory {...props} />
  </Suspense>
);

export default Category;

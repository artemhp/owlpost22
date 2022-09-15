import React, { lazy, Suspense } from 'react';
import { ListProps } from './List';

const LazyList = lazy(() => import('./List'));

const List = (props: ListProps) => (
  <Suspense fallback={null}>
    <LazyList {...props} />
  </Suspense>
);

export default List;

import React, { lazy, Suspense } from 'react';

const LazyList = lazy(() => import('./List'));
import { ListProps } from './List';

const List = (props: ListProps) => (
  <Suspense fallback={null}>
    <LazyList {...props} />    
  </Suspense>
);

export default List;

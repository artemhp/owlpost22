import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { capitalize } from 'lodash';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import Category from './components/Category/Category';
import List from './components/List/List.lazy';
import Order from './components/Order/Order.lazy';

function ComponentHouse() {
  let { house } = useParams();
  return <List house={capitalize(house)} type={house} />;
}

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Category />}></Route>
          <Route path="/list/:house" element={<ComponentHouse />}></Route>
          <Route path="/order/:student" element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

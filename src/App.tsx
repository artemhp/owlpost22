import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Category from './components/Category/Category';
import List from './components/List/List.lazy';
import Order from './components/Order/Order.lazy';

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Category />}></Route>
          <Route path="/list/:house" element={<List />}></Route>
          <Route path="/order/:uid" element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

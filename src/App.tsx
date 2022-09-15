import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

import Category from './components/Category/Category.lazy';
import List from './components/List/List.lazy';
import Order from './components/Order/Order.lazy';
import { THouse } from './models/Student';

function WrapList() {
  const { house } = useParams();
  return <List house={house as THouse} />;
}

function WrapOrder() {
  const { studentId } = useParams();
  return <Order studentId={studentId} />;
}

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />}></Route>
          <Route path="/list/:house" element={<WrapList />}></Route>
          <Route path="/order/:studentId" element={<WrapOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

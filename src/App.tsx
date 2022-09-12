import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Category from "./components/Category/Category.lazy";
import List from "./components/List/List.lazy";
import Order from "./components/Order/Order.lazy";

import { useNavigate } from 'react-router-dom';

function CategoryWithRouting() {
  let navigate = useNavigate();
  return <Category navigate={(route) => navigate(route)} />;
}

function ListWithRouting() {
  let navigate = useNavigate();
  return <List navigate={(route) => navigate(route)} />;
}

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryWithRouting />}></Route>
          <Route path="/list/:house" element={<ListWithRouting />}></Route>
          <Route path="/order/:studentId" element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

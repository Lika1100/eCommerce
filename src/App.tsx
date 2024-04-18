import { Products } from './components/Products/Products';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Product } from './components/Product/Product';
import Header from "./components/Header/Header";
import { useState } from 'react';

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const App = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route
              path="/:page"
              element={<Products page={page} setPage={setPage} />}
            />
            <Route path="/:page/:productId" element={<Product page={page} setPage={setPage} />} />
            <Route index element={<Products page={page} setPage={setPage} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App

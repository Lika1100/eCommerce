import { Products } from './components/Products/Products';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import Header from "./components/Header/Header";
import { useState } from 'react';

const App = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={page === 1 ? "/" : "/:page"} element={<Products page={page} setPage={setPage} />} />
          <Route path="/id/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App

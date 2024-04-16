import { Products } from './components/Products/Products';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';

const App = () => {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path="/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App

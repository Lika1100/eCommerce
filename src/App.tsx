import { Products } from './components/Products/Products';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:page" element={<Products />} />
          <Route path="/id/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App

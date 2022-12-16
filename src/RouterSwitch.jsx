import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Shopping from './components/Shopping';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const RouterSwitch = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/shopping' element={<Shopping />} />
      <Route path='/shopping/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </Router>
);

export default RouterSwitch;

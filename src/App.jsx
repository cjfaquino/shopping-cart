import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import MyNav from './components/MyNav';
import './App.css';

const App = () => (
  <div className='app'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<MyNav />}>
        <Route index element={<Shop />} />
        <Route path=':id' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  </div>
);

export default App;

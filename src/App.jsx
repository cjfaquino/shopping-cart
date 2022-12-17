import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import MyNav from './components/MyNav';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const getQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += Number(item.quantity);
    });
    return total;
  };

  const addToCart = (item, quantity) => {
    let temp = cart.slice();

    // check for existing
    const index = temp.findIndex((obj) => obj.item.id === item.id);

    // update if exisiting otherwise add to array
    if (index > -1) {
      temp[index] = { item, quantity: temp[index].quantity + quantity };
    } else temp = [...temp, { item, quantity }];

    setCart(temp);
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<MyNav quantity={getQuantity()} />}>
          <Route index element={<Shop />} />
          <Route
            path=':id'
            element={<ProductDetail handleCart={{ addToCart }} />}
          />
          <Route
            path='cart'
            element={<Cart handleCart={{ addToCart }} cart={cart} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

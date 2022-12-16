import React, { useState, useEffect } from 'react';
import MyNav from './MyNav';
import ProductCard from './ProductCard';

const Shopping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
    return () => {};
  }, []);

  const AllProducts = () =>
    products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return (
    <div>
      <MyNav />
      <h1>Shopping</h1>
      <div className='products'>{products !== 0 && <AllProducts />}</div>
    </div>
  );
};

export default Shopping;

import React, { useState, useEffect } from 'react';
import ProductPreview from './ProductPreview';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
    return () => {};
  }, []);

  const AllProducts = () =>
    products.map((product) => (
      <ProductPreview key={product.id} product={product} />
    ));

  return (
    <div>
      <h1>Shop</h1>
      <div className='products'>{products !== 0 && <AllProducts />}</div>
    </div>
  );
};

export default Shop;

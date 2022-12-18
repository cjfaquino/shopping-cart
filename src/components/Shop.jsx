import React from 'react';
import ProductPreview from './ProductPreview';
import useFetch from './Utils/useFetch';

const Shop = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  return (
    <div className='shop wrapper'>
      <h1>Shop</h1>
      <div className='products'>
        {products &&
          products.map((product) => (
            <ProductPreview
              key={product.id}
              product={product}
              allProducts={products}
            />
          ))}
      </div>
    </div>
  );
};

export default Shop;

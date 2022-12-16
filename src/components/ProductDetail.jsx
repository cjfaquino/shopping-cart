import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyNav from './MyNav';

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const match = useParams();

  const fetchItem = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${match.id}`);
    const data = await res.json();
    setItem(data);
  };

  useEffect(() => {
    fetchItem();

    return () => {};
  }, []);

  return (
    <div>
      <MyNav />
      {Object.keys(item).length !== 0 && (
        <div className='product-detail'>
          <div className='detail-image-card'>
            <img src={item.image} alt={item.title} title={item.title} />
          </div>

          <div className='detail-info-card'>
            <div>
              <h2>{item.title}</h2>
              <span>
                {item.rating.rate} {item.rating.count}
              </span>
            </div>
            <div>${item.price}</div>
            <div>
              <div>Description</div>
              <div>{item.description}</div>
            </div>
            <div>{item.category}</div>

            <label htmlFor='quantity'>
              Quantity
              <input id='quantity' type='number' placeholder='1' />
            </label>
            <button type='button'>-</button>
            <button type='button'>+</button>
            <button type='button'>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

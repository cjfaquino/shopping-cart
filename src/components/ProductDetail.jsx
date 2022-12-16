import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyNav from './MyNav';

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
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

  const handleChange = (e) => setQuantity(e.target.value);

  const incQ = () => setQuantity((x) => Number(x) + 1);

  const decQ = () =>
    setQuantity((x) => {
      if (x > 1) return x - 1;
      return x;
    });

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
              <input
                id='quantity'
                type='number'
                value={quantity}
                min='1'
                onChange={handleChange}
              />
            </label>
            <button type='button' onClick={decQ}>
              -
            </button>
            <button type='button' onClick={incQ}>
              +
            </button>
            <button type='button'>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

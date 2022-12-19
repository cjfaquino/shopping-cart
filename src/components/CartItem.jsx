import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartItem = ({ product, handleCart }) => {
  const { item, quantity } = product;
  const { id, title, price, image } = item;

  const [qty, setQty] = useState(quantity);

  const handleChange = (e) => {
    setQty(Number(e.target.value));
  };

  const handleDelete = () => {
    handleCart.deleteFromCart(id);
  };

  const incQ = () => {
    setQty((x) => x + 1);
  };

  const decQ = () => {
    setQty((x) => {
      if (x > 0) return x - 1;
      return x;
    });
  };

  const totalP = () => {
    const total = qty * price;
    return total.toFixed(2);
  };

  useEffect(() => {
    handleCart.updateFromCart(item, qty);
  }, [qty]);

  return (
    <div className='cart-item'>
      <Link
        to={`/shop/${id}`}
        title={title}
        className='cart-item-img-container'
        state={{ product: item }}
      >
        <img className='cart-item-img' src={image} alt={title} />
      </Link>
      <div className='cart-item-info'>
        <Link
          to={`/shop/${id}`}
          title={title}
          className='cart-item-title'
          state={{ product: item }}
        >
          {title}
        </Link>
        <div className='cart-item-price'>${price.toFixed(2)}</div>
        <div>
          <button type='button' className='btn-dec' onClick={decQ}>
            -
          </button>

          <input
            className='cart-item-quantity'
            type='number'
            name='cart-qty'
            value={qty}
            onChange={handleChange}
          />

          <button type='button' className='btn-inc' onClick={incQ}>
            +
          </button>
          <button type='button' className='btn-delete' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className='cart-item-total-price'>${totalP()}</div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
      }),
      price: PropTypes.number,
      image: PropTypes.string,
      map: PropTypes.func,
    }),
    quantity: PropTypes.number,
  }).isRequired,
  handleCart: PropTypes.shape({
    deleteFromCart: PropTypes.func.isRequired,
    updateFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default CartItem;

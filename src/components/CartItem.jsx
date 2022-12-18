import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ product, handleCart }) => {
  const { item, quantity } = product;
  const { id, title, price, image } = item;

  const handleDelete = () => {
    handleCart.deleteFromCart(id);
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-img-container'>
        <img className='cart-item-img' src={image} alt={title} />
      </div>
      <div className='cart-item-info'>
        <div className='cart-item-title'>{title}</div>
        <div className='cart-item-quantity'>Qty: {quantity}</div>
        <div>
          <button type='button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className='cart-item-price'>${price.toFixed(2)}</div>
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
  }).isRequired,
};

export default CartItem;

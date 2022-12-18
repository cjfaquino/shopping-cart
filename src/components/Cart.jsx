import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart, totalQ, handleCart }) => {
  const totalP = () => {
    let sum = 0;
    cart.forEach((obj) => {
      sum += obj.item.price * obj.quantity;
    });
    return sum;
  };

  const handleDelete = (id) => () => {
    handleCart.deleteFromCart(id);
  };

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className='cart-items'>
        {cart.map((product) => {
          const { item, quantity } = product;
          const { id, title, price, image } = item;
          return (
            <div key={id} className='cart-item'>
              <div className='cart-item-img-container'>
                <img className='cart-item-img' src={image} alt={title} />
              </div>
              <div className='cart-item-info'>
                <div className='cart-item-title'>{title}</div>
                <div className='cart-item-quantity'>Qty: {quantity}</div>
                <div>
                  <button type='button' onClick={handleDelete(id)}>
                    Delete
                  </button>
                </div>
              </div>
              <div className='cart-item-price'>${price.toFixed(2)}</div>
            </div>
          );
        })}
      </div>
      <div className='cart-subtotal'>
        Subtotal (<span className='subtotal-quantity'>{totalQ} Items</span>):{' '}
        <span className='subtotal-price'>${totalP().toFixed(2)}</span>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  totalQ: PropTypes.number.isRequired,
  handleCart: PropTypes.shape({
    deleteFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

Cart.defaultProps = {
  cart: [],
};

export default Cart;

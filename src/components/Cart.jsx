import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ cart, totalQ, handleCart }) => {
  const totalP = () => {
    let sum = 0;
    cart.forEach((obj) => {
      sum += obj.item.price * obj.quantity;
    });
    return sum;
  };

  return (
    <div className='cart wrapper'>
      <h1>Cart</h1>
      <div className='cart-items'>
        {cart.map((product) => (
          <CartItem
            key={product.item.id}
            product={product}
            handleCart={handleCart}
          />
        ))}
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

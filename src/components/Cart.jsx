import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart }) => (
  <div>
    <h1>Cart</h1>
    {cart.map((product) => {
      const { item, quantity } = product;
      const { id, title, price } = item;
      return (
        <div key={id}>
          <div>{title}</div>
          <div>{price}</div>
          <div>{quantity}</div>
        </div>
      );
    })}
  </div>
);

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
};

Cart.defaultProps = {
  cart: [],
};

export default Cart;

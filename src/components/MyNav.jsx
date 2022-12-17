import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const MyNav = ({ quantity }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shopping</Link>
        </li>
        <li className='cart'>
          <Link to='/shop/cart'>Cart</Link>{' '}
          <span className='number'>{quantity}</span>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

MyNav.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default MyNav;

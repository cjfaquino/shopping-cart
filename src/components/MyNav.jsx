import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyNav = () => (
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
          <Link to='/shop/cart'>Cart</Link> <span className='number'>0</span>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default MyNav;

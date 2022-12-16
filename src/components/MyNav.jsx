import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/shopping'>Shopping</Link>
      </li>
      <li className='cart'>
        <Link to='/cart'>Cart</Link> <span className='number'>0</span>
      </li>
    </ul>
  </nav>
);

export default MyNav;

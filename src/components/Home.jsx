import React from 'react';
import { Link } from 'react-router-dom';
import saleIMG from '../assets/sale.jpg';

const Home = () => (
  <div className='home'>
    <div className='box '>
      <div className='home-info'>
        <div>
          <h2>A Store of The Year</h2>
          <div className='home-quote'>
            The products in this store are being sold!
          </div>
          <Link to='/shop'>
            <button type='button' className='btn-start'>
              Start browsing
            </button>
          </Link>
        </div>
        <div className='home-image-container'>
          <img src={saleIMG} alt='sale' className='home-image' />
        </div>
      </div>
    </div>
    <div className='line' />
  </div>
);

export default Home;

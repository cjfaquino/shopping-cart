import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    rating: { rate, count },
    price,
    image,
  } = product;

  return (
    <div key={id} className='item-card'>
      <Link to={`/shopping/${id}`} title={title} className='item-title'>
        {title}
      </Link>
      <div>${price.toFixed(2)}</div>

      <Link to={`/shopping/${id}`} title={title} className='image-card'>
        <img src={image} title={title} alt={title} />
      </Link>

      <div>
        {rate} {count}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  product: {
    id: '1',
    title: 'Nvidia 9080',
    rating: { rate: 0.1, count: 1000 },
    price: 10000,
    image: 'https://an-image-url.com',
  },
};

export default ProductCard;

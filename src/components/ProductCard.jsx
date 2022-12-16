import React from 'react';
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
      <div title={title} className='item-title'>
        {title}
      </div>
      <div>${price}</div>
      <div className='image-card'>
        <img src={image} title={title} alt={title} />
      </div>
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

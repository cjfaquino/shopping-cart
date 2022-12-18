import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductPreview = ({ product, allProducts }) => {
  const {
    id,
    title,
    rating: { rate, count },
    price,
    image,
  } = product;

  return (
    <div key={id} className='item-card'>
      <Link
        to={`/shop/${id}`}
        title={title}
        className='item-title'
        state={{ product, allProducts }}
      >
        {title}
      </Link>

      <Link
        to={`/shop/${id}`}
        title={title}
        className='image-card'
        state={{ product, allProducts }}
      >
        <img src={image} title={title} alt={title} />
      </Link>

      <div className='preview-info'>
        <span className='preview-price'>${price.toFixed(2)}</span>
        <span className='preview-rate'>{rate}</span> (
        <span className='preview-count'>{count}</span>)
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
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

ProductPreview.defaultProps = {
  product: {
    id: '1',
    title: 'Nvidia 9080',
    rating: { rate: 0.1, count: 1000 },
    price: 10000,
    image: 'https://an-image-url.com',
  },
};

export default ProductPreview;

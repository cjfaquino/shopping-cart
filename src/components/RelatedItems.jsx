import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RelatedItems = ({ related }) => (
  <div className='related-section'>
    <div className='related-label'>Related</div>
    <div className='related-items'>
      {related.map((obj) => {
        const { title, image, id } = obj;
        return (
          <div key={id} className='related-item-card'>
            <Link
              to={`/shop/${id}`}
              title={title}
              className='related-item-title'
              state={{ product: obj, allProducts: related }}
            >
              {title}
            </Link>
            <Link
              to={`/shop/${id}`}
              title={title}
              className='related-img-container'
              state={{ product: obj, allProducts: related }}
            >
              <img src={image} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

RelatedItems.propTypes = {
  related: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
      }),
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default RelatedItems;

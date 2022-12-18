import React from 'react';
import PropTypes from 'prop-types';

const RelatedItems = ({ related }) => (
  <div className='related-section'>
    <div className='related-label'>Related</div>
    <div className='related-items'>
      {related.map((obj) => (
        <div key={obj.id}>
          <div>{obj.title}</div>
        </div>
      ))}
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

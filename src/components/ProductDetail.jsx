import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFetch from './Utils/useFetch';
import RelatedItems from './RelatedItems';

const ProductDetail = ({ handleCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState();
  const params = useParams();
  const location = useLocation();

  let allItems;
  let item;
  let currentLoading;
  let currentError;
  let allLoading;
  let allError;

  const fetchAllProducts = () => {
    const fetchAll = useFetch(`https://fakestoreapi.com/products/`);
    allItems = fetchAll.data;
    allLoading = fetchAll.loading;
    allError = fetchAll.error;
  };

  const fetchProduct = () => {
    const fetchObj = useFetch(`https://fakestoreapi.com/products/${params.id}`);
    item = fetchObj.data;
    currentLoading = fetchObj.loading;
    currentError = fetchObj.error;
  };

  // fetch only if directly linking otherwise use passed data
  if (location.state !== null) {
    const { product, allProducts } = location.state;
    if (product !== undefined) {
      item = product;
    } else {
      fetchProduct();
    }
    if (allProducts !== undefined) {
      allItems = allProducts;
    } else {
      fetchAllProducts();
    }
  } else {
    fetchProduct();
    fetchAllProducts();
  }

  useEffect(() => {
    if (allItems !== undefined && item !== undefined) {
      const filtered = allItems.filter((obj) => obj.category === item.category);
      setRelated(filtered);
    }
  }, [allItems, item]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return () => {};
  }, [item]);

  const handleChange = (e) => setQuantity(Number(e.target.value));

  const incQ = () => setQuantity((x) => Number(x) + 1);

  const decQ = () =>
    setQuantity((x) => {
      if (x > 1) return x - 1;
      return x;
    });

  const addToCart = () => {
    handleCart.addToCart(item, quantity);
  };

  return (
    <div className='details wrapper'>
      {item && (
        <div className='product-detail'>
          <div className='detail-image-card'>
            <img src={item.image} alt={item.title} title={item.title} />
          </div>

          <div className='detail-info-card'>
            <div>
              <h2>{item.title}</h2>
              <span>
                <span className='rating'>{item.rating.rate} out of 5</span>
                {' | '}
                <span className='count'>{item.rating.count} ratings</span>
              </span>
            </div>
            <div className='detail-price'>${item.price.toFixed(2)}</div>
            <div className='detail-desc'>
              <div className='desc-label'>Description</div>
              <div>{item.description}</div>
            </div>
            <div className='category'>{item.category}</div>

            <div className='detail-bottom-row'>
              <label htmlFor='quantity'>
                Quantity
                <input
                  id='quantity'
                  type='number'
                  value={quantity}
                  min='1'
                  onChange={handleChange}
                />
              </label>
              <button type='button' onClick={decQ}>
                -
              </button>
              <button type='button' onClick={incQ}>
                +
              </button>
              <button type='button' onClick={addToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      {related && <RelatedItems related={related} />}
    </div>
  );
};

ProductDetail.propTypes = {
  handleCart: PropTypes.shape({
    addToCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductDetail;

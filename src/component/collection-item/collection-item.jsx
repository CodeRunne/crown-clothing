import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button';

// Stylesheet
import './collection-item.scss';

function CollectionItem({ item, addCartItem }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>

        <CustomButton onClick={() => addCartItem(item)} inverted>Add to cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
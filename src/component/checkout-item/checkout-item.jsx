import React from 'react';
import { connect } from 'react-redux';

// Action Type
import { clearItemFromCart, addCartItem, removeCartItem } from '../../redux/cart/cart-actions';

// Stylesheet
import './checkout-item.scss';


function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div> 
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
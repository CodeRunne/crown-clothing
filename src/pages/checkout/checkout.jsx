import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Cart Selector
import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart-selectors.js';

// Component
import CheckoutItem from '../../component/checkout-item/checkout-item';

// Stylesheet
import './checkout.scss';


function Checkout({ cartItems, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />        
            ))}

            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemTotal
})

export default connect(mapStateToProps)(Checkout);
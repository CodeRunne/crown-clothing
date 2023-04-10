import React from 'react';
import { connect } from 'react-redux';

// Cart Selectors
import { selectCartItemCount } from '../../redux/cart/cart-selectors';

// Action Type
import { toggleCartHidden } from './../../redux/cart/cart-actions';

import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';

// Stylesheet
import './cart-icon.scss';

function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{ itemCount }</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

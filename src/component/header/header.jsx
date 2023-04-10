import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

// Component
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

// Stylesheet
import './header.scss';

function Header({ hidden }) {
  return (
    <header className='header'>
        <Link to="/" className="logo-container">
            <Logo className='logo' />
        </Link>

        <div className="options">
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/contact">CONTACT</Link>
            <CartIcon />
        </div>

        { hidden ? null : <CartDropdown /> }
    </header>
  )
}

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
})

export default connect(mapStateToProps)(Header);
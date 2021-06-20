import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../CartItem/CartItem';
import Button from '../button/button.component';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Got to Checkout</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

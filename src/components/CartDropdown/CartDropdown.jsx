import React from 'react';
import Button from '../button/button.component';

import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>Got to Checkout</Button>
    </div>
  );
};

export default CartDropdown;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J4TufBy1756y7BzjbP77DIGvY9t6T3d12Nxm44y3R9kk6F3KpPGWMXX4svar138ItkGmF4wdu9NHl64S0etFQDr000W5zw0M6';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is ${price}`}
      label="Pay Now"
      name="HYPE GEAR"
      shippingAddress
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

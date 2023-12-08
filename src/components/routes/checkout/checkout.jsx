import { useContext } from "react";

import { CartContext } from "../../../context/cart.context";

import CheckoutItem from "../../checkout-items/checkout-item";

import {
  Container,
  Block,
  Header,
  Total,
  EmptyMessage,
} from "./checkout.style";

const Checkout = () => {
  const { cartItems, cartTotal, cartCount } = useContext(CartContext);

  return (
    <Container>
      <Header>
        <Block>
          <span>Cart</span>
          <span>({cartCount})</span>
        </Block>
      </Header>

      {cartItems.length ? (
        cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}

      {cartItems.length ? <Total>Total: ${cartTotal} </Total> : ""}
    </Container>
  );
};

export default Checkout;

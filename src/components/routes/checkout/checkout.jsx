import { useContext } from "react";

import { CartContext } from "../../../context/cart.context";

import CheckoutItem from "../../checkout-items/checkout-item";

import { Container, Block, Header, Total } from "./checkout.style";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  // console.log(cartItems)

  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <Total>Total: ${cartTotal} </Total>
    </Container>
  );
};

export default Checkout;

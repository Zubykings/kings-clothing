import { useContext } from "react";

import { CartContext } from "../../context/cart.context";


import {
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  Image,
  Name,
  Quantity,
  RemoveButton,
  Value,
  PriceContainer,
  Container,
  NameAndPrice,
  DeleteIcon
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const increaseQuantity = () => addItemToCart(cartItem);
  const decreaseQuantity = () => removeItemFromCart(cartItem);

  console.log(cartItem);
  return (
    <CheckoutItemContainer>
      <Container>
        <ImageContainer>
          <Image src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <NameAndPrice>
          <Name>{name}</Name>
          <span>${price}</span>
        </NameAndPrice>
      </Container>

      <PriceContainer>
        <RemoveButton onClick={clearItemHandler}>
          {" "}
          <DeleteIcon /> <span>remove</span>
        </RemoveButton>

        <Quantity>
          <Arrow onClick={decreaseQuantity}>-</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={increaseQuantity}>+</Arrow>
        </Quantity>
      </PriceContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  Image,
  NameAndPrice,
  Quantity,
  RemoveButton,
  Value,
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
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <NameAndPrice>{name}</NameAndPrice>
      <Quantity>
        <Arrow onClick={decreaseQuantity}>-</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>+</Arrow>
      </Quantity>
      <NameAndPrice>{price}</NameAndPrice>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

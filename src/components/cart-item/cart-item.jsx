import { CartItemContainer, ItemDetails, Image, Name } from "./cart-item.style";

const CartItem = ({ cartItems }) => {
  const { name, imageUrl, price, quantity } = cartItems;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}{" "}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

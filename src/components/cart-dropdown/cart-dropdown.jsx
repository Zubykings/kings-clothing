import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import CartItem from "../cart-item/cart-item";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.style";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItems={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleCheckOut}>go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

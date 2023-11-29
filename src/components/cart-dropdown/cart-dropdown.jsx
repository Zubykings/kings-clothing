import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems} = useContext(CartContext);

  const handleCheckOut = () => {
    
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
      <Button onClick={handleCheckOut}>go to checkout</Button>
    </div>
  );
};

export default CartDropdown;

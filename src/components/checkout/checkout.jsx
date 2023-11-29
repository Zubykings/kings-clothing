import { useContext } from "react";

import { CartContext } from "../../context/cart.context";


import CartItem from "../cart-item/cart-item";



const CheckOut = () => {
  const { cartItems } = useContext(CartContext);


  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
      
    </div>
  );
};

export default CheckOut;

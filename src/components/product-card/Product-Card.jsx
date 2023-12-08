import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ProductCardContainer, Footer } from "./product-card.style";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
    // console.log(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

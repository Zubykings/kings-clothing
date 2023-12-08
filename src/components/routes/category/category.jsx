import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../../context/categories-context";

import ProductCard from "../../product-card/Product-Card";

import { CategoryContainer, Title, Container } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Container>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Container>
  );
};

export default Category;

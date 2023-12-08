import { Link } from "react-router-dom";

import ProductCard from "../product-card/Product-Card";

import {
  PreviewContainer,
  Title,
  Preview,
  ViewAll,
  TitleContainer,
} from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  return (
    <PreviewContainer>
      <TitleContainer>
        <h2>
          <Title>{title.toUpperCase()}</Title>
        </h2>
        <ViewAll to={title}>View All</ViewAll>
      </TitleContainer>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};

export default CategoryPreview;

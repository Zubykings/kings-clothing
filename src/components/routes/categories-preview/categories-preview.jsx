import { useContext } from "react";

import { CategoriesContext } from "../../../context/categories-context";

import CategoryPreview from "../../category-preview/category-preview";

import { Container } from "./categories-preview.style";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <Container>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </Container>
    </>
  );
};

export default CategoriesPreview;

import React from 'react';
import styled from 'styled-components';

import { ProductCard } from './ProductCard';
import { NewProduct } from 'pages/productEditing/components/NewProduct';
import { ProductType } from 'assets/products_mock_data';

type ProductsCardsComponentType = {
  editPage?: boolean;
};
const ProductsCardsComponent = styled.div<ProductsCardsComponentType>`
  margin-top: 1em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ editPage }) => (editPage ? '400px' : '320px')}, 1fr)
  );
`;

interface ProductListType {
  editPage?: boolean;
  products: ProductType[];
}
const ProductList = ({ editPage, products }: ProductListType): JSX.Element => (
  <>
    {editPage && <NewProduct />}
    {products.map((product) => (
      <ProductCard key={product.id} editPage={editPage} {...product} />
    ))}
  </>
);

interface ProductCardsCatalogType {
  editPage?: boolean;
  products: ProductType[];
}

export const ProductCardsCatalog = ({
  editPage,
  products,
}: ProductCardsCatalogType): JSX.Element => (
  <ProductsCardsComponent editPage={editPage}>
    <ProductList editPage={editPage} products={products} />
  </ProductsCardsComponent>
);

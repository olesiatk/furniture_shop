import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Banner } from './banner/Banner';
import { Filters } from './filters/Filters';
import { ProductCardsCatalog } from 'components';
import { productsAlphabeticallySelector } from 'redux/selectors';

const MainContent = styled.div`
  margin-top: 2em;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const ProductsWrapper = styled.main`
  margin: 0;
`;

export const ProductsContainer = (): JSX.Element => {
  const products = useSelector(productsAlphabeticallySelector);
  const [basicProducts, setBasicProducts] = useState(products);
  return (
    <ProductsWrapper>
      <Banner />
      <MainContent>
        <Filters products={basicProducts} setProducts={setBasicProducts} />
        <ProductCardsCatalog products={basicProducts} />
      </MainContent>
    </ProductsWrapper>
  );
};

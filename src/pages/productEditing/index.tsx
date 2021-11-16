import React from 'react';
import { useSelector } from 'react-redux';

import { ProductCardsCatalog, PageLoading } from 'components';
import {
  isProductsLoadingSelector,
  productsAlphabeticallySelector,
} from 'redux/selectors';

export const ProductEditing = (): JSX.Element => {
  const products = useSelector(productsAlphabeticallySelector);
  const isProductsLoading = useSelector(isProductsLoadingSelector);

  return (
    <PageLoading
      isLoading={isProductsLoading}
      component={() => <ProductCardsCatalog editPage products={products} />}
    />
  );
};

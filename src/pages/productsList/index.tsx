import React from 'react';
import { useSelector } from 'react-redux';

import { ProductsContainer } from './ProductsContainer';
import { isProductsLoadingSelector } from 'redux/selectors';
import { PageLoading } from 'components';

export const ProductsList = (): JSX.Element => {
  const isProductsLoading = useSelector(isProductsLoadingSelector);

  return (
    <PageLoading
      isLoading={isProductsLoading}
      component={() => <ProductsContainer />}
    />
  );
};

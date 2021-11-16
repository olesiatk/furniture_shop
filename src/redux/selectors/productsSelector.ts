import { createSelector } from 'reselect';

import { sortAlphabetically } from 'utils';
import { RootState } from 'redux/reducers';
import { ProductType } from 'assets/products_mock_data';

export const productsSelector = (state: RootState): ProductType[] =>
  state.products.products;

export const isProductsLoadingSelector = (state: RootState): boolean =>
  state.products.isProductsLoading;

export const productsAlphabeticallySelector = createSelector(
  productsSelector,
  (products) => sortAlphabetically(products)
);

import { createSelector } from 'reselect';

import { sortAlphabetically } from 'utils';
import { RootState } from 'redux/reducers';
import { ProductType } from 'assets/products_mock_data';

const cartProductsSelector = (state: RootState): ProductType[] =>
  state.cart.cartProducts;

export const totalPriceSelector = createSelector(cartProductsSelector, (products) =>
  products.reduce(
    (cartTotal: number, { price, count }: { price: number; count: number }) =>
      cartTotal + price * count,
    0
  )
);
export const cartProductsAlphabeticallySelector = createSelector(
  cartProductsSelector,
  (products) => sortAlphabetically(products)
);

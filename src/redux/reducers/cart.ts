import produce from 'immer';

import {
  ADD_PRODUCT_TO_CART,
  INCREASE_PRODUCT_COUNT,
  REMOVE_PRODUCT,
  DECREASE_PRODUCT_COUNT,
  CLEAR_CART,
} from 'redux/actionTypes';
import { ProductType } from 'assets/products_mock_data';
import { getLocalStorageCartProducts } from 'utils';

interface InitialStateType {
  cartProducts: ProductType[];
  totalPrice: number;
}
const initialState: InitialStateType = {
  cartProducts: getLocalStorageCartProducts(),
  totalPrice: 0,
};

export const cartReducer = produce((draft, action): InitialStateType => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const productIndex = draft.cartProducts.findIndex(
        (product: ProductType) => product.id === payload.product.id
      );
      if (productIndex === -1) {
        const newProduct = payload.product;
        draft.cartProducts.push(newProduct);
        return draft;
      }
      draft.cartProducts[productIndex].count += 1;
      return draft;
    }
    case INCREASE_PRODUCT_COUNT: {
      const productIndex = draft.cartProducts.findIndex(
        (product: ProductType) => product.id === payload.id
      );
      draft.cartProducts[productIndex].count += 1;
      return draft;
    }
    case DECREASE_PRODUCT_COUNT: {
      const productIndex = draft.cartProducts.findIndex(
        (product: ProductType) => product.id === payload.id
      );
      const productCount = draft.cartProducts[productIndex].count;
      if (productCount === 1) {
        draft.cartProducts.splice(productIndex, 1);
        return draft;
      }
      draft.cartProducts[productIndex].count -= 1;
      return draft;
    }
    case REMOVE_PRODUCT: {
      const productIndex = draft.cartProducts.findIndex(
        (product: ProductType) => product.id === payload.id
      );
      draft.cartProducts.splice(productIndex, 1);
      return draft;
    }
    case CLEAR_CART: {
      draft.cartProducts = [];
      return draft;
    }
    default:
      return draft;
  }
}, initialState);

import produce from 'immer';

import { ProductType } from 'assets/products_mock_data';
import {
  CHANGE_PRODUCTS,
  ADD_NEW_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_INIT,
  UPDATE_PRODUCTS_INIT,
  ADD_NEW_PRODUCT_INIT,
} from 'redux/actionTypes';

interface InitialStateType {
  products: ProductType[];
  isProductsLoading: boolean;
}

const initialState: InitialStateType = {
  products: [],
  isProductsLoading: false,
};

export const productsReducer = produce((draft, action): InitialStateType => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PRODUCTS: {
      const productIndex = draft.products.findIndex(
        (product: ProductType) => product.id === payload.product.id
      );
      draft.products[productIndex] = payload.product;
      draft.isProductsLoading = false;
      return draft;
    }
    case ADD_NEW_PRODUCT: {
      draft.products.push(payload.product);
      draft.isProductsLoading = false;
      return draft;
    }
    case ADD_NEW_PRODUCT_INIT:
    case UPDATE_PRODUCTS_INIT:
    case GET_PRODUCT_INIT:
      draft.isProductsLoading = true;
      return draft;
    case GET_PRODUCT_SUCCESS:
      draft.products = payload.products;
      draft.isProductsLoading = false;
      return draft;
    default:
      return draft;
  }
}, initialState);

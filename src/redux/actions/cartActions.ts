import { ProductType } from 'assets/products_mock_data';
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT,
  DECREASE_PRODUCT_COUNT,
  INCREASE_PRODUCT_COUNT,
  CLEAR_CART,
} from 'redux/actionTypes';

type AddProductToCartType = {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: { product: ProductType };
};
export const addProductToCart = (product: ProductType): AddProductToCartType => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { product },
});

type IncreaseProductCountType = {
  type: typeof INCREASE_PRODUCT_COUNT;
  payload: { id: string };
};
export const increaseProductCount = (id: string): IncreaseProductCountType => ({
  type: INCREASE_PRODUCT_COUNT,
  payload: { id },
});

type DecreaseProductCountType = {
  type: typeof DECREASE_PRODUCT_COUNT;
  payload: { id: string };
};
export const decreaseProductCount = (id: string): DecreaseProductCountType => ({
  type: DECREASE_PRODUCT_COUNT,
  payload: { id },
});

type RemoveProductType = {
  type: typeof REMOVE_PRODUCT;
  payload: { id: string };
};
export const removeProduct = (id: string): RemoveProductType => ({
  type: REMOVE_PRODUCT,
  payload: { id },
});

type ClearCartType = {
  type: typeof CLEAR_CART;
};
export const clearCart = (): ClearCartType => ({
  type: CLEAR_CART,
});

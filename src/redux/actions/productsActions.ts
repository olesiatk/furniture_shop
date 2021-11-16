import {
  CHANGE_PRODUCTS,
  GET_PRODUCT_INIT,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCTS_INIT,
  ADD_NEW_PRODUCT,
  ADD_NEW_PRODUCT_INIT,
} from 'redux/actionTypes';
import { ProductType, NewProductType } from 'assets/products_mock_data';

type ChangeProductsType = {
  type: string;
  payload: { product: NewProductType };
};
export const changeProducts = (product: NewProductType): ChangeProductsType => ({
  type: CHANGE_PRODUCTS,
  payload: { product },
});

export type SaveNewProductType = {
  type: typeof ADD_NEW_PRODUCT;
  payload: { product: NewProductType };
};
export const saveNewProduct = (product: NewProductType): SaveNewProductType => ({
  type: ADD_NEW_PRODUCT,
  payload: { product },
});

type GetProductsInitType = {
  type: typeof GET_PRODUCT_INIT;
};
export const getProductsInit = (): GetProductsInitType => ({
  type: GET_PRODUCT_INIT,
});

type GetProductsSuccessType = {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: { products: ProductType[] };
};
export const getProductsSuccess = (
  products: ProductType[]
): GetProductsSuccessType => ({
  type: GET_PRODUCT_SUCCESS,
  payload: { products },
});

export type UpdateProductsInitType = {
  type: typeof UPDATE_PRODUCTS_INIT;
  payload: { product: NewProductType };
};
export const updateProductsInit = (
  product: NewProductType
): UpdateProductsInitType => ({
  type: UPDATE_PRODUCTS_INIT,
  payload: { product },
});

export type AddNewProductInitType = {
  type: typeof ADD_NEW_PRODUCT_INIT;
  payload: { product: NewProductType };
};
export const addNewProductInit = (
  product: NewProductType
): AddNewProductInitType => ({
  type: ADD_NEW_PRODUCT_INIT,
  payload: { product },
});

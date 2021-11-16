import { put, takeEvery } from 'redux-saga/effects';

import { ProductType } from 'assets/products_mock_data';
import {
  ADD_NEW_PRODUCT_INIT,
  GET_PRODUCT_INIT,
  UPDATE_PRODUCTS_INIT,
} from 'redux/actionTypes';
import {
  getProductsSuccess,
  changeProducts,
  UpdateProductsInitType,
  saveNewProduct,
  setError,
} from 'redux/actions';
import { getCollection, addNewDocument, updateDocument } from 'utils';

function* fetchProducts() {
  try {
    const products: ProductType[] = yield getCollection('products');
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* updateProducts(action: UpdateProductsInitType) {
  const { product } = action.payload;
  const newProduct = {
    ...product,
    date: Date.now(),
    count: 1,
  };
  try {
    const updatedProduct: ProductType = yield updateDocument('products', newProduct);
    yield put(changeProducts(updatedProduct));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* addNewProduct(action: UpdateProductsInitType) {
  const { product } = action.payload;
  const newProduct = {
    ...product,
    date: Date.now(),
    count: 1,
  };
  try {
    const createdProduct: ProductType = yield addNewDocument('products', newProduct);
    yield put(saveNewProduct(createdProduct));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* productsSaga(): Generator {
  yield takeEvery(GET_PRODUCT_INIT, fetchProducts);
  yield takeEvery(UPDATE_PRODUCTS_INIT, updateProducts);
  yield takeEvery(ADD_NEW_PRODUCT_INIT, addNewProduct);
}

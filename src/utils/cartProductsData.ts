import { ProductType } from 'assets/products_mock_data';

export const getLocalStorageCartProducts = (): ProductType[] => {
  const products = localStorage.getItem('cartProducts');
  if (products) {
    return JSON.parse(products);
  }
  return [];
};

export const setLocalStorageCartProducts = (products: ProductType[]): void => {
  localStorage.setItem('cartProducts', JSON.stringify(products));
};

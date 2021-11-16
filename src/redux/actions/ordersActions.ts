import { ProductType } from 'assets/products_mock_data';
import { ADD_USER_ORDER, GET_USER_ORDERS } from 'redux/actionTypes';

export type OrderType = {
  user: string;
  date: number;
  price: number;
  products: ProductType[];
};

export interface IActions {
  type: string;
  payload: {
    order?: OrderType;
    email?: string;
  };
}

export const addUserOrder = (order: OrderType): IActions => ({
  type: ADD_USER_ORDER,
  payload: { order },
});

export const getUserOrders = (email: string): IActions => ({
  type: GET_USER_ORDERS,
  payload: { email },
});

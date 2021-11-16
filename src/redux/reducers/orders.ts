import produce from 'immer';

import { OrderType } from 'redux/actions';
import { ADD_USER_ORDER, GET_USER_ORDERS } from 'redux/actionTypes';
import { getStorageItem, setStorageItem, userData } from 'utils';

const activeUserOrders = getStorageItem('orders')
  ? getStorageItem('orders').filter((order: OrderType) => order.user === userData)
  : [];

const initialState = {
  allOrders: getStorageItem('orders') || [],
  userOrders: activeUserOrders || [],
};

export const ordersReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_ORDER:
      draft.allOrders.push(payload.order);
      setStorageItem('orders', draft.allOrders);
      draft.userOrders = getStorageItem('orders').filter(
        (order: OrderType) => order.user === payload.order.user
      );
      return draft;
    case GET_USER_ORDERS:
      draft.userOrders = getStorageItem('orders')
        ? getStorageItem('orders').filter(
            (order: OrderType) => order.user === payload.email
          )
        : [];
      return draft;
    default:
      return draft;
  }
}, initialState);

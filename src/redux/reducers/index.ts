import { productsReducer } from './products';
import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { loginReducer } from './auth';
import { userReducer } from './user';
import { ordersReducer } from './orders';
import { errorReducer } from './error';

export const allReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  login: loginReducer,
  users: userReducer,
  orders: ordersReducer,
  error: errorReducer,
});

export type RootState = ReturnType<typeof allReducers>;

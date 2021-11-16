import { RootState } from 'redux/reducers';
import { OrderType } from 'redux/actions';

export const userOrdersSelector = (state: RootState): OrderType[] =>
  state.orders.userOrders;

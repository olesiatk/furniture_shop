import React from 'react';

import { OrderType } from 'redux/actions';
import { OrderCard } from './OrderCard';

interface OrdersListType {
  orders: OrderType[];
}

export const OrdersList = ({ orders }: OrdersListType): JSX.Element => (
  <div>
    {orders.map((order) => (
      <OrderCard order={order} key={order.date} />
    ))}
  </div>
);

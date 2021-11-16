import React from 'react';

import { ProductType } from 'assets/products_mock_data';
import { TotalPrice, CartWrapper } from 'styles';
import { OrderProductItem } from './OrderProductItem';

interface OrderDetailsType {
  products: ProductType[];
  totalPrice: number;
}

export const OrderProducts = ({
  products,
  totalPrice,
}: OrderDetailsType): JSX.Element => (
  <CartWrapper>
    {products.map((product: ProductType) => (
      <OrderProductItem product={product} key={product.id} />
    ))}
    <hr />
    <div>
      <TotalPrice>total: $ {totalPrice}</TotalPrice>
    </div>
  </CartWrapper>
);

import React, { useState } from 'react';

import { OrderType } from 'redux/actions';
import { Button, OrderBox } from 'styles';
import { OrderProducts } from './OrderProducts';

interface OrderCardType {
  order: OrderType;
}

export const OrderCard = ({ order }: OrderCardType): JSX.Element => {
  const { date, price, products } = order;
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <OrderBox>
        <div>
          <p>
            Your order from <strong>{new Date(date).toLocaleString()}</strong>
          </p>
          <p>
            total price: <strong>{price}</strong> $
          </p>
        </div>
        <Button uppercase type="button" onClick={() => setIsShown(!isShown)}>
          {isShown ? 'Close' : 'Show'}
        </Button>
      </OrderBox>
      {isShown && <OrderProducts totalPrice={price} products={products} />}
    </>
  );
};

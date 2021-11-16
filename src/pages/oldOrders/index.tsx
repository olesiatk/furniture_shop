import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { userOrdersSelector } from 'redux/selectors';
import { OrdersList } from './components/OrdersList';

const Wrapper = styled.div`
  margin: 1.5em;
  color: ${({ theme }) => theme.secondPrimaryColor};
`;

export const OldOrders: React.FC = () => {
  const orders = useSelector(userOrdersSelector);

  return (
    <Wrapper>
      <h2>All your orders:</h2>
      <OrdersList orders={orders} />
    </Wrapper>
  );
};

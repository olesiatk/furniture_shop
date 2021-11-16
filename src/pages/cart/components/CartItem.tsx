import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import {
  increaseProductCount,
  decreaseProductCount,
  removeProduct,
} from 'redux/actions';
import styled from 'styled-components';
import { ProductCountButton } from './ProductCountButton';
import { ProductBox, ProductImage, ProductTitle } from 'styles';

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.secondPrimaryColor};
  cursor: pointer;
`;

const CountBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CartItemType {
  id: string;
  name: string;
  price: number;
  count: number;
  image: string;
}
export const CartItem = memo(
  ({ id, name, price, count, image }: CartItemType): JSX.Element => {
    const dispatch = useDispatch();
    return (
      <ProductBox>
        <ProductImage src={image} alt={name} />
        <div>
          <ProductTitle>{name}</ProductTitle>
          <p>$ {price}</p>
          <RemoveButton type="button" onClick={() => dispatch(removeProduct(id))}>
            remove
          </RemoveButton>
        </div>
        <CountBlock>
          <ProductCountButton onClick={() => dispatch(decreaseProductCount(id))} />
          <p>{count}</p>
          <ProductCountButton
            plusButton
            onClick={() => dispatch(increaseProductCount(id))}
          />
        </CountBlock>
      </ProductBox>
    );
  }
);

import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { ProductType } from 'assets/products_mock_data';
import { Button, ProductBox, ProductImage, ProductTitle } from 'styles';
import { addProductToCart } from 'redux/actions';

const ProductItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface ProductItemType {
  product: ProductType;
}

export const OrderProductItem = ({ product }: ProductItemType): JSX.Element => {
  const { name, price, count, image } = product;
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addProductToCart(product));

  return (
    <ProductItemBox>
      <ProductBox>
        <ProductImage src={image} alt={name} />
        <div>
          <ProductTitle>{name}</ProductTitle>
          <p>$ {price}</p>
          <p>count: {count}</p>
        </div>
      </ProductBox>
      <Button type="button" onClick={addToCart}>
        Add to cart
      </Button>
    </ProductItemBox>
  );
};

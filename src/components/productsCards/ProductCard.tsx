import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { pathConstants } from 'projectConstants';
import { Button, ProductCardComponent } from 'styles';
import { addProductToCart } from 'redux/actions';

const { PRODUCT_EDIT } = pathConstants;
const ProductImage = styled.img`
  ${({ theme }) => theme.setTransition()};
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  &:hover {
    opacity: 0.5;
  }
`;

const Price = styled.div`
  color: ${({ theme }) => theme.mainWhite};
  ${({ theme }) => theme.setTransition()};
  ${({ theme }) =>
    theme.setBorder({
      width: '3px',
      style: 'solid',
      color: theme.mainWhite,
    })};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  letter-spacing: 3px;
  font-size: 1.25em;
  padding: 1em;
`;

const ImageContainer = styled.div`
  background: ${({ theme }) => theme.mainBlack};
  border-radius: 4px;
  position: relative;
  &:hover div {
    opacity: 1;
    ${({ theme }) => theme.setTransition()};
  }
`;

const InfoContainer = styled.div`
  padding: 1em;
  letter-spacing: 1px;
`;

const ProductTitle = styled.h4`
  text-transform: capitalize;
  letter-spacing: 2px;
`;

interface ProductCardPropsType {
  name: string;
  price: number;
  image: string;
  description: string;
  date: number;
  id: string;
  editPage?: boolean;
  count: number;
}

export const ProductCard = (product: ProductCardPropsType): JSX.Element => {
  const { name, description, price, image, date, id, editPage } = product;
  const dispatch = useDispatch();
  return (
    <ProductCardComponent>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
        <Price className="price">{price} $</Price>
      </ImageContainer>
      <InfoContainer>
        <ProductTitle> {name}</ProductTitle>
        <p>{date && new Date(date).toLocaleString()}</p>
        <p>{description}</p>
        {editPage ? (
          <Link to={`${PRODUCT_EDIT}/${id} `}>
            <Button>edit card</Button>
          </Link>
        ) : (
          <Button
            onClick={() => {
              dispatch(addProductToCart(product));
            }}
          >
            add to cart
          </Button>
        )}
      </InfoContainer>
    </ProductCardComponent>
  );
};

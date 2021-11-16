import styled from 'styled-components';

import { Button } from 'styles';

export const OrderBox = styled.div`
  margin: 1em auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  background: ${({ theme }) => theme.lightBrown};
`;

export const CloseButton = styled(Button)`
  background: ${({ theme }) => theme.mainWhite};
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  margin-left: 1em;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-size: 2em;
  color: ${({ theme }) => theme.secondPrimaryColor};
`;

export const TotalPrice = styled.p`
  margin: 1em;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const ProductImage = styled.img`
  border-radius: 3px;
  display: block;
  width: 5em;
  height: 5em;
  object-fit: cover;
  padding-left: 0.5em;
`;

export const ProductTitle = styled.h4`
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 1em;
`;

export const ProductBox = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1em;
  letter-spacing: 2px;
`;

export const CartWrapper = styled.div`
  width: 90%;
  margin: 1em auto;
`;

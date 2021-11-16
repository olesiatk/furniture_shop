import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductCardComponent, Button } from 'styles';
import { pathConstants } from 'projectConstants';

const { PRODUCT_EDIT } = pathConstants;
const Wrapper = styled(ProductCardComponent)`
  padding: 1em 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewProduct = (): JSX.Element => (
  <Wrapper>
    <Link to={`${PRODUCT_EDIT}/${Math.random()} `}>
      <Button>add new product</Button>
    </Link>
  </Wrapper>
);

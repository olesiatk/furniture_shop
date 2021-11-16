import React from 'react';
import styled from 'styled-components';

import { preloader } from 'projectConstants';

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Preloader = (): JSX.Element => (
  <Wrapper>
    <img src={preloader} alt="preloader" />
  </Wrapper>
);

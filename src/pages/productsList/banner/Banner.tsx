import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.lightBrown};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5em;
`;

export const Banner = memo(() => <Wrapper>some advertise</Wrapper>);

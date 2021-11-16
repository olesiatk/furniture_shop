import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: sticky;
  bottom: -5em;
  border: 1px solid black;
  background: ${({ theme }) => theme.mainBlack};
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.mainWhite};
  margin: 1rem;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.primaryColor};
`;

export const Footer = memo(() => (
  <Wrapper>
    <FooterText>
      &copy; {new Date().getFullYear()}
      <Name> Roman&Olesia</Name>
    </FooterText>
    <FooterText>All rights reserved</FooterText>
  </Wrapper>
));

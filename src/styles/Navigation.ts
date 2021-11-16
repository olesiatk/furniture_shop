import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2em 0.3em;
  align-items: center;
  gap: 1em;
  @media (min-width: 1024px) {
    gap: 2em;
    padding: 0.5em 1em;
  }
`;

export const LogoName = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
`;

export const LogoSVG = styled.div`
  svg {
    color: ${({ theme }) => theme.secondPrimaryColor};
    width: 2em;
    height: 2em;
    @media (min-width: 800px) {
      width: 4em;
      height: 4em;
    }
  }
`;

export const MenuLink = styled(Link)`
  ${({ theme }) => theme.setTransition()};
  cursor: pointer;
  padding: 0.5em 1.5em;
  display: block;
  font-size: 1.1em;
  text-transform: capitalize;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 3px;
  &:hover {
    background: ${({ theme }) => theme.lightBrown};
    margin-left: 1.5em;
    ${({ theme }) => theme.setTransition()};
  }
  color: ${({ theme }) => theme.mainBlack};
  ${({ theme }) => theme.setTransition()};
`;

export const ButtonSVG = styled.span`
  svg {
    color: ${({ theme }) => theme.primaryColor};
    width: 1.3em;
    height: 1.3em;
  }
`;

export const UserPhoto = styled.img`
  height: 2em;
  border-radius: 50%;
`;

export const ButtonMenu = styled.div`
  background-color: ${({ theme }) => theme.lightBrown};
  padding: 0.1em;
  font-size: 1.3em;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  border: 0.1em solid ${({ theme }) => theme.lightBrown};
  @media (min-width: 1200px) {
    border-radius: 50%;
  }
`;

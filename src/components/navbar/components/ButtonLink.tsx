import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonSVG } from 'styles';

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.mainBlack};
  font-size: 1.3em;
  display: inline-flex;
  align-items: center;
`;

const Title = styled.span`
  text-transform: capitalize;
  letter-spacing: 2px;
  display: none;
  padding: 0.5em;
  @media (min-width: 768px) {
    display: inline;
  }
`;

interface Props {
  link: string;
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
}

export const ButtonLink: React.FC<Props> = ({
  link,
  title,
  icon,
  onClick,
}: Props) => (
  <NavLink to={link} onClick={onClick}>
    <Title>{title}</Title>
    <ButtonSVG>{icon}</ButtonSVG>
  </NavLink>
);

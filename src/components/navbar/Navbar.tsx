import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { GiBowenKnot } from 'react-icons/gi';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUserPlus, FaUserCircle, FaOutdent } from 'react-icons/fa';
import {
  ButtonMenu,
  LogoName,
  LogoSVG,
  NavFlex,
  ButtonSVG,
  UserPhoto,
} from 'styles';

import { pathConstants } from 'projectConstants';
import { isLoginSelector, userPhotoSelector } from 'redux/selectors';
import { ButtonLink, MenuContainer } from './components';

const { CART, LOGIN, SIGN_UP } = pathConstants;

const Menu = styled.div`
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 75%);
  position: relative;
`;

const ButtonMenuSVG = styled(ButtonSVG)`
  @media (min-width: 1200px) {
    display: none;
  }
`;

type MenuWrapperType = {
  open: boolean;
};

const MenuContainerWrapper = styled.div<MenuWrapperType>`
  display: ${({ open }) => (open ? 'block' : 'none')};}
  @media (min-width: 1200px) {
    display: block;
  }
`;

export const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogin = useSelector(isLoginSelector);
  const userPhoto = useSelector(userPhotoSelector);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Menu>
        <NavFlex>
          <NavFlex>
            <Link to="/">
              <LogoSVG>
                <GiBowenKnot />
              </LogoSVG>
            </Link>
            <Link to="/">
              <LogoName>Furniture shop</LogoName>
            </Link>
          </NavFlex>
          <NavFlex>
            <ButtonLink link={CART} title="cart" icon={<FaShoppingCart />} />
            {!isLogin ? (
              <>
                <ButtonLink link={LOGIN} title="login" icon={<FaUserCircle />} />
                <ButtonLink link={SIGN_UP} title="sign up" icon={<FaUserPlus />} />
              </>
            ) : (
              <ButtonMenu onClick={toggle}>
                <UserPhoto alt="user picture" src={userPhoto} />
                <ButtonMenuSVG>
                  <FaOutdent />
                </ButtonMenuSVG>
              </ButtonMenu>
            )}
          </NavFlex>
        </NavFlex>
        {isLogin && (
          <MenuContainerWrapper open={isMenuOpen}>
            <MenuContainer />
          </MenuContainerWrapper>
        )}
      </Menu>
    </nav>
  );
});

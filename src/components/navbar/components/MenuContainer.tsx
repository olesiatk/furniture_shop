import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaUserMinus } from 'react-icons/fa';

import { setLogout } from 'redux/actions';
import { isUserAdminSelector } from 'redux/selectors';
import { MenuLink, ButtonSVG } from 'styles';
import { pathConstants } from 'projectConstants';

const { PROFILE_EDIT, OLD_ORDERS, PRODUCT_EDIT } = pathConstants;

const MenuLinkWithIcon = styled(MenuLink)`
  display: inline-flex;
  width: 100%;
  gap: 0.5em;
  @media (min-width: 800px) {
    width: inherit;
  }
`;

export const MenuBox = styled.div`
  background-color: ${({ theme }) => theme.mainGrey};
  padding: 1em;
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    padding: 0em 1em;
  }
`;

export const MenuContainer = memo(() => {
  const isAdmin = useSelector(isUserAdminSelector);
  const dispatch = useDispatch();
  const logout = () => dispatch(setLogout());
  return (
    <MenuBox>
      <MenuLink to="/">home</MenuLink>
      <MenuLink to={PROFILE_EDIT}>profile</MenuLink>
      <MenuLink to={OLD_ORDERS}>old-orders</MenuLink>
      {!!isAdmin && <MenuLink to={PRODUCT_EDIT}>edit products</MenuLink>}
      <MenuLinkWithIcon onClick={logout} to="/">
        Logout
        <ButtonSVG>
          <FaUserMinus />
        </ButtonSVG>
      </MenuLinkWithIcon>
    </MenuBox>
  );
});

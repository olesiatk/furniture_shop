import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { RouteWrapper as Route } from './RouteWrapper';
import {
  Cart,
  Login,
  OldOrders,
  ProductsList,
  ProductEditing,
  ProfileEditing,
  SignUp,
} from 'pages';
import { pathConstants } from 'projectConstants';
import { Navbar } from 'components';
import { EditProductCard } from 'pages/productEditing/components/EditProductCard';

const {
  PRODUCT_EDIT,
  PROFILE_EDIT,
  CART,
  OLD_ORDERS,
  LOGIN,
  SIGN_UP,
} = pathConstants;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-bottom: -5rem;
  padding-bottom: 5em;
`;

export const Routes = (): JSX.Element => (
  <Wrapper>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route
          exact
          path={PRODUCT_EDIT}
          component={() => <ProductEditing />}
          isPrivate
        />
        <Route path={PROFILE_EDIT} component={ProfileEditing} isPrivate />
        <Route path={CART} component={Cart} isPrivate />
        <Route path={OLD_ORDERS} component={OldOrders} isPrivate />
        <Route path={LOGIN} component={Login} />
        <Route path={SIGN_UP} component={SignUp} />
        <Route
          isPrivate
          path={`${PRODUCT_EDIT}/:id `}
          component={() => <EditProductCard />}
        />
      </Switch>
    </Router>
  </Wrapper>
);

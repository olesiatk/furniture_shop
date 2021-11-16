import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, TotalPrice, CloseButton, Title, CartWrapper } from 'styles';
import { CartItem } from './CartItem';
import { clearCart, addUserOrder } from 'redux/actions';
import { setLocalStorageCartProducts, useModal } from 'utils';
import {
  cartProductsAlphabeticallySelector,
  totalPriceSelector,
  userEmailSelector,
} from 'redux/selectors';
import { ProductType } from 'assets/products_mock_data';
import { Modal } from 'components';

export const CartContainer = (): JSX.Element => {
  const cartProducts = useSelector(cartProductsAlphabeticallySelector);
  const totalPrice = useSelector(totalPriceSelector);
  const userEmail = useSelector(userEmailSelector);
  const dispatch = useDispatch();

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    setLocalStorageCartProducts(cartProducts);
  }, [cartProducts]);

  const addToOrders = () => {
    const order = {
      user: userEmail || '',
      date: Date.now(),
      price: totalPrice,
      products: cartProducts,
    };
    dispatch(addUserOrder(order));
    toggle();
  };

  const closeModal = () => {
    dispatch(clearCart());
    toggle();
  };

  if (cartProducts.length === 0) {
    return (
      <CartWrapper>
        <Title>
          your cart
          <br />
          is currently empty
        </Title>
      </CartWrapper>
    );
  }
  return (
    <CartWrapper>
      <Title>your cart</Title>
      {cartProducts.map((product: ProductType) => (
        <CartItem {...product} key={product.id} />
      ))}
      <hr />
      <div>
        <TotalPrice>total: $ {totalPrice}</TotalPrice>
        <Button uppercase type="button" onClick={addToOrders}>
          Buy
        </Button>
        {isShowing && <Modal hide={closeModal} />}
        <CloseButton uppercase type="button" onClick={() => dispatch(clearCart())}>
          clear cart
        </CloseButton>
      </div>
    </CartWrapper>
  );
};

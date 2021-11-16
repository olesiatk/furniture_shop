import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

import { ButtonSVG } from 'styles';

type ButtonType = {
  visible: boolean;
};

const ButtonGoUp = styled(ButtonSVG)<ButtonType>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  bottom: 2em;
  left: 1.5em;
  z-index: 99;
  cursor: pointer;
  padding: 0.5em;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 75%);
  &:hover {
    background: ${({ theme }) => theme.lightBrown};
    ${({ theme }) => theme.setTransition()};
  }
`;

export const UpButton = (): JSX.Element => {
  const [showButton, setShowButton] = useState(false);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.onscroll = () => scrollFunction();

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <ButtonGoUp onClick={goToTop} title="Go to top" visible={showButton}>
      <FaChevronUp />
    </ButtonGoUp>
  );
};

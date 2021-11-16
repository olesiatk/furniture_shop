import React, { memo } from 'react';
import styled from 'styled-components';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

interface PropsType {
  plusButton?: boolean;
  onClick?: () => void;
}
const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.secondPrimaryColor};
`;
export const ProductCountButton = memo(
  ({ plusButton, onClick }: PropsType): JSX.Element => (
    <ButtonWrapper type="submit" onClick={onClick}>
      {plusButton ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
    </ButtonWrapper>
  )
);

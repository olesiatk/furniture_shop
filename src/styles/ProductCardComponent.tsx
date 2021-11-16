import styled from 'styled-components';

export const ProductCardComponent = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.mainWhite};
  ${({ theme }) => theme.shadow.light};
  ${({ theme }) => theme.setTransition()};
  max-width: 400px;
  margin: 1.5em auto;
  border-radius: 4px;
  &:hover {
    ${({ theme }) => theme.shadow.dark};
    ${({ theme }) => theme.setTransition()};
  }
`;

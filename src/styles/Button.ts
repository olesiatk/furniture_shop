import styled, { css } from 'styled-components';

interface PropsType {
  width?: string;
  uppercase?: boolean;
}
export const Button = styled.button<PropsType>`
  color: ${({ theme }) => theme.lightGrey};
  border: none;
  background: ${({ theme }) => theme.secondPrimaryColor};
  ${({ theme }) => theme.setTransition()};
  width: ${({ width }) => width || 'auto'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'capitalize')};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.mainWhite};
    background: ${({ theme }) => theme.primaryColor};
    ${({ theme }) => theme.setTransition()};
  }
  ${({ disabled }) =>
    disabled &&
    css`{
      background: ${({ theme }) => theme.darkGrey};
      color: ${({ theme }) => theme.mainGray};
      &:hover {
        background: ${({ theme }) => theme.darkGrey};
        color: ${({ theme }) => theme.mainGray};
    }`}
`;

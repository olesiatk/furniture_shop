import styled from 'styled-components';

export const FormGroup = styled.form`
  width: 360px;
  padding: 2em 2em 1em;
  margin: 2em auto;
  background: ${({ theme }) => theme.lightBrown};
  border-radius: 2px;
`;

export const FieldSet = styled.fieldset`
  margin: 1em 0;
  padding: 1em;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 3px;
  color: ${({ theme }) => theme.secondPrimaryColor};
  text-align: center;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.secondPrimaryColor};
  display: block;
`;

export const ErrorMessage = styled.label`
  color: ${({ theme }) => theme.errorColor};
  font-size: 0.8em;
  letter-spacing: 1px;
  padding-bottom: 1em;
  display: inline-block;
`;

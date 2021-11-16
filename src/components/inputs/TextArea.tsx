import React, { memo } from 'react';
import styled from 'styled-components';
import { useForm, MultipleFieldErrors, Message, Ref } from 'react-hook-form';

import { ErrorMessage } from 'styles';

interface TextAreaComponentPropsType {
  error?: string;
}
const TextAreaComponent = styled.textarea<TextAreaComponentPropsType>`
  background: ${({ theme, error }) => (error ? theme.errorColor : theme.lightGrey)};
  width: 100%;
  border: transparent;
  margin: 0 0 1em;
  padding: 1em;
  letter-spacing: 2px;
  border-radius: 2px;
`;

interface FieldError {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
}
interface InputPropsType {
  name: string;
  errors: {
    [key: string]: FieldError;
  };
  register?: ReturnType<typeof useForm>['register'];
  defaultValue?: string;
}

export const TextArea = memo(
  ({ name, errors, register, defaultValue }: InputPropsType): JSX.Element => (
    <>
      <TextAreaComponent
        placeholder={name}
        error={errors[name]?.message}
        name={name}
        ref={register}
        defaultValue={defaultValue}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </>
  )
);

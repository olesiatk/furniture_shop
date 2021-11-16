import React, { memo } from 'react';
import styled from 'styled-components';
import { useForm, MultipleFieldErrors, Message, Ref } from 'react-hook-form';

import { ErrorMessage } from 'styles';

interface InputComponentPropsType {
  error?: string;
}

const InputComponent = styled.input<InputComponentPropsType>`
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
  type?: string;
  errors: {
    [key: string]: FieldError;
  };
  register: ReturnType<typeof useForm>['register'];
  placeholder?: string;
}

export const Input: React.FC<InputPropsType> = memo(
  ({
    name,
    type = 'text',
    errors,
    register,
    placeholder = name,
  }: InputPropsType) => (
    <>
      <InputComponent
        type={type}
        placeholder={placeholder}
        error={errors[name]?.message}
        ref={register}
        name={name}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </>
  )
);

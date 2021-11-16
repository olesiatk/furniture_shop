import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { pathConstants } from 'projectConstants';
import { ErrorMessage, Button } from 'styles';
import { Input } from 'components';
import { getSchemaValidations } from 'utils';

const { SIGN_UP } = pathConstants;

const SignUpLink = styled(Link)`
  color: ${({ theme }) => theme.lightGrey};
`;

const LoginComponent = styled.div`
  width: 360px;
  padding: 2em 2em 1em;
  margin: 5em auto;
  background: ${({ theme }) => theme.lightBrown};
  border-radius: 2px;
`;

type FormType = {
  email: string;
  password: string;
};
interface LoginFormPropsType {
  login: (email: string, password: string) => void;
  errorFromServer: string;
}

export const LoginForm = ({
  login,
  errorFromServer,
}: LoginFormPropsType): JSX.Element => {
  const { register, errors, handleSubmit } = useForm<FormType>({
    resolver: yupResolver(getSchemaValidations(['email', 'password'])),
  });
  const submit = ({ email, password }: FormType) => {
    login(email, password);
  };
  return (
    <LoginComponent>
      <form onSubmit={handleSubmit(submit)}>
        <Input type="email" name="email" errors={errors} register={register} />
        <Input type="password" name="password" errors={errors} register={register} />
        {!!errorFromServer && <ErrorMessage>{errorFromServer}</ErrorMessage>}
        <Button width="100%" uppercase type="submit">
          login
        </Button>
        <p>
          Not registered? <SignUpLink to={SIGN_UP}>create an account</SignUpLink>
        </p>
      </form>
    </LoginComponent>
  );
};

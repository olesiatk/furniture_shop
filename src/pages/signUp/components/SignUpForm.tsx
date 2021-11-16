import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { FormGroup as Form, FieldSet, ErrorMessage, Button } from 'styles';
import { ImageUploader, Input } from 'components';
import { checkEmailForbidden, getSchemaValidations } from 'utils';
import { defaultPhoto, pathConstants } from 'projectConstants';
import { addUserInit } from 'redux/actions';

const { LOGIN } = pathConstants;

interface Props {
  linkLogin: string;
}

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
};

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};
`;

export const SignUpForm: React.FC<Props> = ({ linkLogin }: Props) => {
  const { register, errors, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(
      getSchemaValidations(['name', 'email', 'password', 'confirmPassword', 'photo'])
    ),
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const [isEmailUsed, setIsEmailUsed] = useState(false);

  const submit = ({ name, email, password, photo }: FormData) => {
    const isValid = !checkEmailForbidden(email);
    if (isValid) {
      const user = {
        name,
        email,
        password,
        photo,
      };
      dispatch(addUserInit(user));
      history.push('/');
    } else {
      setIsEmailUsed(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      {isEmailUsed && (
        <ErrorMessage>
          This email already have account, go to&nbsp;
          <LoginLink to={linkLogin}>Login</LoginLink>
        </ErrorMessage>
      )}
      <FieldSet>
        <legend>User info</legend>
        <Input name="name" errors={errors} register={register} />
        <Input type="email" name="email" errors={errors} register={register} />
        <Input type="password" name="password" errors={errors} register={register} />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          errors={errors}
          register={register}
        />
      </FieldSet>
      <FieldSet>
        <legend>User photo</legend>
        <ImageUploader
          name="photo"
          setValue={setValue}
          errors={errors}
          register={register}
          image={defaultPhoto}
        />
      </FieldSet>

      <Button width="100%" uppercase type="submit">
        sign up
      </Button>
      <p>
        Already have account? <LoginLink to={LOGIN}>Login</LoginLink>
      </p>
    </Form>
  );
};

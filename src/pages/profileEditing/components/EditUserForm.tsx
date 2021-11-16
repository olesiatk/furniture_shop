import React from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { changeUserData, UserDataType } from 'redux/actions';
import { FormGroup as Form, FieldSet, Button } from 'styles';
import { ImageUploader, Input } from 'components';
import { getSchemaValidations } from 'utils';

const CloseButton = styled(Button)`
  background: ${({ theme }) => theme.mainWhite};
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  margin-left: 1em;
`;

type PropsType = {
  user: UserDataType;
  setIsEdit: (arg: boolean) => void;
};

type FormData = {
  name: string;
  password: string;
  confirmPassword: string;
  photo: string;
};

export const EditUserForm: React.FC<PropsType> = ({
  user,
  setIsEdit,
}: PropsType) => {
  const { name, email, password, photo } = user;

  const { register, errors, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(
      getSchemaValidations(['name', 'password', 'confirmPassword', 'photo'])
    ),
    defaultValues: {
      name,
      password,
      confirmPassword: password,
      photo,
    },
  });
  const dispatch = useDispatch();

  const submit = (data: FormData) => {
    const editedUserDate = {
      name: data.name,
      email,
      password: data.password,
      photo: data.photo,
    };
    dispatch(changeUserData(editedUserDate));
    setIsEdit(false);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <FieldSet>
          <legend>User info</legend>
          <Input name="name" errors={errors} register={register} />
          <Input
            type="password"
            name="password"
            errors={errors}
            register={register}
          />
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
            image={photo}
            setValue={setValue}
            errors={errors}
            register={register}
          />
        </FieldSet>

        <Button width="45%" uppercase type="submit">
          Save
        </Button>
        <CloseButton width="45%" uppercase onClick={() => setIsEdit(false)}>
          Close
        </CloseButton>
      </Form>
    </div>
  );
};

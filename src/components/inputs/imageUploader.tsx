import React, { useState, useEffect, memo } from 'react';
import { useForm, Message, MultipleFieldErrors, Ref } from 'react-hook-form';
import styled from 'styled-components';

import { ErrorMessage } from 'styles';
import { defaultImage } from 'projectConstants';

const UploadBox = styled.div`
  padding: 0 0 1em;
`;

const PictureBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 1em auto;
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.secondPrimaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  ${({ theme }) => theme.setTransition()};
  text-transform: capitalize;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 1em 0;
  border-radius: 3px;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.mainWhite};
    background: ${({ theme }) => theme.primaryColor};
    ${({ theme }) => theme.setTransition()};
  }
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

interface FieldError {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
}

interface Props {
  name: string;
  setValue: ReturnType<typeof useForm>['setValue'];
  errors: {
    [key: string]: FieldError;
  };
  register: ReturnType<typeof useForm>['register'];
  image?: any;
}

export const ImageUploader: React.FC<Props> = memo(
  ({ name, setValue, errors, register, image = defaultImage }: Props) => {
    const [filePicture, setFilePicture] = useState(image || defaultImage);
    const imageHandler = (e: any) => {
      if (!e.target.files[0]) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2 && typeof reader.result === 'string') {
          setFilePicture(reader.result);
          setValue(name, reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
      register(name);
    }, [register, name]);

    useEffect(() => {
      if (image) {
        setValue(name, image);
      }
    }, [image]);

    return (
      <UploadBox>
        {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        <PictureBox>
          {filePicture && (
            <Picture
              src={filePicture}
              alt="user picture"
              id="userImg"
              className="userImg"
            />
          )}
        </PictureBox>
        <InputLabel>
          Choose picture
          <Input
            type="file"
            name={name}
            id="input-image"
            accept="image/*"
            onChange={imageHandler}
          />
        </InputLabel>
      </UploadBox>
    );
  }
);

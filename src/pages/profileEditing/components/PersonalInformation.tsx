import React from 'react';
import styled from 'styled-components';

import { UserDataType } from 'redux/actions';
import { defaultPhoto } from 'projectConstants';

const InfoContainer = styled.div`
  margin: 1em auto;
  padding: 1em;
  max-width: 800px;
  text-align: center;
`;

const InfoBox = styled.div`
  margin: 1em auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3em;
`;

const UserDateBox = styled.div`
  text-align: left;
`;

const PictureBox = styled.div`
  width: 10em;
  height: 10em;
  margin: 1em 0;
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

type PropsType = {
  user: UserDataType;
};

export const PersonalInformation: React.FC<PropsType> = ({ user }: PropsType) => {
  const { name, email, photo } = user;

  return (
    <InfoContainer>
      <h1>Hello, {name || 'user'}</h1>
      <p>Your personal information:</p>
      <InfoBox>
        <PictureBox>
          <Picture
            src={photo || defaultPhoto}
            alt="user picture"
            id="userImg"
            className="userImg"
          />
        </PictureBox>
        <UserDateBox>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </UserDateBox>
      </InfoBox>
    </InfoContainer>
  );
};

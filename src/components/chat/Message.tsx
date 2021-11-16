import React from 'react';
import styled from 'styled-components';

interface WrapperType {
  isSentMessage: boolean;
}

const Wrapper = styled.div<WrapperType>`
  display: flex;
  align-items: center;
  ${({ isSentMessage }) => isSentMessage && `flex-direction: row-reverse`};
`;

const Text = styled.p<WrapperType>`
  max-width: 20em;
  margin-bottom: 1em;
  line-height: 1.5em;
  padding: 1em 1.5em;
  border-radius: 1.5em;
  position: relative;
  color: ${({ theme, isSentMessage }) =>
    isSentMessage ? theme.mainBlack : theme.mainWhite};
  text-align: center;
  background: ${({ theme, isSentMessage }) =>
    isSentMessage ? theme.lightBrown : theme.secondPrimaryColor};
  align-self: flex-end;
  letter-spacing: 1px;
`;

const AvatarImage = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin: 2px 5px;
  object-fit: cover;
`;

interface PropsType {
  message: any;
  loginUserId: string;
}

export const Message = ({ message, loginUserId }: PropsType): JSX.Element => {
  const { userPhoto, text, userId } = message;
  const isSentMessage = loginUserId === userId;

  return (
    <Wrapper isSentMessage={isSentMessage}>
      <AvatarImage src={userPhoto} alt="avatar" />
      <Text isSentMessage={isSentMessage}>{text}</Text>
    </Wrapper>
  );
};

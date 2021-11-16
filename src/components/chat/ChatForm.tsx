import React, { SetStateAction, memo } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 3em;
`;
const ChatInput = styled.textarea`
  background: ${({ theme }) => theme.lightBrown};
  height: 100%;
  width: 80%;
  display: inline-block;
  border: none;
  padding: 0.5em;
  letter-spacing: 1px;
`;
const Button = styled.button`
  width: 20%;
  height: 100%;
  background: ${({ theme }) => theme.secondPrimaryColor};
  text-transform: uppercase;
  color: ${({ theme }) => theme.mainWhite};
  letter-spacing: 3px;
`;

interface PropsType {
  formValue: string;
  setFormValue: React.Dispatch<SetStateAction<string>>;
  setIsShowingChat: React.Dispatch<SetStateAction<boolean>>;
  sendMessage: (e: any) => void;
}

export const ChatForm = memo(
  ({
    formValue,
    setFormValue,
    sendMessage,
    setIsShowingChat,
  }: PropsType): JSX.Element => (
    <Form onSubmit={sendMessage}>
      <ChatInput
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        onFocus={() => setIsShowingChat(true)}
      />
      <Button type="submit" disabled={!formValue}>
        send
      </Button>
    </Form>
  )
);

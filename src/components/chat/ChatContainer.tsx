import React, { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { userEmailSelector, userPhotoSelector } from 'redux/selectors';
import { ChatForm } from './ChatForm';
import { Message } from './Message';
import { dataBase, firebase } from 'firebaseConfig';
import { HeaderLine } from './HeaderLine';
import { runChatBots } from 'utils';

const Chat = styled.div`
  width: 350px;
  position: fixed;
  top: 95%;
  right: 0;
  transform: translate(-5%, -100%);
  background: ${({ theme }) => theme.primaryColor};
  ${({ theme }) => theme.shadow.dark};
  border-radius: 5px;
  z-index: 1000;
  letter-spacing: 3px;
`;

const MessagesContainer = styled.div`
  height: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.lightBrown};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.darkGrey};
  }
`;

const samuelBotPhoto = 'https://junkee.com/wp-content/uploads/2014/06/SLJ.jpg';

export const ChatContainer = () => {
  const loginUserId = useSelector(userEmailSelector);
  const userPhoto = useSelector(userPhotoSelector);

  const messagesRef = dataBase.collection(`messages${loginUserId}`);
  const queryMessages = messagesRef.orderBy('createdAt').limitToLast(25);
  const [messages] = useCollectionData(queryMessages, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const [isShowingChat, setIsShowingChat] = useState(true);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    setFormValue('');
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userId: loginUserId,
      userPhoto,
    });
  };

  useEffect(() => {
    runChatBots({ messages, messagesRef });
  }, [messages?.length]);

  return (
    <Chat>
      <HeaderLine
        isShowingChat={isShowingChat}
        setIsShowingChat={setIsShowingChat}
      />
      {isShowingChat && (
        <MessagesContainer>
          {messages &&
            messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                loginUserId={loginUserId}
              />
            ))}
        </MessagesContainer>
      )}
      <ChatForm
        formValue={formValue}
        setFormValue={setFormValue}
        sendMessage={sendMessage}
        setIsShowingChat={setIsShowingChat}
      />
    </Chat>
  );
};

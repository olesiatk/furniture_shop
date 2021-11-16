import { firebase } from 'firebaseConfig';
import { samuelBotPhoto } from 'projectConstants';

interface MessageType {
  text: string;
  createdAt: string;
  userId: string;
  userPhoto: string;
}
export const runChatBots = async ({ messages, messagesRef }: any) => {
  let botText = 'Hello, how can we help you?';

  if (messages && messages.length >= 2) {
    botText = 'Please, wait and our manager will answer you';
  }

  const sendBotMessage = async () => {
    const isMessageInChat = messages?.some(
      (item: MessageType) => item.text === botText
    );
    if (!!messages && !isMessageInChat) {
      const botUid = 'xgLmP5VYSiagXGAStfDXYBQERsA2';
      await messagesRef.add({
        text: botText,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userId: botUid,
        userPhoto: samuelBotPhoto,
      });
    }
  };

  setTimeout(sendBotMessage, 2000);
};

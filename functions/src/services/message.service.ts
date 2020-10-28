import { Message } from 'shared';
import Firebase from '../firebase';

type getMessagesType = () => Promise<Message[]>;
type createMessageType = (title: string, body: string) => Promise<Message>;
// type updateMessageType = (id: string, title: string, body: string) => Promise<Message>;
// type deleteMessageType = (id: string) => Promise<void>;

const getMessages: getMessagesType = async () => {
  const firebase = Firebase.getInstance();
  const firestore = firebase.firestore;

  const querySnapshot = await firestore.collection('messages').get();

  const messages: Message[] = [];

  querySnapshot.forEach(queryDocSnapshot => {
    const message = queryDocSnapshot.data() as Message;
    messages.push(message);
  });

  return messages;
};

const createMessage: createMessageType = async (title: string, body: string) => {
  const firebase = Firebase.getInstance();
  const firestore = firebase.firestore;

  const newMessage: Message = {
    id: Date.now().toString(),
    title,
    body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const createdMessageRef = await firestore.collection('messages').add(newMessage);
  const createdMessageSnapshot = await createdMessageRef.get();
  const createdMessage = createdMessageSnapshot.data() as Message;

  return createdMessage;
};

// const updateMessage: updateMessageType = async (id: string, title: string, body: string) => {

// };

// const deleteMessage: deleteMessageType = async (id: string) => {

// }

export default {
  getMessages,
  createMessage,
};
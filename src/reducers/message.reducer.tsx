import ReduxAction from 'src/models/action';
import Message from 'src/models/message';
import { v4 as uuidv4 } from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessage(text: string, senderId: string): ReduxAction<Message> {
  return {
    type: SEND_MESSAGE,
    payload: { msgId: uuidv4(), content: text, senderId },
  };
}

const messageReducer = (state: Message[] = [], action: ReduxAction<Message>): Message[] => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messageReducer;

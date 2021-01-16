import ReduxAction from 'src/models/action';
import Message from 'src/models/message';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function receiveMessage(message: Message): ReduxAction<Message> {
  return {
    type: RECEIVE_MESSAGE,
    payload: message,
  };
}

const messageReducer = (state: Message[] = [], action: ReduxAction<Message>): Message[] => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messageReducer;

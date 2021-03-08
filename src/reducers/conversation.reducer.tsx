import ReduxAction from 'src/models/action';
import Conversation from 'src/models/conversation';
import Message from 'src/models/message';

const initState: Conversation = new Conversation();

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function receiveMessage(message: Message): ReduxAction<Conversation> {
  const newConversation: Conversation = { [message.roomId]: [message] };

  return {
    type: RECEIVE_MESSAGE,
    payload: [],
    object: newConversation,
  };
}

const conversationReducer = (state = initState, action: ReduxAction<Conversation>): Conversation => {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      const newConversation = state;
      Object.keys(action?.object ?? []).forEach((key) => {
        newConversation[key] = (newConversation[key] ?? []).concat(action.object ? action.object[key] : []);
      });

      return newConversation;
    }
    default:
      return state;
  }
};

export default conversationReducer;

import { Middleware } from 'redux';
import ReduxAction from 'src/models/action';
import Message from 'src/models/message';
import ReduxStorage from 'src/models/storage';
import { receiveMessage } from 'src/reducers/message.reducer';
import { v4 as uuidv4 } from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';

export function sendMessage(roomId: string, text: string, senderId: string): ReduxAction<Message> {
  return {
    type: SEND_MESSAGE,
    payload: { msgId: uuidv4(), roomId, content: text, senderId },
  };
}

const websocketMiddleware: Middleware<{}, ReduxStorage> = (store) => (next) => (action) => {
  let socket!: WebSocket;

  switch (action.type) {
    case WS_CONNECT:
      socket = new WebSocket('ws://localhost:8090');
      socket.onopen = () => {};
      socket.onmessage = (event: MessageEvent<Message>) => {
        store.dispatch(receiveMessage(event.data));
      };
      break;
    case WS_DISCONNECT:
      if (socket !== null) {
        socket.close();
      }
      break;
    case SEND_MESSAGE: {
      const message = {
        msgId: action.payload.msgId,
        content: action.payload.content,
        roomId: action.payload.roomId,
        senderId: action.payload.senderId,
      };
      socket.send(JSON.stringify(message));
      break;
    }
    default:
    // empty default
  }

  return next(action);
};

export default websocketMiddleware;

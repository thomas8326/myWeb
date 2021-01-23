import { Middleware } from 'redux';
import ReduxAction from 'src/models/action';
import Message from 'src/models/message';
import ReduxStorage from 'src/models/storage';
import { receiveMessage } from 'src/reducers/message.reducer';
import { v4 as uuidv4 } from 'uuid';
import { CompatClient, Stomp } from '@stomp/stompjs';

export const wsConnect = () => ({ type: 'WS_CONNECT' });
export const wsDisconnect = () => ({ type: 'WS_DISCONNECT' });

export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessage(roomId: string, text: string, senderId: string): ReduxAction<Message> {
  return {
    type: SEND_MESSAGE,
    payload: { msgId: uuidv4(), roomId, content: text, senderId },
  };
}

const websocketMiddleware: Middleware<{}, ReduxStorage> = (store) => {
  let stomp!: CompatClient;

  return (next) => (action) => {
    switch (action.type) {
      case WS_CONNECT: {
        stomp = Stomp.over(() => new WebSocket('ws://localhost:8080/chat'));
        stomp.connect({ user: store.getState().userInfo.userName }, () => {
          stomp.subscribe('/room/users', (message) => store.dispatch(receiveMessage(JSON.parse(message.body))));
        });
        break;
      }
      case WS_DISCONNECT:
        if (stomp !== null) {
          stomp.disconnect();
        }
        break;
      case SEND_MESSAGE: {
        const message = {
          msgId: action.payload.msgId,
          content: action.payload.content,
          roomId: action.payload.roomId,
          senderId: action.payload.senderId,
        };

        stomp.send('/app/user-all', {}, JSON.stringify(message));
        break;
      }
      default:
    }
    return next(action);
  };
};

export default websocketMiddleware;

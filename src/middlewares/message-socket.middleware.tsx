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
export const STOMP_CONNECT_ROOM = 'STOMP_CONNECT_ROOM';
export const STOMP_DISCONNECT_ROOM = 'STOMP_DISCONNECT_ROOM';

export const BROADCAST_MESSAGE = '/all/users';
export const PRIVATE_MESSAGE = '/chat/room';

export function sendMessage(roomId: string, text: string, senderId: string): ReduxAction<Message> {
  return {
    type: SEND_MESSAGE,
    payload: { msgId: uuidv4(), roomId, content: text, senderId },
  };
}

export function connectStomp(roomId: string): ReduxAction<Message> {
  return {
    type: STOMP_CONNECT_ROOM,
    payload: { roomId },
  };
}

export function disconnectStomp(roomId: string): ReduxAction<Message> {
  return {
    type: STOMP_DISCONNECT_ROOM,
    payload: { roomId },
  };
}

const websocketMiddleware: Middleware<{}, ReduxStorage> = (store) => {
  let stomp!: CompatClient;

  return (next) => (action) => {
    switch (action.type) {
      case WS_CONNECT: {
        stomp = Stomp.over(() => new WebSocket('ws://localhost:8080/chat'));

        stomp.connect({}, () => {
          stomp.subscribe(`/user/queue/specific-user`, (message) =>
            store.dispatch(receiveMessage(JSON.parse(message.body))),
          );
        });

        break;
      }
      case WS_DISCONNECT:
        if (stomp !== null) {
          stomp.disconnect();
        }
        break;
      case STOMP_CONNECT_ROOM:
        break;
      case STOMP_DISCONNECT_ROOM:
        stomp.unsubscribe(`${PRIVATE_MESSAGE}/${action.payload.roomId}`);
        break;
      case SEND_MESSAGE: {
        const message = {
          msgId: action.payload.msgId,
          content: action.payload.content,
          roomId: action.payload.roomId,
          senderId: action.payload.senderId,
        };

        stomp.send(`/chat/user`, {}, JSON.stringify(message));
        break;
      }
      default:
    }
    return next(action);
  };
};

export default websocketMiddleware;

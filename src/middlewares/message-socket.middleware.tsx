import { Middleware } from 'redux';
import ReduxAction from 'src/models/action';
import Message from 'src/models/message';
import ReduxStorage from 'src/models/storage';
import { receiveMessage } from 'src/reducers/message.reducer';
import { v4 as uuidv4 } from 'uuid';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { isNil } from 'ramda';
import UserInfo from 'src/models/user-info';

export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const STOMP_CONNECT_ROOM = 'STOMP_CONNECT_ROOM';
export const STOMP_DISCONNECT_ROOM = 'STOMP_DISCONNECT_ROOM';

export const BROADCAST_MESSAGE = '/all/users';
export const PRIVATE_MESSAGE = '/chat/room';

export const wsConnect = (userId: string): ReduxAction<UserInfo> => ({
  type: 'WS_CONNECT',
  object: { id: userId, name: '' },
  payload: [],
});
export const wsDisconnect = () => ({ type: 'WS_DISCONNECT' });

export function sendMessage(roomId: string, text: string, senderId: string): ReduxAction<Message> {
  return {
    type: SEND_MESSAGE,
    payload: [],
    object: { msgId: uuidv4(), roomId, content: text, senderId },
  };
}

export function connectStomp(roomId: string): ReduxAction<Message> {
  return {
    type: STOMP_CONNECT_ROOM,
    payload: [],
    object: { roomId },
  };
}

export function disconnectStomp(roomId: string): ReduxAction<Message> {
  return {
    type: STOMP_DISCONNECT_ROOM,
    payload: [],
    object: { roomId },
  };
}

const websocketMiddleware: Middleware<{}, ReduxStorage> = (store) => {
  let stomp!: CompatClient;

  return (next) => (action) => {
    switch (action.type) {
      case WS_CONNECT: {
        stomp = Stomp.over(() => new WebSocket('ws://localhost:8080/chat'));
        stomp.connect(action.object, () => {
          // stomp.subscribe('/all', (message) => store.dispatch(receiveMessage(JSON.parse(message.body))));
          stomp.subscribe('/user/queue/subscribe', (message) =>
            store.dispatch(receiveMessage(JSON.parse(message.body))),
          );
        });

        break;
      }
      case WS_DISCONNECT:
        if (!isNil(stomp)) {
          stomp.disconnect();
        }
        break;
      case STOMP_CONNECT_ROOM:
        break;
      case STOMP_DISCONNECT_ROOM:
        stomp.unsubscribe(`${PRIVATE_MESSAGE}/${action.object.roomId}`);
        break;
      case SEND_MESSAGE: {
        const message = {
          msgId: action.object.msgId,
          content: action.object.content,
          roomId: action.object.roomId,
          senderId: action.object.senderId,
        };

        stomp.send(`/chat/room/${message.roomId}`, {}, JSON.stringify(message));
        break;
      }
      default:
    }
    return next(action);
  };
};

export default websocketMiddleware;

import { Dispatch, useReducer } from 'react';
import { act } from 'react-dom/test-utils';
import { useDispatch } from 'react-redux';
import ReduxAction from 'src/models/action';
import Message from 'src/models/message';
import ReduxStorage from 'src/models/storage';
import { v4 as uuidv4 } from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';

export function sendMessage(roomId: string, text: string, senderId: string): ReduxAction<Message> {
  return {
    type: SEND_MESSAGE,
    payload: { msgId: uuidv4(), roomId, content: text, senderId },
  };
}

export function receiveMessage(message: Message): ReduxAction<Message> {
  return {
    type: RECEIVE_MESSAGE,
    payload: message,
  };
}

const websocketMiddleware = () => {
  const dispatch = useDispatch();
  let socket!: WebSocket;

  return (store: ReduxStorage) => (next: Dispatch<ReduxAction<Message>>) => (action: ReduxAction<Message>) => {
    switch (action.type) {
      case WS_CONNECT:
        socket = new WebSocket('ws://localhost:8090');
        socket.onopen = () => {};
        socket.onmessage = (event: MessageEvent<Message>) => {
          dispatch(receiveMessage(event.data));
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
      // case RECEIVE_MESSAGE: {
      //   store.messages = store.messages.concat(action.payload);
      //   break;
      // }
      default:
      // Do something
    }

    return next(action);
  };
};

export default websocketMiddleware;

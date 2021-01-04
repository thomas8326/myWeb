import ReduxAction from 'src/models/action';
import Room from 'src/models/room';
import { v4 as uuidv4 } from 'uuid';

export const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM';

export function createChatRoom(roomName: string) {
  return {
    type: CREATE_CHAT_ROOM,
    payload: { id: uuidv4(), roomName },
  };
}

const roomReducer = (state: Room[] = [], action: ReduxAction<Room>): Room[] => {
  switch (action.type) {
    case CREATE_CHAT_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default roomReducer;

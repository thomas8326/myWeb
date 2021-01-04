import ReduxAction from 'src/models/action';
import Room from 'src/models/room';

export const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM';

export function createChatRoom(roomName: string) {
  return {
    type: CREATE_CHAT_ROOM,
    payload: { roomName },
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

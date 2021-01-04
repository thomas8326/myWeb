import ReduxAction from 'src/models/action';
import Room from 'src/models/room';
import ReduxStorage from 'src/models/storage';

export const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM';

export function createChatRoom(roomName: string) {
  return {
    type: CREATE_CHAT_ROOM,
    roomName,
  };
}

const roomReducer = (state: ReduxStorage = new ReduxStorage(), action: ReduxAction<Room[]>): ReduxStorage => {
  switch (action.type) {
    case CREATE_CHAT_ROOM:
      return {
        room: state.room?.concat(action.payload),
      };
    default:
      return state;
  }
};

export default roomReducer;

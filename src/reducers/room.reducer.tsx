import ReduxAction from 'src/models/action';
import Room from 'src/models/room';
import { v4 as uuidv4 } from 'uuid';

export const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM';
export const GET_CHAT_ROOMS = 'GET_CHAT_ROOMS';
export const ADD_ROOM_USER = 'ADD_ROOM_USER';

export function createChatRoom(roomName: string) {
  return {
    type: CREATE_CHAT_ROOM,
    payload: [{ id: uuidv4(), roomName }],
  };
}

export function getChatRooms(rooms: Room[]) {
  return {
    type: GET_CHAT_ROOMS,
    payload: rooms,
  };
}

export function addParticipant(room: Room) {
  return {
    type: ADD_ROOM_USER,
    object: room,
  };
}

const roomReducer = (state: Room[] = [], action: ReduxAction<Room>): Room[] => {
  switch (action.type) {
    case CREATE_CHAT_ROOM:
      return [...state, ...action.payload];
    case GET_CHAT_ROOMS:
      return action.payload;
    case ADD_ROOM_USER: {
      const rooms = state.map((room) => (room.id === action.object.id ? action.object : room));
      return rooms;
    }
    default:
      return state;
  }
};

export default roomReducer;

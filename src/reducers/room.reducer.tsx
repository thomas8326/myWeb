import ReduxAction from 'src/models/action';
import Message from 'src/models/message';
import Room from 'src/models/room';
import UserInfo from 'src/models/user-info';
import { v4 as uuidv4 } from 'uuid';

export const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM';
export const GET_CHAT_ROOMS = 'GET_CHAT_ROOMS';
export const ADD_ROOM_USER = 'ADD_ROOM_USER';
export const SET_ROOM_MESSAGE = 'SET_ROOM_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const initState: Room = {
  id: '',
  name: '',
  participants: [],
  messages: [],
};

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

export function setRoomConversation(room = initState, messages: Message[]): ReduxAction<Room> {
  const newMessages: Message[] = [...room.messages, ...messages];
  const newRoom = { ...room, ...{ messages: newMessages } };

  return {
    type: SET_ROOM_MESSAGE,
    payload: [],
    object: newRoom,
  };
}

export function addParticipant(room: Room, userInfo: UserInfo[]): ReduxAction<Room> {
  const newParticipants: UserInfo[] = room.participants.concat(userInfo);
  const newRoom = { ...room, ...{ participants: newParticipants } };

  return {
    type: ADD_ROOM_USER,
    payload: [],
    object: newRoom,
  };
}

const roomReducer = (state: Room[] = [], action: ReduxAction<Room>): Room[] => {
  switch (action.type) {
    case CREATE_CHAT_ROOM:
      return [...state, ...action.payload];
    case GET_CHAT_ROOMS:
      return action.payload;
    case ADD_ROOM_USER:
    case SET_ROOM_MESSAGE: {
      const rooms = state.map((room) => (room.id === action?.object?.id ? action.object : room));
      return rooms;
    }
    default:
      return state;
  }
};

export default roomReducer;

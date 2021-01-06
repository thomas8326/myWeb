import { combineReducers } from 'redux';
import ReduxStorage from 'src/models/storage';
import loginReducer from 'src/reducers/login.reducer';
import messageReducer from 'src/reducers/message.reducer';
import roomReducer from 'src/reducers/room.reducer';

const storage = combineReducers<ReduxStorage>({ userInfo: loginReducer, rooms: roomReducer, messages: messageReducer });

export default storage;

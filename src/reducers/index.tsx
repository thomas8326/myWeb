import { combineReducers } from 'redux';
import loginReducer from 'src/reducers/login.reducer';
import roomReducer from 'src/reducers/message.reducer';

const storage = combineReducers({ login: loginReducer, room: roomReducer });

export default storage;

import { combineReducers } from 'redux';
import ReduxStorage from 'src/models/storage';
import loginReducer from 'src/reducers/login.reducer';
import roomReducer from 'src/reducers/room.reducer';

const storage = combineReducers<ReduxStorage>({ userInfo: loginReducer, rooms: roomReducer });

export default storage;

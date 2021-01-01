import loginReducer from '@Reducer/login.reducer';
import { combineReducers } from 'redux';

const storage = combineReducers({ login: loginReducer });

export default storage;

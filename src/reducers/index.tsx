import { combineReducers } from 'redux';
import loginReducer from 'src/reducers/login.reducer';

const storage = combineReducers({ login: loginReducer });

export default storage;

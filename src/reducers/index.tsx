import { combineReducers } from 'redux';
import ReduxStorage from 'src/models/storage';
import conversationReducer from 'src/reducers/conversation.reducer';
import githubRepoReducer from 'src/reducers/github-repo.reducer';
import loginReducer from 'src/reducers/login.reducer';
import roomReducer from 'src/reducers/room.reducer';

const storage = combineReducers<ReduxStorage>({
  userInfo: loginReducer,
  rooms: roomReducer,
  conversation: conversationReducer,
  githubRepos: githubRepoReducer,
});

export default storage;

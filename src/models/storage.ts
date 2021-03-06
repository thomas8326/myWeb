import Conversation from 'src/models/conversation';
import Room from 'src/models/room';
import UserInfo from './user-info';

class ReduxStorage {
  userInfo!: UserInfo;

  rooms: Room[] = [];

  conversation!: Conversation;
}

export default ReduxStorage;

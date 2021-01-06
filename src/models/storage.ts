import Message from 'src/models/message';
import Room from 'src/models/room';
import UserInfo from './user-info';

export class ReduxStorage {
  userInfo!: UserInfo;

  rooms: Room[] = [];

  messages: Message[] = [];
}

export default ReduxStorage;

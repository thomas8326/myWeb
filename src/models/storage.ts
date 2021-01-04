import Room from 'src/models/room';
import UserInfo from './user-info';

export class ReduxStorage {
  userInfo!: UserInfo;

  rooms: Room[] = [];
}

export default ReduxStorage;

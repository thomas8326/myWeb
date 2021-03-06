import Message from 'src/models/message';
import UserInfo from 'src/models/user-info';

class Room {
  id!: string;

  name!: string;

  participants: UserInfo[] = [];

  messages: Message[] = [];

  constructor(id?: string, name?: string, participants: UserInfo[] = [], messages: Message[] = []) {
    this.id = id ?? '';
    this.name = name ?? '';
    this.participants = participants;
    this.messages = messages;
  }
}

export default Room;

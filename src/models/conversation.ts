import Message from 'src/models/message';

class Conversation {
  [roomId: string]: Message[];
}

export default Conversation;

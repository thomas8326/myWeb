import React, { useState } from 'react';
import ConversationRoom from 'src/containers/message/conversation-room';
import ChatRoomList from 'src/containers/message/room-list';

function Message() {
  const [roomId, setRoomId] = useState('');

  return (
    <div className="message-content">
      {roomId === '' ? (
        <ChatRoomList onClick={(id: string) => setRoomId(id)} />
      ) : (
        <ConversationRoom roomId={roomId} onBackClick={() => setRoomId('')} />
      )}
    </div>
  );
}

export default Message;

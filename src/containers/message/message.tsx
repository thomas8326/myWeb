import React from 'react';
import { useSelector } from 'react-redux';
import CreateNewUserButton from 'src/containers/message/create-user-button';
import ChatRoom from 'src/containers/message/room';
import ReduxStorage from 'src/models/storage';

function Message() {
  const rooms = useSelector((state: ReduxStorage) => state?.rooms);

  return (
    <div className="message-content">
      {rooms.map((room) => (
        <div key={room.id} className="B-margin-m">
          <ChatRoom room={room} />
        </div>
      ))}
      <CreateNewUserButton />
    </div>
  );
}

export default Message;

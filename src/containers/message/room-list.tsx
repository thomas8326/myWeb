import React from 'react';
import { useSelector } from 'react-redux';
import CreateNewUserButton from 'src/containers/message/create-user-button';
import ChatRoom from 'src/containers/message/room';
import ReduxStorage from 'src/models/storage';

function ChatRoomList(props: { onClick: (id: string) => void }) {
  const rooms = useSelector((state: ReduxStorage) => state?.rooms);

  return (
    <div className="list">
      {rooms.map((room) => (
        <div
          role="button"
          tabIndex={0}
          key={room.id}
          className="B-margin-m"
          onClick={() => {
            props.onClick(room.id);
          }}
          onKeyDown={() => {}}
        >
          <ChatRoom room={room} />
        </div>
      ))}
      <CreateNewUserButton />
    </div>
  );
}

export default ChatRoomList;

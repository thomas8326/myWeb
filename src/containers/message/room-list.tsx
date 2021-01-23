import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateNewUserButton from 'src/containers/message/create-user-button';
import ChatRoom from 'src/containers/message/room';
import ResponseContent from 'src/models/response-content';
import Room from 'src/models/room';
import { getChatRooms } from 'src/reducers/room.reducer';

function ChatRoomList(props: { onClick: (id: string) => void }) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get<ResponseContent<Room[]>>('/api/rooms').then((response) => {
      dispatch(getChatRooms(response.data.data));
      setRooms(response.data.data);
    });
  }, []);

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

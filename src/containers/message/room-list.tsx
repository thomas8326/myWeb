import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiPath from 'src/constants/api.enum';
import CreateNewUserButton from 'src/containers/message/create-user-button';
import ChatRoom from 'src/containers/message/room';
import ResponseContent from 'src/models/response-content';
import Room from 'src/models/room';
import ReduxStorage from 'src/models/storage';
import UserInfo from 'src/models/user-info';
import { addParticipant, getChatRooms } from 'src/reducers/room.reducer';

function ChatRoomList(props: { onClick: (id: string) => void }) {
  const [rooms, setRooms] = useState<Room[]>([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get<ResponseContent<Room[]>>('/api/rooms').then((response) => {
      dispatch(getChatRooms(response.data.data));
      setRooms(response.data.data);
    });
  }, []);

  const user = useSelector((state: ReduxStorage) => state.userInfo);

  const onClickRoom = (roomId: string) => {
    axios.patch<ResponseContent<UserInfo>>(`${ApiPath.Room}/${roomId}`, user).then((response) => {
      dispatch(addParticipant(response.data.data));
      props.onClick(roomId);
    });
  };

  return (
    <div className="list">
      {rooms.map((room) => (
        <div
          role="button"
          tabIndex={0}
          key={room.id}
          className="B-margin-m"
          onClick={() => onClickRoom(room.id)}
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

import React, { FormEvent, useState } from 'react';
import { CheckCircleFilled, CloseCircleFilled, RobotFilled, PlusCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createChatRoom } from 'src/reducers/room.reducer';

const CreateNewUserButton = () => {
  const [isCreateUser, setIsCreateUser] = useState(false);
  const [roomName, setRoomName] = useState('');
  const dispatch = useDispatch();
  const createRoom = () => {
    dispatch(createChatRoom(roomName));
    setIsCreateUser(false);
  };

  return isCreateUser ? (
    <div className="flex-row flex-align-center shadow-card">
      <RobotFilled className="icon-m R-margin-m" />
      <input
        className="input-box input-f"
        value={roomName}
        onInput={(e: FormEvent<HTMLInputElement>) => setRoomName(e.currentTarget.value)}
      />
      <CheckCircleFilled className="primary icon-m L-margin-m" onClick={() => createRoom()} />
      <CloseCircleFilled className="primary icon-m L-margin-m" onClick={() => setIsCreateUser(false)} />
    </div>
  ) : (
    <button type="button" className="flex-row flex-align-center shadow-card" onClick={() => setIsCreateUser(true)}>
      <PlusCircleFilled className="primary icon-l padding-m" />
      <span>Create New Chatroom</span>
    </button>
  );
};

export default CreateNewUserButton;

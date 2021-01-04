import { CommentOutlined } from '@ant-design/icons';
import React from 'react';
import Room from 'src/models/room';

const ChatRoom = (props: { room: Room }) => {
  const { room } = props;
  return (
    <div className="flex-row flex-align-center shadow-card">
      <CommentOutlined className="padding-m icon-l" />
      <div>{room.roomName}</div>
    </div>
  );
};

export default ChatRoom;

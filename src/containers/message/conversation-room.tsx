import React from 'react';
import { useSelector } from 'react-redux';
import DetailHeader from 'src/components/detail-header';
import ReduxStorage from 'src/models/storage';

function ConversationRoom(props: { roomId: string; onBackClick: (id: string) => void }) {
  const roomInfo = useSelector((state: ReduxStorage) => state.rooms.find((room) => room.id === props.roomId));

  return (
    <div>
      <DetailHeader onBackClick={() => props.onBackClick('')} title={roomInfo!.roomName} />
    </div>
  );
}

export default ConversationRoom;

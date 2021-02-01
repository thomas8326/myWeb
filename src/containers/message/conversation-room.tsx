import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailHeader from 'src/components/detail-header';
import Conversation from 'src/containers/message/conversation';
import Sender from 'src/containers/message/sender';
import { connectStomp, disconnectStomp } from 'src/middlewares/message-socket.middleware';
import ReduxStorage from 'src/models/storage';

function ConversationRoom(props: { roomId: string; onBackClick: (id: string) => void }) {
  const roomInfo = useSelector((state: ReduxStorage) => state.rooms.find((room) => room.id === props.roomId));
  const myUserInfo = useSelector((state: ReduxStorage) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectStomp(props.roomId));

    return function cleanup() {
      dispatch(disconnectStomp(props.roomId));
    };
  }, []);

  return (
    <div className="full-layout flex-col">
      <DetailHeader onBackClick={() => props.onBackClick('')} title={roomInfo!.name} />
      <Conversation />
      <Sender roomId={roomInfo?.id ?? ''} senderId={myUserInfo.id} />
    </div>
  );
}

export default ConversationRoom;

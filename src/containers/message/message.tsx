import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ConversationRoom from 'src/containers/message/conversation-room';
import ChatRoomList from 'src/containers/message/room-list';
import { wsConnect, wsDisconnect } from 'src/middlewares/message-socket.middleware';
import { Button, Drawer } from 'antd';

function Message(props: { userId: string }) {
  const { userId } = props;
  const [roomId, setRoomId] = useState('');

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('userId', userId);
    if (userId) {
      dispatch(wsConnect(userId));
    }

    return () => {
      dispatch(wsDisconnect());
    };
  }, [userId]);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Chat
      </Button>
      <div className="flex-row">
        <Drawer
          width="400px"
          placement="right"
          visible={visible}
          onClose={() => setVisible(false)}
          closable={false}
          maskStyle={{ backgroundColor: 'transparent' }}
          destroyOnClose
        >
          <div className="message-content">
            {roomId === '' ? (
              <ChatRoomList onClick={(id: string) => setRoomId(id)} />
            ) : (
              <ConversationRoom roomId={roomId} onBackClick={() => setRoomId('')} />
            )}
          </div>
        </Drawer>
      </div>
      <div className="full-layout flex-col flex-center"> is Showroom</div>
    </>
  );
}

export default Message;

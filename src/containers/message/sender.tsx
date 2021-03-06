import { SearchOutlined } from '@ant-design/icons';
import React, { FormEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'src/middlewares/message-socket.middleware';
import useEnterKey from 'src/utils/useKeyEnter';

function Sender(props: { roomId: string; senderId: string }) {
  const { senderId, roomId } = props;
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const send = () => {
    if (text !== '') {
      dispatch(sendMessage(roomId, text, senderId));
      setText('');
    }
  };
  const enterKey = useEnterKey(send);

  return (
    <div className="flex-row sender-box flex-align-center padding-m">
      <input
        type="text"
        value={text}
        className="flex-1"
        onInput={(e: FormEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => enterKey(e)}
      />
      <SearchOutlined className="icon-m padding-m" onClick={() => send()} />
    </div>
  );
}

export default Sender;

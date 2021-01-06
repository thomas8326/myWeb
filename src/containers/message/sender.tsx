import { SearchOutlined } from '@ant-design/icons';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'src/reducers/message.reducer';

function Sender(props: { senderId: string }) {
  const { senderId } = props;
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const send = () => {
    if (text !== '') {
      dispatch(sendMessage(text, senderId));
    }
  };

  return (
    <div className="flex-row sender-box flex-align-center">
      <input
        type="text"
        value={text}
        className="flex-1"
        onInput={(e: FormEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
        onKeyPress={() => send()}
      />
      <SearchOutlined className="icon-m padding-m" onClick={() => send()} />
    </div>
  );
}

export default Sender;

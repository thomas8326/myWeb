import { SearchOutlined } from '@ant-design/icons';
import React, { FormEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'src/reducers/message.reducer';
import useEnterKey from 'src/utils/useKeyEnter';

function Sender(props: { senderId: string }) {
  const { senderId } = props;
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const send = () => {
    if (text !== '') {
      dispatch(sendMessage(text, senderId));
      setText('');
    }
  };
  const enterKey = useEnterKey(send);

  return (
    <div className="flex-row sender-box flex-align-center">
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

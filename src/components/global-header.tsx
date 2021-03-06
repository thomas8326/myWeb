import React from 'react';
import { useSelector } from 'react-redux';
import Message from 'src/containers/message/message';
import ReduxStorage from 'src/models/storage';

function GlobalHeader(props: { title: string }) {
  const myUserInfo = useSelector((state: ReduxStorage) => state.userInfo);
  const { title } = props;

  return (
    <>
      <header className="global-header">
        <div>---</div>
        <span>{title}</span>
        <Message userId={myUserInfo.id} />
      </header>
    </>
  );
}

export default GlobalHeader;

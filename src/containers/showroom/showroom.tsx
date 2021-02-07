import React from 'react';
import { useSelector } from 'react-redux';
import Message from 'src/containers/message/message';
import ReduxStorage from 'src/models/storage';

function Showroom() {
  const myUserInfo = useSelector((state: ReduxStorage) => state.userInfo);

  return (
    <>
      <Message userId={myUserInfo.id} />
    </>
  );
}

export default Showroom;

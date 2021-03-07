import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'src/containers/calendar/calendar-board';
import Message from 'src/containers/message/message';
import ReduxStorage from 'src/models/storage';
import styled from 'styled-components';

const HeaderButtonGroup = styled.div`
  * + * {
    margin-left: var(--margin-m);
  }
`;

function GlobalHeader(props: { title: string }) {
  const myUserInfo = useSelector((state: ReduxStorage) => state.userInfo);
  const { title } = props;

  return (
    <>
      <header className="global-header">
        <div>---</div>
        <span className="global-header-title">{title}</span>
        <HeaderButtonGroup className="flex-row flex-align-center">
          <Calendar />
          <Message userId={myUserInfo.id} />
        </HeaderButtonGroup>
      </header>
    </>
  );
}

export default GlobalHeader;

import Message from 'src/models/message';
import React from 'react';
import classNames from 'classnames';

function ConversationBubble(props: { message: Message; isMine: boolean }) {
  const { isMine, message } = props;
  return <div className={classNames({ 'mine-bubble': isMine })}>{message.content}</div>;
}

export default ConversationBubble;

import Message from 'src/models/message';
import React from 'react';
import classNames from 'classnames';

function ConversationBubble(props: { message: Message; isMine: boolean }) {
  const { isMine, message } = props;
  return (
    <div className={classNames('bubble', { 'mine-bubble': isMine, 'other-bubble': !isMine })}>
      <div className="flex-row flex-align-center">
        <div className="message-text">{message.content}</div>
        <div className="message-time">{new Date().getTime()}</div>
      </div>
    </div>
  );
}

export default ConversationBubble;

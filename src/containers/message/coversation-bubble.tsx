import Message from 'src/models/message';
import React from 'react';
import classNames from 'classnames';

function ConversationBubble(props: { message: Message; isMine: boolean }) {
  const { isMine, message } = props;
  return (
    <div className={classNames('bubble', { 'mine-bubble': isMine })}>
      <div className="flex-row">
        <div className="message-text">{message.content}</div>
        <div>time</div>
      </div>
    </div>
  );
}

export default ConversationBubble;

import React from 'react';
import { useSelector } from 'react-redux';
import ConversationBubble from 'src/containers/message/coversation-bubble';
import ReduxStorage from 'src/models/storage';

function Conversation() {
  const userInfo = useSelector((state: ReduxStorage) => state.userInfo);
  const messages = useSelector((state: ReduxStorage) => state.messages);

  return (
    <div className="conversation flex-1 flex-col">
      <div className="full-layout">
        {messages.map((message) => (
          <ConversationBubble isMine={userInfo.id === message.senderId} message={message} />
        ))}
      </div>
    </div>
  );
}
export default Conversation;

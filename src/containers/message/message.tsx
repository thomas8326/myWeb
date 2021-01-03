import React from 'react';
import { PlusCircleFilled } from '@ant-design/icons';

function Message() {
  return (
    <div className="message-content">
      <div className="flex-row flex-align-center shadow-card">
        <PlusCircleFilled className="icon padding-m" />
        <span>New User</span>
      </div>
    </div>
  );
}

export default Message;

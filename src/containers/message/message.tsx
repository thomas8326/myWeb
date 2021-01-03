import React from 'react';
import CreateNewUser from 'src/containers/message/create-new-user/create-new-user';
import CreateNewUserButton from 'src/containers/message/create-new-user/create-user-button';

function Message() {
  return (
    <div className="message-content">
      <CreateNewUserButton>
        <CreateNewUser />
      </CreateNewUserButton>
    </div>
  );
}

export default Message;

import React, { useState } from 'react';
import { PlusCircleFilled } from '@ant-design/icons';

const CreateNewUserButton: React.FC<any> = ({ children }) => {
  const [isCreateUser, setIsCreateUser] = useState(false);

  return isCreateUser ? (
    children
  ) : (
    <button type="button" className="flex-row flex-align-center shadow-card" onClick={() => setIsCreateUser(true)}>
      <PlusCircleFilled className="primary icon-l padding-m" />
      <span>Create New Chatroom</span>
    </button>
  );
};

export default CreateNewUserButton;

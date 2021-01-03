import { CheckCircleFilled, CloseCircleFilled, RobotFilled } from '@ant-design/icons';
import React from 'react';

function CreateNewUser() {
  return (
    <div className="flex-row flex-align-center shadow-card">
      <RobotFilled className="icon-m R-margin-m" />
      <input className="input-box input-f" />
      <CheckCircleFilled className="primary icon-m L-margin-m" />
      <CloseCircleFilled className="primary icon-m L-margin-m" />
    </div>
  );
}

export default CreateNewUser;
